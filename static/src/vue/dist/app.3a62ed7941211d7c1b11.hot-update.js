webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/TreeItem.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/TreeItem.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'TreeItem',\n  props: ['item'],\n  data: function data() {\n    return {\n      isOpen: false,\n      isActive: false\n    };\n  },\n  methods: {\n    toggle: function toggle() {\n      this.isOpen ? this.doClose() : this.doOpen();\n    },\n    doClose: function doClose() {\n      console.log('this is', this.item); // if (this.item.product_type == 'variative') {\n\n      console.log('this refs are', this.$refs); // Array.prototype.forEach.call(this.$refs.children, child => { \n      //     child.doClose()\n      // });\n\n      this.$refs.children.forEach(function (c) {\n        c.doClose();\n      });\n      this.isOpen = false;\n      console.log('closed it'); // }\n    },\n    doOpen: function doOpen() {\n      this.isOpen = true;\n      this.isActive = true;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9UcmVlSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmVlSXRlbS52dWU/ZGI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHNwYW4+XG4gICAgPGRpdlxuICAgIEBjbGljaz1cInRoaXMudG9nZ2xlXCJcbiAgICA6Y2xhc3M9XCJ7cmVkOiBpc0FjdGl2ZX1cIlxuICAgID5cbiAgICAgICAge3sgaXRlbS5uYW1lIH19IFxuICAgIDwvZGl2PlxuICAgIDx1bCB2LXNob3c9XCJpc09wZW5cIj5cbiAgICA8VHJlZUl0ZW0gcmVmPVwiY2hpbGRyZW5cIlxuICAgIHYtZm9yPVwiKGNoaWxkLCBpbmRleCkgaW4gaXRlbS52YXJpYXRpb25zXCJcbiAgICB2LWJpbmQ6a2V5PVwiaW5kZXhcIlxuICAgIHYtYmluZDppdGVtPVwiY2hpbGRcIlxuICAgID5cbiAgICA8L1RyZWVJdGVtPlxuICAgIDwvdWw+XG4gICAgPC9zcGFuPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQgIHtcbiAgICBuYW1lOiAnVHJlZUl0ZW0nLFxuICAgIHByb3BzOiBbJ2l0ZW0nXSxcbiAgICBkYXRhICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICB0b2dnbGUoKSB7XG4gICAgICAgICAgICB0aGlzLmlzT3Blbj8gdGhpcy5kb0Nsb3NlKCk6IHRoaXMuZG9PcGVuKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGRvQ2xvc2UgKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMnLCB0aGlzLml0ZW0pO1xuICAgICAgICAgICAgLy8gaWYgKHRoaXMuaXRlbS5wcm9kdWN0X3R5cGUgPT0gJ3ZhcmlhdGl2ZScpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIHJlZnMgYXJlJywgdGhpcy4kcmVmcyk7XG4gICAgICAgICAgICAvLyBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMuJHJlZnMuY2hpbGRyZW4sIGNoaWxkID0+IHsgXG4gICAgICAgICAgICAvLyAgICAgY2hpbGQuZG9DbG9zZSgpXG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMuY2hpbGRyZW4uZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICAgICAgICAgIGMuZG9DbG9zZSgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2xvc2VkIGl0Jyk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0sXG4gICAgICAgIGRvT3BlbigpIHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBVEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/TreeItem.vue?vue&type=script&lang=js\n");

/***/ })

})