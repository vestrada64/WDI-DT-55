const Bean = require('./../models/Bean');

function create(req, res) {
    let newBean = new Bean; 

    newBean.name = req.body.name;
    newBean.description = req.body.description;
    newBean.price = parseInt(req.body.price);

    newBean.save((err) => { 
        if (err) console.log(err); 
        Bean.find({})
        .then(beans => res.json(beans).status(200));
    })
}

function index(req, res) {
    Bean.find({})
        .then((beans) => res.json(beans).status(200))
        .catch(err => console.log(err));
}

module.exports = {
    create, 
    index
}