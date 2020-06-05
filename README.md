# vue-coronavirus

> A Vue.js-Based Project

## Build Setup

``` bash
# install dependencies
npm install
```
# serve with hot reload at localhost:8080
```bash
## Debug Setup
npm run dev
```
## Setting
use [setting](https://github.com/axmand/kiwi.settings/blob/master/vscode/setting), swith to "vue-webpack" at the debug section.

## wx shareing
``` javascript
//     //增加统计图表
//     //增加微信分享页面信息
//     wx.config({    
// 　　  debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。　　
// 　　  appId: ' ', // 必填，公众号的唯一标    
// 　　  timestamp: , // 必填，生成签名的时间戳
// 　　  nonceStr: ' ', // 必填，生成签名的随机串
// 　　  signature: ' ',// 必填，签名
// 　　  jsApiList: [] // 必填，需要使用的JS接口列表
//     });
//     wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
// 		    wx.updateAppMessageShareData({ 
// 		　　　　title: ' ', // 分享标题
// 		　　　　desc: ' ', // 分享描述
// 		　　　　link: ' ', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
// 		　　　　imgUrl: ' ', // 分享图标
// 		       success: function () {          
//               // 设置成功
//               }
//       });
//     });
```


