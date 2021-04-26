webpackHotUpdate("app",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue-router'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n/* harmony import */ var _components_NotFoundComponent_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/NotFoundComponent.vue */ \"./src/components/NotFoundComponent.vue\");\n/* harmony import */ var _components_ProductPage_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ProductPage.vue */ \"./src/components/ProductPage.vue\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar routes = [{\n  path: '/',\n  name: 'App',\n  component: _App_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n}, {\n  path: '/product',\n  name: 'ProductPage',\n  component: _components_ProductPage_vue__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n}];\nvar store = Object(vuex__WEBPACK_IMPORTED_MODULE_10__[\"createStore\"])({\n  state: function state() {\n    return {\n      cart_amount: 0,\n      products: [],\n      products_in_cart: {}\n    };\n  },\n  mutations: {\n    change_count: function change_count(state, count) {\n      state.count = count;\n    },\n    setProducts: function setProducts(state, products) {\n      products.forEach(function (product) {\n        return state.products.push(product);\n      });\n    },\n    setProductsInCart: function setProductsInCart(state, products_in_cart) {\n      products_in_cart.forEach(function (product_in_cart) {\n        return state.products_in_cart[product_in_cart['product_id']] = product_in_cart['quantity'];\n      });\n    },\n    addProductToCart: function addProductToCart(state, product_id) {\n      state.products_in_cart[product_id.toString()] = 1;\n    },\n    deleteProductFromCart: function deleteProductFromCart(state, product_id) {\n      delete state.products_in_cart[product_id.toString()];\n    },\n    setCartAmount: function setCartAmount(state, cart_amount) {\n      state.cart_amount = cart_amount;\n    }\n  }\n});\nvar router = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue-router'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n  history: !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue-router'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),\n  routes: routes\n});\nvar app = Object(vue__WEBPACK_IMPORTED_MODULE_7__[\"createApp\"])(_App_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\napp.use(store);\napp.use(router);\napp.mount('#app');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBwLCBofSBmcm9tICd2dWUnIDtcbmltcG9ydCB7IGNyZWF0ZVJvdXRlciwgY3JlYXRlV2ViSGlzdG9yeSB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgTm90Rm91bmRDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kQ29tcG9uZW50LnZ1ZSc7XG5pbXBvcnQgUHJvZHVjdFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL1Byb2R1Y3RQYWdlLnZ1ZSc7XG5cblxuXG5jb25zdCByb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgbmFtZTogJ0FwcCcsXG4gICAgY29tcG9uZW50OiBBcHAsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3Byb2R1Y3QnLFxuICAgIG5hbWU6ICdQcm9kdWN0UGFnZScsXG4gICAgY29tcG9uZW50OiBQcm9kdWN0UGFnZSxcbiAgfVxuXVxuXG5cblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZSh7XG4gIHN0YXRlICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2FydF9hbW91bnQ6IDAsXG4gICAgICBwcm9kdWN0czogW10sXG4gICAgICBwcm9kdWN0c19pbl9jYXJ0OiB7fSxcbiAgICB9XG4gIH0sXG4gIG11dGF0aW9uczoge1xuICAgIGNoYW5nZV9jb3VudChzdGF0ZSwgY291bnQpIHtcbiAgICAgIHN0YXRlLmNvdW50ID0gY291bnRcbiAgICB9LFxuICAgIHNldFByb2R1Y3RzKHN0YXRlLCBwcm9kdWN0cykge1xuICAgICAgICBwcm9kdWN0cy5mb3JFYWNoKCBwcm9kdWN0ID0+IHN0YXRlLnByb2R1Y3RzLnB1c2gocHJvZHVjdCkpXG4gICAgfSxcbiAgICBzZXRQcm9kdWN0c0luQ2FydChzdGF0ZSwgcHJvZHVjdHNfaW5fY2FydCkge1xuICAgICAgICBwcm9kdWN0c19pbl9jYXJ0LmZvckVhY2goIHByb2R1Y3RfaW5fY2FydCA9PiBcbiAgICAgICAgc3RhdGUucHJvZHVjdHNfaW5fY2FydFtwcm9kdWN0X2luX2NhcnRbJ3Byb2R1Y3RfaWQnXV0gPSBwcm9kdWN0X2luX2NhcnRbJ3F1YW50aXR5J10pXG4gICAgfSxcbiAgICBhZGRQcm9kdWN0VG9DYXJ0KHN0YXRlLCBwcm9kdWN0X2lkKSB7XG4gICAgICBzdGF0ZS5wcm9kdWN0c19pbl9jYXJ0W3Byb2R1Y3RfaWQudG9TdHJpbmcoKV0gPSAxXG4gICAgfSxcbiAgICBkZWxldGVQcm9kdWN0RnJvbUNhcnQoc3RhdGUsIHByb2R1Y3RfaWQpIHtcbiAgICAgIGRlbGV0ZSBzdGF0ZS5wcm9kdWN0c19pbl9jYXJ0W3Byb2R1Y3RfaWQudG9TdHJpbmcoKV1cbiAgICB9LFxuICAgIHNldENhcnRBbW91bnQoc3RhdGUsIGNhcnRfYW1vdW50KSB7XG4gICAgICBzdGF0ZS5jYXJ0X2Ftb3VudCA9IGNhcnRfYW1vdW50O1xuICAgIH1cbiAgfVxufSlcblxuXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoeyBoaXN0b3J5OiBjcmVhdGVXZWJIaXN0b3J5KCksIHJvdXRlc30pXG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoQXBwKVxuYXBwLnVzZShzdG9yZSlcbmFwcC51c2Uocm91dGVyKVxuXG5hcHAubW91bnQoJyNhcHAnKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFSQTtBQWdDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

})