webpackHotUpdate("app",{

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: getProducts, getProductsInCart, getCartAmount, addToCart, deleteFromCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProducts\", function() { return getProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProductsInCart\", function() { return getProductsInCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCartAmount\", function() { return getCartAmount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCart\", function() { return addToCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteFromCart\", function() { return deleteFromCart; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getProducts() {\n  var _this = this;\n\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/get_api').then(function (response) {\n    var products = response.data.products;\n\n    _this.$store.commit('setProducts', products);\n  });\n}\nfunction getProductsInCart() {\n  var _this2 = this;\n\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/cart/get_products_in_cart_api').then(function (response) {\n    var products_in_cart = response.data['products_in_cart'];\n\n    _this2.$store.commit('setProductsInCart', products_in_cart);\n  });\n}\nfunction getCartAmount() {\n  var _this3 = this;\n\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/cart/get_cart_amount_api').then(function (response) {\n    var cart_amount = response.data['cart_amount'];\n    console.log('cart amount is', cart_amount);\n\n    _this3.$store.commit('setCartAmount', cart_amount);\n  });\n}\nfunction addToCart(_ref) {\n  var _this4 = this;\n\n  var product_id = _ref.product_id;\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('cart/add_item_ajax', {\n    params: {\n      product_id: product_id\n    }\n  }).then(function () {\n    // var status = response.data\n    _this4.$store.commit('addProductToCart', product_id);\n  });\n}\nfunction deleteFromCart(_ref2) {\n  var _this5 = this;\n\n  var product_id = _ref2.product_id;\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('cart/delete_from_cart_ajax', {\n    params: {\n      product_id: product_id\n    }\n  }).then(function () {\n    // var status = response.data\n    _this5.$store.commit('deleteProductFromCart', product_id);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS5qcz9kNzIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9kdWN0cygpIHtcbiAgICAgIGF4aW9zLmdldChcbiAgICAgICAgJy9nZXRfYXBpJyxcbiAgICAgICkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdmFyIHByb2R1Y3RzID0gcmVzcG9uc2UuZGF0YS5wcm9kdWN0cztcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRQcm9kdWN0cycsIHByb2R1Y3RzKVxuICAgICAgfSlcbiAgICB9XG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZHVjdHNJbkNhcnQoKSB7XG4gICAgYXhpb3MuZ2V0KFxuICAgICcvY2FydC9nZXRfcHJvZHVjdHNfaW5fY2FydF9hcGknLFxuICAgICkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICB2YXIgcHJvZHVjdHNfaW5fY2FydCA9IHJlc3BvbnNlLmRhdGFbJ3Byb2R1Y3RzX2luX2NhcnQnXTtcbiAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldFByb2R1Y3RzSW5DYXJ0JywgcHJvZHVjdHNfaW5fY2FydClcbiAgICB9KVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENhcnRBbW91bnQoKSB7XG4gICAgYXhpb3MuZ2V0KFxuICAgICcvY2FydC9nZXRfY2FydF9hbW91bnRfYXBpJyxcbiAgICApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgdmFyIGNhcnRfYW1vdW50ID0gcmVzcG9uc2UuZGF0YVsnY2FydF9hbW91bnQnXTtcbiAgICBjb25zb2xlLmxvZygnY2FydCBhbW91bnQgaXMnLCBjYXJ0X2Ftb3VudClcbiAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldENhcnRBbW91bnQnLCBjYXJ0X2Ftb3VudClcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9DYXJ0KHtwcm9kdWN0X2lkfSkge1xuICAgIGF4aW9zLmdldChcbiAgICAgICAgJ2NhcnQvYWRkX2l0ZW1fYWpheCcsIHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RfaWQ6IHByb2R1Y3RfaWQsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApLnRoZW4oKCkgPT4geyAgXG4gICAgICAgIC8vIHZhciBzdGF0dXMgPSByZXNwb25zZS5kYXRhXG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnYWRkUHJvZHVjdFRvQ2FydCcsIHByb2R1Y3RfaWQpXG4gICAgfSlcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVGcm9tQ2FydCh7cHJvZHVjdF9pZH0pIHtcbiAgICBheGlvcy5nZXQoXG4gICAgICAgICdjYXJ0L2RlbGV0ZV9mcm9tX2NhcnRfYWpheCcsIHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RfaWQ6IHByb2R1Y3RfaWQsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyB2YXIgc3RhdHVzID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2RlbGV0ZVByb2R1Y3RGcm9tQ2FydCcsIHByb2R1Y3RfaWQpXG4gICAgfSlcbn1cblxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api.js\n");

/***/ })

})