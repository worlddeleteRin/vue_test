webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductCard.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductCard.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api.js */ \"./src/api.js\");\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Products',\n  props: {\n    product: {}\n  },\n  components: {},\n  computed: {},\n  methods: {\n    addToCart: _api_js__WEBPACK_IMPORTED_MODULE_7__[\"addToCart\"],\n    deleteFromCart: _api_js__WEBPACK_IMPORTED_MODULE_7__[\"deleteFromCart\"],\n    getCartAmount: _api_js__WEBPACK_IMPORTED_MODULE_7__[\"getCartAmount\"],\n    addToCartClicked: function addToCartClicked(product_id) {\n      var _this = this;\n\n      return Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                console.log('start adding to cart');\n                _context.next = 3;\n                return _this.addToCart(product_id);\n\n              case 3:\n                _context.next = 5;\n                return _this.getCartAmount();\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    deleteFromCartClicked: function deleteFromCartClicked(product_id) {\n      var _this2 = this;\n\n      return Object(_Users_noname_learn_vue_vuetest_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return _this2.deleteFromCart(product_id);\n\n              case 2:\n                _context2.next = 4;\n                return _this2.getCartAmount();\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    },\n    isInCart: function isInCart(product_id) {\n      var in_cart = this.$store.state.products_in_cart;\n      var in_cart_ids = Object.keys(in_cart);\n      var is_in_cart = in_cart_ids.includes(product_id.toString());\n      return is_in_cart;\n    },\n    getSalePercent: function getSalePercent(product) {\n      return parseInt(product.sale_price * 100 / product.price);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC52dWU/ZTkxNSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwicHJvZHVjdF9faXRlbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19pdGVtX19pbWFnZVwiPlxuXG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX2l0ZW1fX3NhbGVfaGludFwiXG4gICAgICAgIHYtaWY9XCJwcm9kdWN0LnNhbGVfcHJpY2UgPiAwXCI+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAtIHt7IHRoaXMuZ2V0U2FsZVBlcmNlbnQocHJvZHVjdCkgfX0gJVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdF9faXRlbV9fdmVzX2hpbnRcIlxuICAgICAgICB2LWlmPVwicHJvZHVjdC52ZXMgIT0gJ25hbidcIj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICB7eyBwcm9kdWN0LnZlcyB9fSBcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHJvdXRlci1saW5rIHYtYmluZDp0bz1cIicvcHJvZHVjdC8nK3Byb2R1Y3QuaWRcIj5cbiAgICAgICAgPGltZyA6c3JjPVwiJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC8nICtwcm9kdWN0LmltZ3NyY1wiIGFsdD1cIlwiPlxuICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX2l0ZW1fX2luZm9cIj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19pdGVtX19wcmljZVwiPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwicHJvZHVjdC5zYWxlX3ByaWNlID4gMFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdF9faXRlbV9fcHJpY2VfX3NhbGVcIj4gXG4gICAgICAgICAgICAgICAgICAgIHt7IHByb2R1Y3Quc2FsZV9wcmljZSB9fSDQoFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2R1Y3RfX2l0ZW1fX3ByaWNlX19yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHByb2R1Y3QucHJpY2UgfX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdF9faXRlbV9fcHJpY2VfX3JlZ3VsYXIyXCIgdi1lbHNlPiBcbiAgICAgICAgICAgICAgICB7eyBwcm9kdWN0LnByaWNlIH19INCgXG4gICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhIGNsYXNzPVwicHJvZHVjdF9faXRlbV9fbmFtZVwiXG4gICAgICAgIGhyZWY9XCJ7JSB1cmwgJ3Byb2R1Y3RzOnByb2R1Y3QnIHByb2R1Y3QuaWQgJX1cIj5cbiAgICAgICAgICAgIHt7IHByb2R1Y3QubmFtZSB9fVxuICAgICAgICA8L2E+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW46IDQwIDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdF9faXRlbV9fYWRkY2FydFxuICAgICAgICAgICAgcHJvZHVjdF9fYWRkdG9jYXJ0X19nbG9iYWxcIlxuICAgICAgICAgICAgdmFsdWU9XCJ7eyBwcm9kdWN0LmlkIH19XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbl9fY2FydF9fYnV0dG9uc3R5bGUgbm9zZWxlY3RcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJ0aGlzLmlzSW5DYXJ0KHByb2R1Y3QuaWQpXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJ0aGlzLmRlbGV0ZUZyb21DYXJ0Q2xpY2tlZChwcm9kdWN0LmlkKVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMINGBINC60L7RgNC30LjQvdGLXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibm90X19pbmNhcnRfX2J1dHRvbnN0eWxlIG5vc2VsZWN0XCJcbiAgICAgICAgICAgICAgICB2LWVsc2VcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJ0aGlzLmFkZFRvQ2FydENsaWNrZWQocHJvZHVjdC5pZClcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg0JIg0LrQvtGA0LfQuNC90YNcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHthZGRUb0NhcnQsIGRlbGV0ZUZyb21DYXJ0LCBnZXRDYXJ0QW1vdW50fSBmcm9tICcuLi9hcGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdQcm9kdWN0cycsXG4gIHByb3BzOiB7XG4gICAgICBwcm9kdWN0OiB7fSxcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICB9LFxuICBjb21wdXRlZDoge1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgICBhZGRUb0NhcnQsXG4gICAgICBkZWxldGVGcm9tQ2FydCxcbiAgICAgIGdldENhcnRBbW91bnQsXG4gICAgICBhc3luYyBhZGRUb0NhcnRDbGlja2VkKHByb2R1Y3RfaWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc3RhcnQgYWRkaW5nIHRvIGNhcnQnKVxuICAgICAgICAgIGF3YWl0IHRoaXMuYWRkVG9DYXJ0KHByb2R1Y3RfaWQpO1xuICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0Q2FydEFtb3VudCgpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jIGRlbGV0ZUZyb21DYXJ0Q2xpY2tlZChwcm9kdWN0X2lkKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5kZWxldGVGcm9tQ2FydChwcm9kdWN0X2lkKTtcbiAgICAgICAgICBhd2FpdCB0aGlzLmdldENhcnRBbW91bnQoKTtcbiAgICAgIH0sXG4gICAgICBpc0luQ2FydChwcm9kdWN0X2lkKSB7XG4gICAgICAgIHZhciBpbl9jYXJ0ID0gdGhpcy4kc3RvcmUuc3RhdGUucHJvZHVjdHNfaW5fY2FydFxuICAgICAgICB2YXIgaW5fY2FydF9pZHMgPSBPYmplY3Qua2V5cyhpbl9jYXJ0KVxuICAgICAgICB2YXIgaXNfaW5fY2FydCA9IGluX2NhcnRfaWRzLmluY2x1ZGVzKHByb2R1Y3RfaWQudG9TdHJpbmcoKSlcbiAgICAgICAgcmV0dXJuIGlzX2luX2NhcnQ7XG4gICAgICB9LFxuICAgICAgZ2V0U2FsZVBlcmNlbnQocHJvZHVjdCkge1xuICAgICAgICAgIHJldHVybiBwYXJzZUludCgocHJvZHVjdC5zYWxlX3ByaWNlICogMTAwKSAvIHByb2R1Y3QucHJpY2UpXG4gICAgICB9LFxuICB9XG59XG48L3NjcmlwdD5cblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUFUQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductCard.vue?vue&type=script&lang=js\n");

/***/ })

})