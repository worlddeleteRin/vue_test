webpackHotUpdate("app",{

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: getProducts, getProductByIdAPI, getProductsInCart, getCartAmount, addToCart, deleteFromCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProducts\", function() { return getProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProductByIdAPI\", function() { return getProductByIdAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProductsInCart\", function() { return getProductsInCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCartAmount\", function() { return getCartAmount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCart\", function() { return addToCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteFromCart\", function() { return deleteFromCart; });\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction getProducts() {\n  return _getProducts.apply(this, arguments);\n}\n\nfunction _getProducts() {\n  _getProducts = Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var _this4 = this;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/get_api').then(function (response) {\n              var products = response.data.products;\n\n              _this4.$store.commit('setProducts', products);\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getProducts.apply(this, arguments);\n}\n\nfunction getProductByIdAPI(product_id) {\n  var _this = this;\n\n  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/get_product_by_id_api', {\n    params: {\n      'product_id': product_id\n    }\n  }).then(function (response) {\n    var product = response.data.product;\n\n    _this.$store.commit('setProduct', product);\n  });\n}\nfunction getProductsInCart() {\n  var _this2 = this;\n\n  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/cart/get_products_in_cart_api').then(function (response) {\n    var products_in_cart = response.data['products_in_cart'];\n\n    _this2.$store.commit('setProductsInCart', products_in_cart);\n  });\n}\nfunction getCartAmount() {\n  var _this3 = this;\n\n  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/cart/get_cart_amount_api').then(function (response) {\n    var cart_amount = response.data['cart_amount'];\n\n    _this3.$store.commit('setCartAmount', cart_amount);\n  });\n}\nfunction addToCart(_x) {\n  return _addToCart.apply(this, arguments);\n}\n\nfunction _addToCart() {\n  _addToCart = Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(product_id) {\n    var _this5 = this;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/cart/add_item_ajax', {\n              params: {\n                product_id: product_id\n              }\n            }).then(function () {\n              // var status = response.data\n              _this5.$store.commit('addProductToCart', product_id);\n            });\n\n          case 2:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _addToCart.apply(this, arguments);\n}\n\nfunction deleteFromCart(_x2) {\n  return _deleteFromCart.apply(this, arguments);\n}\n\nfunction _deleteFromCart() {\n  _deleteFromCart = Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(product_id) {\n    var _this6 = this;\n\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/cart/delete_from_cart_ajax', {\n              params: {\n                product_id: product_id\n              }\n            }).then(function () {\n              // var status = response.data\n              _this6.$store.commit('deleteProductFromCart', product_id);\n            });\n\n          case 2:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _deleteFromCart.apply(this, arguments);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS5qcz9kNzIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0cygpIHtcbiAgICAgIGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgJy9nZXRfYXBpJyxcbiAgICAgICkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdmFyIHByb2R1Y3RzID0gcmVzcG9uc2UuZGF0YS5wcm9kdWN0cztcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRQcm9kdWN0cycsIHByb2R1Y3RzKVxuICAgICAgfSlcbiAgICB9XG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZHVjdEJ5SWRBUEkocHJvZHVjdF9pZCkge1xuICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAnL2dldF9wcm9kdWN0X2J5X2lkX2FwaScsIHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICdwcm9kdWN0X2lkJzogcHJvZHVjdF9pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdmFyIHByb2R1Y3QgPSByZXNwb25zZS5kYXRhLnByb2R1Y3Q7XG4gICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRQcm9kdWN0JywgcHJvZHVjdClcbiAgICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9kdWN0c0luQ2FydCgpIHtcbiAgICBheGlvcy5nZXQoXG4gICAgJy9jYXJ0L2dldF9wcm9kdWN0c19pbl9jYXJ0X2FwaScsXG4gICAgKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIHZhciBwcm9kdWN0c19pbl9jYXJ0ID0gcmVzcG9uc2UuZGF0YVsncHJvZHVjdHNfaW5fY2FydCddO1xuICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0UHJvZHVjdHNJbkNhcnQnLCBwcm9kdWN0c19pbl9jYXJ0KVxuICAgIH0pXG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FydEFtb3VudCgpIHtcbiAgICBheGlvcy5nZXQoXG4gICAgJy9jYXJ0L2dldF9jYXJ0X2Ftb3VudF9hcGknLFxuICAgICkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICB2YXIgY2FydF9hbW91bnQgPSByZXNwb25zZS5kYXRhWydjYXJ0X2Ftb3VudCddO1xuICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0Q2FydEFtb3VudCcsIGNhcnRfYW1vdW50KVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUb0NhcnQocHJvZHVjdF9pZCkge1xuICAgIGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgJy9jYXJ0L2FkZF9pdGVtX2FqYXgnLCB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2lkOiBwcm9kdWN0X2lkLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKS50aGVuKCgpID0+IHsgIFxuICAgICAgICAvLyB2YXIgc3RhdHVzID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2FkZFByb2R1Y3RUb0NhcnQnLCBwcm9kdWN0X2lkKVxuICAgIH0pXG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRnJvbUNhcnQocHJvZHVjdF9pZCkge1xuICAgIGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgJy9jYXJ0L2RlbGV0ZV9mcm9tX2NhcnRfYWpheCcsIHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RfaWQ6IHByb2R1Y3RfaWQsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyB2YXIgc3RhdHVzID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2RlbGV0ZVByb2R1Y3RGcm9tQ2FydCcsIHByb2R1Y3RfaWQpXG4gICAgfSlcbn1cblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7O0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTs7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFZQTtBQUFBO0FBQUE7QUFDQTs7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api.js\n");

/***/ })

})