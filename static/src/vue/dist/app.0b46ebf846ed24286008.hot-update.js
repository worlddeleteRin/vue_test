webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/App.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_MainHeader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MainHeader.vue */ \"./src/components/MainHeader.vue\");\n/* harmony import */ var _components_Products_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Products.vue */ \"./src/components/Products.vue\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  components: {\n    MainHeader: _components_MainHeader_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    Products: _components_Products_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  mounted: function mounted() {\n    this.getProducts();\n    this.getProductsInCart();\n    this.getCartAmount();\n  },\n  methods: {\n    getProducts: function getProducts() {\n      var _this = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/get_api').then(function (response) {\n        var products = response.data.products;\n\n        _this.$store.commit('setProducts', products);\n      });\n    },\n    getProductsInCart: function getProductsInCart() {\n      var _this2 = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/cart/get_products_in_cart_api').then(function (response) {\n        var products_in_cart = response.data['products_in_cart'];\n\n        _this2.$store.commit('setProductsInCart', products_in_cart);\n      });\n    },\n    getCartAmount: function getCartAmount() {\n      var _this3 = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/cart/get_cart_info_ajax').then(function (response) {\n        var cart_amount = response.data['cart_amount'];\n        console.log('cart amount is', cart_amount);\n\n        _this3.$store.commit('setCartAmount', cart_amount);\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9BcHAudnVlPzNkZmQiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8TWFpbkhlYWRlci8+XG4gIDxQcm9kdWN0cyAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNYWluSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9NYWluSGVhZGVyLnZ1ZSc7XG5pbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi9jb21wb25lbnRzL1Byb2R1Y3RzLnZ1ZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdBcHAnLFxuICBjb21wb25lbnRzOiB7XG4gICAgTWFpbkhlYWRlcixcbiAgICBQcm9kdWN0c1xuICB9LFxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLmdldFByb2R1Y3RzKCk7XG4gICAgdGhpcy5nZXRQcm9kdWN0c0luQ2FydCgpXG4gICAgdGhpcy5nZXRDYXJ0QW1vdW50KClcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldFByb2R1Y3RzKCkge1xuICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAnL2dldF9hcGknLFxuICAgICAgKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB2YXIgcHJvZHVjdHMgPSByZXNwb25zZS5kYXRhLnByb2R1Y3RzO1xuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldFByb2R1Y3RzJywgcHJvZHVjdHMpXG4gICAgICB9KVxuICAgIH0sXG4gICAgZ2V0UHJvZHVjdHNJbkNhcnQoKSB7XG4gICAgICBheGlvcy5nZXQoXG4gICAgICAgICcvY2FydC9nZXRfcHJvZHVjdHNfaW5fY2FydF9hcGknLFxuICAgICAgKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB2YXIgcHJvZHVjdHNfaW5fY2FydCA9IHJlc3BvbnNlLmRhdGFbJ3Byb2R1Y3RzX2luX2NhcnQnXTtcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRQcm9kdWN0c0luQ2FydCcsIHByb2R1Y3RzX2luX2NhcnQpXG4gICAgICB9KVxuICAgIH0sXG4gICAgZ2V0Q2FydEFtb3VudCgpIHtcbiAgICAgIGF4aW9zLmdldChcbiAgICAgICAgJy9jYXJ0L2dldF9jYXJ0X2luZm9fYWpheCcsXG4gICAgICApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHZhciBjYXJ0X2Ftb3VudCA9IHJlc3BvbnNlLmRhdGFbJ2NhcnRfYW1vdW50J107XG4gICAgICAgIGNvbnNvbGUubG9nKCdjYXJ0IGFtb3VudCBpcycsIGNhcnRfYW1vdW50KVxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldENhcnRBbW91bnQnLCBjYXJ0X2Ftb3VudClcbiAgICAgIH0pXG4gICAgfVxuICB9LFxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiNhcHAge1xuICBmb250LWZhbWlseTogQXZlbmlyLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzJjM2U1MDtcblxuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuPC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6IkFBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBekJBO0FBWEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=script&lang=js\n");

/***/ })

})