const mongoose = require('mongoose')

// 获取schema 对象
var userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    age: {type: Number, default: 0},
    sex: {type: Number, default: 0}
});
// 将scheme 对象转化为数据模型
var User = mongoose.model('user', userSchema); // 该数据对象和集合关联('集合名’, Schema对象)

module.exports = User
