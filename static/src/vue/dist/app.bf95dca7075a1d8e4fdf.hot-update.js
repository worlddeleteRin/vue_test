webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPage.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductPage.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api.js */ \"./src/api.js\");\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProductPage',\n  props: ['product_id'],\n  data: function data() {\n    return {\n      product: {}\n    };\n  },\n  components: {},\n  mounted: function mounted() {\n    var _this = this;\n\n    return Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log('starting mounting');\n              _context.next = 3;\n              return _this.getProductByIdAPI(_this.product_id);\n\n            case 3:\n              _this.product = _context.sent;\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  },\n  computed: {//     products_in_cart () {\n    //         return this.$store.state.products_in_cart;\n    // },\n  },\n  methods: {\n    getProductByIdAPI: _api_js__WEBPACK_IMPORTED_MODULE_7__[\"getProductByIdAPI\"],\n    getSalePercent: function getSalePercent(product) {\n      return parseInt(product.sale_price * 100 / product.price);\n    },\n    isInCart: function isInCart(product_id) {\n      console.log('product id is', product_id);\n      var in_cart = this.$store.state.products_in_cart;\n      var in_cart_ids = Object.keys(in_cart);\n      var is_in_cart = in_cart_ids.includes(product_id.toString());\n      return is_in_cart;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UGFnZS52dWU/OGVjNCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX3BhZ2VcIj4gXG4gICAgICAgIHt7IHByb2R1Y3QgfX1cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX21haW5fX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX21haW5fX2NvbnRhaW5lcl9faW1nXCI+XG4gICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC8nICsgcHJvZHVjdC5pbWdzcmNcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicHJvZHVjdF9fbWFpbmltYWdlX19pdGVtXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19tYWluX19jb250YWluZXJfX3NlY29uZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGludHNfX2Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2FsZV9fYmxvY2tfX2hpbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInByb2R1Y3Quc2FsZV9wcmljZSA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSB7eyBnZXRTYWxlUGVyY2VudChwcm9kdWN0KSB9fSAlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX3BhZ2VfX25hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2R1Y3QubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX21haW5fX2NvbnRhaW5lcl9fc2Vjb25kX19wcmljZWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cInByb2R1Y3Quc2FsZV9wcmljZSA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdF9fbWFpbl9fY29udGFpbmVyX19zZWNvbmRfX3NhbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9kdWN0LnNhbGVfcHJpY2UgfX0gJiM4MzgxO1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0X19tYWluX19jb250YWluZXJfX3NlY29uZF9fb2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZHVjdC5wcmljZSB9fSAmIzgzODE7XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2R1Y3RfX21haW5fX2NvbnRhaW5lcl9fc2Vjb25kX19wcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9kdWN0LnByaWNlIH19ICYjODM4MTtcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX2Vjb25vbXlcIlxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwicHJvZHVjdC5zYWxlX3ByaWNlID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0K3QutC+0L3QvtC80LjRjyB7eyBwcm9kdWN0LnByaWNlIC0gcHJvZHVjdC5zYWxlX3ByaWNlIH19ICYjODM4MTtcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19tYWluX19jb250YWluZXJfX3NlY29uZF9fYWRkY2FydFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X19ub3RfX2luX19jYXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cInRoaXMuaXNJbkNhcnQodGhpcy5wcm9kdWN0LmlkKVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdF9fcGFnZV9fYWRkY2FydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByb2R1Y3RfX2FkZGNhcnRfX2J1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCU0L7QsdCw0LLQuNGC0Ywg0LIg0LrQvtGA0LfQuNC90YNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19tYWluX19jb250YWluZXJfX3NlY29uZF9fYWRkY2FydFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X19pbl9fY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX3BhZ2VfX2FkZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2R1Y3RfZ29fdG9fY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdF9fcGFnZV9fYWRkZWRfX2ZpcnN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCSINC60L7RgNC30LjQvdC1IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInF1YW50aXR5X2luX2NhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDRiNGCLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdF9fcGFnZV9fYWRkZWRfX3NlY29uZFwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QtdGA0LXQudGC0LhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdF9fcGFnZV9fYWRkZWRfX21vcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJhZGRfcXVhbnRpdHlfYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7eyBwcm9kdWN0LmlkIH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArMSDRiNGCLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19kZXNjcmlwdGlvbl9fYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwicHJvZHVjdC5kZXNjcmlwdGlvbiAhPSAnbmFuJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5pY2VfX3RpdGxlMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCe0L/QuNGB0LDQvdC40LVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX2Rlc2NyaXB0aW9uX19ibG9ja19fZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2R1Y3QuZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQge2dldFByb2R1Y3RCeUlkQVBJfSBmcm9tICcuLi9hcGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdQcm9kdWN0UGFnZScsXG4gIHByb3BzOiBbJ3Byb2R1Y3RfaWQnXSxcbiAgZGF0YSAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAgIHByb2R1Y3Q6IHt9LFxuICAgICAgfVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gIH0sXG4gIGFzeW5jIG1vdW50ZWQgKCkge1xuICAgICBjb25zb2xlLmxvZygnc3RhcnRpbmcgbW91bnRpbmcnKTtcbiAgICAgdGhpcy5wcm9kdWN0ID0gYXdhaXQgdGhpcy5nZXRQcm9kdWN0QnlJZEFQSSh0aGlzLnByb2R1Y3RfaWQpO1xuICAgIC8vICBjb25zb2xlLmxvZygncHJvZHVjdCBpcycsIHRoaXMucHJvZHVjdCk7XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4vLyAgICAgcHJvZHVjdHNfaW5fY2FydCAoKSB7XG4vLyAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5wcm9kdWN0c19pbl9jYXJ0O1xuICAgIC8vIH0sXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldFByb2R1Y3RCeUlkQVBJLFxuICAgICAgICBnZXRTYWxlUGVyY2VudChwcm9kdWN0KSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlSW50KChwcm9kdWN0LnNhbGVfcHJpY2UgKiAxMDApIC8gcHJvZHVjdC5wcmljZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGlzSW5DYXJ0KHByb2R1Y3RfaWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9kdWN0IGlkIGlzJywgcHJvZHVjdF9pZClcbiAgICAgICAgICAgIHZhciBpbl9jYXJ0ID0gdGhpcy4kc3RvcmUuc3RhdGUucHJvZHVjdHNfaW5fY2FydFxuICAgICAgICAgICAgdmFyIGluX2NhcnRfaWRzID0gT2JqZWN0LmtleXMoaW5fY2FydClcbiAgICAgICAgICAgIHZhciBpc19pbl9jYXJ0ID0gaW5fY2FydF9pZHMuaW5jbHVkZXMocHJvZHVjdF9pZC50b1N0cmluZygpKVxuICAgICAgICAgICAgcmV0dXJuIGlzX2luX2NhcnQ7XG4gICAgICAgIH0sXG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBcEJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPage.vue?vue&type=script&lang=js\n");

/***/ })

})