webpackHotUpdate("app",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n/* harmony import */ var _components_ProductPage_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ProductPage.vue */ \"./src/components/ProductPage.vue\");\n\n\n\n\n\n\n\n\n\n\n\n/* import NotFoundComponent from './components/NotFoundComponent.vue'; */\n\n\nvar routes = [{\n  path: '/app',\n  name: 'App',\n  component: _App_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n}, {\n  path: '/',\n  name: 'App',\n  component: _App_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n}, {\n  path: '/product',\n  name: 'ProductPage',\n  component: _components_ProductPage_vue__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n}];\nvar router = Object(vue_router__WEBPACK_IMPORTED_MODULE_8__[\"createRouter\"])({\n  base: '/app/',\n  history: Object(vue_router__WEBPACK_IMPORTED_MODULE_8__[\"createWebHistory\"])(),\n  routes: routes\n});\n/* export default router; */\n\nvar store = Object(vuex__WEBPACK_IMPORTED_MODULE_10__[\"createStore\"])({\n  state: function state() {\n    return {\n      cart_amount: 0,\n      products: [],\n      products_in_cart: {}\n    };\n  },\n  mutations: {\n    change_count: function change_count(state, count) {\n      state.count = count;\n    },\n    setProducts: function setProducts(state, products) {\n      products.forEach(function (product) {\n        return state.products.push(product);\n      });\n    },\n    setProductsInCart: function setProductsInCart(state, products_in_cart) {\n      products_in_cart.forEach(function (product_in_cart) {\n        return state.products_in_cart[product_in_cart['product_id']] = product_in_cart['quantity'];\n      });\n    },\n    addProductToCart: function addProductToCart(state, product_id) {\n      state.products_in_cart[product_id.toString()] = 1;\n    },\n    deleteProductFromCart: function deleteProductFromCart(state, product_id) {\n      delete state.products_in_cart[product_id.toString()];\n    },\n    setCartAmount: function setCartAmount(state, cart_amount) {\n      state.cart_amount = cart_amount;\n    }\n  }\n});\n/* const router = createRouter({ history: createWebHistory(), routes}) */\n\nvar app = Object(vue__WEBPACK_IMPORTED_MODULE_7__[\"createApp\"])(_App_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\napp.use(store);\napp.use(router);\napp.mount('#app');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJyA7XG5pbXBvcnQgeyBjcmVhdGVXZWJIaXN0b3J5LCBjcmVhdGVSb3V0ZXIgfSBmcm9tIFwidnVlLXJvdXRlclwiO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3Z1ZXgnXG4vKiBpbXBvcnQgTm90Rm91bmRDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kQ29tcG9uZW50LnZ1ZSc7ICovXG5pbXBvcnQgUHJvZHVjdFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL1Byb2R1Y3RQYWdlLnZ1ZSc7XG5cblxuY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJy9hcHAnLFxuICAgIG5hbWU6ICdBcHAnLFxuICAgIGNvbXBvbmVudDogQXBwLFxuICB9LFxuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIG5hbWU6ICdBcHAnLFxuICAgIGNvbXBvbmVudDogQXBwLFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9wcm9kdWN0JyxcbiAgICBuYW1lOiAnUHJvZHVjdFBhZ2UnLFxuICAgIGNvbXBvbmVudDogUHJvZHVjdFBhZ2UsXG4gIH1cbl07XG5cbmNvbnN0IHJvdXRlciA9IGNyZWF0ZVJvdXRlcih7XG4gIGJhc2U6ICcvYXBwLycsXG4gIGhpc3Rvcnk6IGNyZWF0ZVdlYkhpc3RvcnkoKSxcbiAgcm91dGVzLFxufSk7XG5cbi8qIGV4cG9ydCBkZWZhdWx0IHJvdXRlcjsgKi9cblxuXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoe1xuICBzdGF0ZSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcnRfYW1vdW50OiAwLFxuICAgICAgcHJvZHVjdHM6IFtdLFxuICAgICAgcHJvZHVjdHNfaW5fY2FydDoge30sXG4gICAgfVxuICB9LFxuICBtdXRhdGlvbnM6IHtcbiAgICBjaGFuZ2VfY291bnQoc3RhdGUsIGNvdW50KSB7XG4gICAgICBzdGF0ZS5jb3VudCA9IGNvdW50XG4gICAgfSxcbiAgICBzZXRQcm9kdWN0cyhzdGF0ZSwgcHJvZHVjdHMpIHtcbiAgICAgICAgcHJvZHVjdHMuZm9yRWFjaCggcHJvZHVjdCA9PiBzdGF0ZS5wcm9kdWN0cy5wdXNoKHByb2R1Y3QpKVxuICAgIH0sXG4gICAgc2V0UHJvZHVjdHNJbkNhcnQoc3RhdGUsIHByb2R1Y3RzX2luX2NhcnQpIHtcbiAgICAgICAgcHJvZHVjdHNfaW5fY2FydC5mb3JFYWNoKCBwcm9kdWN0X2luX2NhcnQgPT4gXG4gICAgICAgIHN0YXRlLnByb2R1Y3RzX2luX2NhcnRbcHJvZHVjdF9pbl9jYXJ0Wydwcm9kdWN0X2lkJ11dID0gcHJvZHVjdF9pbl9jYXJ0WydxdWFudGl0eSddKVxuICAgIH0sXG4gICAgYWRkUHJvZHVjdFRvQ2FydChzdGF0ZSwgcHJvZHVjdF9pZCkge1xuICAgICAgc3RhdGUucHJvZHVjdHNfaW5fY2FydFtwcm9kdWN0X2lkLnRvU3RyaW5nKCldID0gMVxuICAgIH0sXG4gICAgZGVsZXRlUHJvZHVjdEZyb21DYXJ0KHN0YXRlLCBwcm9kdWN0X2lkKSB7XG4gICAgICBkZWxldGUgc3RhdGUucHJvZHVjdHNfaW5fY2FydFtwcm9kdWN0X2lkLnRvU3RyaW5nKCldXG4gICAgfSxcbiAgICBzZXRDYXJ0QW1vdW50KHN0YXRlLCBjYXJ0X2Ftb3VudCkge1xuICAgICAgc3RhdGUuY2FydF9hbW91bnQgPSBjYXJ0X2Ftb3VudDtcbiAgICB9XG4gIH1cbn0pXG5cblxuLyogY29uc3Qgcm91dGVyID0gY3JlYXRlUm91dGVyKHsgaGlzdG9yeTogY3JlYXRlV2ViSGlzdG9yeSgpLCByb3V0ZXN9KSAqL1xuY29uc3QgYXBwID0gY3JlYXRlQXBwKEFwcClcbmFwcC51c2Uoc3RvcmUpXG5hcHAudXNlKHJvdXRlcilcblxuYXBwLm1vdW50KCcjYXBwJylcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFSQTtBQWdDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

})