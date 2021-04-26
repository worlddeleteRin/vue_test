webpackHotUpdate("app",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n/* harmony import */ var _components_ProductPage_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ProductPage.vue */ \"./src/components/ProductPage.vue\");\n\n\n\n\n\n\n\n\n\n\n\n/* import NotFoundComponent from './components/NotFoundComponent.vue'; */\n\n\n\nroutes: [{\n  path: '/',\n  name: 'App',\n  component: _App_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n}, {\n  path: '/product',\n  name: 'ProductPage',\n  component: _components_ProductPage_vue__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n}];\n\nvar router = Object(vue_router__WEBPACK_IMPORTED_MODULE_8__[\"createRouter\"])({\n  history: Object(vue_router__WEBPACK_IMPORTED_MODULE_8__[\"createWebHistory\"])(),\n  routes: routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\nvar store = Object(vuex__WEBPACK_IMPORTED_MODULE_10__[\"createStore\"])({\n  state: function state() {\n    return {\n      cart_amount: 0,\n      products: [],\n      products_in_cart: {}\n    };\n  },\n  mutations: {\n    change_count: function change_count(state, count) {\n      state.count = count;\n    },\n    setProducts: function setProducts(state, products) {\n      products.forEach(function (product) {\n        return state.products.push(product);\n      });\n    },\n    setProductsInCart: function setProductsInCart(state, products_in_cart) {\n      products_in_cart.forEach(function (product_in_cart) {\n        return state.products_in_cart[product_in_cart['product_id']] = product_in_cart['quantity'];\n      });\n    },\n    addProductToCart: function addProductToCart(state, product_id) {\n      state.products_in_cart[product_id.toString()] = 1;\n    },\n    deleteProductFromCart: function deleteProductFromCart(state, product_id) {\n      delete state.products_in_cart[product_id.toString()];\n    },\n    setCartAmount: function setCartAmount(state, cart_amount) {\n      state.cart_amount = cart_amount;\n    }\n  }\n});\n/* const router = createRouter({ history: createWebHistory(), routes}) */\n\nvar app = Object(vue__WEBPACK_IMPORTED_MODULE_7__[\"createApp\"])(_App_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\napp.use(store);\napp.use(Router);\napp.mount('#app');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJyA7XG5pbXBvcnQgeyBjcmVhdGVXZWJIaXN0b3J5LCBjcmVhdGVSb3V0ZXIgfSBmcm9tIFwidnVlLXJvdXRlclwiO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3Z1ZXgnXG4vKiBpbXBvcnQgTm90Rm91bmRDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kQ29tcG9uZW50LnZ1ZSc7ICovXG5pbXBvcnQgUHJvZHVjdFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL1Byb2R1Y3RQYWdlLnZ1ZSc7XG5cblxucm91dGVzOiBbXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgbmFtZTogJ0FwcCcsXG4gICAgY29tcG9uZW50OiBBcHAsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3Byb2R1Y3QnLFxuICAgIG5hbWU6ICdQcm9kdWN0UGFnZScsXG4gICAgY29tcG9uZW50OiBQcm9kdWN0UGFnZSxcbiAgfVxuXVxuXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xuICBoaXN0b3J5OiBjcmVhdGVXZWJIaXN0b3J5KCksXG4gIHJvdXRlcyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5cblxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHtcbiAgc3RhdGUgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYXJ0X2Ftb3VudDogMCxcbiAgICAgIHByb2R1Y3RzOiBbXSxcbiAgICAgIHByb2R1Y3RzX2luX2NhcnQ6IHt9LFxuICAgIH1cbiAgfSxcbiAgbXV0YXRpb25zOiB7XG4gICAgY2hhbmdlX2NvdW50KHN0YXRlLCBjb3VudCkge1xuICAgICAgc3RhdGUuY291bnQgPSBjb3VudFxuICAgIH0sXG4gICAgc2V0UHJvZHVjdHMoc3RhdGUsIHByb2R1Y3RzKSB7XG4gICAgICAgIHByb2R1Y3RzLmZvckVhY2goIHByb2R1Y3QgPT4gc3RhdGUucHJvZHVjdHMucHVzaChwcm9kdWN0KSlcbiAgICB9LFxuICAgIHNldFByb2R1Y3RzSW5DYXJ0KHN0YXRlLCBwcm9kdWN0c19pbl9jYXJ0KSB7XG4gICAgICAgIHByb2R1Y3RzX2luX2NhcnQuZm9yRWFjaCggcHJvZHVjdF9pbl9jYXJ0ID0+IFxuICAgICAgICBzdGF0ZS5wcm9kdWN0c19pbl9jYXJ0W3Byb2R1Y3RfaW5fY2FydFsncHJvZHVjdF9pZCddXSA9IHByb2R1Y3RfaW5fY2FydFsncXVhbnRpdHknXSlcbiAgICB9LFxuICAgIGFkZFByb2R1Y3RUb0NhcnQoc3RhdGUsIHByb2R1Y3RfaWQpIHtcbiAgICAgIHN0YXRlLnByb2R1Y3RzX2luX2NhcnRbcHJvZHVjdF9pZC50b1N0cmluZygpXSA9IDFcbiAgICB9LFxuICAgIGRlbGV0ZVByb2R1Y3RGcm9tQ2FydChzdGF0ZSwgcHJvZHVjdF9pZCkge1xuICAgICAgZGVsZXRlIHN0YXRlLnByb2R1Y3RzX2luX2NhcnRbcHJvZHVjdF9pZC50b1N0cmluZygpXVxuICAgIH0sXG4gICAgc2V0Q2FydEFtb3VudChzdGF0ZSwgY2FydF9hbW91bnQpIHtcbiAgICAgIHN0YXRlLmNhcnRfYW1vdW50ID0gY2FydF9hbW91bnQ7XG4gICAgfVxuICB9XG59KVxuXG5cbi8qIGNvbnN0IHJvdXRlciA9IGNyZWF0ZVJvdXRlcih7IGhpc3Rvcnk6IGNyZWF0ZVdlYkhpc3RvcnkoKSwgcm91dGVzfSkgKi9cbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcChBcHApXG5hcHAudXNlKHN0b3JlKVxuYXBwLnVzZShSb3V0ZXIpXG5cbmFwcC5tb3VudCgnI2FwcCcpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQVJBO0FBZ0NBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

})