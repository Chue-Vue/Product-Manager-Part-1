const {Product} = require ('../models/product_manager.model')

module.exports = {
    //shows all products
    index:(req, res) => {
        Product.find()
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    //shows one product
    show: (req, res) => {
        Product.findOne({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    //creates a new product
    create: (req, res) => {
        Product.create(req.body)
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    //updates one product
    update: (req, res) => {
        Product.findOneAndUpdate({_id:req.params.id}, req.body)
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    //deletes one product
    destroy: (req, res) => {
        Product.deleteOne({_id:require.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    }
}