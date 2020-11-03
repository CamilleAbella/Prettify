const prettier = require("prettier");
const php = require("@prettier/plugin-php");
const pug = require("@prettier/plugin-pug");
const ruby = require("@prettier/plugin-ruby");
const xml = require("@prettier/plugin-xml");
const apex = require("prettier-plugin-apex");
const elm = require("prettier-plugin-elm");
const kotlin = require("prettier-plugin-kotlin");
const packagePrettier = require("prettier-plugin-package");
const gotemplate = require("prettier-plugin-go-template");
const jsdoc = require("prettier-plugin-jsdoc");
const properties = require("prettier-plugin-properties");
const packagejson = require("prettier-plugin-packagejson");
const solidity = require("prettier-plugin-solidity");
const pkg = require("prettier-plugin-pkg");
const svelte = require("prettier-plugin-svelte");
const sh = require("prettier-plugin-sh");
const tailwind = require("prettier-plugin-tailwind");
const java = require("prettier-plugin-java");

/**
 * @param {string} code
 * @param {string} lang
 * @param {Object} options
 * @return {Promise<string>}
 */
module.exports = async function (code, lang, options = {}) {
  let parser;
  if (!lang) parser = null;
  else if (/^(js|javascript)$/.test(lang)) parser = "babel";
  else if (/^(ts|typescript)$/.test(lang)) parser = "babel-ts";
  else if (/^(md|markdown)$/.test(lang)) parser = "markdown";
  else if (/^ya?ml$/.test(lang)) parser = "yaml";
  else if (
    lang === "css" ||
    lang === "scss" ||
    lang === "json" ||
    lang === "json5" ||
    lang === "html" ||
    lang === "vue" ||
    lang === "angular"
  )
    parser = lang;
  try {
    return prettier.format(code, {
      trailingComma: "es5",
      tabWidth: 2,
      semi: false,
      singleQuote: false,
      useTabs: false,
      ...options,
      parser,
      plugins: [
        php,
        pug.plugin,
        ruby,
        xml,
        apex,
        elm,
        kotlin,
        packagePrettier,
        gotemplate,
        jsdoc,
        properties,
        packagejson,
        solidity,
        pkg,
        svelte,
        sh,
        tailwind,
        java,
      ],
    });
  } catch (error) {
    throw error;
  }
};
