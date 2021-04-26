webpackHotUpdate("app",{

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: getProducts, getProductByIdAPI, getProductsInCart, getCartAmount, addToCart, deleteFromCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProducts\", function() { return getProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProductByIdAPI\", function() { return getProductByIdAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProductsInCart\", function() { return getProductsInCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCartAmount\", function() { return getCartAmount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCart\", function() { return addToCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteFromCart\", function() { return deleteFromCart; });\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction getProducts() {\n  return _getProducts.apply(this, arguments);\n}\n\nfunction _getProducts() {\n  _getProducts = Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var _this3 = this;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/get_api').then(function (response) {\n              var products = response.data.products;\n\n              _this3.$store.commit('setProducts', products);\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getProducts.apply(this, arguments);\n}\n\nfunction getProductByIdAPI(_x) {\n  return _getProductByIdAPI.apply(this, arguments);\n}\n\nfunction _getProductByIdAPI() {\n  _getProductByIdAPI = Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(product_id) {\n    var current_product;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            current_product = {};\n            _context2.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/get_product_by_id_api', {\n              params: {\n                'product_id': product_id\n              }\n            }).then(function (response) {\n              current_product = response.data.product;\n              /* this.$store.commit('setProduct', product) */\n            });\n\n          case 3:\n            return _context2.abrupt(\"return\", current_product);\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _getProductByIdAPI.apply(this, arguments);\n}\n\nfunction getProductsInCart() {\n  var _this = this;\n\n  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/cart/get_products_in_cart_api').then(function (response) {\n    var products_in_cart = response.data['products_in_cart'];\n\n    _this.$store.commit('setProductsInCart', products_in_cart);\n  });\n}\nfunction getCartAmount() {\n  var _this2 = this;\n\n  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/cart/get_cart_amount_api').then(function (response) {\n    var cart_amount = response.data['cart_amount'];\n\n    _this2.$store.commit('setCartAmount', cart_amount);\n  });\n}\nfunction addToCart(_x2) {\n  return _addToCart.apply(this, arguments);\n}\n\nfunction _addToCart() {\n  _addToCart = Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(product_id) {\n    var _this4 = this;\n\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/cart/add_item_ajax', {\n              params: {\n                product_id: product_id\n              }\n            }).then(function () {\n              // var status = response.data\n              _this4.$store.commit('addProductToCart', product_id);\n            });\n\n          case 2:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _addToCart.apply(this, arguments);\n}\n\nfunction deleteFromCart(_x3) {\n  return _deleteFromCart.apply(this, arguments);\n}\n\nfunction _deleteFromCart() {\n  _deleteFromCart = Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(product_id) {\n    var _this5 = this;\n\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/cart/delete_from_cart_ajax', {\n              params: {\n                product_id: product_id\n              }\n            }).then(function () {\n              // var status = response.data\n              _this5.$store.commit('deleteProductFromCart', product_id);\n            });\n\n          case 2:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _deleteFromCart.apply(this, arguments);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS5qcz9kNzIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0cygpIHtcbiAgICAgIGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgJy9nZXRfYXBpJyxcbiAgICAgICkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdmFyIHByb2R1Y3RzID0gcmVzcG9uc2UuZGF0YS5wcm9kdWN0cztcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRQcm9kdWN0cycsIHByb2R1Y3RzKVxuICAgICAgfSlcbiAgICB9XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdEJ5SWRBUEkocHJvZHVjdF9pZCkge1xuICAgIHZhciBjdXJyZW50X3Byb2R1Y3QgPSB7fVxuICAgICAgYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAnL2dldF9wcm9kdWN0X2J5X2lkX2FwaScsIHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICdwcm9kdWN0X2lkJzogcHJvZHVjdF9pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgY3VycmVudF9wcm9kdWN0ID0gcmVzcG9uc2UuZGF0YS5wcm9kdWN0O1xuICAgICAgICAgIC8qIHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0UHJvZHVjdCcsIHByb2R1Y3QpICovXG4gICAgICB9KVxuICAgICAgcmV0dXJuIGN1cnJlbnRfcHJvZHVjdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZHVjdHNJbkNhcnQoKSB7XG4gICAgYXhpb3MuZ2V0KFxuICAgICcvY2FydC9nZXRfcHJvZHVjdHNfaW5fY2FydF9hcGknLFxuICAgICkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICB2YXIgcHJvZHVjdHNfaW5fY2FydCA9IHJlc3BvbnNlLmRhdGFbJ3Byb2R1Y3RzX2luX2NhcnQnXTtcbiAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldFByb2R1Y3RzSW5DYXJ0JywgcHJvZHVjdHNfaW5fY2FydClcbiAgICB9KVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENhcnRBbW91bnQoKSB7XG4gICAgYXhpb3MuZ2V0KFxuICAgICcvY2FydC9nZXRfY2FydF9hbW91bnRfYXBpJyxcbiAgICApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgdmFyIGNhcnRfYW1vdW50ID0gcmVzcG9uc2UuZGF0YVsnY2FydF9hbW91bnQnXTtcbiAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldENhcnRBbW91bnQnLCBjYXJ0X2Ftb3VudClcbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVG9DYXJ0KHByb2R1Y3RfaWQpIHtcbiAgICBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICcvY2FydC9hZGRfaXRlbV9hamF4Jywge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdF9pZCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICkudGhlbigoKSA9PiB7ICBcbiAgICAgICAgLy8gdmFyIHN0YXR1cyA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdhZGRQcm9kdWN0VG9DYXJ0JywgcHJvZHVjdF9pZClcbiAgICB9KVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUZyb21DYXJ0KHByb2R1Y3RfaWQpIHtcbiAgICBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICcvY2FydC9kZWxldGVfZnJvbV9jYXJ0X2FqYXgnLCB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2lkOiBwcm9kdWN0X2lkLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKS50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gdmFyIHN0YXR1cyA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdkZWxldGVQcm9kdWN0RnJvbUNhcnQnLCBwcm9kdWN0X2lkKVxuICAgIH0pXG59XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBOztBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQVFBO0FBQUE7QUFBQTtBQUNBOztBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQWVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBOztBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQVlBO0FBQUE7QUFBQTtBQUNBOztBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api.js\n");

/***/ })

})