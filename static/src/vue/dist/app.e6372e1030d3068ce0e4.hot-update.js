webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductCard.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductCard.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api.js */ \"./src/api.js\");\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Products',\n  props: {\n    product: {}\n  },\n  components: {},\n  computed: {},\n  methods: {\n    addToCart: _api_js__WEBPACK_IMPORTED_MODULE_7__[\"addToCart\"],\n    deleteFromCart: _api_js__WEBPACK_IMPORTED_MODULE_7__[\"deleteFromCart\"],\n    getCartAmount: _api_js__WEBPACK_IMPORTED_MODULE_7__[\"getCartAmount\"],\n    addToCartClicked: function addToCartClicked(product_id) {\n      var _this = this;\n\n      return Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return _this.addToCart(product_id);\n\n              case 2:\n                _context.next = 4;\n                return _this.getCartAmount();\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    deleteFromCartClicked: function deleteFromCartClicked(product_id) {\n      var _this2 = this;\n\n      return Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return _this2.deleteFromCart(product_id);\n\n              case 2:\n                _context2.next = 4;\n                return _this2.getCartAmount();\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    },\n    isInCart: function isInCart(product_id) {\n      var in_cart = this.$store.state.products_in_cart;\n      var in_cart_ids = Object.keys(in_cart);\n      var is_in_cart = in_cart_ids.includes(product_id.toString());\n      return is_in_cart;\n    },\n    getSalePercent: function getSalePercent(product) {\n      return parseInt(product.sale_price * 100 / product.price);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC52dWU/ZTkxNSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwicHJvZHVjdF9faXRlbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19pdGVtX19pbWFnZVwiPlxuXG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX2l0ZW1fX3NhbGVfaGludFwiXG4gICAgICAgIHYtaWY9XCJwcm9kdWN0LnNhbGVfcHJpY2UgPiAwXCI+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAtIHt7IHRoaXMuZ2V0U2FsZVBlcmNlbnQocHJvZHVjdCkgfX0gJVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdF9faXRlbV9fdmVzX2hpbnRcIlxuICAgICAgICB2LWlmPVwicHJvZHVjdC52ZXMgIT0gJ25hbidcIj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICB7eyBwcm9kdWN0LnZlcyB9fSBcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGEgaHJlZj1cInslIHVybCAncHJvZHVjdHM6cHJvZHVjdCcgcHJvZHVjdC5pZCAlfVwiPlxuICAgICAgICA8aW1nIDpzcmM9XCJwcm9kdWN0LmltZ3NyY1wiIGFsdD1cIlwiPlxuICAgICAgICA8L2E+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdF9faXRlbV9faW5mb1wiPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX2l0ZW1fX3ByaWNlXCI+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJwcm9kdWN0LnNhbGVfcHJpY2UgPiAwXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0X19pdGVtX19wcmljZV9fc2FsZVwiPiBcbiAgICAgICAgICAgICAgICAgICAge3sgcHJvZHVjdC5zYWxlX3ByaWNlIH19INCgXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdF9faXRlbV9fcHJpY2VfX3JlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgcHJvZHVjdC5wcmljZSB9fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0X19pdGVtX19wcmljZV9fcmVndWxhcjJcIiB2LWVsc2U+IFxuICAgICAgICAgICAgICAgIHt7IHByb2R1Y3QucHJpY2UgfX0g0KBcbiAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGEgY2xhc3M9XCJwcm9kdWN0X19pdGVtX19uYW1lXCJcbiAgICAgICAgaHJlZj1cInslIHVybCAncHJvZHVjdHM6cHJvZHVjdCcgcHJvZHVjdC5pZCAlfVwiPlxuICAgICAgICAgICAge3sgcHJvZHVjdC5uYW1lIH19XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbjogNDAgMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0X19pdGVtX19hZGRjYXJ0XG4gICAgICAgICAgICBwcm9kdWN0X19hZGR0b2NhcnRfX2dsb2JhbFwiXG4gICAgICAgICAgICB2YWx1ZT1cInt7IHByb2R1Y3QuaWQgfX1cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluX19jYXJ0X19idXR0b25zdHlsZSBub3NlbGVjdFwiXG4gICAgICAgICAgICAgICAgdi1pZj1cInRoaXMuaXNJbkNhcnQocHJvZHVjdC5pZClcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cInRoaXMuZGVsZXRlRnJvbUNhcnRDbGlja2VkKHByb2R1Y3QuaWQpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0Ywg0YEg0LrQvtGA0LfQuNC90YtcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJub3RfX2luY2FydF9fYnV0dG9uc3R5bGUgbm9zZWxlY3RcIlxuICAgICAgICAgICAgICAgIHYtZWxzZVxuICAgICAgICAgICAgICAgIEBjbGljaz1cInRoaXMuYWRkVG9DYXJ0Q2xpY2tlZChwcm9kdWN0LmlkKVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICDQkiDQutC+0YDQt9C40L3Rg1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQge2FkZFRvQ2FydCwgZGVsZXRlRnJvbUNhcnQsIGdldENhcnRBbW91bnR9IGZyb20gJy4uL2FwaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1Byb2R1Y3RzJyxcbiAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3Q6IHt9LFxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAgIGFkZFRvQ2FydCxcbiAgICAgIGRlbGV0ZUZyb21DYXJ0LFxuICAgICAgZ2V0Q2FydEFtb3VudCxcbiAgICAgIGFzeW5jIGFkZFRvQ2FydENsaWNrZWQocHJvZHVjdF9pZCkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuYWRkVG9DYXJ0KHByb2R1Y3RfaWQpO1xuICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0Q2FydEFtb3VudCgpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jIGRlbGV0ZUZyb21DYXJ0Q2xpY2tlZChwcm9kdWN0X2lkKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5kZWxldGVGcm9tQ2FydChwcm9kdWN0X2lkKTtcbiAgICAgICAgICBhd2FpdCB0aGlzLmdldENhcnRBbW91bnQoKVxuICAgICAgfSxcbiAgICAgIGlzSW5DYXJ0KHByb2R1Y3RfaWQpIHtcbiAgICAgICAgdmFyIGluX2NhcnQgPSB0aGlzLiRzdG9yZS5zdGF0ZS5wcm9kdWN0c19pbl9jYXJ0XG4gICAgICAgIHZhciBpbl9jYXJ0X2lkcyA9IE9iamVjdC5rZXlzKGluX2NhcnQpXG4gICAgICAgIHZhciBpc19pbl9jYXJ0ID0gaW5fY2FydF9pZHMuaW5jbHVkZXMocHJvZHVjdF9pZC50b1N0cmluZygpKVxuICAgICAgICByZXR1cm4gaXNfaW5fY2FydDtcbiAgICAgIH0sXG4gICAgICBnZXRTYWxlUGVyY2VudChwcm9kdWN0KSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlSW50KChwcm9kdWN0LnNhbGVfcHJpY2UgKiAxMDApIC8gcHJvZHVjdC5wcmljZSlcbiAgICAgIH0sXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1RUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7QUFUQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductCard.vue?vue&type=script&lang=js\n");

/***/ })

})