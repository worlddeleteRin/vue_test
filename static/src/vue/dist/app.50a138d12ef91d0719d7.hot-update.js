webpackHotUpdate("app",{

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: getProducts, getProductsInCart, getCartAmount, addToCart, deleteFromCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProducts\", function() { return getProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProductsInCart\", function() { return getProductsInCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCartAmount\", function() { return getCartAmount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCart\", function() { return addToCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteFromCart\", function() { return deleteFromCart; });\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction getProducts() {\n  return _getProducts.apply(this, arguments);\n}\n\nfunction _getProducts() {\n  _getProducts = Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var _this3 = this;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/get_api').then(function (response) {\n              var products = response.data.products;\n\n              _this3.$store.commit('setProducts', products);\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getProducts.apply(this, arguments);\n}\n\nfunction getProductsInCart() {\n  var _this = this;\n\n  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/cart/get_products_in_cart_api').then(function (response) {\n    var products_in_cart = response.data['products_in_cart'];\n\n    _this.$store.commit('setProductsInCart', products_in_cart);\n  });\n}\nfunction getCartAmount() {\n  var _this2 = this;\n\n  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/cart/get_cart_amount_api').then(function (response) {\n    var cart_amount = response.data['cart_amount'];\n\n    _this2.$store.commit('setCartAmount', cart_amount);\n  });\n}\nfunction addToCart(_x) {\n  return _addToCart.apply(this, arguments);\n}\n\nfunction _addToCart() {\n  _addToCart = Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(product_id) {\n    var _this4 = this;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('cart/add_item_ajax', {\n              params: {\n                product_id: product_id\n              }\n            }).then(function () {\n              // var status = response.data\n              _this4.$store.commit('addProductToCart', product_id);\n            });\n\n          case 2:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _addToCart.apply(this, arguments);\n}\n\nfunction deleteFromCart(_x2) {\n  return _deleteFromCart.apply(this, arguments);\n}\n\nfunction _deleteFromCart() {\n  _deleteFromCart = Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(product_id) {\n    var _this5 = this;\n\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('cart/delete_from_cart_ajax', {\n              params: {\n                product_id: product_id\n              }\n            }).then(function () {\n              // var status = response.data\n              _this5.$store.commit('deleteProductFromCart', product_id);\n            });\n\n          case 2:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _deleteFromCart.apply(this, arguments);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS5qcz9kNzIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0cygpIHtcbiAgICAgIGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgJy9nZXRfYXBpJyxcbiAgICAgICkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdmFyIHByb2R1Y3RzID0gcmVzcG9uc2UuZGF0YS5wcm9kdWN0cztcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRQcm9kdWN0cycsIHByb2R1Y3RzKVxuICAgICAgfSlcbiAgICB9XG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZHVjdHNJbkNhcnQoKSB7XG4gICAgYXhpb3MuZ2V0KFxuICAgICcvY2FydC9nZXRfcHJvZHVjdHNfaW5fY2FydF9hcGknLFxuICAgICkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICB2YXIgcHJvZHVjdHNfaW5fY2FydCA9IHJlc3BvbnNlLmRhdGFbJ3Byb2R1Y3RzX2luX2NhcnQnXTtcbiAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldFByb2R1Y3RzSW5DYXJ0JywgcHJvZHVjdHNfaW5fY2FydClcbiAgICB9KVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENhcnRBbW91bnQoKSB7XG4gICAgYXhpb3MuZ2V0KFxuICAgICcvY2FydC9nZXRfY2FydF9hbW91bnRfYXBpJyxcbiAgICApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgdmFyIGNhcnRfYW1vdW50ID0gcmVzcG9uc2UuZGF0YVsnY2FydF9hbW91bnQnXTtcbiAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldENhcnRBbW91bnQnLCBjYXJ0X2Ftb3VudClcbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVG9DYXJ0KHByb2R1Y3RfaWQpIHtcbiAgICBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICdjYXJ0L2FkZF9pdGVtX2FqYXgnLCB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2lkOiBwcm9kdWN0X2lkLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKS50aGVuKCgpID0+IHsgIFxuICAgICAgICAvLyB2YXIgc3RhdHVzID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2FkZFByb2R1Y3RUb0NhcnQnLCBwcm9kdWN0X2lkKVxuICAgIH0pXG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRnJvbUNhcnQocHJvZHVjdF9pZCkge1xuICAgIGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgJ2NhcnQvZGVsZXRlX2Zyb21fY2FydF9hamF4Jywge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdF9pZCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICkudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIHZhciBzdGF0dXMgPSByZXNwb25zZS5kYXRhXG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnZGVsZXRlUHJvZHVjdEZyb21DYXJ0JywgcHJvZHVjdF9pZClcbiAgICB9KVxufVxuXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBOztBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQVFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBOztBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQVlBO0FBQUE7QUFBQTtBQUNBOztBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api.js\n");

/***/ })

})