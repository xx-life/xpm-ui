## NPM 环境搭建  
- [vue-2.0-simple-routing-example](https://github.com/chrisvfritz/vue-2.0-simple-routing-example)
- [docs-vue](https://www.ctolib.com/docs-vue-js-c-index.html)
- [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin/blob/master/README.zh-CN.md)
- [vue简易模板](https://gitee.com/panjiachen/vue-element-admin)

## Windows下搭建和使用
-  [node-v10.16.0](https://nodejs.org/dist/v10.16.0/node-v10.16.0-x64.msi)
- npm config set registry https://registry.npm.taobao.org

## Vue-cli 创建UI
- [vue-cli-plugin-element](https://github.com/ElementUI/vue-cli-plugin-element)
```
#  npm install -g vue-cli
vue create xpm-ui
cd xpm-ui
vue add element
```

## 用cnpm替换npm(不是必须)
- npm install -g cnpm --registry=https://registry.npm.taobao.org

## 初始化项目并使用
- npm i vue-cli -g
- vue init webpack xpm-ui

## (vue-element-ui)[https://github.com/ElemeFE/element]
- [文档](https://element.eleme.io/#/zh-CN/component/quickstart)
- npm i element-ui -S

## 必须安装的组件

- npm i axios -S
- npm i js-cookie -S
- npm i vue-router -S

## 下面的按需使用
- npm install babel-plugin-component -D
- [components.json](https://github.com/ElemeFE/element/blob/master/components.json)

## 成型项目研究
- [OnlineJudge](https://github.com/QingdaoU/OnlineJudge)
- [OJ_UI](https://github.com/QingdaoU/OnlineJudgeFE)


## 引用第三方JS

```javascript
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://xxx.xxx';
document.head.appendChild(script);
```
- 另外也可以在 pucblic/index.html 中加