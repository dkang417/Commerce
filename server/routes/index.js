const productRoutes = require('./product.routes');
const router = require('express').Router();

module.exports = router.use('/products', productRoutes);

