// 此模块用于定义 更新文章数据 功能的路由的处理函数

// 导入用户数据表操作
const Article = require('../../model/article')

module.exports = async(req,res)=>{
    // 获取客户端的传参
    const id = req.params.id
    const articleInfo = req.body
    // 根据传参到数据库中添加用户,返回值为新数据
    const articleNewData =  await Article.findOneAndUpdate({_id:id},{
        headline:articleInfo.headline,
        author:articleInfo.author,
        time:articleInfo.time,
        cover:articleInfo.cover,
        content:articleInfo.content
    },{new: true})
    // 更新成功
    res.cc('更新成功',200,articleNewData)
}