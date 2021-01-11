import hljs from 'highlight.js/lib/core'
import hljsln from '@/highlightjs-line-numbers.js'

export const languageNames = {}

function loadLang(lang, desc, lib) {
  hljs.registerLanguage(lang, lib)
  languageNames[lang] = desc
}

loadLang("apache", "Apache config", require('highlight.js/lib/languages/apache'))
loadLang("bash", "Bash", require('highlight.js/lib/languages/bash'))
loadLang("c", "C", require('highlight.js/lib/languages/c'))
loadLang("coffeescript", "CoffeeScript", require('highlight.js/lib/languages/coffeescript'))
loadLang("cpp", "C++", require('highlight.js/lib/languages/cpp'))
loadLang("csharp", "C#", require('highlight.js/lib/languages/csharp'))
loadLang("css", "CSS", require('highlight.js/lib/languages/css'))
loadLang("diff", "Diff", require('highlight.js/lib/languages/diff'))
loadLang("go", "Go", require('highlight.js/lib/languages/go'))
loadLang("http", "HTTP", require('highlight.js/lib/languages/http'))
loadLang("ini", "INI, TOML", require('highlight.js/lib/languages/ini'))
loadLang("java", "Java", require('highlight.js/lib/languages/java'))
loadLang("javascript", "JavaScript", require('highlight.js/lib/languages/javascript'))
loadLang("json", "JSON", require('highlight.js/lib/languages/json'))
loadLang("kotlin", "Kotlin", require('highlight.js/lib/languages/kotlin'))
loadLang("less", "Less", require('highlight.js/lib/languages/less'))
loadLang("lua", "Lua", require('highlight.js/lib/languages/lua'))
loadLang("makefile", "Makefile", require('highlight.js/lib/languages/makefile'))
loadLang("markdown", "Markdown", require('highlight.js/lib/languages/markdown'))
loadLang("nginx", "Nginx config", require('highlight.js/lib/languages/nginx'))
loadLang("objectivec", "Objective-C", require('highlight.js/lib/languages/objectivec'))
loadLang("perl", "Perl", require('highlight.js/lib/languages/perl'))
loadLang("php", "PHP", require('highlight.js/lib/languages/php'))
loadLang("php-template", "PHP Template", require('highlight.js/lib/languages/php-template'))
loadLang("plaintext", "Plain text", require('highlight.js/lib/languages/plaintext'))
loadLang("properties", "Java Properties", require('highlight.js/lib/languages/properties'))
loadLang("python", "Python", require('highlight.js/lib/languages/python'))
loadLang("python-repl", "Python REPL", require('highlight.js/lib/languages/python-repl'))
loadLang("r", "R", require('highlight.js/lib/languages/r'))
loadLang("ruby", "Ruby", require('highlight.js/lib/languages/ruby'))
loadLang("rust", "Rust", require('highlight.js/lib/languages/rust'))
loadLang("scss", "SCSS", require('highlight.js/lib/languages/scss'))
loadLang("shell", "Shell Session", require('highlight.js/lib/languages/shell'))
loadLang("sql", "SQL", require('highlight.js/lib/languages/sql'))
loadLang("swift", "Swift", require('highlight.js/lib/languages/swift'))
loadLang("typescript", "TypeScript", require('highlight.js/lib/languages/typescript'))
loadLang("vbnet", "Visual Basic .NET, VB", require('highlight.js/lib/languages/vbnet'))
loadLang("xml", "HTML, XML", require('highlight.js/lib/languages/xml'))
loadLang("yaml", "YAML", require('highlight.js/lib/languages/yaml'))
loadLang("haskell", "Haskell", require('highlight.js/lib/languages/haskell'))

export { hljs, hljsln }
