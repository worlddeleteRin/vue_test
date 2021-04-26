webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/TreeItem.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/TreeItem.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'TreeItem',\n  props: ['item'],\n  data: function data() {\n    return {\n      isOpen: false,\n      isActive: false\n    };\n  },\n  methods: {\n    toggle: function toggle() {\n      this.isOpen ? this.doClose() : this.doOpen();\n    },\n    doClose: function doClose() {\n      this.$refs.variations.forEach(function (variation) {\n        variation.doClose();\n      });\n      this.isOpen = false;\n    },\n    doOpen: function doOpen() {\n      this.isOpen = true;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9UcmVlSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmVlSXRlbS52dWU/ZGI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHNwYW4+XG4gICAgPGRpdlxuICAgIEBjbGljaz1cInRoaXMudG9nZ2xlXCJcbiAgICA6Y2xhc3M9XCJ7cmVkOiBpc0FjdGl2ZX1cIlxuICAgID5cbiAgICAgICAge3sgaXRlbS5uYW1lIH19IFxuICAgIDwvZGl2PlxuICAgIDx1bCB2LXNob3c9XCJpc09wZW5cIj5cbiAgICA8VHJlZUl0ZW1cbiAgICB2LWZvcj1cIihjaGlsZCwgaW5kZXgpIGluIGl0ZW0udmFyaWF0aW9uc1wiXG4gICAgdi1iaW5kOmtleT1cImluZGV4XCJcbiAgICB2LWJpbmQ6aXRlbT1cImNoaWxkXCJcbiAgICA+XG4gICAgPC9UcmVlSXRlbT5cbiAgICA8L3VsPlxuICAgIDwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0ICB7XG4gICAgbmFtZTogJ1RyZWVJdGVtJyxcbiAgICBwcm9wczogWydpdGVtJ10sXG4gICAgZGF0YSAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdG9nZ2xlKCkge1xuICAgICAgICAgICAgdGhpcy5pc09wZW4/IHRoaXMuZG9DbG9zZSgpOiB0aGlzLmRvT3BlbigpO1xuICAgICAgICB9LFxuICAgICAgICBkb0Nsb3NlKCkge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy52YXJpYXRpb25zLmZvckVhY2goKHZhcmlhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHZhcmlhdGlvbi5kb0Nsb3NlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGRvT3BlbigpIHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuIl0sIm1hcHBpbmdzIjoiOzs7O0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFUQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/TreeItem.vue?vue&type=script&lang=js\n");

/***/ })

})