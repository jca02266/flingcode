import Vue from 'vue';
import Vuetify from 'vuetify'
//import 'vuetify/dist/vuetify.min.css'
import * as mylib from '@/mylib'

Vue.use(Vuetify)

const data = {
  source: `Dim x as String
' コメント
Debug.Print "Hello, World"`,
  selectedLang: "auto"
}
const vm = new Vue({
  el: '#app',
  data: data,
  vuetify: new Vuetify(),
  created: function () {
    this.languages = []
    this.languages.push({ name: this.selectedLang, id: this.selectedLang })
    const compare = new Intl.Collator('en').compare

    hljs.listLanguages().sort((a, b) => compare(mylib.languageNames[a], mylib.languageNames[b])).forEach((id, i) => {
      this.languages.push({ name: mylib.languageNames[id], id: id })
    })

    // parse URL
    this.originalUrl = new URL(location.href)

    const base64string = this.originalUrl.searchParams.get('source')
    if (base64string) {
      this.source = LZString.decompressFromBase64(base64string)
    }
    const selectedLang = this.originalUrl.searchParams.get('lang')
    if (hljs.listLanguages().includes(selectedLang)) {
      this.selectedLang = selectedLang
    }
  },
  mounted: function () {
    if (this.source) {
      this.changeCode();
    }
  },
  computed: {
    computeLang: function () {
      if (this.selectedLang === "auto") {
        return null
      } else {
        return "language-" + this.selectedLang
      }
    },
    url: function () {
      if (this.selectedLang) {
        this.originalUrl.searchParams.set("lang", this.selectedLang)
      }

      this.originalUrl.searchParams.delete("source")
      if (this.source) {
        const base64string = LZString.compressToBase64(this.source)
        this.originalUrl.searchParams.set("source", base64string)
      }

      return this.originalUrl.href
    }
  },
  methods: {
    changeCode: function (e) {
      this.$refs.code.innerHTML = mylib.escapeHTML(this.source);
      hljs.highlightBlock(this.$refs.code);
      hljs.lineNumbersBlock(this.$refs.code);
    }
  }
})

// for debugging
// export { vm }
