webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProductCard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProductCard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProductCard',\n  props: ['product'],\n  //   data () {\n  //       return {\n  //       }\n  //   },\n  computed: {\n    productsInCart: function productsInCart() {\n      return this.$store.getters.products_in_cart;\n    }\n  },\n  methods: {\n    isInCart: function isInCart(id) {\n      var in_cart_ids = Object.keys(this.productsInCart);\n      var includes = in_cart_ids.includes(id.toString());\n      console.log(includes);\n\n      if (includes) {\n        return true;\n      } else {\n        return false;\n      }\n    },\n    addToCart: function addToCart(product_id) {\n      console.log('call add to cart method');\n      console.log('product id is', product_id);\n      axios__WEBPACK_IMPORTED_MODULE_5___default()({\n        method: 'get',\n        url: 'http://127.0.0.1:8000/cart/add_item_ajax?' + 'product_id=' + product_id\n      }).then(function (response) {\n        if (response.status == 200) {\n          return null;\n        }\n      });\n      this.$store.dispatch('addProductToCart', product_id);\n      console.log('products in cart are', this.productsInCart);\n    },\n    deleteFromCart: function deleteFromCart(product_id) {\n      console.log('call delete from cart method');\n      console.log('product id is', product_id);\n      axios__WEBPACK_IMPORTED_MODULE_5___default()({\n        method: 'get',\n        url: 'http://127.0.0.1:8000/cart/delete_from_cart_ajax?' + 'product_id=' + product_id\n      }).then(function (response) {\n        return console.log(response);\n      });\n      this.$store.dispatch('deleteProductFromCart', product_id);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdENhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Qcm9kdWN0Q2FyZC52dWU/YTNmZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cbjxkaXYgY2xhc3M9XCJwcm9kdWN0X19pdGVtXCI+XG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX2l0ZW1fX2ltYWdlXCI+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IFxuICAgICAgICB2LWlmPVwicHJvZHVjdC5zYWxlX3ByaWNlID4gMFwiXG4gICAgICAgIGNsYXNzPVwicHJvZHVjdF9faXRlbV9fc2FsZV9oaW50XCI+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAtIHt7IHByb2R1Y3QuZGlzY291bnRfcGVyYyB9fSAlXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgXG4gICAgICAgIHYtaWY9XCJwcm9kdWN0LnZlcyAhPSAnbmFuJ1wiXG4gICAgICAgIGNsYXNzPVwicHJvZHVjdF9faXRlbV9fdmVzX2hpbnRcIj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICB7eyBwcm9kdWN0LnZlcyB9fSBcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGEgaHJlZj1cInslIHVybCAncHJvZHVjdHM6cHJvZHVjdCcgcHJvZHVjdC5pZCAlfVwiPlxuICAgICAgICA8aW1nIDpzcmM9XCJwcm9kdWN0LmltZ3NyY1wiIGFsdD1cIlwiPlxuICAgICAgICA8L2E+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdF9faXRlbV9faW5mb1wiPlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgIHYtaWY9XCJwcm9kdWN0LnNhbGVfcHJpY2UgPiAwXCIgICAgICAgIFxuICAgICAgICAgY2xhc3M9XCJwcm9kdWN0X19pdGVtX19wcmljZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0X19pdGVtX19wcmljZV9fc2FsZVwiPiBcbiAgICAgICAgICAgICAgICB7eyBwcm9kdWN0LnNhbGVfcHJpY2UgfX0g0KBcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdF9faXRlbV9fcHJpY2VfX3JlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICB7eyBwcm9kdWN0LnByaWNlIH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2R1Y3RfX2l0ZW1fX3ByaWNlX19yZWd1bGFyMlwiPiBcbiAgICAgICAgICAgICAgICB7eyBwcm9kdWN0LnByaWNlIH19INCgXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YSBjbGFzcz1cInByb2R1Y3RfX2l0ZW1fX25hbWVcIlxuICAgICAgICBocmVmPVwieyUgdXJsICdwcm9kdWN0czpwcm9kdWN0JyBwcm9kdWN0LmlkICV9XCI+XG4gICAgICAgICAgICB7eyBwcm9kdWN0c0luQ2FydCB9fVxuICAgICAgICAgICAge3sgcHJvZHVjdC5uYW1lIH19XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbjogNDAgMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0X19pdGVtX19hZGRjYXJ0XG4gICAgICAgICAgICBwcm9kdWN0X19hZGR0b2NhcnRfX2dsb2JhbFwiXG4gICAgICAgICAgICA6dmFsdWU9XCJwcm9kdWN0LmlkXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gXG4gICAgICAgICAgICAgICAgdi1pZj1cInRoaXMuaXNJbkNhcnQocHJvZHVjdC5pZClcIiBcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJkZWxldGVGcm9tQ2FydChwcm9kdWN0LmlkKVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbl9fY2FydF9fYnV0dG9uc3R5bGUgbm9zZWxlY3RcIj5cbiAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjCDRgSDQutC+0YDQt9C40L3Ri1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIHYtZWxzZVxuICAgICAgICAgICAgICAgIEBjbGljaz1cImFkZFRvQ2FydChwcm9kdWN0LmlkKVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJub3RfX2luY2FydF9fYnV0dG9uc3R5bGUgbm9zZWxlY3RcIj5cbiAgICAgICAgICAgICAgICAgICAg0JIg0LrQvtGA0LfQuNC90YNcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnUHJvZHVjdENhcmQnLFxuICBwcm9wczogWydwcm9kdWN0J10sXG4vLyAgIGRhdGEgKCkge1xuLy8gICAgICAgcmV0dXJuIHtcbi8vICAgICAgIH1cbi8vICAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAgIHByb2R1Y3RzSW5DYXJ0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5wcm9kdWN0c19pbl9jYXJ0O1xuICAgICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgICBpc0luQ2FydChpZCkge1xuICAgICAgICAgIHZhciBpbl9jYXJ0X2lkcyA9IE9iamVjdC5rZXlzKHRoaXMucHJvZHVjdHNJbkNhcnQpXG4gICAgICAgICAgdmFyIGluY2x1ZGVzID0gaW5fY2FydF9pZHMuaW5jbHVkZXMoaWQudG9TdHJpbmcoKSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhpbmNsdWRlcylcbiAgICAgICAgICBpZiAoaW5jbHVkZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhZGRUb0NhcnQocHJvZHVjdF9pZCkge1xuICAgICAgIGNvbnNvbGUubG9nKCdjYWxsIGFkZCB0byBjYXJ0IG1ldGhvZCcpOyAgIFxuICAgICAgIGNvbnNvbGUubG9nKCdwcm9kdWN0IGlkIGlzJywgcHJvZHVjdF9pZCk7ICAgXG4gICAgICAgIGF4aW9zKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvY2FydC9hZGRfaXRlbV9hamF4PycgKyBcbiAgICAgICAgICAgICdwcm9kdWN0X2lkPScrcHJvZHVjdF9pZCxcbiAgICAgICAgfSkudGhlbiggZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgIFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYWRkUHJvZHVjdFRvQ2FydCcsIHByb2R1Y3RfaWQpO1xuICAgICAgICBjb25zb2xlLmxvZygncHJvZHVjdHMgaW4gY2FydCBhcmUnLCB0aGlzLnByb2R1Y3RzSW5DYXJ0KVxuICAgICAgfSxcbiAgICAgIGRlbGV0ZUZyb21DYXJ0KHByb2R1Y3RfaWQpIHtcbiAgICAgICBjb25zb2xlLmxvZygnY2FsbCBkZWxldGUgZnJvbSBjYXJ0IG1ldGhvZCcpOyAgIFxuICAgICAgIGNvbnNvbGUubG9nKCdwcm9kdWN0IGlkIGlzJywgcHJvZHVjdF9pZCk7ICAgXG4gICAgICAgIGF4aW9zKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvY2FydC9kZWxldGVfZnJvbV9jYXJ0X2FqYXg/JyArIFxuICAgICAgICAgICAgJ3Byb2R1Y3RfaWQ9Jytwcm9kdWN0X2lkLFxuICAgICAgICB9KS50aGVuKCByZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpICBcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2RlbGV0ZVByb2R1Y3RGcm9tQ2FydCcsIHByb2R1Y3RfaWQpO1xuICAgICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBbkNBO0FBWkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProductCard.vue?vue&type=script&lang=js&\n");

/***/ })

})