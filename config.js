// 这里书写一些配置代码

// 优化 res.send() 代码
exports.optimizeSend = (req, res, next)=>{
    // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
    res.cc = function (status,msg,data=null,) {
      res.send({
        // 数据
        data,
        // 状态信息
        meta:{
            // 状态码
            status,
            // 状态描述
            msg
        }
      })
    }
    next()
}

// 加密和还原 Token 的 jwtSecretKey 字符串
exports.jwtSecretKey = '小布丁^_^'