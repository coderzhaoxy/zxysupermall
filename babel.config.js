//发布阶段需要用到的插件
const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push("transform-remove-console")
}
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    //发布插件数组
    ...prodPlugins
  ],

}
