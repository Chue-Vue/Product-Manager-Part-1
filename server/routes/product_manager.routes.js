const ProductController = require('../controllers/product_manager.controller');

module.exports = (app) => {
    //Index route to get to all the products
    app.get('/api/products',ProductController.index);
    
    //Show route to show one product
    app.get('/api/products/:id',ProductController.show);

    //Create route to create a widget
    app.post('/api/products/create',ProductController.create);

    //Update route to update a product
    app.put('/api/products/update/:id', ProductController.update);

    //Delete route to delete a product
    app.delete('/api/products/delete/:id',ProductController.destroy)
}