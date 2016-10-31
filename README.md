#### [Android版点这里](https://github.com/bestTao/caipu_android)
#### [微信小程序版点这里](https://github.com/bestTao/caipu_weixin)
# React-Native App--健康菜谱

基于React-Native的一个查找检索菜谱的应用

### 功能

* 分类检索菜谱

* 发现最新菜谱

* 根据菜谱名搜索菜谱

### 项目技术
* 使用官方的`Navigator`，处理Android端的后退键事件

* 自定义封装的`Button`、`ToolBar`以用于全局复用。`Button`根据不同的使用平台设置不同的点击效果，`ToolBar`设置了主界面及二级界面使用时的不同样式

* 使用[ScrollableTabView](https://github.com/skv-headless/react-native-scrollable-tab-view)配合自定义的`TabBar`用于主界面的导航

* `ListView`使用`onEndReached`监听事件，实现下拉加载更多

* `Modal`+`ActivityIndicator`实现Loading对话框界面

* API来源：[天狗云API](http://www.tngou.net/doc/cook)

### 效果演示

![动态图](./demo/rn.gif)

### ToDo
- [ ] 使用Redux管理全局的state
- [ ] 实现Android的Palette取图片主色以动态实现UI色彩风格

