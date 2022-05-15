// 此模块用于定义 根据id获取用户数据 功能的路由的处理函数

// 导入用户数据表操作
const Users = require('../../model/users')

module.exports = async(req,res)=>{
    // 获取用户的传参
    const id = req.params.id
    // 根据id去获取数据
    const user = await Users.find({_id:id})
    // 获取用户数据出错
    if(user.length !== 1) res.cc('获取用户数据失败',400)
    // 获取用户数据成功
    res.cc('查询成功',200,{
        id: user[0]._id,
        userName: user[0].userName,
        isUsable:user[0].isUsable,
        role:user[0].role,
        phone: user[0].phone,
        portrait:user[0].portrait
    })
}