webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPage.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductPage.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api.js */ \"./src/api.js\");\n/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums.js */ \"./src/enums.js\");\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProductPage',\n  props: ['product_id'],\n  components: {},\n  mounted: function mounted() {\n    var _this = this;\n\n    return Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log('start mouting');\n              _context.next = 3;\n              return _this.getProductByIdAPI(_this.product_id);\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  },\n  computed: {\n    product: function product() {\n      return this.$store.state.product;\n    },\n    apiState: function apiState() {\n      return this.$store.state.apiState;\n    }\n  },\n  methods: {\n    getProductByIdAPI: _api_js__WEBPACK_IMPORTED_MODULE_7__[\"getProductByIdAPI\"],\n    addToCart: addToCart,\n    addToCartClicked: function addToCartClicked(product_id) {\n      var _this2 = this;\n\n      return Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                console.log('start adding to cart');\n                _context2.next = 3;\n                return _this2.addToCart(product_id);\n\n              case 3:\n                _context2.next = 5;\n                return _this2.getCartAmount();\n\n              case 5:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    },\n    getSalePercent: function getSalePercent(product) {\n      return parseInt(product.sale_price * 100 / product.price);\n    },\n    isInCart: function isInCart(product_id) {\n      console.log('product id is here', product_id);\n      var in_cart = this.$store.state.products_in_cart;\n      var in_cart_ids = Object.keys(in_cart);\n      var is_in_cart = in_cart_ids.includes(product_id.toString());\n      return is_in_cart;\n    },\n    apiStateLoaded: function apiStateLoaded() {\n      return this.apiState === _enums_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"].LOADED;\n    },\n    apiStateLoading: function apiStateLoading() {\n      return this.apiState === _enums_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"].LOADING || this.apiState === _enums_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"].INIT;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UGFnZS52dWU/OGVjNCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX3BhZ2VcIlxuICAgIHYtaWY9XCJ0aGlzLmFwaVN0YXRlTG9hZGVkKClcIj4gXG4gICAgICAgIHt7IHByb2R1Y3QgfX1cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX21haW5fX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX21haW5fX2NvbnRhaW5lcl9faW1nXCI+XG4gICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC8nICsgcHJvZHVjdC5pbWdzcmNcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicHJvZHVjdF9fbWFpbmltYWdlX19pdGVtXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19tYWluX19jb250YWluZXJfX3NlY29uZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGludHNfX2Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2FsZV9fYmxvY2tfX2hpbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInByb2R1Y3Quc2FsZV9wcmljZSA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSB7eyBnZXRTYWxlUGVyY2VudChwcm9kdWN0KSB9fSAlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX3BhZ2VfX25hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2R1Y3QubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX21haW5fX2NvbnRhaW5lcl9fc2Vjb25kX19wcmljZWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cInByb2R1Y3Quc2FsZV9wcmljZSA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdF9fbWFpbl9fY29udGFpbmVyX19zZWNvbmRfX3NhbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9kdWN0LnNhbGVfcHJpY2UgfX0gJiM4MzgxO1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0X19tYWluX19jb250YWluZXJfX3NlY29uZF9fb2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZHVjdC5wcmljZSB9fSAmIzgzODE7XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2R1Y3RfX21haW5fX2NvbnRhaW5lcl9fc2Vjb25kX19wcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9kdWN0LnByaWNlIH19ICYjODM4MTtcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX2Vjb25vbXlcIlxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwicHJvZHVjdC5zYWxlX3ByaWNlID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0K3QutC+0L3QvtC80LjRjyB7eyBwcm9kdWN0LnByaWNlIC0gcHJvZHVjdC5zYWxlX3ByaWNlIH19ICYjODM4MTtcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19tYWluX19jb250YWluZXJfX3NlY29uZF9fYWRkY2FydFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X19ub3RfX2luX19jYXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cIiF0aGlzLmlzSW5DYXJ0KHRoaXMucHJvZHVjdC5pZClcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2R1Y3RfX3BhZ2VfX2FkZGNhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcm9kdWN0X19hZGRjYXJ0X19idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidGhpcy5hZGRUb0NhcnRDbGlja2VkKHByb2R1Y3QuaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0JTQvtCx0LDQstC40YLRjCDQsiDQutC+0YDQt9C40L3Rg1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX21haW5fX2NvbnRhaW5lcl9fc2Vjb25kX19hZGRjYXJ0XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfX2luX19jYXJ0XCIgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL2NhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19wYWdlX19hZGRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9kdWN0X2dvX3RvX2NhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2R1Y3RfX3BhZ2VfX2FkZGVkX19maXJzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQkiDQutC+0YDQt9C40L3QtSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJxdWFudGl0eV9pbl9jYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0YjRgi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2R1Y3RfX3BhZ2VfX2FkZGVkX19zZWNvbmRcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0LXRgNC10LnRgtC4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19wYWdlX19hZGRlZF9fbW9yZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImFkZF9xdWFudGl0eV9idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7IHByb2R1Y3QuaWQgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsxINGI0YIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX2Rlc2NyaXB0aW9uX19ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwcm9kdWN0LmRlc2NyaXB0aW9uICE9ICduYW4nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmljZV9fdGl0bGUxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0J7Qv9C40YHQsNC90LjQtVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdF9fZGVzY3JpcHRpb25fX2Jsb2NrX19kZXNjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZHVjdC5kZXNjcmlwdGlvbiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7Z2V0UHJvZHVjdEJ5SWRBUEksIGFkZGRUb0NhcnR9IGZyb20gJy4uL2FwaS5qcyc7XG5pbXBvcnQgRU5VTSBmcm9tICcuLi9lbnVtcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1Byb2R1Y3RQYWdlJyxcbiAgcHJvcHM6IFsncHJvZHVjdF9pZCddLFxuICBcbiAgY29tcG9uZW50czoge1xuICB9LFxuICBhc3luYyBtb3VudGVkICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzdGFydCBtb3V0aW5nJylcbiAgICAgIGF3YWl0IHRoaXMuZ2V0UHJvZHVjdEJ5SWRBUEkodGhpcy5wcm9kdWN0X2lkKVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgICAgcHJvZHVjdCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUucHJvZHVjdDtcbiAgICAgIH0sXG4gICAgICBhcGlTdGF0ZSgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuYXBpU3RhdGVcbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0UHJvZHVjdEJ5SWRBUEksXG4gICAgICAgIGFkZFRvQ2FydCxcbiAgICAgICAgYXN5bmMgYWRkVG9DYXJ0Q2xpY2tlZChwcm9kdWN0X2lkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RhcnQgYWRkaW5nIHRvIGNhcnQnKVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5hZGRUb0NhcnQocHJvZHVjdF9pZCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdldENhcnRBbW91bnQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0U2FsZVBlcmNlbnQocHJvZHVjdCkge1xuICAgICAgICAgIHJldHVybiBwYXJzZUludCgocHJvZHVjdC5zYWxlX3ByaWNlICogMTAwKSAvIHByb2R1Y3QucHJpY2UpO1xuICAgICAgICB9LFxuICAgICAgICBpc0luQ2FydChwcm9kdWN0X2lkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJvZHVjdCBpZCBpcyBoZXJlJywgcHJvZHVjdF9pZClcbiAgICAgICAgICAgIHZhciBpbl9jYXJ0ID0gdGhpcy4kc3RvcmUuc3RhdGUucHJvZHVjdHNfaW5fY2FydFxuICAgICAgICAgICAgdmFyIGluX2NhcnRfaWRzID0gT2JqZWN0LmtleXMoaW5fY2FydClcbiAgICAgICAgICAgIHZhciBpc19pbl9jYXJ0ID0gaW5fY2FydF9pZHMuaW5jbHVkZXMocHJvZHVjdF9pZC50b1N0cmluZygpKVxuICAgICAgICAgICAgcmV0dXJuIGlzX2luX2NhcnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGFwaVN0YXRlTG9hZGVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBpU3RhdGUgPT09IEVOVU0uTE9BREVEO1xuICAgICAgICB9LFxuICAgICAgICBhcGlTdGF0ZUxvYWRpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcGlTdGF0ZSA9PT0gRU5VTS5MT0FESU5HIHx8IHRoaXMuYXBpU3RhdGUgPT09IEVOVU0uSU5JVDtcbiAgICAgICAgfSxcbiAgICB9LFxufVxuPC9zY3JpcHQ+XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErRkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZCQTtBQWxCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPage.vue?vue&type=script&lang=js\n");

/***/ })

})