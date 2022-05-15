# blog_api_server

<a href="https://github.com/WuYanZu6243/vue_api_server"><img src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/badge/%E5%90%8E%E5%8F%B0%E9%A1%B9%E7%9B%AE-mall-blue.svg" alt="前台项目"></a>

## 前言

该项目为前后端分离项目的前端部分，前端项目`github`地址：[传送门](https://github.com/WuYanZu6243/vue_api_server) 。

## 项目介绍

`blog_api_server`是一个博客系统的后端项目，基于node.js+Express实现。主要包括登录、文件或图片上传、用户管理、文章管理等功能。

### 技术选型

| 技术                | 说明                |
| ------------------- | ------------------- |
| node                | 后端框架            |
| Express             | node.js Web应用框架 |
| MongoDb             | 非关系型数据库      |
| mongoose            | MongoDb对象模型库   |
| jsonwebtoken        | token字符串生成包   |
| @escook/express-joi | 参数校验包          |
| bcryptjs            | 密码加密和解析包    |

## 搭建步骤

- 下载node并安装：[https://nodejs.org/dist/v12.14.0/node-v12.14.0-x64.msi](https://nodejs.org/dist/v12.14.0/node-v12.14.0-x64.msi);
- 克隆源代码到本地，使用VS Code打开，并完成编译;
- 在项目根目录的命令行中运行命令：`npm install`,下载相关依赖;
- 新建一个MongoDb数据库，名为`personal_blog`
- 修改`config\development.json`中mongodb数据库连接的账号密码;
- 在项目根目录的命令行中运行命令：`node .\app.js`,运行项目;
- 根据项目中的API接口文档访问各接口即可;

