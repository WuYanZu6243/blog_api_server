// 此模块用于创建具体的用户集合

// 导入mongoos包
const mongoose = require('mongoose')

// 设定集合规则
const usersRule = new mongoose.Schema({
    userName:{
        // 类型
        type:String,
        // 必填字段
        required: true,
        // 唯一性约束
        unique : true,
        // 字符串最小长度为2
        minlength: [3,'请输入3~10位的用户名!'],
        // 字符串最大长度为10
        maxlength : [10,'请输入3~10位的用户名!'],
    },
    password:{
        // 类型
        type:String,
        // 必填字段
        required: true
    },
    phone:{
         // 类型
         type:String,
         // 长度
         length:[11,'电话号码长度不正确']
    },
    // 角色
    role:{
        // 类型
        type:String,
        // 必填字段
        required: true,
        // 枚举，列出当前可以拥有的字段
        enum: ['admin','manager','user'],
        // 去除字符前后两边的空格
        trim: true
    },
    // 该账号目前是否能用
    isUsable:{
        // 类型
        type:String,
        // 必填字段
        required: true,
        // 枚举，列出当前可以拥有的字段
        enum: ['true','false'],
        // 去除字符前后两边的空格
        trim: true
    },
    // 头像
    portrait:{
        // 类型
        type:String,
        // 去除字符前后两边的空格
        trim: true
    }
})

// 创建集合
const Users = mongoose.model('Users',usersRule)

// 将集合共享出去
module.exports = Users