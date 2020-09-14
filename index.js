const prettier = require("prettier");

/**
 * @param {string} code
 * @param {string} lang
 * @return {Promise<string>}
 */
module.exports = async function (code, lang) {
  let parser = null;
  if (/^(js|javascript)$/.test(lang)) parser = "babel";
  if (/^(ts|typescript)$/.test(lang)) parser = "babel-ts";
  if (/^(md|markdown)$/.test(lang)) parser = "markdown";
  if (/^ya?ml$/.test(lang)) parser = "yaml";
  if (
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
      parser,
    });
  } catch (error) {
    throw error;
  }
};
