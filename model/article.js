// 此模块用于创建具体的文章集合

// 导入mongoos包
const mongoose = require('mongoose')

// 设定集合规则
const articleRule = new mongoose.Schema({
    // 标题
    headline:{
        // 类型
        type:String,
        // 必填字段
        required: true,
        // 唯一性约束
        unique : true,
        // 字符串最大长度为20
        maxlength : [20,'标题不能错过20个字符'],
        // 去除字符前后两边的空格
        trim: true
    },
    // 作者
    author:{
        // 类型
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users',
        // 必填字段
        required: true
    },
    // 发布时间
    time:{
        // 类型
        type:String,
        // 必填字段
        required: true,
        // 去除字符前后两边的空格
        trim: true
    },
    // 文章封面
    cover:{
        // 类型
        type:String,
        // 去除字符前后两边的空格
        trim: true
    },
    // 文章内容
    content:{
        // 类型
        type:String
    }
})

// 创建集合
const Article = mongoose.model('Article',articleRule)

// 将集合共享出去
module.exports = Article