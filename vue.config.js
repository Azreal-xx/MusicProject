module.exports = {
    lintOnSave: false, //是否开启eslint保存检测 ,它的有效值为 true || false || 'error'
    publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
  }
   