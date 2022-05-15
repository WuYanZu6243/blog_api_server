// 此模块用于定义 上传头像 功能的路由的处理函数

/*
    服务器端接收上传文件(图片)步骤:
    1.创建静态资源文件夹public
    2.在app.js中开发静态资源
    3.创建uploads文件夹用于存放文件资源
    4.利用FormData包解析客户端上传的文件或图片
    5.将处理好的存放路径和访问地址发送回去
*/

// 导入解析FormData包
const formidable = require('formidable')
// 导入path模块
const path = require('path')
// 导入环境包config
const config = require('config')

module.exports = async(req,res)=>{
    // 创建表单解析对象
    const form = new formidable.IncomingForm()
    // 配置上传文件的存放路径
    form.uploadDir = path.join(__dirname,'../../public/uploads')
    // 保留文件的扩展名
    form.keepExtensions = true
    // 解析表单
    form.parse(req,(err,fields,files)=>{
        // err是错误对象
        // fields 保存普通表单数据
        // files 保存上传文件相关数据
        // img._writeStream.path.split('public')[1]时从files中分解出的最需要用的路径
        // 相对存放路径
        const tmp_path = files.file._writeStream.path.split('public')[1].replace(/\\/g,'/')
        // 获取上传图片或文件的根路径
        const baseURL = config.get('upload_config.baseURL')
        // 访问路径
        const url = baseURL + tmp_path
        // 上传成功
        res.cc('上传成功',200,{
            tmp_path,
            url
        })
    })
}