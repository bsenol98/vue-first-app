const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: "https://vue-first-app-63078-default-rtdb.europe-west1.firebasedatabase.app"
  }
})
