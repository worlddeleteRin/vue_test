webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/TreeItem.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/TreeItem.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'TreeItem',\n  props: {\n    item: Object\n  },\n  data: function data() {\n    return {\n      isOpen: false,\n      isActive: false\n    };\n  },\n  methods: {\n    toggle: function toggle() {\n      console.clear();\n      this.isOpen ? this.doClose() : this.doOpen();\n      console.log('clicked on ', this);\n      console.log('it refs are ', this.$refs.children);\n      console.log('it has parent', this.item.has_parent);\n\n      if (this.item.has_parent) {\n        console.log('its parent is', this.$parent);\n        console.log('its parent refs are', this.$parent.$refs);\n        console.log('its parent refs children are', this.$parent.$refs.children); // this.$parent.isOpen = false;\n        // this.$parent.$refs.children.isOpen = false;\n        //    Array.prototype.forEach.call(this.$parent.$refs.children, c => { \n        //         console.log('variation is', c);\n        //         console.log('are they open', c.isOpen);\n        //     })\n      }\n    },\n    doClose: function doClose() {\n      // console.log('this is', this.item);\n      // if (this.item.product_type == 'variative') {\n      // console.log('refs: ', this.$refs);\n      // // Array.prototype.forEach.call(this.$refs.variations, v => { \n      // //     v.doClose()\n      // // });\n      // Array.from(this.$refs.variations).forEach((c) => {\n      //     c.doClose()\n      // })\n      this.isOpen = false;\n      this.isActive = false; // const children = this.$refs.children;\n      // for (var i = 0; i < children.length; i++) {\n      //     children[i].doClose()\n      // } \n      // this.$refs.children.forEach((c) => {\n      //     c.doClose()\n      // });\n      // console.log('closed it');\n      // }\n    },\n    doOpen: function doOpen() {\n      this.isOpen = true;\n      this.isActive = true;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9UcmVlSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmVlSXRlbS52dWU/ZGI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHNwYW4+XG4gICAgPGRpdlxuICAgIEBjbGljaz1cInRoaXMudG9nZ2xlXCJcbiAgICA6Y2xhc3M9XCJ7cmVkOiBpc0FjdGl2ZX1cIlxuICAgID5cbiAgICAgICAge3sgaXRlbS5uYW1lIH19IFxuICAgIDwvZGl2PlxuICAgIDx1bCB2LWlmPVwiaXNPcGVuXCI+XG4gICAgPFRyZWVJdGVtIFxuICAgIHJlZj1cImNoaWxkcmVuXCJcbiAgICB2LWZvcj1cIihjaGlsZCwgaW5kZXgpIGluIGl0ZW0udmFyaWF0aW9uc1wiXG4gICAgdi1iaW5kOmtleT1cImluZGV4XCJcbiAgICB2LWJpbmQ6aXRlbT1cImNoaWxkXCJcbiAgICA+XG4gICAgPC9UcmVlSXRlbT5cbiAgICA8L3VsPlxuICAgIDwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0ICB7XG4gICAgbmFtZTogJ1RyZWVJdGVtJyxcbiAgICBwcm9wczoge1xuICAgICAgICBpdGVtOiBPYmplY3QsXG4gICAgfSxcbiAgICBkYXRhICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICB0b2dnbGUoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmNsZWFyKClcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuPyB0aGlzLmRvQ2xvc2UoKTogdGhpcy5kb09wZW4oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkIG9uICcsIHRoaXMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0IHJlZnMgYXJlICcsIHRoaXMuJHJlZnMuY2hpbGRyZW4pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0IGhhcyBwYXJlbnQnLCB0aGlzLml0ZW0uaGFzX3BhcmVudCk7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtLmhhc19wYXJlbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdHMgcGFyZW50IGlzJywgdGhpcy4kcGFyZW50KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdHMgcGFyZW50IHJlZnMgYXJlJywgdGhpcy4kcGFyZW50LiRyZWZzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdHMgcGFyZW50IHJlZnMgY2hpbGRyZW4gYXJlJywgdGhpcy4kcGFyZW50LiRyZWZzLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIC8vIHRoaXMuJHBhcmVudC5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHRoaXMuJHBhcmVudC4kcmVmcy5jaGlsZHJlbi5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIC8vICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy4kcGFyZW50LiRyZWZzLmNoaWxkcmVuLCBjID0+IHsgXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCd2YXJpYXRpb24gaXMnLCBjKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2FyZSB0aGV5IG9wZW4nLCBjLmlzT3Blbik7XG4gICAgICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuICAgICAgICBkb0Nsb3NlICgpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzIGlzJywgdGhpcy5pdGVtKTtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLml0ZW0ucHJvZHVjdF90eXBlID09ICd2YXJpYXRpdmUnKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVmczogJywgdGhpcy4kcmVmcyk7XG4gICAgICAgICAgICAvLyAvLyBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMuJHJlZnMudmFyaWF0aW9ucywgdiA9PiB7IFxuICAgICAgICAgICAgLy8gLy8gICAgIHYuZG9DbG9zZSgpXG4gICAgICAgICAgICAvLyAvLyB9KTtcbiAgICAgICAgICAgIC8vIEFycmF5LmZyb20odGhpcy4kcmVmcy52YXJpYXRpb25zKS5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgYy5kb0Nsb3NlKClcbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlOyBcbiAgICAgICAgICAgIC8vIGNvbnN0IGNoaWxkcmVuID0gdGhpcy4kcmVmcy5jaGlsZHJlbjtcbiAgICAgICAgICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vICAgICBjaGlsZHJlbltpXS5kb0Nsb3NlKClcbiAgICAgICAgICAgIC8vIH0gXG4gICAgICAgICAgICAvLyB0aGlzLiRyZWZzLmNoaWxkcmVuLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjLmRvQ2xvc2UoKVxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2xvc2VkIGl0Jyk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0sXG4gICAgICAgIGRvT3BlbigpIHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG4iXSwibWFwcGluZ3MiOiJBQXNCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0NBO0FBWEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/TreeItem.vue?vue&type=script&lang=js\n");

/***/ })

})