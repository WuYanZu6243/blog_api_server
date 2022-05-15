# 博客后台管理系统API

## 1.1. API V1 接口说明

- 接口基准地址：`http://127.0.0.1:3007/`
- 服务端已开启 CORS 跨域支持
- API V1 认证统一使用 Token 认证
- 需要授权的 API ，必须在请求头中使用 `Authorization` 字段提供 `token` 令牌
- 使用 HTTP Status Code 标识状态
- 数据返回格式统一使用 JSON

### 1.1.1. 支持的请求方法

- GET（SELECT）：从服务器取出资源（一项或多项）。
- POST（CREATE）：在服务器新建一个资源。
- PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。
- PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。
- DELETE（DELETE）：从服务器删除资源。
- HEAD：获取资源的元数据。
- OPTIONS：获取信息，关于资源的哪些属性是客户端可以改变的。

### 1.1.2. 通用返回状态说明

| *状态码* | *含义*                | *说明*                                              |
| -------- | --------------------- | --------------------------------------------------- |
| 200      | OK                    | 请求成功                                            |
| 201      | CREATED               | 创建成功                                            |
| 204      | DELETED               | 删除成功                                            |
| 400      | BAD REQUEST           | 请求的地址不存在或者包含不支持的参数                |
| 401      | UNAUTHORIZED          | 未授权                                              |
| 403      | FORBIDDEN             | 被禁止访问                                          |
| 404      | NOT FOUND             | 请求的资源不存在                                    |
| 422      | Unprocesable entity   | [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误 |
| 500      | INTERNAL SERVER ERROR | 内部错误                                            |



## 1.2. 登录

### 1.2.1. 登录验证接口

- 请求路径：api/login
- 请求方法：post
- 请求参数

| 参数名   | 参数说明 | 备注     |
| -------- | -------- | -------- |
| username | 用户名   | 不能为空 |
| password | 密码     | 不能为空 |

- 响应参数

| 参数名   | 参数说明 | 备注            |
| -------- | -------- | --------------- |
| id       | 用户 ID  |                 |
| username | 用户名   |                 |
| isUsable | 状态     |                 |
| phone    | 手机号   | 表示是否可用    |
| role     | 角色     |                 |
| portrait | 头像     |                 |
| token    | 令牌     | 基于 jwt 的令牌 |

- 响应数据

```json
{
    "data": {
        "id": "627e6a17c6d6ff32a9ab17be",
        "userName": "admin",
        "isUsable": "true",
        "phone": "13414927146",
        "role": "admin",
        "portrait": "",
        "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiaXNVc2FibGUiOiJpbml0Iiwicm9sZSI6ImluaXQiLCJwYXNzd29yZCI6ImluaXQiLCJ1c2VyTmFtZSI6ImluaXQiLCJfaWQiOiJpbml0IiwicGhvbmUiOiJpbml0IiwicG9ydHJhaXQiOiJpbml0IiwiX192IjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX2lkIjp0cnVlLCJ1c2VyTmFtZSI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInBob25lIjp0cnVlLCJyb2xlIjp0cnVlLCJpc1VzYWJsZSI6dHJ1ZSwicG9ydHJhaXQiOnRydWUsIl9fdiI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sInN0cmljdE1vZGUiOnRydWUsInNraXBJZCI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJmaWVsZHMiOnt9LCJleGNsdWRlIjpudWxsLCJfaWQiOiI2MjdlNmExN2M2ZDZmZjMyYTlhYjE3YmUifSwiJGlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfaWQiOiI2MjdlNmExN2M2ZDZmZjMyYTlhYjE3YmUiLCJ1c2VyTmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMTAkcDBJQWJ3OGE3T2lpUnU2U1QzZm81dU1IWElTSkZmMDI5d3lXUFRqdkFsem5MczJra09uckciLCJwaG9uZSI6IjEzNDE0OTI3MTQ2Iiwicm9sZSI6ImFkbWluIiwiaXNVc2FibGUiOiJ0cnVlIiwicG9ydHJhaXQiOiIiLCJfX3YiOjB9LCJwYXNzd29yZCI6IiIsInBvcnRyYWl0IjoiIiwiaWF0IjoxNjUyNDg3NDkzLCJleHAiOjE2NTI1MjM0OTN9.hiQOBkxD4LnUk2oZ2bc4_CQDiFwtM3_ZQaCZAo8iCDA"
    },
    "meta": {
        "status": "登录成功",
        "msg": 200
    }
}
```

## 1.3. 图片、文件上传

- 请求路径：upload
- 请求方法：post
- 请求参数

| 参数名 | 参数说明 | 备注 |
| ------ | -------- | ---- |
| file   | 上传文件 |      |

- 响应数据

```
{
    "data": {
        "tmp_path": "tmp_uploads/ccfc5179a914e94506bcbb7377e8985f.png",
        "url": "http://127.0.0.1:8888tmp_uploads/ccfc5179a914e94506bcbb7377e8985f.png"
    },
    "meta": {
        "msg": "上传成功",
        "status": 200
    }
}
```

## 1.4. 用户管理

### 1.4.1. 用户数据列表

- 请求路径：users
- 请求方法：get
- 请求参数

| 参数名   | 参数说明     | 备注     |
| -------- | ------------ | -------- |
| query    | 查询参数     | 可以为空 |
| pagenum  | 当前页码     | 不能为空 |
| pagesize | 每页显示条数 | 不能为空 |

- 响应参数

| 参数名    | 参数说明     | 备注 |
| --------- | ------------ | ---- |
| totalpage | 总记录数     |      |
| pagenum   | 当前页码     |      |
| users     | 用户数据集合 |      |

- 响应数据

```json
{
    "data": {
        "totalpage": 2,
        "pagenum": 1,
        "users": [
            {
                "_id": "627e6a17c6d6ff32a9ab17be",
                "userName": "admin",
                "password": "$2a$10$p0IAbw8a7OiiRu6ST3fo5uMHXISJFf029wyWPTjvAlznLs2kkOnrG",
                "phone": "13414927146",
                "role": "admin",
                "isUsable": "true",
                "portrait": "",
                "__v": 0
            },
            {
                "_id": "627e6c3cd9621906c7d2db08",
                "userName": "cgx",
                "password": "$2a$10$GEmpef6FunzntdwQTHlX3OXCZQB2ghwjS1FNrKX5.EPT/wiJeuwf2",
                "phone": "13414927146",
                "role": "user",
                "isUsable": "true",
                "__v": 0
            }
        ]
    },
    "meta": {
        "status": "获取成功",
        "msg": 200
    }
}
```

### 1.4.2. 添加用户

- 请求路径：users
- 请求方法：post
- 请求参数

| 参数名   | 参数说明 | 备注     |
| -------- | -------- | -------- |
| userName | 用户名称 | 不能为空 |
| password | 用户密码 | 不能为空 |
| isUsable | 状态     | 不能为空 |
| role     | 角色     | 不能为空 |
| phone    | 手机号   | 可以为空 |
| portrait | 头像     | 可以为空 |

- 响应参数

| 参数名   | 参数说明 | 备注 |
| -------- | -------- | ---- |
| userName | 用户名称 |      |
| isUsable | 状态     |      |
| role     | 角色     |      |

- 响应数据

```json
{
    "data": {
        "userName": "lcw",
        "isUsable": "true",
        "role": "user"
    },
    "meta": {
        "status": "添加成功",
        "msg": 201
    }
}
```

### 1.4.3. 修改用户状态

- 请求路径：users/:Id/state/:type
- 请求方法：put
- 请求参数

| 参数名 | 参数说明 | 备注                                        |
| ------ | -------- | ------------------------------------------- |
| Id     | 用户 ID  | 不能为空`携带在url中`                       |
| type   | 用户状态 | 不能为空`携带在url中`，值为 true 或者 false |

- 响应数据

```json
{
    "data": {
        "_id": "627effdbd2df994a67b631da",
        "userName": "lcw",
        "password": "$2a$10$8ZNSVwbkC3SlKPMFXRLwaua1EX5JddZPeP/PueycxkC2XGerBagnO",
        "role": "user",
        "isUsable": "true",
        "__v": 0
    },
    "meta": {
        "status": "设置状态成功",
        "msg": 200
    }
}
```

### 1.4.4. 根据 ID 查询用户信息

- 请求路径：users/:id
- 请求方法：get
- 请求参数

| 参数名 | 参数说明 | 备注                  |
| ------ | -------- | --------------------- |
| id     | 用户 ID  | 不能为空`携带在url中` |

- 响应参数

| 参数名   | 参数说明 | 备注 |
| -------- | -------- | ---- |
| id       | 用户 ID  |      |
| userName | 用户名   |      |
| isUsable | 状态     |      |
| role     | 角色     |      |
| phone    | 电话     |      |
| portrait | 头像     |      |

- 响应数据

```json
{
    "data": {
        "id": "627e6a17c6d6ff32a9ab17be",
        "userName": "admin",
        "isUsable": "true",
        "role": "admin",
        "phone": "13414927146",
        "portrait": ""
    },
    "meta": {
        "status": "查询成功",
        "msg": 200
    }
}
```

### 1.4.5. 编辑用户提交

- 请求路径：users/:id
- 请求方法：put
- 请求参数

| 参数名   | 参数说明 | 备注                        |
| -------- | -------- | --------------------------- |
| id       | 用户 id  | 不能为空 `参数是url参数:id` |
| userName | 密码     | 不能为空                    |
| role     | 角色     | 不能为空                    |
| phone    | 手机号   | 可以为空                    |

- 响应参数

| 参数名   | 参数说明 | 备注 |
| -------- | -------- | ---- |
| _id      | 用户 ID  |      |
| userName | 用户名   |      |
| isUsable | 状态     |      |
| role     | 角色     |      |
| phone    | 电话     |      |
| portrait | 头像     |      |

- 响应数据

```json
{
    "data": {
        "_id": "627effdbd2df994a67b631da",
        "userName": "lcw",
        "password": "$2a$10$1.ckX9RlETIsFkRtGEPim.Ve3hGWYdmWuJyf.8jx2ikEJkZF7wuI.",
        "role": "admin",
        "isUsable": "true",
        "__v": 0,
        "phone": "13414927146"
    },
    "meta": {
        "status": "更新成功",
        "msg": 200
    }
}
```

### 1.4.6. 删除单个用户

- 请求路径：users/:id
- 请求方法：delete
- 请求参数

| 参数名 | 参数说明 | 备注                       |
| ------ | -------- | -------------------------- |
| id     | 用户 id  | 不能为空`参数是url参数:id` |

- 响应数据

```json
{
    "data": null,
    "meta": {
        "status": "删除成功",
        "msg": 204
    }
}
```

### 1.4.7. 更换用户头像

- 请求路径：usersPortrait/:id
- 请求方法：put
- 请求参数

| 参数名   | 参数说明     | 备注                  |
| -------- | ------------ | --------------------- |
| Id       | 用户 ID      | 不能为空`携带在url中` |
| portrait | 头像保存路径 | 不能为空              |

- 响应数据

```json
{
    "data": {
        "_id": "627effc0d2df994a67b631d7",
        "userName": "wyz",
        "password": "$2a$10$wEevv9ulyAwYz1sHo0XPoOV.lfO2Mtt42MuGtRz179AjCw86cS/7G",
        "phone": "18824405538",
        "role": "user",
        "isUsable": "true",
        "__v": 0,
        "portrait": "uploads/upload_ca7bc9dff6325206c47d4ab8633ba489.png"
    },
    "meta": {
        "status": "设置状态成功",
        "msg": 200
    }
}

```

## 1.5. 文章管理

### 1.5.1. 文章数据列表

- 请求路径：article
- 请求方法：get
- 请求参数

| 参数名   | 参数说明     | 备注     |
| -------- | ------------ | -------- |
| query    | 查询参数     | 可以为空 |
| pagenum  | 当前页码     | 不能为空 |
| pagesize | 每页显示条数 | 不能为空 |

- 响应参数

| 参数名      | 参数说明     | 备注 |
| ----------- | ------------ | ---- |
| totalpage   | 总记录数     |      |
| pagenum     | 当前页码     |      |
| articleList | 文章数据集合 |      |

- 响应数据

```json
{
    "data": {
        "totalpage": 1,
        "pagenum": 1,
        "articleList": [
            {
                "_id": "62805572e988b6e7ab504424",
                "headline": "如何被富婆包养",
                "author": "627e6a17c6d6ff32a9ab17be",
                "time": "2019-12-14",
                "cover": "a/b.png",
                "content": "<a>nihao</a>",
                "__v": 0
            }
        ]
    },
    "meta": {
        "status": "获取成功",
        "msg": 200
    }
}
```

### 1.5.2. 添加文章

- 请求路径：article/:id
- 请求方法：post
- 请求参数

| 参数名   | 参数说明 | 备注                  |
| -------- | -------- | --------------------- |
| id       | 用户id   | 不能为空，携带在url中 |
| headline | 文章标题 | 不能为空              |
| time     | 发布时间 | 不能为空              |
| cover    | 文章封面 | 可以为空              |
| content  | 文章内容 | 可以为空              |

- 响应数据

```json
{
    "data": {
        "headline": "如何被富婆包养",
        "author": "627e6a17c6d6ff32a9ab17be",
        "time": "2019-12-14",
        "cover": "a/b.png",
        "content": "<a>nihao</a>"
    },
    "meta": {
        "status": "添加成功",
        "msg": 201
    }
}
```

### 1.5.3. 根据 ID 查询文章信息

- 请求路径：article/:id
- 请求方法：get
- 请求参数

| 参数名 | 参数说明 | 备注                  |
| ------ | -------- | --------------------- |
| id     | 文章 ID  | 不能为空`携带在url中` |

- 响应参数

| 参数名   | 参数说明 | 备注 |
| -------- | -------- | ---- |
| id       | 文章 ID  |      |
| headline | 文章标题 |      |
| author   | 文章作者 |      |
| time     | 发布时间 |      |
| cover    | 封面     |      |
| conten   | 内容     |      |

- 响应数据

```json
{
    "data": {
        "id": "62805572e988b6e7ab504424",
        "headline": "如何被富婆包养",
        "author": "627e6a17c6d6ff32a9ab17be",
        "time": "2019-12-14",
        "cover": "a/b.png",
        "content": "<a>nihao</a>"
    },
    "meta": {
        "status": "查询成功",
        "msg": 200
    }
}
```

### 1.5.4. 编辑用户提交

- 请求路径：article/:id
- 请求方法：put
- 请求参数

| 参数名   | 参数说明 | 备注                  |
| -------- | -------- | --------------------- |
| id       | 文章id   | 不能为空，携带在url中 |
| headline | 文章标题 | 不能为空              |
| author   | 文章作者 | 不能为空              |
| time     | 发布时间 | 不能为空              |
| cover    | 文章封面 | 可以为空              |
| conten   | 内容     | 可以为空              |

- 响应参数

| 参数名   | 参数说明 | 备注 |
| -------- | -------- | ---- |
| _id      | 文章ID   |      |
| headline | 文章标题 |      |
| author   | 文章作者 |      |
| time     | 发布时间 |      |
| cover    | 文章封面 |      |
| conten   | 内容     |      |

- 响应数据

```json
{
    "data": {
        "_id": "62805572e988b6e7ab504424",
        "headline": "如何被富婆包养",
        "author": "627e6a17c6d6ff32a9ab17be",
        "time": "2019-12-14",
        "cover": "a/b.png",
        "content": "<a>123456</a>",
        "__v": 0
    },
    "meta": {
        "status": "更新成功",
        "msg": 200
    }
}
```

### 1.4.6. 删除单篇文章

- 请求路径：article/:id
- 请求方法：delete
- 请求参数

| 参数名 | 参数说明 | 备注                       |
| ------ | -------- | -------------------------- |
| id     | 文章id   | 不能为空`参数是url参数:id` |

- 响应数据

```json
{
    "data": null,
    "meta": {
        "status": "删除成功",
        "msg": 204
    }
}
```



