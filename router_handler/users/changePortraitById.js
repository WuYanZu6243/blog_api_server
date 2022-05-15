// 此模块用于定义 根据id更换用户头像 功能的路由的处理函数

// 导入用户数据表操作
const Users = require('../../model/users')

module.exports = async(req,res)=>{
    // 获取用户的传参
    const id = req.params.id
    const portrait = req.body.portrait
    // 更改这个id的用户的头像信息
    const userNewData =  await Users.findOneAndUpdate({_id:id},{portrait},{new: true})
    // 更新成功
    res.cc('更改头像成功',200,userNewData)
}