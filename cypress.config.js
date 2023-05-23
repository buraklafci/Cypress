const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kvem6u',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : "https://www.google.com",
    projectId: "kvem6u",   //cloud ıcın buraya herkes ıcın farklı olan key buraya eklendı 
  },
});
