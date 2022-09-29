const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port:9999,
    host:'localhost',
    open:true,
    https:false
  },
  lintOnSave:false
})
