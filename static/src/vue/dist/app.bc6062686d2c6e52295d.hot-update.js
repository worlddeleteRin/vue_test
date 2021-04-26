webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/TreeItem.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/TreeItem.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'TreeItem',\n  props: {\n    item: Object\n  },\n  data: function data() {\n    return {\n      isOpen: false,\n      isActive: false,\n      children: []\n    };\n  },\n  beforeUpdate: function beforeUpdate() {\n    this.children = [];\n  },\n  methods: {\n    setChildren: function setChildren(child) {\n      if (child) {\n        this.children.push(child);\n      }\n    },\n    toggle: function toggle() {\n      var _this = this;\n\n      console.clear();\n      this.isOpen ? this.doClose() : this.doOpen();\n      console.log('clicked on ', this);\n      console.log('it has parent', this.item.has_parent);\n\n      if (this.item.has_parent) {\n        console.log('its parent is', this.$parent);\n        console.log('its parent children are', this.$parent.children);\n        this.$parent.children.forEach(function (child) {\n          console.log('loop for children...');\n          console.log('child is: ', child);\n          console.log('child item is: ', child.item);\n\n          if (!(child.item.id == _this.item.id)) {\n            child.isOpen = false;\n            child.isActive = false;\n          }\n        }); // this.$parent.isOpen = false;\n        // this.$parent.$refs.children.isOpen = false;\n        //    Array.prototype.forEach.call(this.$parent.$refs.children, c => { \n        //         console.log('variation is', c);\n        //         console.log('are they open', c.isOpen);\n        //     })\n      }\n    },\n    doClose: function doClose() {\n      // console.log('this is', this.item);\n      // if (this.item.product_type == 'variative') {\n      // console.log('refs: ', this.$refs);\n      // // Array.prototype.forEach.call(this.$refs.variations, v => { \n      // //     v.doClose()\n      // // });\n      // Array.from(this.$refs.variations).forEach((c) => {\n      //     c.doClose()\n      // })\n      this.isOpen = false;\n      this.isActive = false; // const children = this.$refs.children;\n      // for (var i = 0; i < children.length; i++) {\n      //     children[i].doClose()\n      // } \n      // this.$refs.children.forEach((c) => {\n      //     c.doClose()\n      // });\n      // console.log('closed it');\n      // }\n    },\n    doOpen: function doOpen() {\n      this.isOpen = true;\n      this.isActive = true;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9UcmVlSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmVlSXRlbS52dWU/ZGI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHNwYW4+XG4gICAgPGRpdlxuICAgIEBjbGljaz1cInRoaXMudG9nZ2xlXCJcbiAgICA6Y2xhc3M9XCJ7cmVkOiBpc0FjdGl2ZX1cIlxuICAgID5cbiAgICAgICAge3sgaXRlbS5uYW1lIH19IFxuICAgIDwvZGl2PlxuICAgIDx1bCB2LWlmPVwiaXNPcGVuXCI+XG4gICAgPFRyZWVJdGVtIFxuICAgIHYtZm9yPVwiY2hpbGQgaW4gaXRlbS52YXJpYXRpb25zXCJcbiAgICA6a2V5PVwiY2hpbGQuaWRcIlxuICAgIHYtYmluZDppdGVtPVwiY2hpbGRcIlxuICAgIDpyZWY9XCJ0aGlzLnNldENoaWxkcmVuXCJcbiAgICA+XG4gICAgPC9UcmVlSXRlbT5cbiAgICA8L3VsPlxuICAgIDwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0ICB7XG4gICAgbmFtZTogJ1RyZWVJdGVtJyxcbiAgICBwcm9wczoge1xuICAgICAgICBpdGVtOiBPYmplY3QsXG4gICAgfSxcbiAgICBkYXRhICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJlZm9yZVVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzZXRDaGlsZHJlbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdG9nZ2xlKCkge1xuICAgICAgICAgICAgY29uc29sZS5jbGVhcigpXG4gICAgICAgICAgICB0aGlzLmlzT3Blbj8gdGhpcy5kb0Nsb3NlKCk6IHRoaXMuZG9PcGVuKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCBvbiAnLCB0aGlzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdCBoYXMgcGFyZW50JywgdGhpcy5pdGVtLmhhc19wYXJlbnQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbS5oYXNfcGFyZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXRzIHBhcmVudCBpcycsIHRoaXMuJHBhcmVudCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXRzIHBhcmVudCBjaGlsZHJlbiBhcmUnLCB0aGlzLiRwYXJlbnQuY2hpbGRyZW4pO1xuICAgICAgICAgICAgdGhpcy4kcGFyZW50LmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvb3AgZm9yIGNoaWxkcmVuLi4uJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkIGlzOiAnLCBjaGlsZCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkIGl0ZW0gaXM6ICcsIGNoaWxkLml0ZW0pO1xuICAgICAgICAgICAgICAgIGlmICghKGNoaWxkLml0ZW0uaWQgPT0gdGhpcy5pdGVtLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gdGhpcy4kcGFyZW50LmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gdGhpcy4kcGFyZW50LiRyZWZzLmNoaWxkcmVuLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLiRwYXJlbnQuJHJlZnMuY2hpbGRyZW4sIGMgPT4geyBcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3ZhcmlhdGlvbiBpcycsIGMpO1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnYXJlIHRoZXkgb3BlbicsIGMuaXNPcGVuKTtcbiAgICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG4gICAgICAgIGRvQ2xvc2UgKCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMgaXMnLCB0aGlzLml0ZW0pO1xuICAgICAgICAgICAgLy8gaWYgKHRoaXMuaXRlbS5wcm9kdWN0X3R5cGUgPT0gJ3ZhcmlhdGl2ZScpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZWZzOiAnLCB0aGlzLiRyZWZzKTtcbiAgICAgICAgICAgIC8vIC8vIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy4kcmVmcy52YXJpYXRpb25zLCB2ID0+IHsgXG4gICAgICAgICAgICAvLyAvLyAgICAgdi5kb0Nsb3NlKClcbiAgICAgICAgICAgIC8vIC8vIH0pO1xuICAgICAgICAgICAgLy8gQXJyYXkuZnJvbSh0aGlzLiRyZWZzLnZhcmlhdGlvbnMpLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjLmRvQ2xvc2UoKVxuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7IFxuICAgICAgICAgICAgLy8gY29uc3QgY2hpbGRyZW4gPSB0aGlzLiRyZWZzLmNoaWxkcmVuO1xuICAgICAgICAgICAgLy8gZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gICAgIGNoaWxkcmVuW2ldLmRvQ2xvc2UoKVxuICAgICAgICAgICAgLy8gfSBcbiAgICAgICAgICAgIC8vIHRoaXMuJHJlZnMuY2hpbGRyZW4uZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGMuZG9DbG9zZSgpXG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjbG9zZWQgaXQnKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSxcbiAgICAgICAgZG9PcGVuKCkge1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cbiJdLCJtYXBwaW5ncyI6Ijs7OztBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekRBO0FBZkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/TreeItem.vue?vue&type=script&lang=js\n");

/***/ })

})