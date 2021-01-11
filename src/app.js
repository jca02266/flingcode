import Vue from 'vue';
import Vuetify from 'vuetify'
//import 'vuetify/dist/vuetify.min.css'
import * as mylib from '@/mylib'
import { hljs, hljsln, languageNames } from "@/highlight.js"

Vue.use(Vuetify)

function parseURL(urlString, defaultSource, defaultLang) {
  const url = new URL(urlString)

  let base64string = url.searchParams.get('source')
  if (base64string) {
    base64string = base64string.replace(/ /g, "+")
  }
  let source = LZString.decompressFromBase64(base64string)
  if (base64string == null || source === "") {
    // If the query parameter source is specified and invalid(null)
    // Leave the source variable empty.
    source = defaultSource
  }

  const lang = url.searchParams.get('lang')
  let selectedLang
  if (hljs.listLanguages().includes(lang)) {
    selectedLang = lang
  } else {
    selectedLang = defaultLang
  }

  return {
    url,
    source,
    selectedLang,
  }
}

function createURL(url, source, selectedLang) {
  const newUrl = new URL(url.href)
  if (selectedLang) {
    newUrl.searchParams.set("lang", selectedLang)
  }

  newUrl.searchParams.delete("source")
  if (source) {
    const base64string = LZString.compressToBase64(source)
    newUrl.searchParams.set("source", base64string)
  }

  return newUrl.href
}

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
    hljsln(hljs)(window, document)
    this.languages = []
    this.languages.push({ name: this.selectedLang, id: this.selectedLang })
    const compare = new Intl.Collator('en').compare

    hljs.listLanguages().sort((a, b) => compare(languageNames[a], languageNames[b])).forEach((id, i) => {
      this.languages.push({ name: languageNames[id], id: id })
    })

    // parse URL
    const parsedURL = parseURL(location.href, this.source, this.selectedLang)
    this.originalUrl = parsedURL.url
    this.source = parsedURL.source
    this.selectedLang = parsedURL.selectedLang
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
      return createURL(this.originalUrl, this.source, this.selectedLang)
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
