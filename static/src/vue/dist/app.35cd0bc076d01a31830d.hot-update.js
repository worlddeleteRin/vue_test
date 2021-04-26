webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/TreeItem.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/TreeItem.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'TreeItem',\n  props: {\n    item: Object\n  },\n  data: function data() {\n    return {\n      isOpen: false,\n      isActive: false,\n      children: []\n    };\n  },\n  beforeUpdate: function beforeUpdate() {\n    this.children = [];\n  },\n  methods: {\n    setChildren: function setChildren(child) {\n      if (child) {\n        this.children.push(child);\n      }\n    },\n    toggle: function toggle() {\n      var _this = this;\n\n      console.clear();\n\n      if (!this.isOpen) {\n        this.doOpen();\n      }\n\n      if (this.item.has_parent) {\n        this.$parent.children.forEach(function (child) {\n          if (!(child.item.id == _this.item.id)) {\n            child.isOpen = false;\n            child.isActive = false;\n          }\n        });\n        this.setFirstSingleProduct();\n      }\n    },\n    setFirstSingleProduct: function setFirstSingleProduct() {\n      if (this.item.product_type == 'single') {\n        this.$store.commit('setCurrentProduct', this.item);\n      } else {\n        console.log('this is', this);\n        console.log('it is not single, its children are: ', this.children); // this.children[0].setFirstSingleProduct()\n      }\n    },\n    doClose: function doClose() {\n      // console.log('this is', this.item);\n      // if (this.item.product_type == 'variative') {\n      // console.log('refs: ', this.$refs);\n      // // Array.prototype.forEach.call(this.$refs.variations, v => { \n      // //     v.doClose()\n      // // });\n      // Array.from(this.$refs.variations).forEach((c) => {\n      //     c.doClose()\n      // })\n      this.isOpen = false;\n      this.isActive = false; // const children = this.$refs.children;\n      // for (var i = 0; i < children.length; i++) {\n      //     children[i].doClose()\n      // } \n      // this.$refs.children.forEach((c) => {\n      //     c.doClose()\n      // });\n      // console.log('closed it');\n      // }\n    },\n    doOpen: function doOpen() {\n      this.isOpen = true;\n      this.isActive = true;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9UcmVlSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmVlSXRlbS52dWU/ZGI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHNwYW4+XG4gICAgPGRpdlxuICAgIEBjbGljaz1cInRoaXMudG9nZ2xlXCJcbiAgICA6Y2xhc3M9XCJ7cmVkOiBpc0FjdGl2ZX1cIlxuICAgID5cbiAgICAgICAge3sgaXRlbS5uYW1lIH19IFxuICAgIDwvZGl2PlxuICAgIDx1bCB2LWlmPVwiaXNPcGVuXCI+XG4gICAgPFRyZWVJdGVtIFxuICAgIHYtZm9yPVwiY2hpbGQgaW4gaXRlbS52YXJpYXRpb25zXCJcbiAgICA6a2V5PVwiY2hpbGQuaWRcIlxuICAgIHYtYmluZDppdGVtPVwiY2hpbGRcIlxuICAgIDpyZWY9XCJ0aGlzLnNldENoaWxkcmVuXCJcbiAgICA+XG4gICAgPC9UcmVlSXRlbT5cbiAgICA8L3VsPlxuICAgIDwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0ICB7XG4gICAgbmFtZTogJ1RyZWVJdGVtJyxcbiAgICBwcm9wczoge1xuICAgICAgICBpdGVtOiBPYmplY3QsXG4gICAgfSxcbiAgICBkYXRhICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJlZm9yZVVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzZXRDaGlsZHJlbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdG9nZ2xlKCkge1xuICAgICAgICAgICAgY29uc29sZS5jbGVhcigpXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kb09wZW4oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbS5oYXNfcGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIShjaGlsZC5pdGVtLmlkID09IHRoaXMuaXRlbS5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuc2V0Rmlyc3RTaW5nbGVQcm9kdWN0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0Rmlyc3RTaW5nbGVQcm9kdWN0ICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW0ucHJvZHVjdF90eXBlID09ICdzaW5nbGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRDdXJyZW50UHJvZHVjdCcsIHRoaXMuaXRlbSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMnLCB0aGlzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaXQgaXMgbm90IHNpbmdsZSwgaXRzIGNoaWxkcmVuIGFyZTogJywgdGhpcy5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jaGlsZHJlblswXS5zZXRGaXJzdFNpbmdsZVByb2R1Y3QoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkb0Nsb3NlICgpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzIGlzJywgdGhpcy5pdGVtKTtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLml0ZW0ucHJvZHVjdF90eXBlID09ICd2YXJpYXRpdmUnKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVmczogJywgdGhpcy4kcmVmcyk7XG4gICAgICAgICAgICAvLyAvLyBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMuJHJlZnMudmFyaWF0aW9ucywgdiA9PiB7IFxuICAgICAgICAgICAgLy8gLy8gICAgIHYuZG9DbG9zZSgpXG4gICAgICAgICAgICAvLyAvLyB9KTtcbiAgICAgICAgICAgIC8vIEFycmF5LmZyb20odGhpcy4kcmVmcy52YXJpYXRpb25zKS5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgYy5kb0Nsb3NlKClcbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlOyBcbiAgICAgICAgICAgIC8vIGNvbnN0IGNoaWxkcmVuID0gdGhpcy4kcmVmcy5jaGlsZHJlbjtcbiAgICAgICAgICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vICAgICBjaGlsZHJlbltpXS5kb0Nsb3NlKClcbiAgICAgICAgICAgIC8vIH0gXG4gICAgICAgICAgICAvLyB0aGlzLiRyZWZzLmNoaWxkcmVuLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjLmRvQ2xvc2UoKVxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2xvc2VkIGl0Jyk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0sXG4gICAgICAgIGRvT3BlbigpIHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2REE7QUFmQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/TreeItem.vue?vue&type=script&lang=js\n");

/***/ })

})