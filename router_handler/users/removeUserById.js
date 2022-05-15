// 此模块用于定义 根据id删除用户 功能的路由的处理函数

// 导入用户数据表操作
const Users = require('../../model/users')

module.exports = async(req,res)=>{
    // 获取用户的传参
    const id = req.params.id
    // 根据id去数据库中删除用户
    await Users.deleteOne({_id:id})
    // 删除成功
    res.cc('删除成功',204)
}