webpackHotUpdate("app",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var _Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_noname_learn_vue_vuetest_vueapp_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ \"./node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n/* harmony import */ var _components_ProductPage_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ProductPage.vue */ \"./src/components/ProductPage.vue\");\n/* harmony import */ var _components_MainPage_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/MainPage.vue */ \"./src/components/MainPage.vue\");\n\n\n\n\n\n\n\n\n\n\n\n\n/* import NotFoundComponent from './components/NotFoundComponent.vue'; */\n\n\n\nvar routes = [{\n  path: '/',\n  name: 'MainPage',\n  component: _components_MainPage_vue__WEBPACK_IMPORTED_MODULE_13__[\"default\"]\n}, {\n  path: '/product/:product_id',\n  name: 'ProductPage',\n  component: _components_ProductPage_vue__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  props: true\n}];\nvar router = Object(vue_router__WEBPACK_IMPORTED_MODULE_9__[\"createRouter\"])({\n  history: Object(vue_router__WEBPACK_IMPORTED_MODULE_9__[\"createWebHistory\"])('/app'),\n  routes: routes\n});\n/* export default router; */\n\nvar store = Object(vuex__WEBPACK_IMPORTED_MODULE_11__[\"createStore\"])({\n  state: function state() {\n    return {\n      cart_amount: 0,\n      products: [],\n      products_in_cart: {},\n      product: {}\n    };\n  },\n  mutations: {\n    change_count: function change_count(state, count) {\n      state.count = count;\n    },\n    setProducts: function setProducts(state, products) {\n      products.forEach(function (product) {\n        return state.products.push(product);\n      });\n    },\n    setProductsInCart: function setProductsInCart(state, products_in_cart) {\n      products_in_cart.forEach(function (product_in_cart) {\n        return state.products_in_cart[product_in_cart['product_id']] = product_in_cart['quantity'];\n      });\n    },\n    addProductToCart: function addProductToCart(state, product_id) {\n      state.products_in_cart[product_id.toString()] = 1;\n    },\n    deleteProductFromCart: function deleteProductFromCart(state, product_id) {\n      delete state.products_in_cart[product_id.toString()];\n    },\n    setCartAmount: function setCartAmount(state, cart_amount) {\n      state.cart_amount = cart_amount;\n    },\n    setProduct: function setProduct(state, product) {}\n  },\n  getters: {\n    getProductByid: function getProductByid(state) {\n      return function (product_id) {\n        var product = state.products.find(function (pr) {\n          return pr['id'] == product_id;\n        });\n        return product;\n      };\n    }\n  }\n});\n/* const router = createRouter({ history: createWebHistory(), routes}) */\n\nvar app = Object(vue__WEBPACK_IMPORTED_MODULE_8__[\"createApp\"])(_App_vue__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\napp.use(store);\napp.use(router);\napp.mount('#app');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJyA7XG5pbXBvcnQgeyBjcmVhdGVXZWJIaXN0b3J5LCBjcmVhdGVSb3V0ZXIgfSBmcm9tIFwidnVlLXJvdXRlclwiO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3Z1ZXgnXG4vKiBpbXBvcnQgTm90Rm91bmRDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kQ29tcG9uZW50LnZ1ZSc7ICovXG5pbXBvcnQgUHJvZHVjdFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL1Byb2R1Y3RQYWdlLnZ1ZSc7XG5pbXBvcnQgTWFpblBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL01haW5QYWdlLnZ1ZSc7XG5cblxuY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIG5hbWU6ICdNYWluUGFnZScsXG4gICAgY29tcG9uZW50OiBNYWluUGFnZSxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvcHJvZHVjdC86cHJvZHVjdF9pZCcsXG4gICAgbmFtZTogJ1Byb2R1Y3RQYWdlJyxcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RQYWdlLFxuICAgIHByb3BzOiB0cnVlLFxuICB9LFxuXTtcblxuY29uc3Qgcm91dGVyID0gY3JlYXRlUm91dGVyKHtcbiAgaGlzdG9yeTogY3JlYXRlV2ViSGlzdG9yeSgnL2FwcCcpLFxuICByb3V0ZXMsXG59KTtcblxuLyogZXhwb3J0IGRlZmF1bHQgcm91dGVyOyAqL1xuXG5cblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZSh7XG4gIHN0YXRlICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2FydF9hbW91bnQ6IDAsXG4gICAgICBwcm9kdWN0czogW10sXG4gICAgICBwcm9kdWN0c19pbl9jYXJ0OiB7fSxcbiAgICAgIHByb2R1Y3Q6IHt9LFxuICAgIH1cbiAgfSxcbiAgbXV0YXRpb25zOiB7XG4gICAgY2hhbmdlX2NvdW50KHN0YXRlLCBjb3VudCkge1xuICAgICAgc3RhdGUuY291bnQgPSBjb3VudFxuICAgIH0sXG4gICAgc2V0UHJvZHVjdHMoc3RhdGUsIHByb2R1Y3RzKSB7XG4gICAgICAgIHByb2R1Y3RzLmZvckVhY2goIHByb2R1Y3QgPT4gc3RhdGUucHJvZHVjdHMucHVzaChwcm9kdWN0KSlcbiAgICB9LFxuICAgIHNldFByb2R1Y3RzSW5DYXJ0KHN0YXRlLCBwcm9kdWN0c19pbl9jYXJ0KSB7XG4gICAgICAgIHByb2R1Y3RzX2luX2NhcnQuZm9yRWFjaCggcHJvZHVjdF9pbl9jYXJ0ID0+IFxuICAgICAgICBzdGF0ZS5wcm9kdWN0c19pbl9jYXJ0W3Byb2R1Y3RfaW5fY2FydFsncHJvZHVjdF9pZCddXSA9IHByb2R1Y3RfaW5fY2FydFsncXVhbnRpdHknXSlcbiAgICB9LFxuICAgIGFkZFByb2R1Y3RUb0NhcnQoc3RhdGUsIHByb2R1Y3RfaWQpIHtcbiAgICAgIHN0YXRlLnByb2R1Y3RzX2luX2NhcnRbcHJvZHVjdF9pZC50b1N0cmluZygpXSA9IDFcbiAgICB9LFxuICAgIGRlbGV0ZVByb2R1Y3RGcm9tQ2FydChzdGF0ZSwgcHJvZHVjdF9pZCkge1xuICAgICAgZGVsZXRlIHN0YXRlLnByb2R1Y3RzX2luX2NhcnRbcHJvZHVjdF9pZC50b1N0cmluZygpXVxuICAgIH0sXG4gICAgc2V0Q2FydEFtb3VudChzdGF0ZSwgY2FydF9hbW91bnQpIHtcbiAgICAgIHN0YXRlLmNhcnRfYW1vdW50ID0gY2FydF9hbW91bnQ7XG4gICAgfSxcbiAgICBzZXRQcm9kdWN0KHN0YXRlLCBwcm9kdWN0KSB7XG4gICAgICBcbiAgICB9XG4gIH0sXG4gIGdldHRlcnM6IHtcbiAgICBnZXRQcm9kdWN0QnlpZDogKHN0YXRlKSA9PiAocHJvZHVjdF9pZCkgPT4ge1xuICAgICAgdmFyIHByb2R1Y3QgPSBzdGF0ZS5wcm9kdWN0cy5maW5kKHByID0+IHByWydpZCddID09IHByb2R1Y3RfaWQpO1xuICAgICAgcmV0dXJuIHByb2R1Y3Q7XG4gICAgfVxuICB9XG59KVxuXG5cbi8qIGNvbnN0IHJvdXRlciA9IGNyZWF0ZVJvdXRlcih7IGhpc3Rvcnk6IGNyZWF0ZVdlYkhpc3RvcnkoKSwgcm91dGVzfSkgKi9cbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcChBcHApXG5hcHAudXNlKHN0b3JlKVxuYXBwLnVzZShyb3V0ZXIpXG5cbmFwcC5tb3VudCgnI2FwcCcpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7QUF3QkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFqQ0E7QUEwQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

})