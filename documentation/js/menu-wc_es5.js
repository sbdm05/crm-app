'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">crm documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-9586e7df09b38a7a4d6e3071a8c2b1ba798f2e21252b4916349a8f1668b73b2ca13d7e34a438b7874d3a49e283b6df362ae46bb93dd4b3285eb5ce299d78bd4c"' : 'data-target="#xs-components-links-module-AppModule-9586e7df09b38a7a4d6e3071a8c2b1ba798f2e21252b4916349a8f1668b73b2ca13d7e34a438b7874d3a49e283b6df362ae46bb93dd4b3285eb5ce299d78bd4c"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-9586e7df09b38a7a4d6e3071a8c2b1ba798f2e21252b4916349a8f1668b73b2ca13d7e34a438b7874d3a49e283b6df362ae46bb93dd4b3285eb5ce299d78bd4c"' : 'id="xs-components-links-module-AppModule-9586e7df09b38a7a4d6e3071a8c2b1ba798f2e21252b4916349a8f1668b73b2ca13d7e34a438b7874d3a49e283b6df362ae46bb93dd4b3285eb5ce299d78bd4c"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ClientsModule.html\" data-type=\"entity-link\" >ClientsModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ClientsModule-5486becafcf69a7c93db3d7e8fb3102c0169945172701ece12df047677453ebc82c98da9b0f6cd4ba0749b44211a208ee33b5e6f1648004cf967643869c712e4"' : 'data-target="#xs-components-links-module-ClientsModule-5486becafcf69a7c93db3d7e8fb3102c0169945172701ece12df047677453ebc82c98da9b0f6cd4ba0749b44211a208ee33b5e6f1648004cf967643869c712e4"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ClientsModule-5486becafcf69a7c93db3d7e8fb3102c0169945172701ece12df047677453ebc82c98da9b0f6cd4ba0749b44211a208ee33b5e6f1648004cf967643869c712e4"' : 'id="xs-components-links-module-ClientsModule-5486becafcf69a7c93db3d7e8fb3102c0169945172701ece12df047677453ebc82c98da9b0f6cd4ba0749b44211a208ee33b5e6f1648004cf967643869c712e4"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/PageAddClientComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageAddClientComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PageEditClientComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageEditClientComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PageListClientsComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageListClientsComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ClientsRoutingModule.html\" data-type=\"entity-link\" >ClientsRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/CoreModule.html\" data-type=\"entity-link\" >CoreModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-CoreModule-1092b1132ccfea58f53550939582ccf679a604c0801847a2d65bc42a71b9ff5eeb9de49f7aee4432273fbebf7ecf706ec36826bfae112498b464c32a1160b4b5"' : 'data-target="#xs-components-links-module-CoreModule-1092b1132ccfea58f53550939582ccf679a604c0801847a2d65bc42a71b9ff5eeb9de49f7aee4432273fbebf7ecf706ec36826bfae112498b464c32a1160b4b5"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-CoreModule-1092b1132ccfea58f53550939582ccf679a604c0801847a2d65bc42a71b9ff5eeb9de49f7aee4432273fbebf7ecf706ec36826bfae112498b464c32a1160b4b5"' : 'id="xs-components-links-module-CoreModule-1092b1132ccfea58f53550939582ccf679a604c0801847a2d65bc42a71b9ff5eeb9de49f7aee4432273fbebf7ecf706ec36826bfae112498b464c32a1160b4b5"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/FooterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FooterComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/HeaderComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HeaderComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/NavComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NavComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/IconsModule.html\" data-type=\"entity-link\" >IconsModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-IconsModule-d44591e61e043ceddb098eeb472442df2637ce27e1c0b29f0512a87b2989e7134dc36d2958119b4cd8fb30f2983695a31b81925dfc83776a642ef484723fa1e5"' : 'data-target="#xs-components-links-module-IconsModule-d44591e61e043ceddb098eeb472442df2637ce27e1c0b29f0512a87b2989e7134dc36d2958119b4cd8fb30f2983695a31b81925dfc83776a642ef484723fa1e5"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-IconsModule-d44591e61e043ceddb098eeb472442df2637ce27e1c0b29f0512a87b2989e7134dc36d2958119b4cd8fb30f2983695a31b81925dfc83776a642ef484723fa1e5"' : 'id="xs-components-links-module-IconsModule-d44591e61e043ceddb098eeb472442df2637ce27e1c0b29f0512a87b2989e7134dc36d2958119b4cd8fb30f2983695a31b81925dfc83776a642ef484723fa1e5"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/IconCloseComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >IconCloseComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/IconDeleteComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >IconDeleteComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/IconEditComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >IconEditComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/IconNavComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >IconNavComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/LoginModule.html\" data-type=\"entity-link\" >LoginModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-LoginModule-ab399a8799267493e4363f7be8cd626a446f5be5a8b77fcb63973b243f763cc3858ebf80a07f89888915e0557113a76da852313a1857a18ae431fed42dab66de"' : 'data-target="#xs-components-links-module-LoginModule-ab399a8799267493e4363f7be8cd626a446f5be5a8b77fcb63973b243f763cc3858ebf80a07f89888915e0557113a76da852313a1857a18ae431fed42dab66de"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-LoginModule-ab399a8799267493e4363f7be8cd626a446f5be5a8b77fcb63973b243f763cc3858ebf80a07f89888915e0557113a76da852313a1857a18ae431fed42dab66de"' : 'id="xs-components-links-module-LoginModule-ab399a8799267493e4363f7be8cd626a446f5be5a8b77fcb63973b243f763cc3858ebf80a07f89888915e0557113a76da852313a1857a18ae431fed42dab66de"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/PageForgotPasswordComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageForgotPasswordComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PageResetPasswordComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageResetPasswordComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PageSignInComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageSignInComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PageSignUpComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageSignUpComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/LoginRoutingModule.html\" data-type=\"entity-link\" >LoginRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/OrdersModule.html\" data-type=\"entity-link\" >OrdersModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-OrdersModule-bba5968c6569ff242f75cb257db663d82303729a39da3caaa1cd90391d6f0226aaa3250d65cf6c0159b759fb21bfcf70354f8ef7d154956fb10f3600117dd11f"' : 'data-target="#xs-components-links-module-OrdersModule-bba5968c6569ff242f75cb257db663d82303729a39da3caaa1cd90391d6f0226aaa3250d65cf6c0159b759fb21bfcf70354f8ef7d154956fb10f3600117dd11f"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-OrdersModule-bba5968c6569ff242f75cb257db663d82303729a39da3caaa1cd90391d6f0226aaa3250d65cf6c0159b759fb21bfcf70354f8ef7d154956fb10f3600117dd11f"' : 'id="xs-components-links-module-OrdersModule-bba5968c6569ff242f75cb257db663d82303729a39da3caaa1cd90391d6f0226aaa3250d65cf6c0159b759fb21bfcf70354f8ef7d154956fb10f3600117dd11f"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/PageAddOrderComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageAddOrderComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PageEditOrderComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageEditOrderComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PageListOrdersComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageListOrdersComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/OrdersRoutingModule.html\" data-type=\"entity-link\" >OrdersRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PageNotFoundModule.html\" data-type=\"entity-link\" >PageNotFoundModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-PageNotFoundModule-bda1c2c4402c4c1cefdc71a789e17788661772c8d86c7b1ddc6b11e012f114e8fe2096a628cff49823184bc752ea0066ece941e8290ce47e1de98499c8bb1d86"' : 'data-target="#xs-components-links-module-PageNotFoundModule-bda1c2c4402c4c1cefdc71a789e17788661772c8d86c7b1ddc6b11e012f114e8fe2096a628cff49823184bc752ea0066ece941e8290ce47e1de98499c8bb1d86"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-PageNotFoundModule-bda1c2c4402c4c1cefdc71a789e17788661772c8d86c7b1ddc6b11e012f114e8fe2096a628cff49823184bc752ea0066ece941e8290ce47e1de98499c8bb1d86"' : 'id="xs-components-links-module-PageNotFoundModule-bda1c2c4402c4c1cefdc71a789e17788661772c8d86c7b1ddc6b11e012f114e8fe2096a628cff49823184bc752ea0066ece941e8290ce47e1de98499c8bb1d86"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/PageNotFoundComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageNotFoundComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PageNotFoundRoutingModule.html\" data-type=\"entity-link\" >PageNotFoundRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SharedModule.html\" data-type=\"entity-link\" >SharedModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/TemplatesModule.html\" data-type=\"entity-link\" >TemplatesModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' : 'data-target="#xs-components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' : 'id="xs-components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/TemplateContainerComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TemplateContainerComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/TemplateFullWidthComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TemplateFullWidthComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UiModule.html\" data-type=\"entity-link\" >UiModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-UiModule-8c275cd2fa169921c1501c21dff6e97f298e88ff6eb530532c9142f5b420441abb429c8a91d2c2ee8217cc216b9f5279c48443c893538038e733f10c26c9e70a"' : 'data-target="#xs-components-links-module-UiModule-8c275cd2fa169921c1501c21dff6e97f298e88ff6eb530532c9142f5b420441abb429c8a91d2c2ee8217cc216b9f5279c48443c893538038e733f10c26c9e70a"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-UiModule-8c275cd2fa169921c1501c21dff6e97f298e88ff6eb530532c9142f5b420441abb429c8a91d2c2ee8217cc216b9f5279c48443c893538038e733f10c26c9e70a"' : 'id="xs-components-links-module-UiModule-8c275cd2fa169921c1501c21dff6e97f298e88ff6eb530532c9142f5b420441abb429c8a91d2c2ee8217cc216b9f5279c48443c893538038e733f10c26c9e70a"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/Ui2Component.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >Ui2Component</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/UiComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UiComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/Order.html\" data-type=\"entity-link\" >Order</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/OrdersService.html\" data-type=\"entity-link\" >OrdersService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/OrderI.html\" data-type=\"entity-link\" >OrderI</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));