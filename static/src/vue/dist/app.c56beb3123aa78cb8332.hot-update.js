webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/TreeItem.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/TreeItem.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'TreeItem',\n  props: {\n    item: Object\n  },\n  data: function data() {\n    return {\n      isOpen: false,\n      isActive: false\n    };\n  },\n  methods: {\n    toggle: function toggle() {\n      console.clear();\n      this.isOpen ? this.doClose() : this.doOpen();\n      console.log('clicked on ', this);\n      console.log('it refs are ', this.$refs.children);\n      console.log('it has parent', this.item.has_parent);\n\n      if (this.item.has_parent) {\n        console.log('its parent is', this.$parent);\n        console.log('its parent refs are', this.$parent.$refs);\n        console.log('its parent refs children are', this.$parent.$refs.children);\n        [this.$parent.$refs.children].map(function (c) {\n          console.log('parent refs children item', c);\n          c.isOpen = false;\n          c.isActive = false;\n        }); //    Array.prototype.forEach.call(this.$parent.$refs.children, c => { \n        //         console.log('variation is', c);\n        //         console.log('are they open', c.isOpen);\n        //     })\n      }\n    },\n    doClose: function doClose() {\n      // console.log('this is', this.item);\n      // if (this.item.product_type == 'variative') {\n      // console.log('refs: ', this.$refs);\n      // // Array.prototype.forEach.call(this.$refs.variations, v => { \n      // //     v.doClose()\n      // // });\n      // Array.from(this.$refs.variations).forEach((c) => {\n      //     c.doClose()\n      // })\n      this.isOpen = false;\n      this.isActive = false; // const children = this.$refs.children;\n      // for (var i = 0; i < children.length; i++) {\n      //     children[i].doClose()\n      // } \n      // this.$refs.children.forEach((c) => {\n      //     c.doClose()\n      // });\n      // console.log('closed it');\n      // }\n    },\n    doOpen: function doOpen() {\n      this.isOpen = true;\n      this.isActive = true;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9UcmVlSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmVlSXRlbS52dWU/ZGI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHNwYW4+XG4gICAgPGRpdlxuICAgIEBjbGljaz1cInRoaXMudG9nZ2xlXCJcbiAgICA6Y2xhc3M9XCJ7cmVkOiBpc0FjdGl2ZX1cIlxuICAgID5cbiAgICAgICAge3sgaXRlbS5uYW1lIH19IFxuICAgIDwvZGl2PlxuICAgIDx1bCB2LWlmPVwiaXNPcGVuXCI+XG4gICAgPFRyZWVJdGVtIFxuICAgIHJlZj1cImNoaWxkcmVuXCJcbiAgICB2LWZvcj1cIihjaGlsZCwgaW5kZXgpIGluIGl0ZW0udmFyaWF0aW9uc1wiXG4gICAgdi1iaW5kOmtleT1cImluZGV4XCJcbiAgICB2LWJpbmQ6aXRlbT1cImNoaWxkXCJcbiAgICA+XG4gICAgPC9UcmVlSXRlbT5cbiAgICA8L3VsPlxuICAgIDwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0ICB7XG4gICAgbmFtZTogJ1RyZWVJdGVtJyxcbiAgICBwcm9wczoge1xuICAgICAgICBpdGVtOiBPYmplY3QsXG4gICAgfSxcbiAgICBkYXRhICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICB0b2dnbGUoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmNsZWFyKClcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuPyB0aGlzLmRvQ2xvc2UoKTogdGhpcy5kb09wZW4oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkIG9uICcsIHRoaXMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0IHJlZnMgYXJlICcsIHRoaXMuJHJlZnMuY2hpbGRyZW4pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0IGhhcyBwYXJlbnQnLCB0aGlzLml0ZW0uaGFzX3BhcmVudCk7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtLmhhc19wYXJlbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdHMgcGFyZW50IGlzJywgdGhpcy4kcGFyZW50KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdHMgcGFyZW50IHJlZnMgYXJlJywgdGhpcy4kcGFyZW50LiRyZWZzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdHMgcGFyZW50IHJlZnMgY2hpbGRyZW4gYXJlJywgdGhpcy4kcGFyZW50LiRyZWZzLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIFt0aGlzLiRwYXJlbnQuJHJlZnMuY2hpbGRyZW5dLm1hcChjID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGFyZW50IHJlZnMgY2hpbGRyZW4gaXRlbScsIGMpXG4gICAgICAgICAgICAgICAgYy5pc09wZW4gPSBmYWxzZVxuICAgICAgICAgICAgICAgIGMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMuJHBhcmVudC4kcmVmcy5jaGlsZHJlbiwgYyA9PiB7IFxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygndmFyaWF0aW9uIGlzJywgYyk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdhcmUgdGhleSBvcGVuJywgYy5pc09wZW4pO1xuICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcbiAgICAgICAgZG9DbG9zZSAoKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcyBpcycsIHRoaXMuaXRlbSk7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5pdGVtLnByb2R1Y3RfdHlwZSA9PSAndmFyaWF0aXZlJykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlZnM6ICcsIHRoaXMuJHJlZnMpO1xuICAgICAgICAgICAgLy8gLy8gQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLiRyZWZzLnZhcmlhdGlvbnMsIHYgPT4geyBcbiAgICAgICAgICAgIC8vIC8vICAgICB2LmRvQ2xvc2UoKVxuICAgICAgICAgICAgLy8gLy8gfSk7XG4gICAgICAgICAgICAvLyBBcnJheS5mcm9tKHRoaXMuJHJlZnMudmFyaWF0aW9ucykuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGMuZG9DbG9zZSgpXG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTsgXG4gICAgICAgICAgICAvLyBjb25zdCBjaGlsZHJlbiA9IHRoaXMuJHJlZnMuY2hpbGRyZW47XG4gICAgICAgICAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyAgICAgY2hpbGRyZW5baV0uZG9DbG9zZSgpXG4gICAgICAgICAgICAvLyB9IFxuICAgICAgICAgICAgLy8gdGhpcy4kcmVmcy5jaGlsZHJlbi5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgYy5kb0Nsb3NlKClcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Nsb3NlZCBpdCcpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9LFxuICAgICAgICBkb09wZW4oKSB7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuIl0sIm1hcHBpbmdzIjoiOzs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaERBO0FBWEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/TreeItem.vue?vue&type=script&lang=js\n");

/***/ })

})