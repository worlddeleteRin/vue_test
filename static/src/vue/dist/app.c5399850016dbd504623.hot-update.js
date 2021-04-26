webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/App.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Products_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Products.vue */ \"./src/components/Products.vue\");\n/* harmony import */ var _components_Products_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_Products_vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  components: {\n    Products: _components_Products_vue__WEBPACK_IMPORTED_MODULE_0___default.a\n  },\n  mounted: function mounted() {\n    this.getProducts();\n  },\n  methods: {\n    getProducts: function getProducts() {\n      var _this = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/get_api').then(function (response) {\n        var products = response.data.products;\n\n        _this.$store.commit('setProducts', products);\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9BcHAudnVlPzNkZmQiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8UHJvZHVjdHMgLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi9jb21wb25lbnRzL1Byb2R1Y3RzLnZ1ZSdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnQXBwJyxcbiAgY29tcG9uZW50czoge1xuICAgIFByb2R1Y3RzXG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuZ2V0UHJvZHVjdHMoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldFByb2R1Y3RzKCkge1xuICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAnL2dldF9hcGknLFxuICAgICAgKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB2YXIgcHJvZHVjdHMgPSByZXNwb25zZS5kYXRhLnByb2R1Y3RzO1xuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldFByb2R1Y3RzJywgcHJvZHVjdHMpXG4gICAgICB9KVxuICAgIH1cbiAgfSxcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4jYXBwIHtcbiAgZm9udC1mYW1pbHk6IEF2ZW5pciwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiQUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBUkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductCard.vue?vue&type=script&lang=js":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Products.vue?vue&type=script&lang=js":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductCard.vue?vue&type=template&id=0afcf9c2":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Products.vue?vue&type=template&id=65549f94":
false,

/***/ "./src/components/ProductCard.vue":
false,

/***/ "./src/components/ProductCard.vue?vue&type=script&lang=js":
false,

/***/ "./src/components/ProductCard.vue?vue&type=template&id=0afcf9c2":
false,

/***/ "./src/components/Products.vue":
/*!*************************************!*\
  !*** ./src/components/Products.vue ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0cy52dWUuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Products.vue\n");

/***/ }),

/***/ "./src/components/Products.vue?vue&type=script&lang=js":
false,

/***/ "./src/components/Products.vue?vue&type=template&id=65549f94":
false

})