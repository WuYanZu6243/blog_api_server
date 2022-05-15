// 此模块用于定义 根据id获取文章数据 功能的路由的处理函数

// 导入用户数据表操作
const Article = require('../../model/article')

module.exports = async(req,res)=>{
    // 获取用户的传参
    const id = req.params.id
    // 根据id去获取数据
    const article = await Article.find({_id:id})
    // 获取用户数据出错
    if(article.length !== 1) res.cc('获取文章数据失败',400)
    // 获取用户数据成功
    res.cc('查询成功',200,{
        id: article[0]._id,
        headline: article[0].headline,
        author:article[0].author,
        time:article[0].time,
        cover: article[0].cover,
        content:article[0].content
    })
}