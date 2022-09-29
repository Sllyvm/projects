const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port:9999,
    host:'localhost',
    open:true,
    https:false,
    proxy:{
      [process.env.VUE_APP_BASE_API]:{
        target:process.env.VUE_APP_SERVER_API,
        changOrigin:true,
        pathRewrite:{
          ['^'+process.env.VUE_APP_BASE_API]:''
        }
      }
    }

  },
  lintOnSave:false
})
