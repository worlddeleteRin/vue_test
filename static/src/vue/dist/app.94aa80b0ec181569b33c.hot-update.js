webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPage.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductPage.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.js */ \"./src/api.js\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProductPage',\n  props: ['product_id'],\n  components: {},\n  mounted: function mounted() {\n    console.log('start mouting');\n    this.getProductByIdAPI(this.product_id);\n  },\n  computed: {\n    product: function product() {\n      return this.$store.state.product;\n    }\n  },\n  methods: {\n    getProductByIdAPI: _api_js__WEBPACK_IMPORTED_MODULE_5__[\"getProductByIdAPI\"],\n    getSalePercent: function getSalePercent(product) {\n      return parseInt(product.sale_price * 100 / product.price);\n    },\n    isInCart: function isInCart(product_id) {\n      console.log('product id is here', product_id);\n      var in_cart = this.$store.state.products_in_cart;\n      var in_cart_ids = Object.keys(in_cart);\n      var is_in_cart = in_cart_ids.includes(product_id.toString());\n      return is_in_cart;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UGFnZS52dWU/OGVjNCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX3BhZ2VcIj4gXG4gICAgICAgIHt7IHByb2R1Y3QgfX1cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX21haW5fX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX21haW5fX2NvbnRhaW5lcl9faW1nXCI+XG4gICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC8nICsgcHJvZHVjdC5pbWdzcmNcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicHJvZHVjdF9fbWFpbmltYWdlX19pdGVtXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19tYWluX19jb250YWluZXJfX3NlY29uZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGludHNfX2Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2FsZV9fYmxvY2tfX2hpbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInByb2R1Y3Quc2FsZV9wcmljZSA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSB7eyBnZXRTYWxlUGVyY2VudChwcm9kdWN0KSB9fSAlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX3BhZ2VfX25hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2R1Y3QubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX21haW5fX2NvbnRhaW5lcl9fc2Vjb25kX19wcmljZWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cInByb2R1Y3Quc2FsZV9wcmljZSA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdF9fbWFpbl9fY29udGFpbmVyX19zZWNvbmRfX3NhbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9kdWN0LnNhbGVfcHJpY2UgfX0gJiM4MzgxO1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0X19tYWluX19jb250YWluZXJfX3NlY29uZF9fb2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZHVjdC5wcmljZSB9fSAmIzgzODE7XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2R1Y3RfX21haW5fX2NvbnRhaW5lcl9fc2Vjb25kX19wcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9kdWN0LnByaWNlIH19ICYjODM4MTtcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX2Vjb25vbXlcIlxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwicHJvZHVjdC5zYWxlX3ByaWNlID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0K3QutC+0L3QvtC80LjRjyB7eyBwcm9kdWN0LnByaWNlIC0gcHJvZHVjdC5zYWxlX3ByaWNlIH19ICYjODM4MTtcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19tYWluX19jb250YWluZXJfX3NlY29uZF9fYWRkY2FydFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X19ub3RfX2luX19jYXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cInRoaXMuaXNJbkNhcnQodGhpcy5wcm9kdWN0KVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdF9fcGFnZV9fYWRkY2FydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByb2R1Y3RfX2FkZGNhcnRfX2J1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCU0L7QsdCw0LLQuNGC0Ywg0LIg0LrQvtGA0LfQuNC90YNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19tYWluX19jb250YWluZXJfX3NlY29uZF9fYWRkY2FydFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X19pbl9fY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX3BhZ2VfX2FkZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2R1Y3RfZ29fdG9fY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdF9fcGFnZV9fYWRkZWRfX2ZpcnN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCSINC60L7RgNC30LjQvdC1IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInF1YW50aXR5X2luX2NhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDRiNGCLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdF9fcGFnZV9fYWRkZWRfX3NlY29uZFwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QtdGA0LXQudGC0LhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdF9fcGFnZV9fYWRkZWRfX21vcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJhZGRfcXVhbnRpdHlfYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7eyBwcm9kdWN0LmlkIH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArMSDRiNGCLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19kZXNjcmlwdGlvbl9fYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwicHJvZHVjdC5kZXNjcmlwdGlvbiAhPSAnbmFuJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5pY2VfX3RpdGxlMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCe0L/QuNGB0LDQvdC40LVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX2Rlc2NyaXB0aW9uX19ibG9ja19fZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2R1Y3QuZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQge2dldFByb2R1Y3RCeUlkQVBJfSBmcm9tICcuLi9hcGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdQcm9kdWN0UGFnZScsXG4gIHByb3BzOiBbJ3Byb2R1Y3RfaWQnXSxcbiAgY29tcG9uZW50czoge1xuICB9LFxuICBtb3VudGVkICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzdGFydCBtb3V0aW5nJylcbiAgICAgIHRoaXMuZ2V0UHJvZHVjdEJ5SWRBUEkodGhpcy5wcm9kdWN0X2lkKVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgICAgcHJvZHVjdCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUucHJvZHVjdDtcbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0UHJvZHVjdEJ5SWRBUEksXG4gICAgICAgIGdldFNhbGVQZXJjZW50KHByb2R1Y3QpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoKHByb2R1Y3Quc2FsZV9wcmljZSAqIDEwMCkgLyBwcm9kdWN0LnByaWNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNJbkNhcnQocHJvZHVjdF9pZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb2R1Y3QgaWQgaXMgaGVyZScsIHByb2R1Y3RfaWQpXG4gICAgICAgICAgICB2YXIgaW5fY2FydCA9IHRoaXMuJHN0b3JlLnN0YXRlLnByb2R1Y3RzX2luX2NhcnRcbiAgICAgICAgICAgIHZhciBpbl9jYXJ0X2lkcyA9IE9iamVjdC5rZXlzKGluX2NhcnQpXG4gICAgICAgICAgICB2YXIgaXNfaW5fY2FydCA9IGluX2NhcnRfaWRzLmluY2x1ZGVzKHByb2R1Y3RfaWQudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIHJldHVybiBpc19pbl9jYXJ0O1xuICAgICAgICB9LFxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkZBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWRBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPage.vue?vue&type=script&lang=js\n");

/***/ })

})