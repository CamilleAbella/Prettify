const prettier = require("prettier");

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
    });
  } catch (error) {
    throw error;
  }
};
