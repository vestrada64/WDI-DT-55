const model = require('./../models/Shoe');

module.exports = shoesController = {
    
    index: function(req, res) {
        res.render('shoes/index', { shoes: model.getAllShoes() });
    },
    
    new: function(req, res) {
        res.render('shoes/new');
    },

    create: function(req, res) {
        let params = req.body;
        model.addShoe(params.shoeName, params.shoeReleaseYear, params.shoeDescription);
        res.redirect('/shoes');
    },

    show: function(req, res) {
        res.render('shoes/show', {shoe: model.getShoe(req.params.id)})
    },

    edit: function(req, res) {
        res.render('shoes/edit', {shoe: model.getShoe(req.params.id)})
    },

    update: function(req, res) {
       let body = req.body;
       model.updateShoe(body.id, body.name, body.year, body.desc);
       res.redirect('/shoes');

    },

    destroy: function(req, res) {
        model.deleteShoe(req.params.id);
        res.redirect('/shoes');
    } 

}