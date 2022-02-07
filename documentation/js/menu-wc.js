'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crm documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-9586e7df09b38a7a4d6e3071a8c2b1ba798f2e21252b4916349a8f1668b73b2ca13d7e34a438b7874d3a49e283b6df362ae46bb93dd4b3285eb5ce299d78bd4c"' : 'data-target="#xs-components-links-module-AppModule-9586e7df09b38a7a4d6e3071a8c2b1ba798f2e21252b4916349a8f1668b73b2ca13d7e34a438b7874d3a49e283b6df362ae46bb93dd4b3285eb5ce299d78bd4c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-9586e7df09b38a7a4d6e3071a8c2b1ba798f2e21252b4916349a8f1668b73b2ca13d7e34a438b7874d3a49e283b6df362ae46bb93dd4b3285eb5ce299d78bd4c"' :
                                            'id="xs-components-links-module-AppModule-9586e7df09b38a7a4d6e3071a8c2b1ba798f2e21252b4916349a8f1668b73b2ca13d7e34a438b7874d3a49e283b6df362ae46bb93dd4b3285eb5ce299d78bd4c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsModule.html" data-type="entity-link" >ClientsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientsModule-5486becafcf69a7c93db3d7e8fb3102c0169945172701ece12df047677453ebc82c98da9b0f6cd4ba0749b44211a208ee33b5e6f1648004cf967643869c712e4"' : 'data-target="#xs-components-links-module-ClientsModule-5486becafcf69a7c93db3d7e8fb3102c0169945172701ece12df047677453ebc82c98da9b0f6cd4ba0749b44211a208ee33b5e6f1648004cf967643869c712e4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientsModule-5486becafcf69a7c93db3d7e8fb3102c0169945172701ece12df047677453ebc82c98da9b0f6cd4ba0749b44211a208ee33b5e6f1648004cf967643869c712e4"' :
                                            'id="xs-components-links-module-ClientsModule-5486becafcf69a7c93db3d7e8fb3102c0169945172701ece12df047677453ebc82c98da9b0f6cd4ba0749b44211a208ee33b5e6f1648004cf967643869c712e4"' }>
                                            <li class="link">
                                                <a href="components/PageAddClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListClientsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListClientsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsRoutingModule.html" data-type="entity-link" >ClientsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-1092b1132ccfea58f53550939582ccf679a604c0801847a2d65bc42a71b9ff5eeb9de49f7aee4432273fbebf7ecf706ec36826bfae112498b464c32a1160b4b5"' : 'data-target="#xs-components-links-module-CoreModule-1092b1132ccfea58f53550939582ccf679a604c0801847a2d65bc42a71b9ff5eeb9de49f7aee4432273fbebf7ecf706ec36826bfae112498b464c32a1160b4b5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-1092b1132ccfea58f53550939582ccf679a604c0801847a2d65bc42a71b9ff5eeb9de49f7aee4432273fbebf7ecf706ec36826bfae112498b464c32a1160b4b5"' :
                                            'id="xs-components-links-module-CoreModule-1092b1132ccfea58f53550939582ccf679a604c0801847a2d65bc42a71b9ff5eeb9de49f7aee4432273fbebf7ecf706ec36826bfae112498b464c32a1160b4b5"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link" >IconsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IconsModule-d44591e61e043ceddb098eeb472442df2637ce27e1c0b29f0512a87b2989e7134dc36d2958119b4cd8fb30f2983695a31b81925dfc83776a642ef484723fa1e5"' : 'data-target="#xs-components-links-module-IconsModule-d44591e61e043ceddb098eeb472442df2637ce27e1c0b29f0512a87b2989e7134dc36d2958119b4cd8fb30f2983695a31b81925dfc83776a642ef484723fa1e5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IconsModule-d44591e61e043ceddb098eeb472442df2637ce27e1c0b29f0512a87b2989e7134dc36d2958119b4cd8fb30f2983695a31b81925dfc83776a642ef484723fa1e5"' :
                                            'id="xs-components-links-module-IconsModule-d44591e61e043ceddb098eeb472442df2637ce27e1c0b29f0512a87b2989e7134dc36d2958119b4cd8fb30f2983695a31b81925dfc83776a642ef484723fa1e5"' }>
                                            <li class="link">
                                                <a href="components/IconCloseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconCloseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconNavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-ab399a8799267493e4363f7be8cd626a446f5be5a8b77fcb63973b243f763cc3858ebf80a07f89888915e0557113a76da852313a1857a18ae431fed42dab66de"' : 'data-target="#xs-components-links-module-LoginModule-ab399a8799267493e4363f7be8cd626a446f5be5a8b77fcb63973b243f763cc3858ebf80a07f89888915e0557113a76da852313a1857a18ae431fed42dab66de"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-ab399a8799267493e4363f7be8cd626a446f5be5a8b77fcb63973b243f763cc3858ebf80a07f89888915e0557113a76da852313a1857a18ae431fed42dab66de"' :
                                            'id="xs-components-links-module-LoginModule-ab399a8799267493e4363f7be8cd626a446f5be5a8b77fcb63973b243f763cc3858ebf80a07f89888915e0557113a76da852313a1857a18ae431fed42dab66de"' }>
                                            <li class="link">
                                                <a href="components/PageForgotPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageResetPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageResetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link" >LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrdersModule-bba5968c6569ff242f75cb257db663d82303729a39da3caaa1cd90391d6f0226aaa3250d65cf6c0159b759fb21bfcf70354f8ef7d154956fb10f3600117dd11f"' : 'data-target="#xs-components-links-module-OrdersModule-bba5968c6569ff242f75cb257db663d82303729a39da3caaa1cd90391d6f0226aaa3250d65cf6c0159b759fb21bfcf70354f8ef7d154956fb10f3600117dd11f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdersModule-bba5968c6569ff242f75cb257db663d82303729a39da3caaa1cd90391d6f0226aaa3250d65cf6c0159b759fb21bfcf70354f8ef7d154956fb10f3600117dd11f"' :
                                            'id="xs-components-links-module-OrdersModule-bba5968c6569ff242f75cb257db663d82303729a39da3caaa1cd90391d6f0226aaa3250d65cf6c0159b759fb21bfcf70354f8ef7d154956fb10f3600117dd11f"' }>
                                            <li class="link">
                                                <a href="components/PageAddOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListOrdersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersRoutingModule.html" data-type="entity-link" >OrdersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-bda1c2c4402c4c1cefdc71a789e17788661772c8d86c7b1ddc6b11e012f114e8fe2096a628cff49823184bc752ea0066ece941e8290ce47e1de98499c8bb1d86"' : 'data-target="#xs-components-links-module-PageNotFoundModule-bda1c2c4402c4c1cefdc71a789e17788661772c8d86c7b1ddc6b11e012f114e8fe2096a628cff49823184bc752ea0066ece941e8290ce47e1de98499c8bb1d86"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-bda1c2c4402c4c1cefdc71a789e17788661772c8d86c7b1ddc6b11e012f114e8fe2096a628cff49823184bc752ea0066ece941e8290ce47e1de98499c8bb1d86"' :
                                            'id="xs-components-links-module-PageNotFoundModule-bda1c2c4402c4c1cefdc71a789e17788661772c8d86c7b1ddc6b11e012f114e8fe2096a628cff49823184bc752ea0066ece941e8290ce47e1de98499c8bb1d86"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link" >PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatesModule.html" data-type="entity-link" >TemplatesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' : 'data-target="#xs-components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' :
                                            'id="xs-components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' }>
                                            <li class="link">
                                                <a href="components/TemplateContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemplateFullWidthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateFullWidthComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-8c275cd2fa169921c1501c21dff6e97f298e88ff6eb530532c9142f5b420441abb429c8a91d2c2ee8217cc216b9f5279c48443c893538038e733f10c26c9e70a"' : 'data-target="#xs-components-links-module-UiModule-8c275cd2fa169921c1501c21dff6e97f298e88ff6eb530532c9142f5b420441abb429c8a91d2c2ee8217cc216b9f5279c48443c893538038e733f10c26c9e70a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-8c275cd2fa169921c1501c21dff6e97f298e88ff6eb530532c9142f5b420441abb429c8a91d2c2ee8217cc216b9f5279c48443c893538038e733f10c26c9e70a"' :
                                            'id="xs-components-links-module-UiModule-8c275cd2fa169921c1501c21dff6e97f298e88ff6eb530532c9142f5b420441abb429c8a91d2c2ee8217cc216b9f5279c48443c893538038e733f10c26c9e70a"' }>
                                            <li class="link">
                                                <a href="components/Ui2Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Ui2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/OrdersService.html" data-type="entity-link" >OrdersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/OrderI.html" data-type="entity-link" >OrderI</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});