webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/TreeItem.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/TreeItem.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'TreeItem',\n  props: {\n    item: Object\n  },\n  data: function data() {\n    return {\n      isOpen: false,\n      isActive: false\n    };\n  },\n  methods: {\n    toggle: function toggle() {\n      console.clear();\n      this.isOpen ? this.doClose() : this.doOpen();\n    },\n    doClose: function doClose() {\n      console.log('this is', this.item); // if (this.item.product_type == 'variative') {\n\n      console.log('refs: ', this.$refs); // Array.prototype.forEach.call(this.$refs.children, child => { \n      //     child.doClose()\n      // });\n\n      this.isOpen = false;\n      this.isActive = false; // Array.from(this.$refs.children).forEach((c) => {\n      //     c.doClose()\n      // })\n\n      var children = this.$refs.children;\n\n      for (var i = 0; i < children.length; i++) {\n        children[i].doClose();\n      }\n\n      this.$refs.children.forEach(function (c) {\n        c.doClose();\n      });\n      console.log('closed it'); // }\n    },\n    doOpen: function doOpen() {\n      this.isOpen = true;\n      this.isActive = true;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9UcmVlSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmVlSXRlbS52dWU/ZGI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHNwYW4+XG4gICAgPGRpdlxuICAgIEBjbGljaz1cInRoaXMudG9nZ2xlXCJcbiAgICA6Y2xhc3M9XCJ7cmVkOiBpc0FjdGl2ZX1cIlxuICAgID5cbiAgICAgICAge3sgaXRlbS5uYW1lIH19IFxuICAgIDwvZGl2PlxuICAgIDx1bCB2LXNob3c9XCJpc09wZW5cIj5cbiAgICA8VHJlZUl0ZW0gcmVmPVwiY2hpbGRyZW5cIlxuICAgIHYtZm9yPVwiKGNoaWxkLCBpbmRleCkgaW4gaXRlbS52YXJpYXRpb25zXCJcbiAgICB2LWJpbmQ6a2V5PVwiaW5kZXhcIlxuICAgIHYtYmluZDppdGVtPVwiY2hpbGRcIlxuICAgID5cbiAgICA8L1RyZWVJdGVtPlxuICAgIDwvdWw+XG4gICAgPC9zcGFuPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQgIHtcbiAgICBuYW1lOiAnVHJlZUl0ZW0nLFxuICAgIHByb3BzOiB7XG4gICAgICAgIGl0ZW06IE9iamVjdCxcbiAgICB9LFxuICAgIGRhdGEgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuY2xlYXIoKVxuICAgICAgICAgICAgdGhpcy5pc09wZW4/IHRoaXMuZG9DbG9zZSgpOiB0aGlzLmRvT3BlbigpO1xuICAgICAgICB9LFxuICAgICAgICBkb0Nsb3NlICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzJywgdGhpcy5pdGVtKTtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLml0ZW0ucHJvZHVjdF90eXBlID09ICd2YXJpYXRpdmUnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVmczogJywgdGhpcy4kcmVmcyk7XG4gICAgICAgICAgICAvLyBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMuJHJlZnMuY2hpbGRyZW4sIGNoaWxkID0+IHsgXG4gICAgICAgICAgICAvLyAgICAgY2hpbGQuZG9DbG9zZSgpXG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBBcnJheS5mcm9tKHRoaXMuJHJlZnMuY2hpbGRyZW4pLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjLmRvQ2xvc2UoKVxuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy4kcmVmcy5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbltpXS5kb0Nsb3NlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJHJlZnMuY2hpbGRyZW4uZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICAgICAgICAgIGMuZG9DbG9zZSgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbG9zZWQgaXQnKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSxcbiAgICAgICAgZG9PcGVuKCkge1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cbiJdLCJtYXBwaW5ncyI6Ijs7OztBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlCQTtBQVhBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/TreeItem.vue?vue&type=script&lang=js\n");

/***/ })

})