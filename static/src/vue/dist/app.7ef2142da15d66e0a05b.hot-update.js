webpackHotUpdate("app",{

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: getProducts, getProductsInCart, getCartAmount, addToCart, deleteFromCart, testfunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProducts\", function() { return getProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProductsInCart\", function() { return getProductsInCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCartAmount\", function() { return getCartAmount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCart\", function() { return addToCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteFromCart\", function() { return deleteFromCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"testfunc\", function() { return testfunc; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nvar _this4 = undefined;\n\n\nfunction getProducts() {\n  var _this = this;\n\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/get_api').then(function (response) {\n    var products = response.data.products;\n\n    _this.$store.commit('setProducts', products);\n  });\n}\nfunction getProductsInCart() {\n  var _this2 = this;\n\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/cart/get_products_in_cart_api').then(function (response) {\n    var products_in_cart = response.data['products_in_cart'];\n\n    _this2.$store.commit('setProductsInCart', products_in_cart);\n  });\n}\nfunction getCartAmount() {\n  var _this3 = this;\n\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/cart/get_cart_amount_api').then(function (response) {\n    var cart_amount = response.data['cart_amount'];\n    console.log('cart amount is', cart_amount);\n\n    _this3.$store.commit('setCartAmount', cart_amount);\n  });\n}\nvar addToCart = function addToCart(_ref) {\n  var product_id = _ref.product_id;\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('cart/add_item_ajax', {\n    params: {\n      product_id: product_id\n    }\n  }).then(function () {\n    // var status = response.data\n    _this4.$store.commit('addProductToCart', product_id);\n  });\n};\nvar deleteFromCart = function deleteFromCart(_ref2) {\n  var product_id = _ref2.product_id;\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('cart/delete_from_cart_ajax', {\n    params: {\n      product_id: product_id\n    }\n  }).then(function () {\n    // var status = response.data\n    _this4.$store.commit('deleteProductFromCart', product_id);\n  });\n};\nvar testfunc = function testfunc(_ref3) {\n  var count = _ref3.count;\n  console.log(count);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS5qcz9kNzIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9kdWN0cygpIHtcbiAgICAgIGF4aW9zLmdldChcbiAgICAgICAgJy9nZXRfYXBpJyxcbiAgICAgICkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdmFyIHByb2R1Y3RzID0gcmVzcG9uc2UuZGF0YS5wcm9kdWN0cztcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRQcm9kdWN0cycsIHByb2R1Y3RzKVxuICAgICAgfSlcbiAgICB9XG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZHVjdHNJbkNhcnQoKSB7XG4gICAgYXhpb3MuZ2V0KFxuICAgICcvY2FydC9nZXRfcHJvZHVjdHNfaW5fY2FydF9hcGknLFxuICAgICkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICB2YXIgcHJvZHVjdHNfaW5fY2FydCA9IHJlc3BvbnNlLmRhdGFbJ3Byb2R1Y3RzX2luX2NhcnQnXTtcbiAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldFByb2R1Y3RzSW5DYXJ0JywgcHJvZHVjdHNfaW5fY2FydClcbiAgICB9KVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENhcnRBbW91bnQoKSB7XG4gICAgYXhpb3MuZ2V0KFxuICAgICcvY2FydC9nZXRfY2FydF9hbW91bnRfYXBpJyxcbiAgICApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgdmFyIGNhcnRfYW1vdW50ID0gcmVzcG9uc2UuZGF0YVsnY2FydF9hbW91bnQnXTtcbiAgICBjb25zb2xlLmxvZygnY2FydCBhbW91bnQgaXMnLCBjYXJ0X2Ftb3VudClcbiAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldENhcnRBbW91bnQnLCBjYXJ0X2Ftb3VudClcbiAgICB9KVxufVxuXG5leHBvcnQgbGV0IGFkZFRvQ2FydCA9ICh7cHJvZHVjdF9pZH0pID0+IHtcbiAgICBheGlvcy5nZXQoXG4gICAgICAgICdjYXJ0L2FkZF9pdGVtX2FqYXgnLCB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2lkOiBwcm9kdWN0X2lkLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKS50aGVuKCgpID0+IHsgIFxuICAgICAgICAvLyB2YXIgc3RhdHVzID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2FkZFByb2R1Y3RUb0NhcnQnLCBwcm9kdWN0X2lkKVxuICAgIH0pXG59XG5leHBvcnQgbGV0IGRlbGV0ZUZyb21DYXJ0ID0gKHtwcm9kdWN0X2lkfSkgPT4ge1xuICAgIGF4aW9zLmdldChcbiAgICAgICAgJ2NhcnQvZGVsZXRlX2Zyb21fY2FydF9hamF4Jywge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdF9pZCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICkudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIHZhciBzdGF0dXMgPSByZXNwb25zZS5kYXRhXG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnZGVsZXRlUHJvZHVjdEZyb21DYXJ0JywgcHJvZHVjdF9pZClcbiAgICB9KVxufVxuXG5leHBvcnQgbGV0IHRlc3RmdW5jID0gKHtjb3VudH0pID0+IHtcbiAgICBjb25zb2xlLmxvZyhjb3VudClcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api.js\n");

/***/ })

})