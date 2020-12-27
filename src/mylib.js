export const languageNames = {
    apache: "Apache config",
    bash: "Bash",
    c: "C",
    coffeescript: "CoffeeScript",
    cpp: "C++",
    csharp: "C#",
    css: "CSS",
    diff: "Diff",
    go: "Go",
    http: "HTTP",
    ini: "INI, TOML",
    java: "Java",
    javascript: "JavaScript",
    json: "JSON",
    kotlin: "Kotlin",
    less: "Less",
    lua: "Lua",
    makefile: "Makefile",
    markdown: "Markdown",
    nginx: "Nginx config",
    objectivec: "Objective-C",
    perl: "Perl",
    php: "PHP",
    "php-template": "PHP Template",
    plaintext: "Plain text",
    properties: "Java Properties",
    python: "Python",
    "python-repl": "Python REPL",
    r: "R",
    ruby: "Ruby",
    rust: "Rust",
    scss: "SCSS",
    shell: "Shell Session",
    sql: "SQL",
    swift: "Swift",
    typescript: "TypeScript",
    vbnet: "Visual Basic .NET, VB",
    xml: "HTML, XML",
    yaml: "YAML",
}

export function escapeHTML(value) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
}
