// 此模块用于定义 根据id删除用户 功能的路由的处理函数

// 导入用户数据表操作
const Users = require('../../model/users')

module.exports = async(req,res)=>{
    // 获取用户的传参
    const id = req.params.id
    const type = req.params.type
    // 根据传参到数据库中添加用户,返回值为新数据
    const userNewData =  await Users.findOneAndUpdate({_id:id},{
        isUsable:type
    },{new: true})
    // 更新成功
    res.cc('设置状态成功',200,userNewData)
}
