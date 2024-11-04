const mongoose = require("mongoose")
const schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId

const User = new schema({
    email: {type: String , unique:true},
    password:String,
    name:String

})

const Todo = new schema({
    title: String,
    done:Boolean,
    userId: ObjectId
})

const UserModel = mongoose.model('users', User)
const TodoModel = mongoose.model('todos', Todo)

module.exports = {
    UserModel:UserModel,
    TodoModel:TodoModel
}