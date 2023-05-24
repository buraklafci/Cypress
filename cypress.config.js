const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kvem6u',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : "https://www.google.com",
    projectId: "kvem6u",   //cloud ıcın buraya herkes ıcın farklı olan key buraya eklendı 
  
    "video":false, //testlerde videoları kaydetmiyor default olarak true video kaydedilir
  
    //"retries":2
    //test FAİL oldugunda onu kac kere daha calıstırması gerektıgını belırtır

  },
});
