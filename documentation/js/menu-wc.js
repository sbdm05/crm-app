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
                                            'data-target="#components-links-module-AppModule-4949de6c8de204426c9ac1bb1a246e7591c1bfd7e6f3166aaa5ffdf2f3dfa5de5ca443ba8c7b4e5a5e07a59c7a127861435ec1777ce7dfc9313677f95e895ad4"' : 'data-target="#xs-components-links-module-AppModule-4949de6c8de204426c9ac1bb1a246e7591c1bfd7e6f3166aaa5ffdf2f3dfa5de5ca443ba8c7b4e5a5e07a59c7a127861435ec1777ce7dfc9313677f95e895ad4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4949de6c8de204426c9ac1bb1a246e7591c1bfd7e6f3166aaa5ffdf2f3dfa5de5ca443ba8c7b4e5a5e07a59c7a127861435ec1777ce7dfc9313677f95e895ad4"' :
                                            'id="xs-components-links-module-AppModule-4949de6c8de204426c9ac1bb1a246e7591c1bfd7e6f3166aaa5ffdf2f3dfa5de5ca443ba8c7b4e5a5e07a59c7a127861435ec1777ce7dfc9313677f95e895ad4"' }>
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
                                            'data-target="#components-links-module-ClientsModule-5e9535d732efa7464d6eec30bbe5c3acca4bf42f9b625702b60748c625ecc74b1b21f0c027e6e65ecb7cb03190ca7801a1b21af1692591ba57d5b9a3552bcc70"' : 'data-target="#xs-components-links-module-ClientsModule-5e9535d732efa7464d6eec30bbe5c3acca4bf42f9b625702b60748c625ecc74b1b21f0c027e6e65ecb7cb03190ca7801a1b21af1692591ba57d5b9a3552bcc70"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientsModule-5e9535d732efa7464d6eec30bbe5c3acca4bf42f9b625702b60748c625ecc74b1b21f0c027e6e65ecb7cb03190ca7801a1b21af1692591ba57d5b9a3552bcc70"' :
                                            'id="xs-components-links-module-ClientsModule-5e9535d732efa7464d6eec30bbe5c3acca4bf42f9b625702b60748c625ecc74b1b21f0c027e6e65ecb7cb03190ca7801a1b21af1692591ba57d5b9a3552bcc70"' }>
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
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link" >IconsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-679f244c7b02f173288348f7d12b84c7723e67a3973f4603f6623e9a198c7c13ada90ba125a763200f94b33176e28a1fb81e68a56199ec39f026a1cd30237d13"' : 'data-target="#xs-components-links-module-LoginModule-679f244c7b02f173288348f7d12b84c7723e67a3973f4603f6623e9a198c7c13ada90ba125a763200f94b33176e28a1fb81e68a56199ec39f026a1cd30237d13"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-679f244c7b02f173288348f7d12b84c7723e67a3973f4603f6623e9a198c7c13ada90ba125a763200f94b33176e28a1fb81e68a56199ec39f026a1cd30237d13"' :
                                            'id="xs-components-links-module-LoginModule-679f244c7b02f173288348f7d12b84c7723e67a3973f4603f6623e9a198c7c13ada90ba125a763200f94b33176e28a1fb81e68a56199ec39f026a1cd30237d13"' }>
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
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrdersModule-a58d061fccf8455398025db5575d3489b0fd4b9c8225ba698f37519556d98c121e1f4310cdcfa720532a60ede7dac6bdd26d979a677fcdb8786efa56f4386655"' : 'data-target="#xs-components-links-module-OrdersModule-a58d061fccf8455398025db5575d3489b0fd4b9c8225ba698f37519556d98c121e1f4310cdcfa720532a60ede7dac6bdd26d979a677fcdb8786efa56f4386655"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdersModule-a58d061fccf8455398025db5575d3489b0fd4b9c8225ba698f37519556d98c121e1f4310cdcfa720532a60ede7dac6bdd26d979a677fcdb8786efa56f4386655"' :
                                            'id="xs-components-links-module-OrdersModule-a58d061fccf8455398025db5575d3489b0fd4b9c8225ba698f37519556d98c121e1f4310cdcfa720532a60ede7dac6bdd26d979a677fcdb8786efa56f4386655"' }>
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
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-cc683b6c5a8ef7239fba2a5605a6c37190837df152f085693a2a7d923d9e74b52dbca11fcbcc834919249ceda6200a8f28022fb044e9ad167ea0fc16823a78df"' : 'data-target="#xs-components-links-module-PageNotFoundModule-cc683b6c5a8ef7239fba2a5605a6c37190837df152f085693a2a7d923d9e74b52dbca11fcbcc834919249ceda6200a8f28022fb044e9ad167ea0fc16823a78df"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-cc683b6c5a8ef7239fba2a5605a6c37190837df152f085693a2a7d923d9e74b52dbca11fcbcc834919249ceda6200a8f28022fb044e9ad167ea0fc16823a78df"' :
                                            'id="xs-components-links-module-PageNotFoundModule-cc683b6c5a8ef7239fba2a5605a6c37190837df152f085693a2a7d923d9e74b52dbca11fcbcc834919249ceda6200a8f28022fb044e9ad167ea0fc16823a78df"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatesModule.html" data-type="entity-link" >TemplatesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
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