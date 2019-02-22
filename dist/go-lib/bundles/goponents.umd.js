(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/table'), require('rxjs'), require('@angular/common'), require('@angular/core'), require('ngx-toastr')) :
    typeof define === 'function' && define.amd ? define('goponents', ['exports', '@angular/cdk/table', 'rxjs', '@angular/common', '@angular/core', 'ngx-toastr'], factory) :
    (factory((global.goponents = {}),global.ng.cdk.table,global.rxjs,global.ng.common,global.ng.core,global.i1));
}(this, (function (exports,table,rxjs,common,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoAccordionPanelComponent = /** @class */ (function () {
        function GoAccordionPanelComponent() {
            this.expanded = false;
            this.icon = null;
            this.toggle = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        GoAccordionPanelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.expanded = this.expanded || false;
            };
        GoAccordionPanelComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'go-accordion-panel',
                        template: "<div class=\"go-accordion-panel\" [ngClass]=\"{ 'go-accordion-panel--active': expanded, 'go-accordion-panel--inactive': !expanded }\">\n  <header class=\"go-accordion-panel__title-bar\" (click)=\"toggle.emit()\" aria-expanded=\"expanded\">\n    <span class=\"go-accordion-panel__title\">\n      <span *ngIf=\"icon\" class=\"material-icons go-accordion-panel__title-icon\">{{ icon }}</span>\n      <span class=\"go-accordion-panel__title-text\" [innerHtml]=\"title\"></span>\n    </span>\n    <span class=\"go-accordion-panel__control\">\n      <span class=\"material-icons go-accordion-panel__control-icon\">expand_more</span>\n    </span>\n  </header>\n  <div class=\"go-accordion-panel__content-container\">\n    <div class=\"go-accordion-panel__content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>",
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: [".go-accordion-panel__title-bar{cursor:pointer;display:flex;font-size:1.2rem;padding:1.2rem 0;position:relative;transition:.25s cubic-bezier(.25,.8,.25,1)}.go-accordion-panel__title{align-items:center;display:flex;flex-grow:1}.go-accordion-panel__title-icon{display:flex;flex-direction:column;justify-content:center;padding-left:1rem;text-align:center}.go-accordion-panel__title-text{padding-left:1rem}.go-accordion-panel__control{display:flex;flex-direction:column;justify-content:center;padding:0 1rem;text-align:center}.go-accordion-panel__control-icon{transition:.25s cubic-bezier(.25,.8,.25,1)}.go-accordion-panel__content-container{max-height:0;opacity:0;overflow:hidden;visibility:hidden}.go-accordion-panel__content{display:block;padding:0 1rem;transition:.25s cubic-bezier(.25,.8,.25,1)}.go-accordion--theme-light{background:#fff;border:1px solid #b1b1b1;color:#313536}.go-accordion--theme-light .go-accordion-panel--border-top .go-accordion-panel__title-bar,.go-accordion--theme-light go-accordion-panel:last-of-type .go-accordion-panel__title-bar,.go-accordion--theme-light go-accordion-panel:not(:first-of-type) .go-accordion-panel__title-bar{border-top:1px solid #b1b1b1}.go-accordion--theme-light .go-accordion-panel--active .go-accordion-panel__title-bar{background:#f5f5f5}.go-accordion--theme-light .go-accordion-panel--inactive .go-accordion-panel__title-bar{background:#fff}.go-accordion--theme-light .go-accordion-panel__title-bar:hover{background:#ededed}.go-accordion--theme-light .go-accordion-panel__content{color:#313536}.go-accordion--theme-dark{background:#313536;border:1px solid #202626;color:#fff;font-weight:300}.go-accordion--theme-dark .go-accordion-panel--border-top .go-accordion-panel__title-bar,.go-accordion--theme-dark go-accordion-panel:last-of-type .go-accordion-panel__title-bar,.go-accordion--theme-dark go-accordion-panel:not(:first-of-type) .go-accordion-panel__title-bar{border-top:1px solid #202626}.go-accordion--theme-dark .go-accordion-panel--active .go-accordion-panel__title-bar{background:#272b2b}.go-accordion--theme-dark .go-accordion-panel--inactive .go-accordion-panel__title-bar{background:#313536}.go-accordion--theme-dark .go-accordion-panel__title-bar:hover{background:#202323}.go-accordion--theme-dark .go-accordion-panel__content{color:#fff;font-weight:300}go-accordion-panel:last-of-type .go-accordion-panel::before{border-bottom-left-radius:calc(4px - 1px)}go-accordion-panel:last-of-type .go-accordion-panel__title-bar{border-radius:0 0 4px 4px;overflow:hidden}go-accordion-panel:first-of-type .go-accordion-panel::before{border-top-left-radius:calc(4px - 1px)}go-accordion-panel:first-of-type .go-accordion-panel__title-bar{border-radius:4px 4px 0 0;overflow:hidden}.go-accordion-panel{position:relative}.go-accordion-panel::before{background:linear-gradient(to right,#65b360,#52a24d);background-color:#65b360;content:\" \";height:100%;left:0;opacity:0;position:absolute;transition:.25s ease-in;width:4px;z-index:1}.go-accordion-panel.go-accordion-panel--active::before{opacity:1}.go-accordion-panel.go-accordion-panel--active .go-accordion-panel__control .material-icons{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.go-accordion-panel.go-accordion-panel--active .go-accordion-panel__content-container{max-height:1000000px;opacity:1;visibility:visible}.go-accordion-panel.go-accordion-panel--active .go-accordion-panel__content{padding:1.5rem 1rem}.go-accordion-panel.go-accordion-panel--inactive::before{opacity:0}.go-accordion-panel.go-accordion-panel--inactive .go-accordion-panel__control .material-icons{-webkit-transform:rotate(0);transform:rotate(0)}.go-accordion-panel.go-accordion-panel--inactive .go-accordion-panel__content-container{max-height:0;opacity:0;visibility:hidden}.go-accordion--slim .go-accordion-panel__title-bar{font-size:1rem}"]
                    }] }
        ];
        /** @nocollapse */
        GoAccordionPanelComponent.ctorParameters = function () { return []; };
        GoAccordionPanelComponent.propDecorators = {
            expanded: [{ type: i0.Input }],
            icon: [{ type: i0.Input }],
            title: [{ type: i0.Input }],
            toggle: [{ type: i0.Output }]
        };
        return GoAccordionPanelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoAccordionComponent = /** @class */ (function () {
        function GoAccordionComponent() {
            this.expandAll = false;
            this.multiExpand = false;
            this.showIcons = false;
            this.theme = 'light';
        }
        /**
         * @return {?}
         */
        GoAccordionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.setActiveTheme();
                this.multiExpand = this.expandAll || this.multiExpand;
            };
        /**
         * @return {?}
         */
        GoAccordionComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.panels.toArray().forEach(( /**
                 * @param {?} p
                 * @return {?}
                 */function (p) {
                    p.toggle.subscribe(( /**
                     * @return {?}
                     */function () {
                        if (!p.expanded && _this.multiExpand) {
                            _this.openPanel(p);
                        }
                        else if (!p.expanded && !_this.multiExpand) {
                            _this.openPanelCloseOthers(p);
                        }
                        else {
                            _this.closePanel(p);
                        }
                    }));
                    p.expanded = _this.expandAll || p.expanded;
                    p.icon = !_this.showIcons ? null : p.icon;
                }));
            };
        /**
         * @param {?} panel
         * @return {?}
         */
        GoAccordionComponent.prototype.openPanelCloseOthers = /**
         * @param {?} panel
         * @return {?}
         */
            function (panel) {
                var _this = this;
                this.panels.toArray().forEach(( /**
                 * @param {?} p
                 * @return {?}
                 */function (p) {
                    _this.closePanel(p);
                }));
                this.openPanel(panel);
            };
        /**
         * @param {?} panel
         * @return {?}
         */
        GoAccordionComponent.prototype.openPanel = /**
         * @param {?} panel
         * @return {?}
         */
            function (panel) {
                panel.expanded = true;
            };
        /**
         * @param {?} panel
         * @return {?}
         */
        GoAccordionComponent.prototype.closePanel = /**
         * @param {?} panel
         * @return {?}
         */
            function (panel) {
                panel.expanded = false;
            };
        /**
         * @return {?}
         */
        GoAccordionComponent.prototype.setActiveTheme = /**
         * @return {?}
         */
            function () {
                this.activeTheme = 'go-accordion--theme-' + this.theme;
            };
        GoAccordionComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'go-accordion',
                        template: "<div class=\"go-accordion\" [ngClass]=\"[activeTheme]\">\n  <ng-content></ng-content>\n</div>\n",
                        styles: [".go-accordion{border-radius:4px;display:flex;flex-direction:column;min-width:200px}.go-accordion--theme-light{background:#fff;border:1px solid #b1b1b1;color:#313536}"]
                    }] }
        ];
        /** @nocollapse */
        GoAccordionComponent.ctorParameters = function () { return []; };
        GoAccordionComponent.propDecorators = {
            expandAll: [{ type: i0.Input }],
            multiExpand: [{ type: i0.Input }],
            showIcons: [{ type: i0.Input }],
            theme: [{ type: i0.Input }],
            panels: [{ type: i0.ContentChildren, args: [GoAccordionPanelComponent,] }]
        };
        return GoAccordionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoAccordionModule = /** @class */ (function () {
        function GoAccordionModule() {
        }
        GoAccordionModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            GoAccordionComponent,
                            GoAccordionPanelComponent
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            GoAccordionComponent,
                            GoAccordionPanelComponent
                        ]
                    },] }
        ];
        return GoAccordionModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoButtonComponent = /** @class */ (function () {
        function GoButtonComponent() {
            this.handleClick = new i0.EventEmitter();
            this.isProcessing = false;
        }
        // Public Methods
        // Public Methods
        /**
         * @return {?}
         */
        GoButtonComponent.prototype.clicked =
            // Public Methods
            /**
             * @return {?}
             */
            function () {
                if (this.isProcessing) {
                    return;
                }
                this.isProcessing = true;
                this.handleClick.emit(this.isProcessing);
            };
        /**
         * @return {?}
         */
        GoButtonComponent.prototype.classList = /**
         * @return {?}
         */
            function () {
                return {
                    'button__loading': this.isProcessing,
                    'button__disabled': (this.buttonType === 'disabled'),
                    'button__alert': (this.buttonType === 'alert')
                };
            };
        GoButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'go-button',
                        template: "<button class=\"button\"\n        (click)=\"clicked()\"\n        [disabled]=\"isProcessing\"\n        [ngClass]=\"classList()\">\n  <go-icon [icon]=\"buttonIcon\"></go-icon>\n  <ng-content></ng-content>\n</button>\n",
                        styles: [".button{background-color:#65b360;border-radius:2px;color:#fff;font-size:14px;height:44px;padding:14px;text-align:center;transition:.3s}.button:hover{background-color:#448640}.button__loading{background-color:#65b360;position:relative}.button__loading::after{-webkit-animation:.8s ease-in-out infinite loading;animation:.8s ease-in-out infinite loading;border-bottom-left-radius:2px;border-bottom-right-radius:2px;bottom:0;content:'';display:block;height:5px;left:0;position:absolute;width:100%;z-index:1}.button__loading.button__alert{background-color:#ed232b}.button__loading.button__alert::after{-webkit-animation:.8s infinite loading-red;animation:.8s infinite loading-red}.button__disabled{background-color:#ccc;color:#000}.button__disabled:hover{background-color:#999}.button__alert{background-color:#db1f26}.button__alert:hover{background-color:#9d161b}@-webkit-keyframes loading{0%{background:linear-gradient(to right,#488044 0,#579952 0)}5%{background:linear-gradient(to right,#488044 10%,#579952 10%)}10%{background:linear-gradient(to right,#488044 20%,#579952 20%)}15%{background:linear-gradient(to right,#488044 30%,#579952 30%)}20%{background:linear-gradient(to right,#488044 40%,#579952 40%)}25%{background:linear-gradient(to right,#488044 50%,#579952 50%)}30%{background:linear-gradient(to right,#488044 60%,#579952 60%)}35%{background:linear-gradient(to right,#488044 70%,#579952 70%)}40%{background:linear-gradient(to right,#488044 80%,#579952 80%)}45%{background:linear-gradient(to right,#488044 90%,#579952 90%)}50%{background:linear-gradient(to right,#579952 0,#488044 0)}55%{background:linear-gradient(to right,#579952 10%,#488044 10%)}60%{background:linear-gradient(to right,#579952 20%,#488044 20%)}65%{background:linear-gradient(to right,#579952 30%,#488044 30%)}70%{background:linear-gradient(to right,#579952 40%,#488044 40%)}75%{background:linear-gradient(to right,#579952 50%,#488044 50%)}80%{background:linear-gradient(to right,#579952 60%,#488044 60%)}85%{background:linear-gradient(to right,#579952 70%,#488044 70%)}90%{background:linear-gradient(to right,#579952 80%,#488044 80%)}95%{background:linear-gradient(to right,#579952 90%,#488044 90%)}100%{background:linear-gradient(to right,#579952 100%,#488044 100%)}}@keyframes loading{0%{background:linear-gradient(to right,#488044 0,#579952 0)}5%{background:linear-gradient(to right,#488044 10%,#579952 10%)}10%{background:linear-gradient(to right,#488044 20%,#579952 20%)}15%{background:linear-gradient(to right,#488044 30%,#579952 30%)}20%{background:linear-gradient(to right,#488044 40%,#579952 40%)}25%{background:linear-gradient(to right,#488044 50%,#579952 50%)}30%{background:linear-gradient(to right,#488044 60%,#579952 60%)}35%{background:linear-gradient(to right,#488044 70%,#579952 70%)}40%{background:linear-gradient(to right,#488044 80%,#579952 80%)}45%{background:linear-gradient(to right,#488044 90%,#579952 90%)}50%{background:linear-gradient(to right,#579952 0,#488044 0)}55%{background:linear-gradient(to right,#579952 10%,#488044 10%)}60%{background:linear-gradient(to right,#579952 20%,#488044 20%)}65%{background:linear-gradient(to right,#579952 30%,#488044 30%)}70%{background:linear-gradient(to right,#579952 40%,#488044 40%)}75%{background:linear-gradient(to right,#579952 50%,#488044 50%)}80%{background:linear-gradient(to right,#579952 60%,#488044 60%)}85%{background:linear-gradient(to right,#579952 70%,#488044 70%)}90%{background:linear-gradient(to right,#579952 80%,#488044 80%)}95%{background:linear-gradient(to right,#579952 90%,#488044 90%)}100%{background:linear-gradient(to right,#579952 100%,#488044 100%)}}@-webkit-keyframes loading-red{0%{background:linear-gradient(to right,#6a0f12 0,#db1f26 0)}5%{background:linear-gradient(to right,#6a0f12 10%,#db1f26 10%)}10%{background:linear-gradient(to right,#6a0f12 20%,#db1f26 20%)}15%{background:linear-gradient(to right,#6a0f12 30%,#db1f26 30%)}20%{background:linear-gradient(to right,#6a0f12 40%,#db1f26 40%)}25%{background:linear-gradient(to right,#6a0f12 50%,#db1f26 50%)}30%{background:linear-gradient(to right,#6a0f12 60%,#db1f26 60%)}35%{background:linear-gradient(to right,#6a0f12 70%,#db1f26 70%)}40%{background:linear-gradient(to right,#6a0f12 80%,#db1f26 80%)}45%{background:linear-gradient(to right,#6a0f12 90%,#db1f26 90%)}50%{background:linear-gradient(to right,#db1f26 0,#6a0f12 0)}55%{background:linear-gradient(to right,#db1f26 10%,#6a0f12 10%)}60%{background:linear-gradient(to right,#db1f26 20%,#6a0f12 20%)}65%{background:linear-gradient(to right,#db1f26 30%,#6a0f12 30%)}70%{background:linear-gradient(to right,#db1f26 40%,#6a0f12 40%)}75%{background:linear-gradient(to right,#db1f26 50%,#6a0f12 50%)}80%{background:linear-gradient(to right,#db1f26 60%,#6a0f12 60%)}85%{background:linear-gradient(to right,#db1f26 70%,#6a0f12 70%)}90%{background:linear-gradient(to right,#db1f26 80%,#6a0f12 80%)}95%{background:linear-gradient(to right,#db1f26 90%,#6a0f12 90%)}100%{background:linear-gradient(to right,#db1f26 100%,#6a0f12 100%)}}@keyframes loading-red{0%{background:linear-gradient(to right,#6a0f12 0,#db1f26 0)}5%{background:linear-gradient(to right,#6a0f12 10%,#db1f26 10%)}10%{background:linear-gradient(to right,#6a0f12 20%,#db1f26 20%)}15%{background:linear-gradient(to right,#6a0f12 30%,#db1f26 30%)}20%{background:linear-gradient(to right,#6a0f12 40%,#db1f26 40%)}25%{background:linear-gradient(to right,#6a0f12 50%,#db1f26 50%)}30%{background:linear-gradient(to right,#6a0f12 60%,#db1f26 60%)}35%{background:linear-gradient(to right,#6a0f12 70%,#db1f26 70%)}40%{background:linear-gradient(to right,#6a0f12 80%,#db1f26 80%)}45%{background:linear-gradient(to right,#6a0f12 90%,#db1f26 90%)}50%{background:linear-gradient(to right,#db1f26 0,#6a0f12 0)}55%{background:linear-gradient(to right,#db1f26 10%,#6a0f12 10%)}60%{background:linear-gradient(to right,#db1f26 20%,#6a0f12 20%)}65%{background:linear-gradient(to right,#db1f26 30%,#6a0f12 30%)}70%{background:linear-gradient(to right,#db1f26 40%,#6a0f12 40%)}75%{background:linear-gradient(to right,#db1f26 50%,#6a0f12 50%)}80%{background:linear-gradient(to right,#db1f26 60%,#6a0f12 60%)}85%{background:linear-gradient(to right,#db1f26 70%,#6a0f12 70%)}90%{background:linear-gradient(to right,#db1f26 80%,#6a0f12 80%)}95%{background:linear-gradient(to right,#db1f26 90%,#6a0f12 90%)}100%{background:linear-gradient(to right,#db1f26 100%,#6a0f12 100%)}}"]
                    }] }
        ];
        /** @nocollapse */
        GoButtonComponent.ctorParameters = function () { return []; };
        GoButtonComponent.propDecorators = {
            buttonIcon: [{ type: i0.Input }],
            buttonType: [{ type: i0.Input }],
            handleClick: [{ type: i0.Output }]
        };
        return GoButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoIconComponent = /** @class */ (function () {
        function GoIconComponent() {
        }
        GoIconComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'go-icon',
                        template: "<i class=\"material-icons\">{{icon}}</i>\n",
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: [""]
                    }] }
        ];
        GoIconComponent.propDecorators = {
            icon: [{ type: i0.Input }]
        };
        return GoIconComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoIconModule = /** @class */ (function () {
        function GoIconModule() {
        }
        GoIconModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [GoIconComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [GoIconComponent]
                    },] }
        ];
        return GoIconModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoButtonModule = /** @class */ (function () {
        function GoButtonModule() {
        }
        GoButtonModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [GoButtonComponent],
                        imports: [
                            common.CommonModule,
                            GoIconModule
                        ],
                        exports: [GoButtonComponent]
                    },] }
        ];
        return GoButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoCardComponent = /** @class */ (function () {
        function GoCardComponent() {
            this.showHeader = true;
        }
        GoCardComponent.decorators = [
            { type: i0.Component, args: [{
                        encapsulation: i0.ViewEncapsulation.None,
                        selector: 'go-card',
                        template: "<div class=\"card\">\n  <header class=\"card__header\" *ngIf=\"showHeader\">\n    <ng-content select=\"[go-card-header]\"></ng-content>\n  </header>\n  <div class=\"card_content\">\n    <ng-content select=\"[go-card-content]\"></ng-content>\n  </div>\n</div>\n",
                        styles: [".card{background:#fff;border-radius:4px;box-shadow:0 3px 6px rgba(0,0,0,.2);display:flex;flex-direction:column;padding:1rem}.card__header{display:flex;justify-content:space-between;padding-bottom:1rem}.card__action-list{display:flex}.card__action-list li{cursor:pointer;padding:0 .4rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.25s cubic-bezier(.25,.8,.25,1)}.card__action-list li:last-child{padding-right:0}.card__action-list li:hover{color:#65b360}"]
                    }] }
        ];
        GoCardComponent.propDecorators = {
            showHeader: [{ type: i0.Input }]
        };
        return GoCardComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoCardModule = /** @class */ (function () {
        function GoCardModule() {
        }
        GoCardModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [GoCardComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [GoCardComponent]
                    },] }
        ];
        return GoCardModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoTableComponent = /** @class */ (function () {
        function GoTableComponent() {
            this.tableDataSource$ = new rxjs.BehaviorSubject(this.data);
            this.sortDirection = 'sort-up';
        }
        /**
         * @return {?}
         */
        GoTableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.activeColumn = this.sortableColumns[0];
                this.sortByColumn(this.activeColumn);
                if (this.actions && this.columns.indexOf('actions') === -1) {
                    this.columns.push('actions');
                }
            };
        // Public Methods
        // ================================================
        // Public Methods
        // ================================================
        /**
         * @param {?} col
         * @return {?}
         */
        GoTableComponent.prototype.sortByColumn =
            // Public Methods
            // ================================================
            /**
             * @param {?} col
             * @return {?}
             */
            function (col) {
                if (!this.sortableColumns.includes(col)) {
                    return;
                }
                // Update Sort Classes
                this.setSortDirection(col);
                // Sort ascending if Sort down
                if (this.sortDirection === 'sort-up') {
                    this.sortAscending(col);
                }
                else {
                    // Must be sort up, sort descending.
                    this.sortDescending(col);
                }
            };
        /**
         * @param {?} col
         * @return {?}
         */
        GoTableComponent.prototype.sortClass = /**
         * @param {?} col
         * @return {?}
         */
            function (col) {
                return {
                    'sort-up': (this.activeColumn === col && this.sortDirection === 'sort-up'),
                    'sort-down': (this.activeColumn === col && this.sortDirection === 'sort-down')
                };
            };
        // Private Methods
        // ================================================
        // Private Methods
        // ================================================
        /**
         * @private
         * @param {?} col
         * @return {?}
         */
        GoTableComponent.prototype.sortDescending =
            // Private Methods
            // ================================================
            /**
             * @private
             * @param {?} col
             * @return {?}
             */
            function (col) {
                /** @type {?} */
                var sortedData = this.data.sort(( /**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */function (a, b) {
                    if (a[col] < b[col]) {
                        return -1;
                    }
                    if (a[col] > b[col]) {
                        return 1;
                    }
                    return 0;
                }));
                this.updateTableData(sortedData);
            };
        /**
         * @private
         * @param {?} col
         * @return {?}
         */
        GoTableComponent.prototype.sortAscending = /**
         * @private
         * @param {?} col
         * @return {?}
         */
            function (col) {
                /** @type {?} */
                var sortedData = this.data.sort(( /**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */function (a, b) {
                    if (a[col] > b[col]) {
                        return -1;
                    }
                    if (a[col] < b[col]) {
                        return 1;
                    }
                    return 0;
                }));
                this.updateTableData(sortedData);
            };
        /**
         * @private
         * @param {?} data
         * @return {?}
         */
        GoTableComponent.prototype.updateTableData = /**
         * @private
         * @param {?} data
         * @return {?}
         */
            function (data) {
                /** @type {?} */
                var values = Object.keys(data).map(( /**
                 * @param {?} key
                 * @return {?}
                 */function (key) { return data[key]; }));
                this.tableDataSource$.next(values);
            };
        /**
         * @private
         * @param {?} col
         * @return {?}
         */
        GoTableComponent.prototype.setSortDirection = /**
         * @private
         * @param {?} col
         * @return {?}
         */
            function (col) {
                /** @type {?} */
                var currentColumn = this.activeColumn;
                /** @type {?} */
                var sortDirection = this.sortDirection;
                this.activeColumn = col;
                if (sortDirection === 'sort-up' && this.activeColumn === currentColumn) {
                    this.sortDirection = 'sort-down';
                }
                else {
                    this.sortDirection = 'sort-up';
                }
            };
        GoTableComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'go-table',
                        template: "<table cdk-table\n       class=\"tablesaw tablesaw-sortable tablesaw-swipe\"\n       [dataSource]=\"tableDataSource$\">\n\n  <ng-container *ngFor=\"let col of columns\" cdkColumnDef=\"{{col}}\">\n    <ng-container *ngIf=\"col !== 'actions'; else renderActions\">\n      <th cdk-header-cell\n          *cdkHeaderCellDef\n          [ngClass]=\"sortClass(col)\"\n          (click)=\"sortByColumn(col)\">{{col | titlecase}}</th>\n      <td cdk-cell *cdkCellDef=\"let row\">{{row[col]}}</td>\n    </ng-container>\n\n    <ng-template #renderActions>\n      <th cdk-header-cell *cdkHeaderCellDef>Actions</th>\n      <td cdk-cell *cdkCellDef=\"let row\">\n        <a *ngIf=\"actions.edit\" (click)=\"actions.edit(row.id)\">\n          <go-icon icon=\"edit\" class=\"mr2\"></go-icon>\n        </a>\n        <a *ngIf=\"actions.delete\" class=\"false\">\n          <go-icon icon=\"delete\" (click)=\"actions.delete(row.id)\"></go-icon>\n        </a>\n      </td>\n    </ng-template>\n  </ng-container>\n\n  <tr cdk-header-row *cdkHeaderRowDef=\"columns\"></tr>\n  <tr cdk-row *cdkRowDef=\"let row; columns: columns;\"></tr>\n</table>\n",
                        styles: ["th{cursor:pointer;position:relative}th.sort-down::after,th.sort-up::after{border-left:5px solid transparent;border-right:5px solid transparent;content:'';height:0;position:absolute;right:5px;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:0}th.sort-up::after{border-top:5px solid #fff}th.sort-down::after{border-bottom:5px solid #fff}"]
                    }] }
        ];
        /** @nocollapse */
        GoTableComponent.ctorParameters = function () { return []; };
        GoTableComponent.propDecorators = {
            data: [{ type: i0.Input }],
            columns: [{ type: i0.Input }],
            sortableColumns: [{ type: i0.Input }],
            actions: [{ type: i0.Input }]
        };
        return GoTableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoTableModule = /** @class */ (function () {
        function GoTableModule() {
        }
        GoTableModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [GoTableComponent],
                        imports: [
                            table.CdkTableModule,
                            common.CommonModule,
                            GoIconModule
                        ],
                        exports: [GoTableComponent]
                    },] }
        ];
        return GoTableModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoMessageService = /** @class */ (function () {
        function GoMessageService(toastr) {
            this.toastr = toastr;
        }
        /**
         * Show a success message.
         * @param msg
         * @param title
         */
        /**
         * Show a success message.
         * @param {?=} msg
         * @param {?=} title
         * @return {?}
         */
        GoMessageService.prototype.sendMessage = /**
         * Show a success message.
         * @param {?=} msg
         * @param {?=} title
         * @return {?}
         */
            function (msg, title) {
                if (msg === void 0) {
                    msg = '';
                }
                if (title === void 0) {
                    title = 'Success!';
                }
                this.toastr.success(msg, title);
            };
        /**
         * @param {?=} msg
         * @param {?=} title
         * @return {?}
         */
        GoMessageService.prototype.logError = /**
         * @param {?=} msg
         * @param {?=} title
         * @return {?}
         */
            function (msg, title) {
                if (msg === void 0) {
                    msg = '';
                }
                if (title === void 0) {
                    title = 'Something went wrong.';
                }
                this.toastr.error(msg, title);
            };
        GoMessageService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        GoMessageService.ctorParameters = function () {
            return [
                { type: i1.ToastrService }
            ];
        };
        /** @nocollapse */ GoMessageService.ngInjectableDef = i0.defineInjectable({ factory: function GoMessageService_Factory() { return new GoMessageService(i0.inject(i1.ToastrService)); }, token: GoMessageService, providedIn: "root" });
        return GoMessageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoMessageModule = /** @class */ (function () {
        function GoMessageModule() {
        }
        GoMessageModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [],
                        providers: [GoMessageService],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return GoMessageModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoSharedModule = /** @class */ (function () {
        function GoSharedModule() {
        }
        GoSharedModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            GoAccordionModule,
                            GoButtonModule,
                            GoCardModule,
                            GoIconModule,
                            GoTableModule,
                            GoMessageModule
                        ],
                        declarations: [],
                        exports: [
                            GoAccordionModule,
                            GoButtonModule,
                            GoCardModule,
                            GoIconModule,
                            GoTableModule,
                            GoMessageModule
                        ]
                    },] }
        ];
        return GoSharedModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.GoSharedModule = GoSharedModule;
    exports.GoAccordionPanelComponent = GoAccordionPanelComponent;
    exports.GoAccordionComponent = GoAccordionComponent;
    exports.GoAccordionModule = GoAccordionModule;
    exports.GoButtonComponent = GoButtonComponent;
    exports.GoButtonModule = GoButtonModule;
    exports.GoCardComponent = GoCardComponent;
    exports.GoCardModule = GoCardModule;
    exports.GoIconComponent = GoIconComponent;
    exports.GoIconModule = GoIconModule;
    exports.GoTableComponent = GoTableComponent;
    exports.GoTableModule = GoTableModule;
    exports.GoMessageService = GoMessageService;
    exports.GoMessageModule = GoMessageModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=goponents.umd.js.map