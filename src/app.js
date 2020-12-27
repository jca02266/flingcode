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
    this.location = location.href.replace(/\?.*/, '')
    if (location.search) {
      const query = location.search.startsWith("?") ? location.search.slice(1) : location.search
      const params = query.split('&').map((param) => param.split('='))

      for (const param of params) {
        if (param[0] === "source") {
          const base64string = param[1]
          const source = LZString.decompressFromBase64(base64string)
          if (source) {
            this.source = source
          }
        }
        if (param[0] === "lang") {
          const selectedLang = param[1]
          if (hljs.listLanguages().includes(selectedLang)) {
            this.selectedLang = selectedLang
          }
        }
      }
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
      const base64string = LZString.compressToBase64(this.source)

      return this.location + `?lang=${this.selectedLang}&source=${base64string}"`
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
