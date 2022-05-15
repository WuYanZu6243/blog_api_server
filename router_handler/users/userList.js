// 此模块用于定义获取用户列表数据功能的路由的处理函数

// 导入用户数据表操作
const Users = require('../../model/users')

module.exports = async(req,res)=>{
    // 获取客户端的传参
    // query,pagenum,pagesize
    const inquireInfo = req.query
    // 根据查询参数到数据库中查询符合条件的约束的数据
    const userList = await Users.find({userName:new RegExp(inquireInfo.query)}) // 
        .skip((inquireInfo.pagenum-1) * inquireInfo.pagenum) // 跳过多少条数据
        .limit(inquireInfo.pagesize) // 查询多少条数据
    // 根据查询参数查出符合条件的总条数
    let totalpage = await Users.find({userName:new RegExp(inquireInfo.query)}).count()
    // 把数据返回给客户端
    res.cc('获取成功',200,{
        totalpage,
        pagenum:inquireInfo.pagenum,
        users:userList
    })
}