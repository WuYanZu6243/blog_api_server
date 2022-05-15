// 此模块用于定义 获取文章列表数据 功能的路由的处理函数

// 导入用户数据表操作
const Article = require('../../model/article')

module.exports = async(req,res)=>{
    console.log(req);
    // 获取客户端的传参
    const articleInfo = req.body
    const id = req.params.id
    // 检测文章标题是否存在
    const dataQuantity = await Article.find({headline:articleInfo.headline}).count()
    // 查询出来的条数不为0表示用户名以及存在
    if(dataQuantity) return res.cc('用户名被占用',400)
    // 文章标题未被占用，可以添加
    // 根据传参到数据库中添加文章
    await Article.create({
        headline:articleInfo.headline,
        author:id,
        time:articleInfo.time,
        cover:articleInfo.cover,
        content:articleInfo.content, 
    })
    // 把结果返回给客户端
    res.cc('添加成功',201,{
        headline:articleInfo.headline,
        author:id,
        time:articleInfo.time,
        cover:articleInfo.cover,
        content:articleInfo.content
    })
}