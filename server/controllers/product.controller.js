const Product = require('mongoose').model('Product');

module.exports = {

  // get all products
  index(request, response) {
    Product.find({})
      .then(products => response.json(products))
      .catch(console.log);
  },
  // create a product
  create(request, response) {
    Product.create(request.body)
      .then(product => response.json(product))
      .catch(error => {
        response
          .status(500)
          .json(
            Object.keys(error.errors).map(key => error.errors[key].message)
        );
        console.log('error creating', error);
      });
  },
  // get a single product
  show(request, response) {
    Product.findById(request.params.product_id)
      .then(product => response.json(product))
      .catch(console.log);
  },
  // update a resource
  update(request, response) {
    Product.findByIdAndUpdate(request.params.product_id, request.body, { new: true })
      .then(product => response.json(product))
      .catch(console.log);
  },
  // destroy resource
  destroy(request, response) {
    Product.findByIdAndRemove(request.params.product_id)
      .then(product => response.json(product))
      .catch(console.log);
  },

};
