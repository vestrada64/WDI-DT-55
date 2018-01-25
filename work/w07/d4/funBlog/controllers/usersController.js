const User = require('./../models/user')


module.exports = {
    index,
    show, 
    create,
    newUser
}

function index(req, res){
    User.find({}, (err, doc) => {
        res.render('./users/index', { users: doc })
    })
}

function show(req, res) {
    User.findById(req.params.id, (err, doc) => {
        res.render('./users/show', { user: doc })
    })
}

function create(req, res) {
    var newUser = new User(req.body)

    if (newUser.save()) {
        res.redirect("/users")
    } else {
        res.render('./users/new')
    }

}

function newUser(req, res){
    res.render('./users/new')
}