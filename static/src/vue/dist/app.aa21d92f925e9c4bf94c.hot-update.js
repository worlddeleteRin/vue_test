webpackHotUpdate("app",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ \"./node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./enums.js */ \"./src/enums.js\");\n/* harmony import */ var _components_ProductPage_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ProductPage.vue */ \"./src/components/ProductPage.vue\");\n/* harmony import */ var _components_MainPage_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/MainPage.vue */ \"./src/components/MainPage.vue\");\n\n\n\n\n\n\n\n\n\n\n\n\n/* import NotFoundComponent from './components/NotFoundComponent.vue'; */\n\n\n\n\nvar routes = [{\n  path: '/',\n  name: 'MainPage',\n  component: _components_MainPage_vue__WEBPACK_IMPORTED_MODULE_14__[\"default\"]\n}, {\n  path: '/product/:product_id',\n  name: 'ProductPage',\n  component: _components_ProductPage_vue__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n  props: true\n}];\nvar router = Object(vue_router__WEBPACK_IMPORTED_MODULE_9__[\"createRouter\"])({\n  history: Object(vue_router__WEBPACK_IMPORTED_MODULE_9__[\"createWebHistory\"])('/app'),\n  routes: routes\n});\n/* export default router; */\n\nvar store = Object(vuex__WEBPACK_IMPORTED_MODULE_11__[\"createStore\"])({\n  state: function state() {\n    return {\n      apiState: _enums_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].INIT,\n      cart_amount: 0,\n      products: [],\n      products_in_cart: {},\n      product: {}\n    };\n  },\n  mutations: {\n    setApiState: function setApiState(state, apiState) {\n      state.apiState = apiState;\n    },\n    change_count: function change_count(state, count) {\n      state.count = count;\n    },\n    setProducts: function setProducts(state, products) {\n      products.forEach(function (product) {\n        return state.products.push(product);\n      });\n    },\n    setProductsInCart: function setProductsInCart(state, products_in_cart) {\n      products_in_cart.forEach(function (product_in_cart) {\n        return state.products_in_cart[product_in_cart['product_id']] = product_in_cart['quantity'];\n      });\n    },\n    addProductToCart: function addProductToCart(state, product_id) {\n      state.products_in_cart[product_id.toString()] = 1;\n    },\n    deleteProductFromCart: function deleteProductFromCart(state, product_id) {\n      delete state.products_in_cart[product_id.toString()];\n    },\n    setCartAmount: function setCartAmount(state, cart_amount) {\n      state.cart_amount = cart_amount;\n    },\n    setProduct: function setProduct(state, product) {\n      state.product = product;\n    }\n  },\n  getters: {\n    getProductByid: function getProductByid(state) {\n      return function (product_id) {\n        var product = state.products.find(function (pr) {\n          return pr['id'] == product_id;\n        });\n        return product;\n      };\n    }\n  }\n});\n/* const router = createRouter({ history: createWebHistory(), routes}) */\n\nvar app = Object(vue__WEBPACK_IMPORTED_MODULE_8__[\"createApp\"])(_App_vue__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\napp.use(store);\napp.use(router);\napp.mount('#app');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJyA7XG5pbXBvcnQgeyBjcmVhdGVXZWJIaXN0b3J5LCBjcmVhdGVSb3V0ZXIgfSBmcm9tIFwidnVlLXJvdXRlclwiO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3Z1ZXgnXG4vKiBpbXBvcnQgTm90Rm91bmRDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kQ29tcG9uZW50LnZ1ZSc7ICovXG5pbXBvcnQgRU5VTSBmcm9tICcuL2VudW1zLmpzJztcblxuaW1wb3J0IFByb2R1Y3RQYWdlIGZyb20gJy4vY29tcG9uZW50cy9Qcm9kdWN0UGFnZS52dWUnO1xuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vY29tcG9uZW50cy9NYWluUGFnZS52dWUnO1xuXG5cblxuY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIG5hbWU6ICdNYWluUGFnZScsXG4gICAgY29tcG9uZW50OiBNYWluUGFnZSxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvcHJvZHVjdC86cHJvZHVjdF9pZCcsXG4gICAgbmFtZTogJ1Byb2R1Y3RQYWdlJyxcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RQYWdlLFxuICAgIHByb3BzOiB0cnVlLFxuICB9LFxuXTtcblxuY29uc3Qgcm91dGVyID0gY3JlYXRlUm91dGVyKHtcbiAgaGlzdG9yeTogY3JlYXRlV2ViSGlzdG9yeSgnL2FwcCcpLFxuICByb3V0ZXMsXG59KTtcblxuLyogZXhwb3J0IGRlZmF1bHQgcm91dGVyOyAqL1xuXG5cblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZSh7XG4gIHN0YXRlICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXBpU3RhdGU6IEVOVU0uSU5JVCxcbiAgICAgIGNhcnRfYW1vdW50OiAwLFxuICAgICAgcHJvZHVjdHM6IFtdLFxuICAgICAgcHJvZHVjdHNfaW5fY2FydDoge30sXG4gICAgICBwcm9kdWN0OiB7fSxcbiAgICB9XG4gIH0sXG4gIG11dGF0aW9uczoge1xuICAgIHNldEFwaVN0YXRlKHN0YXRlLCBhcGlTdGF0ZSkge1xuICAgICAgc3RhdGUuYXBpU3RhdGUgPSBhcGlTdGF0ZTtcbiAgICB9LFxuICAgIGNoYW5nZV9jb3VudChzdGF0ZSwgY291bnQpIHtcbiAgICAgIHN0YXRlLmNvdW50ID0gY291bnRcbiAgICB9LFxuICAgIHNldFByb2R1Y3RzKHN0YXRlLCBwcm9kdWN0cykge1xuICAgICAgICBwcm9kdWN0cy5mb3JFYWNoKCBwcm9kdWN0ID0+IHN0YXRlLnByb2R1Y3RzLnB1c2gocHJvZHVjdCkpXG4gICAgfSxcbiAgICBzZXRQcm9kdWN0c0luQ2FydChzdGF0ZSwgcHJvZHVjdHNfaW5fY2FydCkge1xuICAgICAgICBwcm9kdWN0c19pbl9jYXJ0LmZvckVhY2goIHByb2R1Y3RfaW5fY2FydCA9PiBcbiAgICAgICAgc3RhdGUucHJvZHVjdHNfaW5fY2FydFtwcm9kdWN0X2luX2NhcnRbJ3Byb2R1Y3RfaWQnXV0gPSBwcm9kdWN0X2luX2NhcnRbJ3F1YW50aXR5J10pXG4gICAgfSxcbiAgICBhZGRQcm9kdWN0VG9DYXJ0KHN0YXRlLCBwcm9kdWN0X2lkKSB7XG4gICAgICBzdGF0ZS5wcm9kdWN0c19pbl9jYXJ0W3Byb2R1Y3RfaWQudG9TdHJpbmcoKV0gPSAxXG4gICAgfSxcbiAgICBkZWxldGVQcm9kdWN0RnJvbUNhcnQoc3RhdGUsIHByb2R1Y3RfaWQpIHtcbiAgICAgIGRlbGV0ZSBzdGF0ZS5wcm9kdWN0c19pbl9jYXJ0W3Byb2R1Y3RfaWQudG9TdHJpbmcoKV1cbiAgICB9LFxuICAgIHNldENhcnRBbW91bnQoc3RhdGUsIGNhcnRfYW1vdW50KSB7XG4gICAgICBzdGF0ZS5jYXJ0X2Ftb3VudCA9IGNhcnRfYW1vdW50O1xuICAgIH0sXG4gICAgc2V0UHJvZHVjdChzdGF0ZSwgcHJvZHVjdCkge1xuICAgICAgc3RhdGUucHJvZHVjdCA9IHByb2R1Y3Q7XG4gICAgfVxuICB9LFxuICBnZXR0ZXJzOiB7XG4gICAgZ2V0UHJvZHVjdEJ5aWQ6IChzdGF0ZSkgPT4gKHByb2R1Y3RfaWQpID0+IHtcbiAgICAgIHZhciBwcm9kdWN0ID0gc3RhdGUucHJvZHVjdHMuZmluZChwciA9PiBwclsnaWQnXSA9PSBwcm9kdWN0X2lkKTtcbiAgICAgIHJldHVybiBwcm9kdWN0O1xuICAgIH1cbiAgfVxufSlcblxuXG4vKiBjb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoeyBoaXN0b3J5OiBjcmVhdGVXZWJIaXN0b3J5KCksIHJvdXRlc30pICovXG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoQXBwKVxuYXBwLnVzZShzdG9yZSlcbmFwcC51c2Uocm91dGVyKVxuXG5hcHAubW91bnQoJyNhcHAnKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekJBO0FBMkJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBckNBO0FBOENBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

})