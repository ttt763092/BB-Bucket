# BB Bucket - 微信小程序版

将原 H5 点菜应用转换为微信小程序。

## 项目结构

```
BB-Bucket/
├── miniprogram/
│   ├── app.js          # 小程序入口
│   ├── app.json        # 全局配置
│   ├── app.wxss        # 全局样式
│   ├── sitemap.json    # 搜索配置
│   ├── pages/
│   │   └── index/      # 主页
│   │       ├── index.js
│   │       ├── index.wxml
│   │       └── index.json
│   └── utils/
│       └── dishes.js   # 菜品数据
└── project.config.json # 项目配置
```

## 使用方法

1. 下载并安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

2. 在微信公众平台注册小程序账号，获取 AppID

3. 打开微信开发者工具，导入此项目目录

4. 将 `project.config.json` 中的 `appid` 替换为你的 AppID

5. 点击「编译」预览

## 功能

- 菜品分类浏览（肉菜、素菜、海鲜、主食等）
- BB 精选推荐
- 随机生成今日菜单
- 选择菜品加入菜单
- 底部抽屉查看已选菜品
