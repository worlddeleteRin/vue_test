webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPage.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductPage.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.js */ \"./src/api.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProductPage',\n  props: ['product_id'],\n  data: function data() {\n    return {\n      product: {}\n    };\n  },\n  components: {},\n  mounted: function mounted() {\n    var _this = this;\n\n    return Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log('starting mounting');\n              _context.next = 3;\n              return Object(_api_js__WEBPACK_IMPORTED_MODULE_2__[\"getProductByIdAPI\"])(_this.product_id);\n\n            case 3:\n              _this.product = _context.sent;\n              console.log('product is', _this.product);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  },\n  computed: {//     products_in_cart () {\n    //         return this.$store.state.products_in_cart;\n    // },\n  },\n  methods: {\n    getProductByIdAPI: _api_js__WEBPACK_IMPORTED_MODULE_2__[\"getProductByIdAPI\"],\n    getSalePercent: function getSalePercent(product) {\n      return parseInt(product.sale_price * 100 / product.price);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UGFnZS52dWU/OGVjNCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX3BhZ2VcIj4gXG4gICAgICAgIHt7IHByb2R1Y3QgfX1cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX21haW5fX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX21haW5fX2NvbnRhaW5lcl9faW1nXCI+XG4gICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC8nICsgcHJvZHVjdC5pbWdzcmNcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicHJvZHVjdF9fbWFpbmltYWdlX19pdGVtXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19tYWluX19jb250YWluZXJfX3NlY29uZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGludHNfX2Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2FsZV9fYmxvY2tfX2hpbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInByb2R1Y3Quc2FsZV9wcmljZSA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSB7eyBnZXRTYWxlUGVyY2VudChwcm9kdWN0KSB9fSAlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX3BhZ2VfX25hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2R1Y3QubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX21haW5fX2NvbnRhaW5lcl9fc2Vjb25kX19wcmljZWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cInByb2R1Y3Quc2FsZV9wcmljZSA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdF9fbWFpbl9fY29udGFpbmVyX19zZWNvbmRfX3NhbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9kdWN0LnNhbGVfcHJpY2UgfX0gJiM4MzgxO1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0X19tYWluX19jb250YWluZXJfX3NlY29uZF9fb2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZHVjdC5wcmljZSB9fSAmIzgzODE7XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2R1Y3RfX21haW5fX2NvbnRhaW5lcl9fc2Vjb25kX19wcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9kdWN0LnByaWNlIH19ICYjODM4MTtcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX2Vjb25vbXlcIlxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwicHJvZHVjdC5zYWxlX3ByaWNlID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0K3QutC+0L3QvtC80LjRjyB7eyBwcm9kdWN0LnByaWNlIC0gcHJvZHVjdC5zYWxlX3ByaWNlIH19ICYjODM4MTtcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19tYWluX19jb250YWluZXJfX3NlY29uZF9fYWRkY2FydFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X19ub3RfX2luX19jYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2R1Y3RfX3BhZ2VfX2FkZGNhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcm9kdWN0X19hZGRjYXJ0X19idXR0b25cIiB2YWx1ZT1cInt7IHByb2R1Y3QuaWQgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQlNC+0LHQsNCy0LjRgtGMINCyINC60L7RgNC30LjQvdGDXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdF9fbWFpbl9fY29udGFpbmVyX19zZWNvbmRfX2FkZGNhcnRcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9faW5fX2NhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19wYWdlX19hZGRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9kdWN0X2dvX3RvX2NhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2R1Y3RfX3BhZ2VfX2FkZGVkX19maXJzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQkiDQutC+0YDQt9C40L3QtSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJxdWFudGl0eV9pbl9jYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0YjRgi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2R1Y3RfX3BhZ2VfX2FkZGVkX19zZWNvbmRcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0LXRgNC10LnRgtC4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX3BhZ2VfX2FkZGVkX19tb3JlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiYWRkX3F1YW50aXR5X2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3sgcHJvZHVjdC5pZCB9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKzEg0YjRgi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdF9fZGVzY3JpcHRpb25fX2Jsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cInByb2R1Y3QuZGVzY3JpcHRpb24gIT0gJ25hbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuaWNlX190aXRsZTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQntC/0LjRgdCw0L3QuNC1XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19kZXNjcmlwdGlvbl9fYmxvY2tfX2Rlc2NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9kdWN0LmRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHtnZXRQcm9kdWN0QnlJZEFQSX0gZnJvbSAnLi4vYXBpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnUHJvZHVjdFBhZ2UnLFxuICBwcm9wczogWydwcm9kdWN0X2lkJ10sXG4gIGRhdGEgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwcm9kdWN0OiB7fSxcbiAgICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICB9LFxuICBhc3luYyBtb3VudGVkICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzdGFydGluZyBtb3VudGluZycpO1xuICAgICB0aGlzLnByb2R1Y3QgPSBhd2FpdCBnZXRQcm9kdWN0QnlJZEFQSSh0aGlzLnByb2R1Y3RfaWQpO1xuICAgICBjb25zb2xlLmxvZygncHJvZHVjdCBpcycsIHRoaXMucHJvZHVjdCk7XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4vLyAgICAgcHJvZHVjdHNfaW5fY2FydCAoKSB7XG4vLyAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5wcm9kdWN0c19pbl9jYXJ0O1xuICAgIC8vIH0sXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldFByb2R1Y3RCeUlkQVBJLFxuICAgICAgICBnZXRTYWxlUGVyY2VudChwcm9kdWN0KSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlSW50KChwcm9kdWN0LnNhbGVfcHJpY2UgKiAxMDApIC8gcHJvZHVjdC5wcmljZSlcbiAgICAgICAgfSxcbiAgICB9XG59XG48L3NjcmlwdD5cblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBeUZBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFwQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPage.vue?vue&type=script&lang=js\n");

/***/ })

})