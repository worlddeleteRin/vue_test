webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductCard.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductCard.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Products',\n  props: {\n    product: {}\n  },\n  components: {},\n  computed: {},\n  methods: {\n    isInCart: function isInCart(product_id) {\n      var in_cart = this.$store.state.products_in_cart;\n      var in_cart_ids = Object.keys(in_cart);\n      var is_in_cart = in_cart_ids.includes(product_id.toString());\n      return is_in_cart;\n    },\n    getSalePercent: function getSalePercent(product) {\n      return parseInt(product.sale_price * 100 / product.price);\n    },\n    addToCart: function addToCart(product_id) {\n      var _this = this;\n\n      axios.get('cart/add_item_ajax', {\n        params: {\n          product_id: product_id\n        }\n      }).then(function () {\n        // var status = response.data\n        _this.$store.commit('addProductToCart', product_id);\n      });\n    },\n    deleteFromCart: function deleteFromCart(product_id) {\n      var _this2 = this;\n\n      axios.get('cart/delete_from_cart_ajax', {\n        params: {\n          product_id: product_id\n        }\n      }).then(function () {\n        // var status = response.data\n        _this2.$store.commit('deleteProductFromCart', product_id);\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC52dWU/ZTkxNSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwicHJvZHVjdF9faXRlbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19pdGVtX19pbWFnZVwiPlxuXG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX2l0ZW1fX3NhbGVfaGludFwiXG4gICAgICAgIHYtaWY9XCJwcm9kdWN0LnNhbGVfcHJpY2UgPiAwXCI+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAtIHt7IHRoaXMuZ2V0U2FsZVBlcmNlbnQocHJvZHVjdCkgfX0gJVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdF9faXRlbV9fdmVzX2hpbnRcIlxuICAgICAgICB2LWlmPVwicHJvZHVjdC52ZXMgIT0gJ25hbidcIj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICB7eyBwcm9kdWN0LnZlcyB9fSBcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGEgaHJlZj1cInslIHVybCAncHJvZHVjdHM6cHJvZHVjdCcgcHJvZHVjdC5pZCAlfVwiPlxuICAgICAgICA8aW1nIDpzcmM9XCJwcm9kdWN0LmltZ3NyY1wiIGFsdD1cIlwiPlxuICAgICAgICA8L2E+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdF9faXRlbV9faW5mb1wiPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX2l0ZW1fX3ByaWNlXCI+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJwcm9kdWN0LnNhbGVfcHJpY2UgPiAwXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0X19pdGVtX19wcmljZV9fc2FsZVwiPiBcbiAgICAgICAgICAgICAgICAgICAge3sgcHJvZHVjdC5zYWxlX3ByaWNlIH19INCgXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdF9faXRlbV9fcHJpY2VfX3JlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgcHJvZHVjdC5wcmljZSB9fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0X19pdGVtX19wcmljZV9fcmVndWxhcjJcIiB2LWVsc2U+IFxuICAgICAgICAgICAgICAgIHt7IHByb2R1Y3QucHJpY2UgfX0g0KBcbiAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGEgY2xhc3M9XCJwcm9kdWN0X19pdGVtX19uYW1lXCJcbiAgICAgICAgaHJlZj1cInslIHVybCAncHJvZHVjdHM6cHJvZHVjdCcgcHJvZHVjdC5pZCAlfVwiPlxuICAgICAgICAgICAge3sgcHJvZHVjdC5uYW1lIH19XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbjogNDAgMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0X19pdGVtX19hZGRjYXJ0XG4gICAgICAgICAgICBwcm9kdWN0X19hZGR0b2NhcnRfX2dsb2JhbFwiXG4gICAgICAgICAgICB2YWx1ZT1cInt7IHByb2R1Y3QuaWQgfX1cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluX19jYXJ0X19idXR0b25zdHlsZSBub3NlbGVjdFwiXG4gICAgICAgICAgICAgICAgdi1pZj1cInRoaXMuaXNJbkNhcnQocHJvZHVjdC5pZClcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cInRoaXMuZGVsZXRlRnJvbUNhcnQocHJvZHVjdC5pZClcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjCDRgSDQutC+0YDQt9C40L3Ri1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5vdF9faW5jYXJ0X19idXR0b25zdHlsZSBub3NlbGVjdFwiXG4gICAgICAgICAgICAgICAgdi1lbHNlXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwidGhpcy5hZGRUb0NhcnQocHJvZHVjdC5pZClcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg0JIg0LrQvtGA0LfQuNC90YNcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdQcm9kdWN0cycsXG4gIHByb3BzOiB7XG4gICAgICBwcm9kdWN0OiB7fSxcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICB9LFxuICBjb21wdXRlZDoge1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgICBpc0luQ2FydChwcm9kdWN0X2lkKSB7XG4gICAgICAgIHZhciBpbl9jYXJ0ID0gdGhpcy4kc3RvcmUuc3RhdGUucHJvZHVjdHNfaW5fY2FydFxuICAgICAgICB2YXIgaW5fY2FydF9pZHMgPSBPYmplY3Qua2V5cyhpbl9jYXJ0KVxuICAgICAgICB2YXIgaXNfaW5fY2FydCA9IGluX2NhcnRfaWRzLmluY2x1ZGVzKHByb2R1Y3RfaWQudG9TdHJpbmcoKSlcbiAgICAgICAgcmV0dXJuIGlzX2luX2NhcnQ7XG4gICAgICB9LFxuICAgICAgZ2V0U2FsZVBlcmNlbnQocHJvZHVjdCkge1xuICAgICAgICAgIHJldHVybiBwYXJzZUludCgocHJvZHVjdC5zYWxlX3ByaWNlICogMTAwKSAvIHByb2R1Y3QucHJpY2UpXG4gICAgICB9LFxuICAgICAgYWRkVG9DYXJ0KHByb2R1Y3RfaWQpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgJ2NhcnQvYWRkX2l0ZW1fYWpheCcsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdF9pZCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAvLyB2YXIgc3RhdHVzID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdhZGRQcm9kdWN0VG9DYXJ0JywgcHJvZHVjdF9pZClcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICAgZGVsZXRlRnJvbUNhcnQocHJvZHVjdF9pZCkge1xuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgICAnY2FydC9kZWxldGVfZnJvbV9jYXJ0X2FqYXgnLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfaWQ6IHByb2R1Y3RfaWQsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gdmFyIHN0YXR1cyA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnZGVsZXRlUHJvZHVjdEZyb21DYXJ0JywgcHJvZHVjdF9pZClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQXdFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBakNBO0FBVEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductCard.vue?vue&type=script&lang=js\n");

/***/ })

})