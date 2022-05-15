// 此模块用于定义添加用户数据功能的路由的处理函数

// 导入用户数据表操作
const Users = require('../../model/users')
// 导入密码加密包
const bcrypt = require('bcryptjs')

module.exports = async(req,res)=>{
    // 获取客户端的传参
    const inquireInfo = req.body
    // 检测用户名是否存在
    const dataQuantity = await Users.find({userName:inquireInfo.userName}).count()
    // 查询出来的条数不为0表示用户名以及存在
    if(dataQuantity) return res.cc('用户名被占用',400)
    // 用户名未被占用，可以添加
    // 对密码进行加密
    inquireInfo.password = bcrypt.hashSync(inquireInfo.password, 10)
    // 根据传参到数据库中添加用户
    await Users.create({
        userName:inquireInfo.userName,
        password:inquireInfo.password,
        isUsable:inquireInfo.isUsable,
        role:inquireInfo.role,
        phone:inquireInfo.phone, 
        portrait:inquireInfo.portrait
    })
    // 把结果返回给客户端
    res.cc('添加成功',201,{
        userName:inquireInfo.userName,
        isUsable:inquireInfo.isUsable,
        phone:inquireInfo.phone,
        role:inquireInfo.role,
        portrait:inquireInfo.portrait
    })
}