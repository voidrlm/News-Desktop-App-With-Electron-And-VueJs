const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/News-Desktop-App-With-Electron-And-VueJs/"
      : "/",
  transpileDependencies: ["vuetify"],
});
