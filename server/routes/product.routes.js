const { productController } = require('../controllers');
const router = require('express').Router();

// ('/products')

module.exports = router
  .get('/', productController.index)
  .post('/', productController.create)
  .get('/:product_id', productController.show)
  .put('/:product_id/edit', productController.update)
  .delete('/:product_id', productController.destroy);

