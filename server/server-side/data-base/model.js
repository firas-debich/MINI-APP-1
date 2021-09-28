const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher')
    .then(_ => console.log("data connected"))
    .catch(err => console.log(err))

const shcemalogIn = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    passwordConfirmed: { type: String, required: true }
})
const logIn = mongoose.model("register", shcemalogIn)

module.exports.save = (data) => {

    let dataToSave = new logIn({
        username: data.username,
        email: data.email,
        password: data.password,
        passwordConfirmed: data.passwordConfirmed
    })
    return dataToSave.save()

}
module.exports.logIn=logIn
