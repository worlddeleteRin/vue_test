webpackHotUpdate("app",{

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: getProducts, getProductByIdAPI, getProductsInCart, getCartAmount, addToCart, addProductQuantity, deleteProductQuantity, deleteFromCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProducts\", function() { return getProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProductByIdAPI\", function() { return getProductByIdAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProductsInCart\", function() { return getProductsInCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCartAmount\", function() { return getCartAmount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCart\", function() { return addToCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProductQuantity\", function() { return addProductQuantity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteProductQuantity\", function() { return deleteProductQuantity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteFromCart\", function() { return deleteFromCart; });\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums */ \"./src/enums.js\");\n\n\n\n\nfunction getProducts() {\n  return _getProducts.apply(this, arguments);\n}\n\nfunction _getProducts() {\n  _getProducts = Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var _this3 = this;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/get_api').then(function (response) {\n              var products = response.data.products;\n\n              _this3.$store.commit('setProducts', products);\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getProducts.apply(this, arguments);\n}\n\nfunction getProductByIdAPI(_x) {\n  return _getProductByIdAPI.apply(this, arguments);\n}\n\nfunction _getProductByIdAPI() {\n  _getProductByIdAPI = Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(product_id) {\n    var response, product;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            this.$store.commit('setApiState', _enums__WEBPACK_IMPORTED_MODULE_3__[\"default\"].LOADING);\n            _context2.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/get_product_by_id_api', {\n              params: {\n                'product_id': product_id\n              }\n            });\n\n          case 3:\n            response = _context2.sent;\n            product = response.data.product;\n            console.log('response product is', product);\n            this.$store.commit('setProduct', product);\n            this.$store.commit('setApiState', _enums__WEBPACK_IMPORTED_MODULE_3__[\"default\"].LOADED);\n            return _context2.abrupt(\"return\", product);\n\n          case 9:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this);\n  }));\n  return _getProductByIdAPI.apply(this, arguments);\n}\n\nfunction getProductsInCart() {\n  var _this = this;\n\n  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/cart/get_products_in_cart_api').then(function (response) {\n    var products_in_cart = response.data['products_in_cart'];\n\n    _this.$store.commit('setProductsInCart', products_in_cart);\n  });\n}\nfunction getCartAmount() {\n  var _this2 = this;\n\n  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/cart/get_cart_amount_api').then(function (response) {\n    var cart_amount = response.data['cart_amount'];\n\n    _this2.$store.commit('setCartAmount', cart_amount);\n  });\n}\nfunction addToCart(_x2) {\n  return _addToCart.apply(this, arguments);\n}\n\nfunction _addToCart() {\n  _addToCart = Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(product_id) {\n    var _this4 = this;\n\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/cart/add_item_ajax', {\n              params: {\n                product_id: product_id\n              }\n            }).then(function () {\n              // var status = response.data\n              _this4.$store.commit('addProductToCart', product_id);\n            });\n\n          case 2:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _addToCart.apply(this, arguments);\n}\n\nfunction addProductQuantity(_x3) {\n  return _addProductQuantity.apply(this, arguments);\n}\n\nfunction _addProductQuantity() {\n  _addProductQuantity = Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(product_id) {\n    var _this5 = this;\n\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/cart/add_item_quantity_ajax', {\n              params: {\n                product_id: product_id\n              }\n            }).then(function () {\n              // var status = response.data\n              _this5.$store.commit('addProductQuantity', product_id);\n            });\n\n          case 2:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _addProductQuantity.apply(this, arguments);\n}\n\nfunction deleteProductQuantity(_x4) {\n  return _deleteProductQuantity.apply(this, arguments);\n}\n\nfunction _deleteProductQuantity() {\n  _deleteProductQuantity = Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(product_id) {\n    var _this6 = this;\n\n    return regeneratorRuntime.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/cart/delete_item_quantity_ajax', {\n              params: {\n                product_id: product_id\n              }\n            }).then(function (response) {\n              var removed = response.data.removed;\n              /* console.log('removed: ', removed) */\n\n              if (removed) {\n                _this6.$store.commit('deleteProductFromCart', product_id);\n              } else {\n                _this6.$store.commit('deleteProductQuantity', product_id);\n              }\n            });\n\n          case 2:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n  return _deleteProductQuantity.apply(this, arguments);\n}\n\nfunction deleteFromCart(_x5) {\n  return _deleteFromCart.apply(this, arguments);\n}\n\nfunction _deleteFromCart() {\n  _deleteFromCart = Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(product_id) {\n    var _this7 = this;\n\n    return regeneratorRuntime.wrap(function _callee6$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            _context6.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/cart/delete_from_cart_ajax', {\n              params: {\n                product_id: product_id\n              }\n            }).then(function () {\n              // var status = response.data\n              _this7.$store.commit('deleteProductFromCart', product_id);\n            });\n\n          case 2:\n          case \"end\":\n            return _context6.stop();\n        }\n      }\n    }, _callee6);\n  }));\n  return _deleteFromCart.apply(this, arguments);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS5qcz9kNzIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgRU5VTSBmcm9tICcuL2VudW1zJztcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHMoKSB7XG4gICAgICBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICcvZ2V0X2FwaScsXG4gICAgICApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHZhciBwcm9kdWN0cyA9IHJlc3BvbnNlLmRhdGEucHJvZHVjdHM7XG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0UHJvZHVjdHMnLCBwcm9kdWN0cylcbiAgICAgIH0pXG4gICAgfVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RCeUlkQVBJKHByb2R1Y3RfaWQpIHtcbiAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldEFwaVN0YXRlJywgRU5VTS5MT0FESU5HKVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICcvZ2V0X3Byb2R1Y3RfYnlfaWRfYXBpJywge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgJ3Byb2R1Y3RfaWQnOiBwcm9kdWN0X2lkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB2YXIgcHJvZHVjdCA9IHJlc3BvbnNlLmRhdGEucHJvZHVjdDtcbiAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZSBwcm9kdWN0IGlzJywgcHJvZHVjdCk7XG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldFByb2R1Y3QnLCBwcm9kdWN0KVxuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRBcGlTdGF0ZScsIEVOVU0uTE9BREVEKVxuICAgICAgcmV0dXJuIHByb2R1Y3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9kdWN0c0luQ2FydCgpIHtcbiAgICBheGlvcy5nZXQoXG4gICAgJy9jYXJ0L2dldF9wcm9kdWN0c19pbl9jYXJ0X2FwaScsXG4gICAgKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIHZhciBwcm9kdWN0c19pbl9jYXJ0ID0gcmVzcG9uc2UuZGF0YVsncHJvZHVjdHNfaW5fY2FydCddO1xuICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0UHJvZHVjdHNJbkNhcnQnLCBwcm9kdWN0c19pbl9jYXJ0KVxuICAgIH0pXG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FydEFtb3VudCgpIHtcbiAgICBheGlvcy5nZXQoXG4gICAgJy9jYXJ0L2dldF9jYXJ0X2Ftb3VudF9hcGknLFxuICAgICkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICB2YXIgY2FydF9hbW91bnQgPSByZXNwb25zZS5kYXRhWydjYXJ0X2Ftb3VudCddO1xuICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0Q2FydEFtb3VudCcsIGNhcnRfYW1vdW50KVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUb0NhcnQocHJvZHVjdF9pZCkge1xuICAgIGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgJy9jYXJ0L2FkZF9pdGVtX2FqYXgnLCB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2lkOiBwcm9kdWN0X2lkLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKS50aGVuKCgpID0+IHsgIFxuICAgICAgICAvLyB2YXIgc3RhdHVzID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2FkZFByb2R1Y3RUb0NhcnQnLCBwcm9kdWN0X2lkKVxuICAgIH0pXG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkUHJvZHVjdFF1YW50aXR5KHByb2R1Y3RfaWQpIHtcbiAgICBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICcvY2FydC9hZGRfaXRlbV9xdWFudGl0eV9hamF4Jywge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdF9pZCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICkudGhlbigoKSA9PiB7ICBcbiAgICAgICAgLy8gdmFyIHN0YXR1cyA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdhZGRQcm9kdWN0UXVhbnRpdHknLCBwcm9kdWN0X2lkKVxuICAgIH0pXG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdFF1YW50aXR5KHByb2R1Y3RfaWQpIHtcbiAgICBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICcvY2FydC9kZWxldGVfaXRlbV9xdWFudGl0eV9hamF4Jywge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdF9pZCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICkudGhlbigocmVzcG9uc2UpID0+IHsgIFxuICAgICAgICB2YXIgcmVtb3ZlZCA9IHJlc3BvbnNlLmRhdGEucmVtb3ZlZFxuICAgICAgICAvKiBjb25zb2xlLmxvZygncmVtb3ZlZDogJywgcmVtb3ZlZCkgKi9cbiAgICAgICAgaWYgKHJlbW92ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnZGVsZXRlUHJvZHVjdEZyb21DYXJ0JywgcHJvZHVjdF9pZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdkZWxldGVQcm9kdWN0UXVhbnRpdHknLCBwcm9kdWN0X2lkKVxuICAgICAgICB9XG4gICAgfSlcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVGcm9tQ2FydChwcm9kdWN0X2lkKSB7XG4gICAgYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAnL2NhcnQvZGVsZXRlX2Zyb21fY2FydF9hamF4Jywge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdF9pZCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICkudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIHZhciBzdGF0dXMgPSByZXNwb25zZS5kYXRhXG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnZGVsZXRlUHJvZHVjdEZyb21DYXJ0JywgcHJvZHVjdF9pZClcbiAgICB9KVxufVxuXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBOztBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQVFBO0FBQUE7QUFBQTtBQUNBOztBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFKQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFnQkE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7O0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBWUE7QUFBQTtBQUFBO0FBQ0E7O0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBWUE7QUFBQTtBQUFBO0FBQ0E7O0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQWlCQTtBQUFBO0FBQUE7QUFDQTs7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api.js\n");

/***/ })

})