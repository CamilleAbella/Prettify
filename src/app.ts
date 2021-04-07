import * as prettier from "prettier"

export function format(
  code: string,
  lang?: string,
  options: prettier.Options = {}
): string {
  let parser: prettier.Options["parser"]

  if (lang) lang = lang.toLowerCase()

  if (!lang) parser = "babel"
  else if (/^(js|javascript)$/.test(lang)) parser = "babel"
  else if (/^(ts|typescript)$/.test(lang)) parser = "babel-ts"
  else if (/^(md|markdown)$/.test(lang)) parser = "markdown"
  else if (/^ya?ml$/.test(lang)) parser = "yaml"
  else if (
    lang === "css" ||
    lang === "scss" ||
    lang === "json" ||
    lang === "json5" ||
    lang === "html" ||
    lang === "vue" ||
    lang === "angular"
  )
    parser = lang

  return prettier.format(code, {
    trailingComma: "es5",
    tabWidth: 2,
    semi: false,
    singleQuote: false,
    useTabs: false,
    ...options,
    parser,
  })
}
