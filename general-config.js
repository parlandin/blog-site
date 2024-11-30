const eventThemes = require("./eventThemes.js");

const config = {
  defaultLanguage: "pt-BR",

  //
  currentEventTheme: eventThemes.default,
  isEventThemeActive: false,

  backendUrl: "",
};

module.exports = config;
