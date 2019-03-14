(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api-base.ts":
/*!*****************************!*\
  !*** ./src/app/api-base.ts ***!
  \*****************************/
/*! exports provided: APIBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIBase", function() { return APIBase; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/*
Copyright (c) 2019 Álan Crístoffer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/



var APIBase = /** @class */ (function () {
    function APIBase(http) {
        this.http = http;
        APIBase.token.subscribe(function (token) { return APIBase.accessToken = token; });
    }
    APIBase.prototype.doGet = function (url) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + APIBase.accessToken
        });
        var options = { headers: headers };
        var observable = this.http.get(url, options);
        return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    APIBase.prototype.doPost = function (url, data, type) {
        if (type === void 0) { type = 'application/json'; }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Accept': type,
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + APIBase.accessToken
        });
        var options = { headers: headers };
        var observable = this.http.post(url, data, options);
        return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    APIBase.prototype.urlFor = function (path) {
        // return `http://localhost:5000${path}`; // development
        return "/api" + path; // production
    };
    APIBase.accessToken = null;
    APIBase.token = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    APIBase.user = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    return APIBase;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connect_connect_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connect/connect.component */ "./src/app/connect/connect.component.ts");
/* harmony import */ var _manage_admins_manage_admins_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-admins/manage-admins.component */ "./src/app/manage-admins/manage-admins.component.ts");
/* harmony import */ var _manage_groups_manage_groups_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-groups/manage-groups.component */ "./src/app/manage-groups/manage-groups.component.ts");
/* harmony import */ var _manage_polices_manage_polices_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-polices/manage-polices.component */ "./src/app/manage-polices/manage-polices.component.ts");
/* harmony import */ var _manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-users/manage-users.component */ "./src/app/manage-users/manage-users.component.ts");
/* harmony import */ var _manage_quotas_manage_quotas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manage-quotas/manage-quotas.component */ "./src/app/manage-quotas/manage-quotas.component.ts");
/* harmony import */ var _quota_quota_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quota/quota.component */ "./src/app/quota/quota.component.ts");
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./jobs/jobs.component */ "./src/app/jobs/jobs.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        redirectTo: 'connect',
        pathMatch: 'full'
    },
    {
        path: 'connect',
        component: _connect_connect_component__WEBPACK_IMPORTED_MODULE_2__["ConnectComponent"]
    },
    {
        path: 'manage-groups',
        component: _manage_groups_manage_groups_component__WEBPACK_IMPORTED_MODULE_4__["ManageGroupsComponent"]
    },
    {
        path: 'manage-polices',
        component: _manage_polices_manage_polices_component__WEBPACK_IMPORTED_MODULE_5__["ManagePolicesComponent"]
    },
    {
        path: 'manage-users',
        component: _manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_6__["ManageUsersComponent"]
    },
    {
        path: 'manage-admins',
        component: _manage_admins_manage_admins_component__WEBPACK_IMPORTED_MODULE_3__["ManageAdminsComponent"]
    },
    {
        path: 'manage-quotas',
        component: _manage_quotas_manage_quotas_component__WEBPACK_IMPORTED_MODULE_7__["ManageQuotasComponent"]
    },
    {
        path: 'quota',
        component: _quota_quota_component__WEBPACK_IMPORTED_MODULE_8__["QuotaComponent"]
    },
    {
        path: 'jobs',
        component: _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_9__["JobsComponent"]
    },
    {
        path: 'reports',
        component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_10__["ReportsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/app.component */ "./src/app/app/app.component.ts");
/* harmony import */ var _connect_connect_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./connect/connect.component */ "./src/app/connect/connect.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _translation_translation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./translation/translation */ "./src/app/translation/translation.ts");
/* harmony import */ var _translation_translation_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./translation/translation.pipe */ "./src/app/translation/translation.pipe.ts");
/* harmony import */ var _translation_translation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./translation/translation.service */ "./src/app/translation/translation.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _manage_groups_manage_groups_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./manage-groups/manage-groups.component */ "./src/app/manage-groups/manage-groups.component.ts");
/* harmony import */ var _manage_polices_manage_polices_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manage-polices/manage-polices.component */ "./src/app/manage-polices/manage-polices.component.ts");
/* harmony import */ var _manage_polices_dialog_manage_polices_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./manage-polices-dialog/manage-polices-dialog.component */ "./src/app/manage-polices-dialog/manage-polices-dialog.component.ts");
/* harmony import */ var _manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./manage-users/manage-users.component */ "./src/app/manage-users/manage-users.component.ts");
/* harmony import */ var _manage_users_dialog_manage_users_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./manage-users-dialog/manage-users-dialog.component */ "./src/app/manage-users-dialog/manage-users-dialog.component.ts");
/* harmony import */ var _manage_admins_manage_admins_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./manage-admins/manage-admins.component */ "./src/app/manage-admins/manage-admins.component.ts");
/* harmony import */ var _manage_admins_dialog_manage_admins_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./manage-admins-dialog/manage-admins-dialog.component */ "./src/app/manage-admins-dialog/manage-admins-dialog.component.ts");
/* harmony import */ var _manage_quotas_dialog_manage_quotas_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./manage-quotas-dialog/manage-quotas-dialog.component */ "./src/app/manage-quotas-dialog/manage-quotas-dialog.component.ts");
/* harmony import */ var _manage_quotas_manage_quotas_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./manage-quotas/manage-quotas.component */ "./src/app/manage-quotas/manage-quotas.component.ts");
/* harmony import */ var _quota_quota_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./quota/quota.component */ "./src/app/quota/quota.component.ts");
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./jobs/jobs.component */ "./src/app/jobs/jobs.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _translation_translation_pipe__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_10__["ToolbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _connect_connect_component__WEBPACK_IMPORTED_MODULE_8__["ConnectComponent"],
                _manage_groups_manage_groups_component__WEBPACK_IMPORTED_MODULE_15__["ManageGroupsComponent"],
                _manage_polices_manage_polices_component__WEBPACK_IMPORTED_MODULE_16__["ManagePolicesComponent"],
                _manage_polices_dialog_manage_polices_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ManagePolicesDialogComponent"],
                _manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_18__["ManageUsersComponent"],
                _manage_users_dialog_manage_users_dialog_component__WEBPACK_IMPORTED_MODULE_19__["ManageUsersDialogComponent"],
                _manage_admins_manage_admins_component__WEBPACK_IMPORTED_MODULE_20__["ManageAdminsComponent"],
                _manage_admins_dialog_manage_admins_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ManageAdminsDialogComponent"],
                _manage_quotas_dialog_manage_quotas_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ManageQuotasDialogComponent"],
                _manage_quotas_manage_quotas_component__WEBPACK_IMPORTED_MODULE_23__["ManageQuotasComponent"],
                _quota_quota_component__WEBPACK_IMPORTED_MODULE_24__["QuotaComponent"],
                _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_25__["JobsComponent"],
                _reports_reports_component__WEBPACK_IMPORTED_MODULE_26__["ReportsComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"]
            ],
            providers: [
                _translation_translation__WEBPACK_IMPORTED_MODULE_11__["TRANSLATION_PROVIDERS"],
                _translation_translation_service__WEBPACK_IMPORTED_MODULE_13__["TranslateService"]
            ],
            bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [_manage_polices_dialog_manage_polices_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ManagePolicesDialogComponent"], _manage_users_dialog_manage_users_dialog_component__WEBPACK_IMPORTED_MODULE_19__["ManageUsersDialogComponent"], _manage_admins_dialog_manage_admins_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ManageAdminsDialogComponent"], _manage_quotas_dialog_manage_quotas_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ManageQuotasDialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app/app.component.html":
/*!****************************************!*\
  !*** ./src/app/app/app.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<q-toolbar></q-toolbar>\n<mat-sidenav-container>\n  <mat-sidenav #sidenav mode=\"side\" [opened]=\"true\">\n    <q-sidebar></q-sidebar>\n  </mat-sidenav>\n  <router-outlet></router-outlet>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/app/app.component.scss":
/*!****************************************!*\
  !*** ./src/app/app/app.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\n * Copyright (c) 2019 Álan Crístoffer\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n"

/***/ }),

/***/ "./src/app/app/app.component.ts":
/*!**************************************!*\
  !*** ./src/app/app/app.component.ts ***!
  \**************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _translation_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../translation/translation.service */ "./src/app/translation/translation.service.ts");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-base */ "./src/app/api-base.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(translate, router) {
        this.translate = translate;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var lang = localStorage.getItem('language') || 'en';
        this.translate.use(lang);
        document.getElementsByTagName('body')[0].removeAttribute('unresolved');
        if (_api_base__WEBPACK_IMPORTED_MODULE_2__["APIBase"].accessToken == null) {
            this.router.navigate(['connect']);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'q-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_translation_translation_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/connect.service.ts":
/*!************************************!*\
  !*** ./src/app/connect.service.ts ***!
  \************************************/
/*! exports provided: ConnectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectService", function() { return ConnectService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-base */ "./src/app/api-base.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConnectService = /** @class */ (function (_super) {
    __extends(ConnectService, _super);
    function ConnectService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    ConnectService.prototype.auth = function (username, password) {
        var url = this.urlFor('/auth');
        return this.doPost(url, { username: username, password: password });
    };
    ConnectService.prototype.setOwnPassword = function (password) {
        var url = this.urlFor('/set-own-password');
        return this.doPost(url, { 'password': password });
    };
    ConnectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ConnectService);
    return ConnectService;
}(_api_base__WEBPACK_IMPORTED_MODULE_2__["APIBase"]));



/***/ }),

/***/ "./src/app/connect/connect.component.html":
/*!************************************************!*\
  !*** ./src/app/connect/connect.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div flex-col class=\"connect-wrapper\">\n  <mat-card *ngIf=\"!isLoggedIn()\">\n    <mat-card-title>\n      {{ 'Connect' | translate }}\n    </mat-card-title>\n    <mat-card-content>\n      <form action=\"#\">\n        <mat-form-field class=\"width-100\">\n          <input matInput name=\"username\" autocomplete=\"username\" [placeholder]=\"'Username' | translate\" [(ngModel)]=\"username\"\n            (keydown.enter)=\"connect()\" autofocus>\n        </mat-form-field>\n\n        <mat-form-field class=\"width-100\">\n          <input type=\"password\" name=\"password\" matInput autocomplete=\"current-password\" [placeholder]=\"'Password' | translate\"\n            [(ngModel)]=\"password\" (keydown.enter)=\"connect()\">\n        </mat-form-field>\n\n        <button class=\"width-100\" [disabled]='working' mat-flat-button color=\"primary\" (click)=\"connect()\">\n          {{ 'Connect' | translate }}\n        </button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card *ngIf=\"isLoggedIn()\">\n    <mat-card-title>\n      {{ 'Set Password' | translate }}\n    </mat-card-title>\n    <mat-card-content>\n      <form>\n        <input type=\"text\" name=\"username\" [value]=\"username\" autocomplete=\"username\" style=\"display: none\">\n\n        <mat-form-field class=\"width-100\">\n          <input type=\"password\" name=\"password\" autocomplete=\"current-password\" matInput [placeholder]=\"'Password' | translate\"\n            [(ngModel)]=\"password\" (keydown.enter)=\"setPassword()\">\n        </mat-form-field>\n\n        <mat-form-field class=\"width-100\">\n          <input type=\"password\" name=\"new-password\" autocomplete=\"new-password\" matInput [placeholder]=\"'Password' | translate\"\n            [(ngModel)]=\"confPassword\" (keydown.enter)=\"setPassword()\">\n        </mat-form-field>\n\n        <button class=\"width-100\" [disabled]='working' mat-flat-button color=\"primary\" (click)=\"setPassword()\">\n          {{ 'Save' | translate }}\n        </button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/connect/connect.component.scss":
/*!************************************************!*\
  !*** ./src/app/connect/connect.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\n * Copyright (c) 2019 Álan Crístoffer\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n.connect-wrapper {\n  display: block;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  padding: 1rem;\n  overflow: auto; }\ndiv[stretch] {\n  min-height: 1rem; }\nmat-card {\n  margin: auto;\n  min-width: 400px; }\nmat-card a {\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/connect/connect.component.ts":
/*!**********************************************!*\
  !*** ./src/app/connect/connect.component.ts ***!
  \**********************************************/
/*! exports provided: ConnectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectComponent", function() { return ConnectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _connect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../connect.service */ "./src/app/connect.service.ts");
/* harmony import */ var _translation_translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../translation/translation.service */ "./src/app/translation/translation.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConnectComponent = /** @class */ (function () {
    function ConnectComponent(service, i18n, toast) {
        this.service = service;
        this.i18n = i18n;
        this.toast = toast;
        this.working = false;
    }
    ConnectComponent.prototype.isLoggedIn = function () {
        return _connect_service__WEBPACK_IMPORTED_MODULE_1__["ConnectService"].accessToken != null;
    };
    ConnectComponent.prototype.connect = function () {
        var _this = this;
        this.service.auth(this.username, this.password).subscribe(function (ret) {
            var user = ret['user'];
            var token = ret['token'];
            _connect_service__WEBPACK_IMPORTED_MODULE_1__["ConnectService"].user.next(user);
            _connect_service__WEBPACK_IMPORTED_MODULE_1__["ConnectService"].token.next(token);
            _this.password = '';
            _this.confPassword = '';
        }, this.httpError());
    };
    ConnectComponent.prototype.setPassword = function () {
        var _this = this;
        if (this.password.length < 4 || this.password !== this.confPassword) {
            return;
        }
        this.service.setOwnPassword(this.password).subscribe(function () {
            var message = _this.i18n.instant('Done');
            _this.toast.open(message, null, { duration: 2000 });
            _this.password = _this.confPassword = '';
        }, this.httpError());
    };
    ConnectComponent.prototype.httpError = function () {
        var _this = this;
        var self = this;
        return function (error) {
            _this.working = false;
            if (!error.ok) {
                var str = void 0;
                if (error.status === 403) {
                    str = 'Wrong password.';
                }
                else {
                    str = 'Error when connecting. Check address and try again.';
                }
                var message = self.i18n.instant(str);
                self.toast.open(message, null, { duration: 2000 });
            }
        };
    };
    ConnectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'q-connect',
            template: __webpack_require__(/*! ./connect.component.html */ "./src/app/connect/connect.component.html"),
            styles: [__webpack_require__(/*! ./connect.component.scss */ "./src/app/connect/connect.component.scss")]
        }),
        __metadata("design:paramtypes", [_connect_service__WEBPACK_IMPORTED_MODULE_1__["ConnectService"],
            _translation_translation_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], ConnectComponent);
    return ConnectComponent;
}());



/***/ }),

/***/ "./src/app/jobs.service.ts":
/*!*********************************!*\
  !*** ./src/app/jobs.service.ts ***!
  \*********************************/
/*! exports provided: JobsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsService", function() { return JobsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-base */ "./src/app/api-base.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobsService = /** @class */ (function (_super) {
    __extends(JobsService, _super);
    function JobsService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    JobsService.prototype.listJobs = function () {
        var url = this.urlFor('/job');
        return this.doGet(url);
    };
    JobsService.prototype.getJobs = function () {
        var url = this.urlFor('/job/get');
        return this.doGet(url);
    };
    JobsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], JobsService);
    return JobsService;
}(_api_base__WEBPACK_IMPORTED_MODULE_2__["APIBase"]));



/***/ }),

/***/ "./src/app/jobs/jobs.component.html":
/*!******************************************!*\
  !*** ./src/app/jobs/jobs.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div flex-col>\n  <div id=\"jobs\">\n    <mat-card>\n      <mat-card-title>\n        {{ 'My Jobs' | translate }}\n      </mat-card-title>\n      <mat-card-content>\n        <table mat-table [dataSource]=\"jobs\" class=\"mat-elevation-z8\">\n          <ng-container matColumnDef=\"status\">\n            <th mat-header-cell *matHeaderCellDef> Status </th>\n            <td mat-cell *matCellDef=\"let job\"> {{ job.status }} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"user\">\n            <th mat-header-cell *matHeaderCellDef> {{ 'User' | translate }} </th>\n            <td mat-cell *matCellDef=\"let job\"> {{ job.user }} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"job\">\n            <th mat-header-cell *matHeaderCellDef> {{ 'Job' | translate }} </th>\n            <td mat-cell *matCellDef=\"let job\"> {{ job.job }} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"title\">\n            <th mat-header-cell *matHeaderCellDef> {{ 'Title' | translate }} </th>\n            <td mat-cell *matCellDef=\"let job\"> {{ job.title }} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"copies\">\n            <th mat-header-cell *matHeaderCellDef> {{ 'Copies' | translate }} </th>\n            <td mat-cell *matCellDef=\"let job\"> {{ job.copies }} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"pages\">\n            <th mat-header-cell *matHeaderCellDef> {{ 'Pages' | translate }} </th>\n            <td mat-cell *matCellDef=\"let job\"> {{ job.pages }} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"time\">\n            <th mat-header-cell *matHeaderCellDef> {{ 'Pages' | translate }} </th>\n            <td mat-cell *matCellDef=\"let job\"> {{ job.time | date }} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/jobs/jobs.component.scss":
/*!******************************************!*\
  !*** ./src/app/jobs/jobs.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\n * Copyright (c) 2019 Álan Crístoffer\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n#jobs {\n  margin: auto;\n  padding: 1rem;\n  min-width: 900px;\n  max-width: 90%; }\n#jobs mat-card {\n    margin: 1rem; }\n#jobs mat-form-field {\n    margin-right: 1rem; }\n"

/***/ }),

/***/ "./src/app/jobs/jobs.component.ts":
/*!****************************************!*\
  !*** ./src/app/jobs/jobs.component.ts ***!
  \****************************************/
/*! exports provided: JobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsComponent", function() { return JobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _jobs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jobs.service */ "./src/app/jobs.service.ts");
/* harmony import */ var _translation_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translation/translation.service */ "./src/app/translation/translation.service.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobsComponent = /** @class */ (function () {
    function JobsComponent(service, i18n, toast) {
        var _this = this;
        this.service = service;
        this.i18n = i18n;
        this.toast = toast;
        this.displayedColumns = ['status', 'user', 'job', 'title', 'copies', 'pages'];
        this.jobs = [];
        this.service.getJobs().subscribe(function (jobs) { return _this.jobs = jobs; }, this.httpError());
    }
    JobsComponent.prototype.httpError = function () {
        var _this = this;
        return function () {
            var str = 'Connection error.';
            var message = _this.i18n.instant(str);
            _this.toast.open(message, null, { duration: 2000 });
        };
    };
    JobsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'q-jobs',
            template: __webpack_require__(/*! ./jobs.component.html */ "./src/app/jobs/jobs.component.html"),
            styles: [__webpack_require__(/*! ./jobs.component.scss */ "./src/app/jobs/jobs.component.scss")]
        }),
        __metadata("design:paramtypes", [_jobs_service__WEBPACK_IMPORTED_MODULE_2__["JobsService"],
            _translation_translation_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], JobsComponent);
    return JobsComponent;
}());



/***/ }),

/***/ "./src/app/manage-admins-dialog/manage-admins-dialog.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/manage-admins-dialog/manage-admins-dialog.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-title>\n  {{ 'Admin' | translate }}\n</mat-card-title>\n<mat-card-content id=\"manage-admins-dialog\">\n  <form flex-col>\n    <mat-form-field class=\"width-100\">\n      <input matInput name=\"name\" [placeholder]=\"'Name' | translate\" [(ngModel)]=\"user.name\">\n    </mat-form-field>\n\n    <mat-form-field class=\"width-100\">\n      <input matInput name=\"username\" autocomplete=\"username\" [placeholder]=\"'Username' | translate\" [(ngModel)]=\"user.username\">\n    </mat-form-field>\n\n    <mat-form-field class=\"width-100\">\n      <input matInput name=\"password\" autocomplete=\"new-password\" type=\"password\" [placeholder]=\"'Password' | translate\"\n        [(ngModel)]=\"user.password\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select name=\"permissions\" [placeholder]=\"'Permissions' | translate\" [(ngModel)]=\"user.permissions\" multiple>\n        <mat-option *ngFor=\"let permission of permissions\" [value]=\"permission\">\n          {{ p2s(permission) | translate }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </form>\n</mat-card-content>\n<mat-card-actions>\n  <button mat-flat-button color=\"primary\" (click)=\"save()\">{{ 'Save' | translate }}</button>\n  <button mat-stroked-button (click)=\"cancel()\">{{ 'Cancel' | translate }}</button>\n</mat-card-actions>\n"

/***/ }),

/***/ "./src/app/manage-admins-dialog/manage-admins-dialog.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/manage-admins-dialog/manage-admins-dialog.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\n * Copyright (c) 2019 Álan Crístoffer\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n"

/***/ }),

/***/ "./src/app/manage-admins-dialog/manage-admins-dialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/manage-admins-dialog/manage-admins-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: ManageAdminsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAdminsDialogComponent", function() { return ManageAdminsDialogComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _translation_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translation/translation.service */ "./src/app/translation/translation.service.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageAdminsDialogComponent = /** @class */ (function () {
    function ManageAdminsDialogComponent(dialogRef, i18n, toast) {
        this.dialogRef = dialogRef;
        this.i18n = i18n;
        this.toast = toast;
        this.permissions = ['manage_users', 'manage_admins', 'manage_quotas', 'reports'];
    }
    ManageAdminsDialogComponent.prototype.save = function () {
        if (this.user.username.length < 1) {
            return;
        }
        if (this.user.password != null && this.user.password.length < 4) {
            delete this.user.password;
        }
        this.dialogRef.close(this.user);
    };
    ManageAdminsDialogComponent.prototype.cancel = function () {
        this.dialogRef.close(null);
    };
    ManageAdminsDialogComponent.prototype.httpError = function () {
        var _this = this;
        return function () {
            var str = 'Connection error.';
            var message = _this.i18n.instant(str);
            _this.toast.open(message, null, { duration: 2000 });
        };
    };
    ManageAdminsDialogComponent.prototype.p2s = function (permission) {
        return lodash__WEBPACK_IMPORTED_MODULE_0__["join"](lodash__WEBPACK_IMPORTED_MODULE_0__["map"](lodash__WEBPACK_IMPORTED_MODULE_0__["split"](permission, '_'), lodash__WEBPACK_IMPORTED_MODULE_0__["capitalize"]), ' ');
    };
    ManageAdminsDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'q-manage-admins-dialog',
            template: __webpack_require__(/*! ./manage-admins-dialog.component.html */ "./src/app/manage-admins-dialog/manage-admins-dialog.component.html"),
            styles: [__webpack_require__(/*! ./manage-admins-dialog.component.scss */ "./src/app/manage-admins-dialog/manage-admins-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _translation_translation_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], ManageAdminsDialogComponent);
    return ManageAdminsDialogComponent;
}());



/***/ }),

/***/ "./src/app/manage-admins.service.ts":
/*!******************************************!*\
  !*** ./src/app/manage-admins.service.ts ***!
  \******************************************/
/*! exports provided: ManageAdminsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAdminsService", function() { return ManageAdminsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-base */ "./src/app/api-base.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManageAdminsService = /** @class */ (function (_super) {
    __extends(ManageAdminsService, _super);
    function ManageAdminsService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    ManageAdminsService.prototype.addAdmin = function (admin) {
        var url = this.urlFor('/admin/add');
        return this.doPost(url, { 'admin': admin });
    };
    ManageAdminsService.prototype.setAdmin = function (admin) {
        var url = this.urlFor('/admin/update');
        return this.doPost(url, { 'admin': admin });
    };
    ManageAdminsService.prototype.deleteAdmin = function (admin) {
        var url = this.urlFor('/admin/remove');
        return this.doPost(url, { 'admin': admin });
    };
    ManageAdminsService.prototype.listAdmins = function () {
        var url = this.urlFor('/admin');
        return this.doGet(url);
    };
    ManageAdminsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ManageAdminsService);
    return ManageAdminsService;
}(_api_base__WEBPACK_IMPORTED_MODULE_2__["APIBase"]));



/***/ }),

/***/ "./src/app/manage-admins/manage-admins.component.html":
/*!************************************************************!*\
  !*** ./src/app/manage-admins/manage-admins.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div flex-col>\n  <div id=\"manage-admins\">\n    <mat-card>\n      <mat-card-title>\n        {{ 'Manage Admins' | translate }}\n      </mat-card-title>\n      <mat-card-content>\n        <mat-form-field class=\"width-100\">\n          <input matInput [placeholder]=\"'Filter' | translate\" [(ngModel)]=\"filter\">\n        </mat-form-field>\n\n        <mat-list>\n          <mat-list-item *ngFor=\"let user of filteredUsers()\">\n            <div flex class=\"width-100\">\n              <span stretch>{{ user.username }} ({{ user.name }})</span>\n              <button mat-icon-button (click)=\"edit(user)\">\n                <mat-icon>edit</mat-icon>\n              </button>\n              <button mat-icon-button color=\"warn\" (click)=\"remove(user)\">\n                <mat-icon>delete</mat-icon>\n              </button>\n            </div>\n          </mat-list-item>\n        </mat-list>\n      </mat-card-content>\n      <mat-card-actions flex>\n        <span stretch></span>\n        <button mat-flat-button color=\"primary\" (click)=\"addUser()\">\n          {{ 'Add' | translate }}\n        </button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/manage-admins/manage-admins.component.scss":
/*!************************************************************!*\
  !*** ./src/app/manage-admins/manage-admins.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\n * Copyright (c) 2019 Álan Crístoffer\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n#manage-admins {\n  margin: auto;\n  padding: 1rem;\n  min-width: 900px;\n  max-width: 90%; }\n#manage-admins mat-card {\n    margin: 1rem; }\n#manage-admins mat-form-field {\n    margin-right: 1rem; }\n"

/***/ }),

/***/ "./src/app/manage-admins/manage-admins.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/manage-admins/manage-admins.component.ts ***!
  \**********************************************************/
/*! exports provided: ManageAdminsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAdminsComponent", function() { return ManageAdminsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _manage_admins_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../manage-admins.service */ "./src/app/manage-admins.service.ts");
/* harmony import */ var _translation_translation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../translation/translation.service */ "./src/app/translation/translation.service.ts");
/* harmony import */ var _manage_admins_dialog_manage_admins_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../manage-admins-dialog/manage-admins-dialog.component */ "./src/app/manage-admins-dialog/manage-admins-dialog.component.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ManageAdminsComponent = /** @class */ (function () {
    function ManageAdminsComponent(service, i18n, toast, dialog) {
        var _this = this;
        this.service = service;
        this.i18n = i18n;
        this.toast = toast;
        this.dialog = dialog;
        this.filter = '';
        this.users = [];
        this.service.listAdmins().subscribe(function (users) { return _this.users = users; }, this.httpError());
    }
    ManageAdminsComponent.prototype.addUser = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_manage_admins_dialog_manage_admins_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ManageAdminsDialogComponent"]);
        dialogRef.componentInstance.user = {
            name: '',
            username: '',
            permissions: []
        };
        dialogRef.updateSize('70%');
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (p) {
            if (p != null) {
                return _this.service.addAdmin(p);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1);
            }
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function () { return _this.service.listAdmins(); }))
            .subscribe(function (users) { return _this.users = users; }, this.httpError());
    };
    ManageAdminsComponent.prototype.edit = function (user) {
        var _this = this;
        var dialogRef = this.dialog.open(_manage_admins_dialog_manage_admins_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ManageAdminsDialogComponent"]);
        dialogRef.componentInstance.user = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](user);
        dialogRef.updateSize('70%');
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (p) {
            if (p != null) {
                return _this.service.setAdmin(p);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1);
            }
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function () { return _this.service.listAdmins(); }))
            .subscribe(function (users) { return _this.users = users; }, this.httpError());
    };
    ManageAdminsComponent.prototype.remove = function (user) {
        var _this = this;
        var msg = 'Are you sure that you want to delete this item?';
        if (confirm(this.i18n.instant(msg))) {
            this.service.deleteAdmin(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function () { return _this.service.listAdmins(); })).subscribe(function (users) { return _this.users = users; }, this.httpError());
        }
    };
    ManageAdminsComponent.prototype.filteredUsers = function () {
        var _this = this;
        return lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](this.users, function (u) { return u.name.includes(_this.filter) || u.username.includes(_this.filter); });
    };
    ManageAdminsComponent.prototype.httpError = function () {
        var _this = this;
        return function () {
            var str = 'Connection error.';
            var message = _this.i18n.instant(str);
            _this.toast.open(message, null, { duration: 2000 });
        };
    };
    ManageAdminsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'q-manage-admins',
            template: __webpack_require__(/*! ./manage-admins.component.html */ "./src/app/manage-admins/manage-admins.component.html"),
            styles: [__webpack_require__(/*! ./manage-admins.component.scss */ "./src/app/manage-admins/manage-admins.component.scss")]
        }),
        __metadata("design:paramtypes", [_manage_admins_service__WEBPACK_IMPORTED_MODULE_5__["ManageAdminsService"],
            _translation_translation_service__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ManageAdminsComponent);
    return ManageAdminsComponent;
}());



/***/ }),

/***/ "./src/app/manage-groups.service.ts":
/*!******************************************!*\
  !*** ./src/app/manage-groups.service.ts ***!
  \******************************************/
/*! exports provided: ManageGroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageGroupsService", function() { return ManageGroupsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-base */ "./src/app/api-base.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManageGroupsService = /** @class */ (function (_super) {
    __extends(ManageGroupsService, _super);
    function ManageGroupsService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    ManageGroupsService.prototype.addGroup = function (group) {
        var url = this.urlFor('/group/add');
        return this.doPost(url, { 'group': group });
    };
    ManageGroupsService.prototype.updateGroup = function (group) {
        var url = this.urlFor('/group/update');
        return this.doPost(url, { 'group': group });
    };
    ManageGroupsService.prototype.deleteGroup = function (group) {
        var url = this.urlFor('/group/remove');
        return this.doPost(url, { 'group': group });
    };
    ManageGroupsService.prototype.listGroups = function () {
        var url = this.urlFor('/group');
        return this.doGet(url);
    };
    ManageGroupsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ManageGroupsService);
    return ManageGroupsService;
}(_api_base__WEBPACK_IMPORTED_MODULE_1__["APIBase"]));



/***/ }),

/***/ "./src/app/manage-groups/manage-groups.component.html":
/*!************************************************************!*\
  !*** ./src/app/manage-groups/manage-groups.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div flex-col>\n  <div id=\"manage-groups\">\n    <mat-card>\n      <mat-card-title>\n        {{ 'Manage Groups' | translate }}\n      </mat-card-title>\n      <mat-card-content>\n        <mat-form-field class=\"width-100\">\n          <input matInput [placeholder]=\"'Filter' | translate\" [(ngModel)]=\"filter\">\n        </mat-form-field>\n\n        <mat-list>\n          <mat-list-item *ngFor=\"let group of filteredGroups()\">\n            <div flex class=\"width-100\">\n              <span stretch>{{ group.name }}</span>\n              <button mat-icon-button (click)=\"edit(group)\">\n                <mat-icon>edit</mat-icon>\n              </button>\n              <button mat-icon-button color=\"warn\" (click)=\"remove(group)\">\n                <mat-icon>delete</mat-icon>\n              </button>\n            </div>\n          </mat-list-item>\n        </mat-list>\n      </mat-card-content>\n      <mat-card-actions flex>\n        <mat-form-field stretch>\n          <input matInput [placeholder]=\"'Name' | translate\" [(ngModel)]=\"newGroup.name\" (keydown.enter)=\"addGroup()\">\n        </mat-form-field>\n        <button mat-flat-button color=\"primary\" (click)=\"addGroup()\">\n          {{ 'Add' | translate }}\n        </button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/manage-groups/manage-groups.component.scss":
/*!************************************************************!*\
  !*** ./src/app/manage-groups/manage-groups.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\n * Copyright (c) 2019 Álan Crístoffer\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n#manage-groups {\n  margin: auto;\n  padding: 1rem;\n  min-width: 900px;\n  max-width: 90%; }\n#manage-groups mat-card {\n    margin: 1rem; }\n#manage-groups mat-form-field {\n    margin-right: 1rem; }\n"

/***/ }),

/***/ "./src/app/manage-groups/manage-groups.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/manage-groups/manage-groups.component.ts ***!
  \**********************************************************/
/*! exports provided: ManageGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageGroupsComponent", function() { return ManageGroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _manage_groups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../manage-groups.service */ "./src/app/manage-groups.service.ts");
/* harmony import */ var _translation_translation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../translation/translation.service */ "./src/app/translation/translation.service.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ManageGroupsComponent = /** @class */ (function () {
    function ManageGroupsComponent(service, i18n, toast) {
        var _this = this;
        this.service = service;
        this.i18n = i18n;
        this.toast = toast;
        this.filter = '';
        this.newGroup = { 'name': '' };
        this.groups = [];
        this.service.listGroups().subscribe(function (groups) { return _this.groups = groups; }, this.httpError());
    }
    ManageGroupsComponent.prototype.addGroup = function () {
        var _this = this;
        if (this.newGroup.name.length === 0) {
            return;
        }
        this.service.addGroup(this.newGroup).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function () { return _this.service.listGroups(); })).subscribe(function (groups) {
            _this.groups = groups;
            _this.newGroup.name = '';
        }, this.httpError());
    };
    ManageGroupsComponent.prototype.edit = function (group) {
        var _this = this;
        var name = prompt(this.i18n.instant('Name'), group['name']);
        group.name = name;
        if (name != null && name.length > 0) {
            this.service.updateGroup(group).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function () { return _this.service.listGroups(); })).subscribe(function (groups) {
                _this.groups = groups;
                _this.newGroup.name = '';
            }, this.httpError());
        }
    };
    ManageGroupsComponent.prototype.remove = function (group) {
        var _this = this;
        var msg = 'Are you sure that you want to delete this item?';
        if (confirm(this.i18n.instant(msg))) {
            this.service.deleteGroup(group).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function () { return _this.service.listGroups(); })).subscribe(function (groups) {
                _this.groups = groups;
                _this.newGroup.name = '';
            }, this.httpError());
        }
    };
    ManageGroupsComponent.prototype.filteredGroups = function () {
        var _this = this;
        return lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](this.groups, function (g) { return g.name.includes(_this.filter); });
    };
    ManageGroupsComponent.prototype.httpError = function () {
        var _this = this;
        return function () {
            var str = 'Connection error.';
            var message = _this.i18n.instant(str);
            _this.toast.open(message, null, { duration: 2000 });
        };
    };
    ManageGroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'q-manage-groups',
            template: __webpack_require__(/*! ./manage-groups.component.html */ "./src/app/manage-groups/manage-groups.component.html"),
            styles: [__webpack_require__(/*! ./manage-groups.component.scss */ "./src/app/manage-groups/manage-groups.component.scss")]
        }),
        __metadata("design:paramtypes", [_manage_groups_service__WEBPACK_IMPORTED_MODULE_4__["ManageGroupsService"],
            _translation_translation_service__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ManageGroupsComponent);
    return ManageGroupsComponent;
}());



/***/ }),

/***/ "./src/app/manage-polices-dialog/manage-polices-dialog.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/manage-polices-dialog/manage-polices-dialog.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-title>\n  {{ 'Policy' | translate }}\n</mat-card-title>\n<mat-card-content id=\"manage-polices-dialog\" flex-col>\n  <mat-form-field class=\"width-100\">\n    <input matInput [placeholder]=\"'Name' | translate\" [(ngModel)]=\"policy.name\">\n  </mat-form-field>\n  <mat-form-field>\n    <mat-select [placeholder]=\"'Printers' | translate\" [(ngModel)]=\"policy.printers\" multiple>\n      <mat-option *ngFor=\"let printer of printers\" [value]=\"printer.id\">\n        {{ printer.name || printer.id }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-select [placeholder]=\"'Groups' | translate\" [(ngModel)]=\"policy.groups\" multiple>\n      <mat-option *ngFor=\"let group of groups\" [value]=\"group._id\">\n        {{ group.name }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-slide-toggle [(ngModel)]=\"policy.ifty_quota\">{{ 'Infinite Quota' | translate }}</mat-slide-toggle>\n</mat-card-content>\n<mat-card-actions>\n  <button mat-flat-button color=\"primary\" (click)=\"save()\">{{ 'Save' | translate }}</button>\n  <button mat-stroked-button (click)=\"cancel()\">{{ 'Cancel' | translate }}</button>\n</mat-card-actions>\n"

/***/ }),

/***/ "./src/app/manage-polices-dialog/manage-polices-dialog.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/manage-polices-dialog/manage-polices-dialog.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\n * Copyright (c) 2019 Álan Crístoffer\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n"

/***/ }),

/***/ "./src/app/manage-polices-dialog/manage-polices-dialog.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/manage-polices-dialog/manage-polices-dialog.component.ts ***!
  \**************************************************************************/
/*! exports provided: ManagePolicesDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePolicesDialogComponent", function() { return ManagePolicesDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _manage_polices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manage-polices.service */ "./src/app/manage-polices.service.ts");
/* harmony import */ var _translation_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translation/translation.service */ "./src/app/translation/translation.service.ts");
/* harmony import */ var _manage_groups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../manage-groups.service */ "./src/app/manage-groups.service.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManagePolicesDialogComponent = /** @class */ (function () {
    function ManagePolicesDialogComponent(dialogRef, service, groupsService, i18n, toast) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.service = service;
        this.groupsService = groupsService;
        this.i18n = i18n;
        this.toast = toast;
        this.policy = { name: '', groups: [], printers: [], ifty_quota: false };
        this.printers = [];
        this.groups = [];
        this.service.printers().subscribe(function (printers) { return _this.printers = printers; }, this.httpError());
        this.groupsService.listGroups().subscribe(function (groups) { return _this.groups = groups; }, this.httpError());
    }
    ManagePolicesDialogComponent.prototype.save = function () {
        if (this.policy.name.length < 1) {
            return;
        }
        this.dialogRef.close(this.policy);
    };
    ManagePolicesDialogComponent.prototype.cancel = function () {
        this.dialogRef.close(null);
    };
    ManagePolicesDialogComponent.prototype.httpError = function () {
        var _this = this;
        return function () {
            var str = 'Connection error.';
            var message = _this.i18n.instant(str);
            _this.toast.open(message, null, { duration: 2000 });
        };
    };
    ManagePolicesDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'q-manage-polices-dialog',
            template: __webpack_require__(/*! ./manage-polices-dialog.component.html */ "./src/app/manage-polices-dialog/manage-polices-dialog.component.html"),
            styles: [__webpack_require__(/*! ./manage-polices-dialog.component.scss */ "./src/app/manage-polices-dialog/manage-polices-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _manage_polices_service__WEBPACK_IMPORTED_MODULE_2__["ManagePolicesService"],
            _manage_groups_service__WEBPACK_IMPORTED_MODULE_4__["ManageGroupsService"],
            _translation_translation_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ManagePolicesDialogComponent);
    return ManagePolicesDialogComponent;
}());



/***/ }),

/***/ "./src/app/manage-polices.service.ts":
/*!*******************************************!*\
  !*** ./src/app/manage-polices.service.ts ***!
  \*******************************************/
/*! exports provided: ManagePolicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePolicesService", function() { return ManagePolicesService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-base */ "./src/app/api-base.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManagePolicesService = /** @class */ (function (_super) {
    __extends(ManagePolicesService, _super);
    function ManagePolicesService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    ManagePolicesService.prototype.addPolicy = function (policy) {
        var url = this.urlFor('/policy/add');
        return this.doPost(url, { 'policy': policy });
    };
    ManagePolicesService.prototype.setPolicy = function (policy) {
        var url = this.urlFor('/policy/update');
        return this.doPost(url, { 'policy': policy });
    };
    ManagePolicesService.prototype.deletePolices = function (policy) {
        var url = this.urlFor('/policy/remove');
        return this.doPost(url, { 'policy': policy });
    };
    ManagePolicesService.prototype.listPolices = function () {
        var url = this.urlFor('/policy');
        return this.doGet(url);
    };
    ManagePolicesService.prototype.printers = function () {
        var url = this.urlFor('/printers');
        return this.doGet(url);
    };
    ManagePolicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ManagePolicesService);
    return ManagePolicesService;
}(_api_base__WEBPACK_IMPORTED_MODULE_2__["APIBase"]));



/***/ }),

/***/ "./src/app/manage-polices/manage-polices.component.html":
/*!**************************************************************!*\
  !*** ./src/app/manage-polices/manage-polices.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div flex-col>\n  <div id=\"manage-polices\">\n    <mat-card>\n      <mat-card-title>\n        {{ 'Manage Polices' | translate }}\n      </mat-card-title>\n      <mat-card-content>\n        <mat-form-field class=\"width-100\">\n          <input matInput [placeholder]=\"'Filter' | translate\" [(ngModel)]=\"filter\">\n        </mat-form-field>\n\n        <mat-list>\n          <mat-list-item *ngFor=\"let policy of filteredPolices()\">\n            <div flex class=\"width-100\">\n              <span stretch>{{ policy.name }}</span>\n              <button mat-icon-button (click)=\"edit(policy)\">\n                <mat-icon>edit</mat-icon>\n              </button>\n              <button mat-icon-button color=\"warn\" (click)=\"remove(policy)\">\n                <mat-icon>delete</mat-icon>\n              </button>\n            </div>\n          </mat-list-item>\n        </mat-list>\n      </mat-card-content>\n      <mat-card-actions flex>\n        <span stretch></span>\n        <button mat-flat-button color=\"primary\" (click)=\"addPolicy()\">\n          {{ 'Add' | translate }}\n        </button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/manage-polices/manage-polices.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/manage-polices/manage-polices.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\n * Copyright (c) 2019 Álan Crístoffer\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n#manage-polices {\n  margin: auto;\n  padding: 1rem;\n  min-width: 900px;\n  max-width: 90%; }\n#manage-polices mat-card {\n    margin: 1rem; }\n#manage-polices mat-form-field {\n    margin-right: 1rem; }\n"

/***/ }),

/***/ "./src/app/manage-polices/manage-polices.component.ts":
/*!************************************************************!*\
  !*** ./src/app/manage-polices/manage-polices.component.ts ***!
  \************************************************************/
/*! exports provided: ManagePolicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePolicesComponent", function() { return ManagePolicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _manage_polices_dialog_manage_polices_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../manage-polices-dialog/manage-polices-dialog.component */ "./src/app/manage-polices-dialog/manage-polices-dialog.component.ts");
/* harmony import */ var _manage_polices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../manage-polices.service */ "./src/app/manage-polices.service.ts");
/* harmony import */ var _translation_translation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../translation/translation.service */ "./src/app/translation/translation.service.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ManagePolicesComponent = /** @class */ (function () {
    function ManagePolicesComponent(service, i18n, toast, dialog) {
        var _this = this;
        this.service = service;
        this.i18n = i18n;
        this.toast = toast;
        this.dialog = dialog;
        this.filter = '';
        this.polices = [];
        this.service.listPolices().subscribe(function (polices) { return _this.polices = polices; }, this.httpError());
    }
    ManagePolicesComponent.prototype.addPolicy = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_manage_polices_dialog_manage_polices_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ManagePolicesDialogComponent"]);
        dialogRef.componentInstance.policy = {
            name: '',
            groups: [],
            printers: [],
            ifty_quota: false
        };
        dialogRef.updateSize('70%');
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (p) {
            if (p != null) {
                return _this.service.addPolicy(p);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1);
            }
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function () { return _this.service.listPolices(); }))
            .subscribe(function (polices) { return _this.polices = polices; }, this.httpError());
    };
    ManagePolicesComponent.prototype.edit = function (policy) {
        var _this = this;
        var dialogRef = this.dialog.open(_manage_polices_dialog_manage_polices_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ManagePolicesDialogComponent"]);
        dialogRef.componentInstance.policy = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](policy);
        dialogRef.updateSize('70%');
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (p) {
            if (p != null) {
                return _this.service.setPolicy(p);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1);
            }
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function () { return _this.service.listPolices(); }))
            .subscribe(function (polices) { return _this.polices = polices; }, this.httpError());
    };
    ManagePolicesComponent.prototype.remove = function (policy) {
        var _this = this;
        var msg = 'Are you sure that you want to delete this item?';
        if (confirm(this.i18n.instant(msg))) {
            this.service.deletePolices(policy).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function () { return _this.service.listPolices(); })).subscribe(function (polices) { return _this.polices = polices; }, this.httpError());
        }
    };
    ManagePolicesComponent.prototype.filteredPolices = function () {
        var _this = this;
        return lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](this.polices, function (p) { return p.name.includes(_this.filter); });
    };
    ManagePolicesComponent.prototype.httpError = function () {
        var _this = this;
        return function () {
            var str = 'Connection error.';
            var message = _this.i18n.instant(str);
            _this.toast.open(message, null, { duration: 2000 });
        };
    };
    ManagePolicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'q-manage-polices',
            template: __webpack_require__(/*! ./manage-polices.component.html */ "./src/app/manage-polices/manage-polices.component.html"),
            styles: [__webpack_require__(/*! ./manage-polices.component.scss */ "./src/app/manage-polices/manage-polices.component.scss")]
        }),
        __metadata("design:paramtypes", [_manage_polices_service__WEBPACK_IMPORTED_MODULE_6__["ManagePolicesService"],
            _translation_translation_service__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ManagePolicesComponent);
    return ManagePolicesComponent;
}());



/***/ }),

/***/ "./src/app/manage-quotas-dialog/manage-quotas-dialog.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/manage-quotas-dialog/manage-quotas-dialog.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-title>\n  {{ 'Quota' | translate }}\n</mat-card-title>\n<mat-card-content id=\"manage-polices-dialog\" flex-col>\n  <mat-form-field>\n    <mat-select [placeholder]=\"'User' | translate\" [(ngModel)]=\"quota.user\">\n      <mat-option *ngFor=\"let user of users\" [value]=\"user._id\">\n        {{ user.name }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field *ngIf=\"quota.user\">\n    <mat-select [placeholder]=\"'Policy' | translate\" [(ngModel)]=\"quota.policy\">\n      <mat-option *ngFor=\"let policy of userPolices()\" [value]=\"policy._id\">\n        {{ policy.name }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"width-100\" *ngIf=\"quota.policy\">\n    <input matInput type=\"number\" [placeholder]=\"'Quantity' | translate\" [(ngModel)]=\"quota.quantity\">\n  </mat-form-field>\n</mat-card-content>\n<mat-card-actions>\n  <button mat-flat-button color=\"primary\" (click)=\"save()\">{{ 'Save' | translate }}</button>\n  <button mat-stroked-button (click)=\"cancel()\">{{ 'Cancel' | translate }}</button>\n</mat-card-actions>\n"

/***/ }),

/***/ "./src/app/manage-quotas-dialog/manage-quotas-dialog.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/manage-quotas-dialog/manage-quotas-dialog.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\n * Copyright (c) 2019 Álan Crístoffer\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n"

/***/ }),

/***/ "./src/app/manage-quotas-dialog/manage-quotas-dialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/manage-quotas-dialog/manage-quotas-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: ManageQuotasDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageQuotasDialogComponent", function() { return ManageQuotasDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _manage_polices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../manage-polices.service */ "./src/app/manage-polices.service.ts");
/* harmony import */ var _manage_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../manage-users.service */ "./src/app/manage-users.service.ts");
/* harmony import */ var _translation_translation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../translation/translation.service */ "./src/app/translation/translation.service.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ManageQuotasDialogComponent = /** @class */ (function () {
    function ManageQuotasDialogComponent(dialogRef, usersService, policyService, i18n, toast) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.usersService = usersService;
        this.policyService = policyService;
        this.i18n = i18n;
        this.toast = toast;
        this.quota = { user: '', policy: '', quantity: 0 };
        this.polices = [];
        this.users = [];
        this.usersService.listUsers().subscribe(function (users) { return _this.users = lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"](users, 'name'); }, this.httpError());
        this.policyService.listPolices().subscribe(function (polices) { return _this.polices = polices; }, this.httpError());
    }
    ManageQuotasDialogComponent.prototype.save = function () {
        if (this.quota.user.length < 1 || this.quota.policy.length < 1) {
            return;
        }
        this.dialogRef.close(this.quota);
    };
    ManageQuotasDialogComponent.prototype.cancel = function () {
        this.dialogRef.close(null);
    };
    ManageQuotasDialogComponent.prototype.userPolices = function () {
        var _this = this;
        var user = lodash__WEBPACK_IMPORTED_MODULE_2__["first"](lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](this.users, function (u) { return u._id === _this.quota.user; }));
        if (user == null) {
            return [];
        }
        return lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](this.polices, function (p) { return lodash__WEBPACK_IMPORTED_MODULE_2__["intersection"](user.groups, p.groups).length > 0; });
    };
    ManageQuotasDialogComponent.prototype.httpError = function () {
        var _this = this;
        return function () {
            var str = 'Connection error.';
            var message = _this.i18n.instant(str);
            _this.toast.open(message, null, { duration: 2000 });
        };
    };
    ManageQuotasDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'q-manage-quotas-dialog',
            template: __webpack_require__(/*! ./manage-quotas-dialog.component.html */ "./src/app/manage-quotas-dialog/manage-quotas-dialog.component.html"),
            styles: [__webpack_require__(/*! ./manage-quotas-dialog.component.scss */ "./src/app/manage-quotas-dialog/manage-quotas-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _manage_users_service__WEBPACK_IMPORTED_MODULE_4__["ManageUsersService"],
            _manage_polices_service__WEBPACK_IMPORTED_MODULE_3__["ManagePolicesService"],
            _translation_translation_service__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ManageQuotasDialogComponent);
    return ManageQuotasDialogComponent;
}());



/***/ }),

/***/ "./src/app/manage-quotas.service.ts":
/*!******************************************!*\
  !*** ./src/app/manage-quotas.service.ts ***!
  \******************************************/
/*! exports provided: ManageQuotasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageQuotasService", function() { return ManageQuotasService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-base */ "./src/app/api-base.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManageQuotasService = /** @class */ (function (_super) {
    __extends(ManageQuotasService, _super);
    function ManageQuotasService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    ManageQuotasService.prototype.addQuota = function (quota) {
        var url = this.urlFor('/quota/add');
        return this.doPost(url, { 'quota': quota });
    };
    ManageQuotasService.prototype.setQuota = function (quota) {
        var url = this.urlFor('/quota/update');
        return this.doPost(url, { 'quota': quota });
    };
    ManageQuotasService.prototype.deleteQuota = function (quota) {
        var url = this.urlFor('/quota/remove');
        return this.doPost(url, { 'quota': quota });
    };
    ManageQuotasService.prototype.listQuotas = function () {
        var url = this.urlFor('/quota');
        return this.doGet(url);
    };
    ManageQuotasService.prototype.getQuota = function () {
        var url = this.urlFor('/quota/get');
        return this.doGet(url);
    };
    ManageQuotasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ManageQuotasService);
    return ManageQuotasService;
}(_api_base__WEBPACK_IMPORTED_MODULE_2__["APIBase"]));



/***/ }),

/***/ "./src/app/manage-quotas/manage-quotas.component.html":
/*!************************************************************!*\
  !*** ./src/app/manage-quotas/manage-quotas.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div flex-col>\n  <div id=\"manage-quotas\">\n    <mat-card>\n      <mat-card-title>\n        {{ 'Manage Quotas' | translate }}\n      </mat-card-title>\n      <mat-card-content>\n        <mat-form-field class=\"width-100\">\n          <input matInput [placeholder]=\"'Filter' | translate\" [(ngModel)]=\"filter\">\n        </mat-form-field>\n\n        <mat-list>\n          <mat-list-item *ngFor=\"let quota of filteredQuotas()\">\n            <div flex class=\"width-100\">\n              <span stretch>{{ findUser(quota.user).name }} ({{ findPolicy(quota.policy).name }})</span>\n              <button mat-icon-button (click)=\"edit(quota)\">\n                <mat-icon>edit</mat-icon>\n              </button>\n              <button mat-icon-button color=\"warn\" (click)=\"remove(quota)\">\n                <mat-icon>delete</mat-icon>\n              </button>\n            </div>\n          </mat-list-item>\n        </mat-list>\n      </mat-card-content>\n      <mat-card-actions flex>\n        <span stretch></span>\n        <button mat-flat-button color=\"primary\" (click)=\"addQuota()\">\n          {{ 'Add' | translate }}\n        </button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/manage-quotas/manage-quotas.component.scss":
/*!************************************************************!*\
  !*** ./src/app/manage-quotas/manage-quotas.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\n * Copyright (c) 2019 Álan Crístoffer\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n#manage-quotas {\n  margin: auto;\n  padding: 1rem;\n  min-width: 900px;\n  max-width: 90%; }\n#manage-quotas mat-card {\n    margin: 1rem; }\n#manage-quotas mat-form-field {\n    margin-right: 1rem; }\n"

/***/ }),

/***/ "./src/app/manage-quotas/manage-quotas.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/manage-quotas/manage-quotas.component.ts ***!
  \**********************************************************/
/*! exports provided: ManageQuotasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageQuotasComponent", function() { return ManageQuotasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _manage_polices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../manage-polices.service */ "./src/app/manage-polices.service.ts");
/* harmony import */ var _manage_quotas_dialog_manage_quotas_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../manage-quotas-dialog/manage-quotas-dialog.component */ "./src/app/manage-quotas-dialog/manage-quotas-dialog.component.ts");
/* harmony import */ var _manage_quotas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../manage-quotas.service */ "./src/app/manage-quotas.service.ts");
/* harmony import */ var _manage_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../manage-users.service */ "./src/app/manage-users.service.ts");
/* harmony import */ var _translation_translation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../translation/translation.service */ "./src/app/translation/translation.service.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ManageQuotasComponent = /** @class */ (function () {
    function ManageQuotasComponent(service, i18n, usersService, policyService, toast, dialog) {
        var _this = this;
        this.service = service;
        this.i18n = i18n;
        this.usersService = usersService;
        this.policyService = policyService;
        this.toast = toast;
        this.dialog = dialog;
        this.filter = '';
        this.quotas = [];
        this.users = [];
        this.polices = [];
        var quotasSubscription = this.service.listQuotas();
        var usersSubscription = this.usersService.listUsers();
        var policesSubscription = this.policyService.listPolices();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["zip"])(quotasSubscription, usersSubscription, policesSubscription).subscribe(function (_a) {
            var quotas = _a[0], users = _a[1], polices = _a[2];
            _this.quotas = quotas;
            _this.users = users;
            _this.polices = polices;
        }, this.httpError());
    }
    ManageQuotasComponent.prototype.addQuota = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_manage_quotas_dialog_manage_quotas_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ManageQuotasDialogComponent"]);
        dialogRef.componentInstance.quota = {
            user: '',
            policy: '',
            quantity: 0
        };
        dialogRef.updateSize('70%');
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (p) {
            if (p != null) {
                return _this.service.addQuota(p);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1);
            }
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function () { return _this.service.listQuotas(); }))
            .subscribe(function (quotas) { return _this.quotas = quotas; }, this.httpError());
    };
    ManageQuotasComponent.prototype.edit = function (quota) {
        var _this = this;
        var dialogRef = this.dialog.open(_manage_quotas_dialog_manage_quotas_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ManageQuotasDialogComponent"]);
        dialogRef.componentInstance.quota = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](quota);
        dialogRef.updateSize('70%');
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (p) {
            if (p != null) {
                return _this.service.setQuota(p);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1);
            }
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function () { return _this.service.listQuotas(); }))
            .subscribe(function (quotas) { return _this.quotas = quotas; }, this.httpError());
    };
    ManageQuotasComponent.prototype.remove = function (quota) {
        var _this = this;
        var msg = 'Are you sure that you want to delete this item?';
        if (confirm(this.i18n.instant(msg))) {
            this.service.deleteQuota(quota).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function () { return _this.service.listQuotas(); })).subscribe(function (quotas) { return _this.quotas = quotas; }, this.httpError());
        }
    };
    ManageQuotasComponent.prototype.findUser = function (id) {
        return lodash__WEBPACK_IMPORTED_MODULE_2__["first"](lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](this.users, function (u) { return u._id === id; }));
    };
    ManageQuotasComponent.prototype.findPolicy = function (id) {
        return lodash__WEBPACK_IMPORTED_MODULE_2__["first"](lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](this.polices, function (p) { return p._id === id; }));
    };
    ManageQuotasComponent.prototype.filteredQuotas = function () {
        var _this = this;
        return lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](this.quotas, function (quota) {
            var user = _this.findUser(quota.user);
            var policy = _this.findPolicy(quota.policy);
            return user.name.includes(_this.filter) ||
                user.username.includes(_this.filter) ||
                policy.name.includes(_this.filter);
        });
    };
    ManageQuotasComponent.prototype.httpError = function () {
        var _this = this;
        return function () {
            var str = 'Connection error.';
            var message = _this.i18n.instant(str);
            _this.toast.open(message, null, { duration: 2000 });
        };
    };
    ManageQuotasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'q-manage-quotas',
            template: __webpack_require__(/*! ./manage-quotas.component.html */ "./src/app/manage-quotas/manage-quotas.component.html"),
            styles: [__webpack_require__(/*! ./manage-quotas.component.scss */ "./src/app/manage-quotas/manage-quotas.component.scss")]
        }),
        __metadata("design:paramtypes", [_manage_quotas_service__WEBPACK_IMPORTED_MODULE_7__["ManageQuotasService"],
            _translation_translation_service__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
            _manage_users_service__WEBPACK_IMPORTED_MODULE_8__["ManageUsersService"],
            _manage_polices_service__WEBPACK_IMPORTED_MODULE_5__["ManagePolicesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ManageQuotasComponent);
    return ManageQuotasComponent;
}());



/***/ }),

/***/ "./src/app/manage-users-dialog/manage-users-dialog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/manage-users-dialog/manage-users-dialog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-title>\n  {{ 'User' | translate }}\n</mat-card-title>\n<mat-card-content id=\"manage-users-dialog\">\n  <form flex-col>\n    <mat-form-field class=\"width-100\">\n      <input matInput name=\"name\" [placeholder]=\"'Name' | translate\" [(ngModel)]=\"user.name\">\n    </mat-form-field>\n\n    <mat-form-field class=\"width-100\">\n      <input matInput name=\"username\" autocomplete=\"username\" [placeholder]=\"'Username' | translate\" [(ngModel)]=\"user.username\">\n    </mat-form-field>\n\n    <mat-form-field class=\"width-100\">\n      <input matInput name=\"password\" autocomplete=\"new-password\" type=\"password\" [placeholder]=\"'Password' | translate\"\n        [(ngModel)]=\"user.password\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select name=\"groups\" [placeholder]=\"'Groups' | translate\" [(ngModel)]=\"user.groups\" multiple>\n        <mat-option *ngFor=\"let group of groups\" [value]=\"group._id\">\n          {{ group.name }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </form>\n</mat-card-content>\n<mat-card-actions>\n  <button mat-flat-button color=\"primary\" (click)=\"save()\">{{ 'Save' | translate }}</button>\n  <button mat-stroked-button (click)=\"cancel()\">{{ 'Cancel' | translate }}</button>\n</mat-card-actions>\n"

/***/ }),

/***/ "./src/app/manage-users-dialog/manage-users-dialog.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/manage-users-dialog/manage-users-dialog.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\n * Copyright (c) 2019 Álan Crístoffer\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n"

/***/ }),

/***/ "./src/app/manage-users-dialog/manage-users-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/manage-users-dialog/manage-users-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: ManageUsersDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUsersDialogComponent", function() { return ManageUsersDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _manage_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manage-groups.service */ "./src/app/manage-groups.service.ts");
/* harmony import */ var _translation_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translation/translation.service */ "./src/app/translation/translation.service.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageUsersDialogComponent = /** @class */ (function () {
    function ManageUsersDialogComponent(dialogRef, groupsService, i18n, toast) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.groupsService = groupsService;
        this.i18n = i18n;
        this.toast = toast;
        this.groups = [];
        this.groupsService.listGroups().subscribe(function (groups) { return _this.groups = groups; }, this.httpError());
    }
    ManageUsersDialogComponent.prototype.save = function () {
        if (this.user.username.length < 1) {
            return;
        }
        if (this.user.password != null && this.user.password.length < 4) {
            delete this.user.password;
        }
        this.dialogRef.close(this.user);
    };
    ManageUsersDialogComponent.prototype.cancel = function () {
        this.dialogRef.close(null);
    };
    ManageUsersDialogComponent.prototype.httpError = function () {
        var _this = this;
        return function () {
            var str = 'Connection error.';
            var message = _this.i18n.instant(str);
            _this.toast.open(message, null, { duration: 2000 });
        };
    };
    ManageUsersDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'q-manage-users-dialog',
            template: __webpack_require__(/*! ./manage-users-dialog.component.html */ "./src/app/manage-users-dialog/manage-users-dialog.component.html"),
            styles: [__webpack_require__(/*! ./manage-users-dialog.component.scss */ "./src/app/manage-users-dialog/manage-users-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _manage_groups_service__WEBPACK_IMPORTED_MODULE_2__["ManageGroupsService"],
            _translation_translation_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ManageUsersDialogComponent);
    return ManageUsersDialogComponent;
}());



/***/ }),

/***/ "./src/app/manage-users.service.ts":
/*!*****************************************!*\
  !*** ./src/app/manage-users.service.ts ***!
  \*****************************************/
/*! exports provided: ManageUsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUsersService", function() { return ManageUsersService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-base */ "./src/app/api-base.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManageUsersService = /** @class */ (function (_super) {
    __extends(ManageUsersService, _super);
    function ManageUsersService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    ManageUsersService.prototype.addUser = function (user) {
        var url = this.urlFor('/user/add');
        return this.doPost(url, { 'user': user });
    };
    ManageUsersService.prototype.setUser = function (user) {
        var url = this.urlFor('/user/update');
        return this.doPost(url, { 'user': user });
    };
    ManageUsersService.prototype.deleteUser = function (user) {
        var url = this.urlFor('/user/remove');
        return this.doPost(url, { 'user': user });
    };
    ManageUsersService.prototype.listUsers = function () {
        var url = this.urlFor('/user');
        return this.doGet(url);
    };
    ManageUsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ManageUsersService);
    return ManageUsersService;
}(_api_base__WEBPACK_IMPORTED_MODULE_2__["APIBase"]));



/***/ }),

/***/ "./src/app/manage-users/manage-users.component.html":
/*!**********************************************************!*\
  !*** ./src/app/manage-users/manage-users.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div flex-col>\n  <div id=\"manage-users\">\n    <mat-card>\n      <mat-card-title>\n        {{ 'Manage Users' | translate }}\n      </mat-card-title>\n      <mat-card-content>\n        <mat-form-field class=\"width-100\">\n          <input matInput [placeholder]=\"'Filter' | translate\" [(ngModel)]=\"filter\">\n        </mat-form-field>\n\n        <mat-list>\n          <mat-list-item *ngFor=\"let user of filteredUsers()\">\n            <div flex class=\"width-100\">\n              <span stretch>{{ user.username }} ({{ user.name }})</span>\n              <button mat-icon-button (click)=\"edit(user)\">\n                <mat-icon>edit</mat-icon>\n              </button>\n              <button mat-icon-button color=\"warn\" (click)=\"remove(user)\">\n                <mat-icon>delete</mat-icon>\n              </button>\n            </div>\n          </mat-list-item>\n        </mat-list>\n      </mat-card-content>\n      <mat-card-actions flex>\n        <span stretch></span>\n        <button mat-flat-button color=\"primary\" (click)=\"addUser()\">\n          {{ 'Add' | translate }}\n        </button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/manage-users/manage-users.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/manage-users/manage-users.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\n * Copyright (c) 2019 Álan Crístoffer\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n#manage-users {\n  margin: auto;\n  padding: 1rem;\n  min-width: 900px;\n  max-width: 90%; }\n#manage-users mat-card {\n    margin: 1rem; }\n#manage-users mat-form-field {\n    margin-right: 1rem; }\n"

/***/ }),

/***/ "./src/app/manage-users/manage-users.component.ts":
/*!********************************************************!*\
  !*** ./src/app/manage-users/manage-users.component.ts ***!
  \********************************************************/
/*! exports provided: ManageUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUsersComponent", function() { return ManageUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _manage_users_dialog_manage_users_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../manage-users-dialog/manage-users-dialog.component */ "./src/app/manage-users-dialog/manage-users-dialog.component.ts");
/* harmony import */ var _manage_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../manage-users.service */ "./src/app/manage-users.service.ts");
/* harmony import */ var _translation_translation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../translation/translation.service */ "./src/app/translation/translation.service.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ManageUsersComponent = /** @class */ (function () {
    function ManageUsersComponent(service, i18n, toast, dialog) {
        var _this = this;
        this.service = service;
        this.i18n = i18n;
        this.toast = toast;
        this.dialog = dialog;
        this.filter = '';
        this.users = [];
        this.service.listUsers().subscribe(function (users) { return _this.users = users; }, this.httpError());
    }
    ManageUsersComponent.prototype.addUser = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_manage_users_dialog_manage_users_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ManageUsersDialogComponent"]);
        dialogRef.componentInstance.user = {
            name: '',
            username: '',
            groups: []
        };
        dialogRef.updateSize('70%');
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (p) {
            if (p != null) {
                return _this.service.addUser(p);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1);
            }
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function () { return _this.service.listUsers(); }))
            .subscribe(function (users) { return _this.users = users; }, this.httpError());
    };
    ManageUsersComponent.prototype.edit = function (user) {
        var _this = this;
        var dialogRef = this.dialog.open(_manage_users_dialog_manage_users_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ManageUsersDialogComponent"]);
        dialogRef.componentInstance.user = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](user);
        dialogRef.updateSize('70%');
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (p) {
            if (p != null) {
                return _this.service.setUser(p);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1);
            }
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function () { return _this.service.listUsers(); }))
            .subscribe(function (users) { return _this.users = users; }, this.httpError());
    };
    ManageUsersComponent.prototype.remove = function (user) {
        var _this = this;
        var msg = 'Are you sure that you want to delete this item?';
        if (confirm(this.i18n.instant(msg))) {
            this.service.deleteUser(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function () { return _this.service.listUsers(); })).subscribe(function (users) { return _this.users = users; }, this.httpError());
        }
    };
    ManageUsersComponent.prototype.filteredUsers = function () {
        var _this = this;
        return lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](this.users, function (u) { return u.name.includes(_this.filter) || u.username.includes(_this.filter); });
    };
    ManageUsersComponent.prototype.httpError = function () {
        var _this = this;
        return function () {
            var str = 'Connection error.';
            var message = _this.i18n.instant(str);
            _this.toast.open(message, null, { duration: 2000 });
        };
    };
    ManageUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'q-manage-users',
            template: __webpack_require__(/*! ./manage-users.component.html */ "./src/app/manage-users/manage-users.component.html"),
            styles: [__webpack_require__(/*! ./manage-users.component.scss */ "./src/app/manage-users/manage-users.component.scss")]
        }),
        __metadata("design:paramtypes", [_manage_users_service__WEBPACK_IMPORTED_MODULE_6__["ManageUsersService"],
            _translation_translation_service__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ManageUsersComponent);
    return ManageUsersComponent;
}());



/***/ }),

/***/ "./src/app/quota/quota.component.html":
/*!********************************************!*\
  !*** ./src/app/quota/quota.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div flex-col>\n  <div id=\"quotas\">\n    <mat-card>\n      <mat-card-title>\n        {{ 'My Quota' | translate }}\n      </mat-card-title>\n      <mat-card-content>\n        <mat-list>\n          <mat-list-item *ngFor=\"let quota of quotas\">\n            <h4 mat-line>{{ 'Policy' | translate }}: {{ quota.policy.name }}</h4>\n            <p mat-line> {{ 'Quantity' | translate }}: {{ quota.quantity }} </p>\n          </mat-list-item>\n        </mat-list>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/quota/quota.component.scss":
/*!********************************************!*\
  !*** ./src/app/quota/quota.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\n * Copyright (c) 2019 Álan Crístoffer\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n#quotas {\n  margin: auto;\n  padding: 1rem;\n  min-width: 900px;\n  max-width: 90%; }\n#quotas mat-card {\n    margin: 1rem; }\n#quotas mat-form-field {\n    margin-right: 1rem; }\n"

/***/ }),

/***/ "./src/app/quota/quota.component.ts":
/*!******************************************!*\
  !*** ./src/app/quota/quota.component.ts ***!
  \******************************************/
/*! exports provided: QuotaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotaComponent", function() { return QuotaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _manage_quotas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manage-quotas.service */ "./src/app/manage-quotas.service.ts");
/* harmony import */ var _translation_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translation/translation.service */ "./src/app/translation/translation.service.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuotaComponent = /** @class */ (function () {
    function QuotaComponent(service, i18n, toast, dialog) {
        var _this = this;
        this.service = service;
        this.i18n = i18n;
        this.toast = toast;
        this.dialog = dialog;
        this.quotas = [];
        this.service.getQuota().subscribe(function (quotas) { return _this.quotas = quotas; }, this.httpError());
    }
    QuotaComponent.prototype.httpError = function () {
        var _this = this;
        return function () {
            var str = 'Connection error.';
            var message = _this.i18n.instant(str);
            _this.toast.open(message, null, { duration: 2000 });
        };
    };
    QuotaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'q-quota',
            template: __webpack_require__(/*! ./quota.component.html */ "./src/app/quota/quota.component.html"),
            styles: [__webpack_require__(/*! ./quota.component.scss */ "./src/app/quota/quota.component.scss")]
        }),
        __metadata("design:paramtypes", [_manage_quotas_service__WEBPACK_IMPORTED_MODULE_2__["ManageQuotasService"],
            _translation_translation_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], QuotaComponent);
    return QuotaComponent;
}());



/***/ }),

/***/ "./src/app/reports.service.ts":
/*!************************************!*\
  !*** ./src/app/reports.service.ts ***!
  \************************************/
/*! exports provided: ReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsService", function() { return ReportsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-base */ "./src/app/api-base.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportsService = /** @class */ (function (_super) {
    __extends(ReportsService, _super);
    function ReportsService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    ReportsService.prototype.listReports = function () {
        var url = this.urlFor('/report');
        return this.doGet(url);
    };
    ReportsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ReportsService);
    return ReportsService;
}(_api_base__WEBPACK_IMPORTED_MODULE_2__["APIBase"]));



/***/ }),

/***/ "./src/app/reports/reports.component.html":
/*!************************************************!*\
  !*** ./src/app/reports/reports.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div flex-col>\n  <div id=\"reports\">\n    <mat-card>\n      <mat-card-title>\n        {{ 'Reports' | translate }}\n      </mat-card-title>\n      <mat-card-content>\n        <mat-tab-group [dynamicHeight]=\"true\" mat-stretch-tabs>\n          <mat-tab [label]=\"'Reports' | translate\">\n            <table mat-table [dataSource]=\"reports\" class=\"mat-elevation-z8\">\n              <ng-container matColumnDef=\"action\">\n                <th mat-header-cell *matHeaderCellDef> {{ 'Action' | translate }} </th>\n                <td mat-cell width=\"20%\" *matCellDef=\"let report\"> {{ report.action }} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"user\">\n                <th mat-header-cell *matHeaderCellDef> {{ 'User' | translate }} </th>\n                <td mat-cell width=\"20%\" *matCellDef=\"let report\"> {{ report.user.username }} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"time\">\n                <th mat-header-cell *matHeaderCellDef> {{ 'Time' | translate }} </th>\n                <td mat-cell width=\"20%\" *matCellDef=\"let report\"> {{ report.time | date:'long' }} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"params\">\n                <th mat-header-cell *matHeaderCellDef> {{ 'Parameter' | translate }} </th>\n                <td mat-cell *matCellDef=\"let report\"> {{ dumps(report.params) }} </td>\n              </ng-container>\n\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n          </mat-tab>\n\n          <mat-tab [label]=\"'Jobs' | translate\">\n            <table mat-table [dataSource]=\"jobs\" class=\"mat-elevation-z8\">\n              <ng-container matColumnDef=\"status\">\n                <th mat-header-cell *matHeaderCellDef> Status </th>\n                <td mat-cell *matCellDef=\"let job\"> {{ job.status }} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"user\">\n                <th mat-header-cell *matHeaderCellDef> {{ 'User' | translate }} </th>\n                <td mat-cell *matCellDef=\"let job\"> {{ job.user }} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"job\">\n                <th mat-header-cell *matHeaderCellDef> {{ 'Job' | translate }} </th>\n                <td mat-cell *matCellDef=\"let job\"> {{ job.job }} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"title\">\n                <th mat-header-cell *matHeaderCellDef> {{ 'Title' | translate }} </th>\n                <td mat-cell *matCellDef=\"let job\"> {{ job.title }} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"copies\">\n                <th mat-header-cell *matHeaderCellDef> {{ 'Copies' | translate }} </th>\n                <td mat-cell *matCellDef=\"let job\"> {{ job.copies }} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"pages\">\n                <th mat-header-cell *matHeaderCellDef> {{ 'Pages' | translate }} </th>\n                <td mat-cell *matCellDef=\"let job\"> {{ job.pages }} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"time\">\n                <th mat-header-cell *matHeaderCellDef> {{ 'Pages' | translate }} </th>\n                <td mat-cell *matCellDef=\"let job\"> {{ job.time | date }} </td>\n              </ng-container>\n\n              <tr mat-header-row *matHeaderRowDef=\"displayedJobsColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedJobsColumns;\"></tr>\n            </table>\n          </mat-tab>\n        </mat-tab-group>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/reports/reports.component.scss":
/*!************************************************!*\
  !*** ./src/app/reports/reports.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\n * Copyright (c) 2019 Álan Crístoffer\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n#reports {\n  margin: auto;\n  padding: 1rem;\n  min-width: 900px;\n  max-width: 90%; }\n#reports mat-card {\n    margin: 1rem; }\n#reports mat-form-field {\n    margin-right: 1rem; }\n"

/***/ }),

/***/ "./src/app/reports/reports.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reports.service */ "./src/app/reports.service.ts");
/* harmony import */ var _translation_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../translation/translation.service */ "./src/app/translation/translation.service.ts");
/* harmony import */ var _jobs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jobs.service */ "./src/app/jobs.service.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(service, jobService, i18n, toast) {
        var _this = this;
        this.service = service;
        this.jobService = jobService;
        this.i18n = i18n;
        this.toast = toast;
        this.displayedColumns = ['user', 'action', 'params', 'time'];
        this.reports = [];
        this.displayedJobsColumns = ['status', 'user', 'job', 'title', 'copies', 'pages'];
        this.jobs = [];
        this.service.listReports().subscribe(function (reports) {
            reports = lodash__WEBPACK_IMPORTED_MODULE_2__["map"](reports, function (r) { return lodash__WEBPACK_IMPORTED_MODULE_2__["assign"](r, { time: new Date(r.time * 1000) }); });
            _this.reports = reports;
        }, this.httpError());
        this.jobService.listJobs().subscribe(function (jobs) { return _this.jobs = jobs; }, this.httpError());
    }
    ReportsComponent.prototype.dumps = function (obj) {
        return JSON.stringify(obj);
    };
    ReportsComponent.prototype.httpError = function () {
        var _this = this;
        return function () {
            var str = 'Connection error.';
            var message = _this.i18n.instant(str);
            _this.toast.open(message, null, { duration: 2000 });
        };
    };
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'q-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.scss */ "./src/app/reports/reports.component.scss")]
        }),
        __metadata("design:paramtypes", [_reports_service__WEBPACK_IMPORTED_MODULE_3__["ReportsService"],
            _jobs_service__WEBPACK_IMPORTED_MODULE_5__["JobsService"],
            _translation_translation_service__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list id=\"sidenav\">\n  <a mat-list-item routerLink=\"connect\" routerLinkActive=\"active-list-item\">\n    {{ 'Connection' | translate }}\n  </a>\n\n  <a mat-list-item [routerLink]=\"button.route\" routerLinkActive=\"active-list-item\" *ngFor=\"let button of buttons()\">\n    {{ button.text | translate }}\n  </a>\n</mat-nav-list>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\n * Copyright (c) 2019 Álan Crístoffer\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#sidenav {\n  margin: 1rem; }\n#sidenav .active-list-item {\n    color: #4caf50 !important; }\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connect.service */ "./src/app/connect.service.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        var _this = this;
        this.isLoggedIn = false;
        this.user = null;
        this.token = null;
        this.bs = [
            { text: 'Manage Users', route: 'manage-users', permission: 'manage_users' },
            { text: 'Manage Groups', route: 'manage-groups', permission: 'manage_users' },
            { text: 'Manage Polices', route: 'manage-polices', permission: 'manage_users' },
            { text: 'Manage Admins', route: 'manage-admins', permission: 'manage_admins' },
            { text: 'Manage Quotas', route: 'manage-quotas', permission: 'manage_quotas' },
            { text: 'Reports', route: 'reports', permission: 'reports' },
            { text: 'My Quota', route: 'quota' },
            { text: 'My Jobs', route: 'jobs' }
        ];
        _connect_service__WEBPACK_IMPORTED_MODULE_2__["ConnectService"].token.subscribe(function (token) { return _this.isLoggedIn = token != null; });
        _connect_service__WEBPACK_IMPORTED_MODULE_2__["ConnectService"].user.subscribe(function (user) { return _this.user = user; });
    }
    SidebarComponent.prototype.buttons = function () {
        var _this = this;
        if (!this.isLoggedIn) {
            return [];
        }
        return lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](this.bs, function (b) { return b.permission == null || _this.user.permissions != null && lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](_this.user.permissions, b.permission); });
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'q-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/toolbar/toolbar.component.html":
/*!************************************************!*\
  !*** ./src/app/toolbar/toolbar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <button mat-button>Quotator</button>\n  <span stretch></span>\n  <button mat-button (click)=\"logout()\" *ngIf=\"loggedIn\">{{ 'Logout' | translate }}</button>\n  <button mat-button [matMenuTriggerFor]=\"languagesMenu\">{{ 'Language' | translate }}</button>\n  <mat-menu #languagesMenu=\"matMenu\">\n    <button mat-menu-item (click)=\"setLanguage('en')\">\n      <mat-icon svgIcon=\"en-flag\"></mat-icon>\n      {{ 'English' | translate }}\n    </button>\n    <button mat-menu-item (click)=\"setLanguage('fr')\">\n      <mat-icon svgIcon=\"fr-flag\"></mat-icon>\n      {{ 'French' | translate }}\n    </button>\n    <button mat-menu-item (click)=\"setLanguage('de')\">\n      <mat-icon svgIcon=\"de-flag\"></mat-icon>\n      {{ 'German' | translate }}\n    </button>\n    <button mat-menu-item (click)=\"setLanguage('pt')\">\n      <mat-icon svgIcon=\"pt-flag\"></mat-icon>\n      {{ 'Portuguese' | translate }}\n    </button>\n  </mat-menu>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.scss":
/*!************************************************!*\
  !*** ./src/app/toolbar/toolbar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _translation_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../translation/translation.service */ "./src/app/translation/translation.service.ts");
/* harmony import */ var _connect_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../connect.service */ "./src/app/connect.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(iconRegistry, sanitizer, translate, router) {
        var _this = this;
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.translate = translate;
        this.router = router;
        this.loggedIn = false;
        this.enFlagUrl = 'assets/imgs/en.svg';
        this.deFlagUrl = 'assets/imgs/de.svg';
        this.frFlagUrl = 'assets/imgs/fr.svg';
        this.ptFlagUrl = 'assets/imgs/pt.svg';
        this.registerImages();
        _connect_service__WEBPACK_IMPORTED_MODULE_5__["ConnectService"].token.subscribe(function (token) {
            _this.loggedIn = token != null;
            if (!_this.loggedIn) {
                _this.router.navigate(['connect']);
            }
        });
    }
    ToolbarComponent.prototype.registerImages = function () {
        var _this = this;
        var images = {
            'en-flag': this.enFlagUrl,
            'fr-flag': this.frFlagUrl,
            'de-flag': this.deFlagUrl,
            'pt-flag': this.ptFlagUrl,
        };
        lodash__WEBPACK_IMPORTED_MODULE_3__["map"](images, function (url, key) {
            var safeUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(url);
            _this.iconRegistry.addSvgIcon(key, safeUrl);
        });
    };
    ToolbarComponent.prototype.setLanguage = function (lang) {
        document.getElementsByTagName('html')[0].setAttribute('lang', lang);
        this.translate.use(lang);
    };
    ToolbarComponent.prototype.logout = function () {
        _connect_service__WEBPACK_IMPORTED_MODULE_5__["ConnectService"].token.next(null);
        _connect_service__WEBPACK_IMPORTED_MODULE_5__["ConnectService"].user.next(null);
    };
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'q-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _translation_translation_service__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/translation/de.ts":
/*!***********************************!*\
  !*** ./src/app/translation/de.ts ***!
  \***********************************/
/*! exports provided: LANG_DE_NAME, LANG_DE_TRANS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_DE_NAME", function() { return LANG_DE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_DE_TRANS", function() { return LANG_DE_TRANS; });
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
// tslint:disable:max-line-length
var LANG_DE_NAME = 'de';
var LANG_DE_TRANS = {
    'English': 'Englisch',
    'French': 'Französisch',
    'German': 'Deutsch',
    'Portuguese': 'Portuguiesisch',
    'Language': 'Sprache',
    'Connection': 'Verbindung',
    'Connect': 'Verbinden',
    'Username': 'Benutzername',
    'Password': 'Passwort',
    'Set Password': 'Passwort setzen',
    'Done': 'Fertig',
    'Manage Users': 'Benutzern Verwalten',
    'Manage Groups': 'Gruppe Verwalten',
    'Manage Polices': 'Richtlinien Verwalten',
    'Manage Admins': 'Administratoren Verwalten',
    'Manage Quotas': 'Quote Verwalten',
    'Reports': 'Berichte',
    'My Quota': 'Meine Quote',
    'My Jobs': 'Meine Aufträge',
    'Add': 'Hinzufügen',
    'Save': 'Speichern',
    'Cancel': 'Abbrechen',
    'User': 'Benutzer',
    'Policy': 'Richtlinie',
    'Admin': 'Administrator',
    'Name': 'Name',
    'Group': 'Gruppe',
    'Groups': 'Gruppen',
    'Polices': 'Richtlinien',
    'Logout': 'Ausloggen',
    'Printer': 'Drücker',
    'Printers': 'Drücker',
    'Infinite Quota': 'Unendliche Quote',
    'Quotas': 'Quote',
    'Quota': 'Quoten',
    'Report': 'Berichte',
    'Jobs': 'Autrag',
    'Job': 'Aufträge',
    'Permissions': 'Genehmigungen',
    'Permission': 'Genehmigung',
    'Filter': 'Filtern',
    'Quantity': 'Menge'
};


/***/ }),

/***/ "./src/app/translation/fr.ts":
/*!***********************************!*\
  !*** ./src/app/translation/fr.ts ***!
  \***********************************/
/*! exports provided: LANG_FR_NAME, LANG_FR_TRANS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_FR_NAME", function() { return LANG_FR_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_FR_TRANS", function() { return LANG_FR_TRANS; });
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
// tslint:disable:max-line-length
var LANG_FR_NAME = 'fr';
var LANG_FR_TRANS = {
    'English': 'Anglais',
    'French': 'Français',
    'German': 'Allemand',
    'Portuguese': 'Portugais',
    'Language': 'Langue',
    'Connection': 'Connexion',
    'Connect': 'Connecter',
    'Username': 'Nom d\'utilisateur',
    'Password': 'Nom de passe',
    'Set Password': 'Modifier le mot de pass',
    'Done': 'Fait',
    'Manage Users': 'Gérer les utilisateur',
    'Manage Groups': 'Gérer les groupes',
    'Manage Polices': 'Gérer les polices',
    'Manage Admins': 'Gérer les administrator',
    'Manage Quotas': 'Gérer les quotas',
    'Reports': 'Rapports',
    'My Quota': 'Ma quota',
    'My Jobs': 'Mes travaux',
    'Add': 'Ajouter',
    'Save': 'Enregistrer',
    'Cancel': 'Annuler',
    'User': 'Utilisateur',
    'Policy': 'Police',
    'Admin': 'Administrator',
    'Name': 'Nom',
    'Group': 'Grupe',
    'Groups': 'Grupes',
    'Polices': 'Polices',
    'Logout': 'Sortir',
    'Printer': 'Imprimante',
    'Printers': 'Imprimantes',
    'Infinite Quota': 'Quota infini',
    'Quotas': 'Quota',
    'Quota': 'Quotas',
    'Report': 'Rapport',
    'Jobs': 'Travaux',
    'Job': 'Travail',
    'Permissions': 'Autorisations',
    'Permission': 'Autorisation',
    'Filter': 'Filtrer',
    'Quantity': 'Quantité'
};


/***/ }),

/***/ "./src/app/translation/pt.ts":
/*!***********************************!*\
  !*** ./src/app/translation/pt.ts ***!
  \***********************************/
/*! exports provided: LANG_PT_NAME, LANG_PT_TRANS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_PT_NAME", function() { return LANG_PT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_PT_TRANS", function() { return LANG_PT_TRANS; });
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
// tslint:disable:max-line-length
var LANG_PT_NAME = 'pt';
var LANG_PT_TRANS = {
    'English': 'Inglês',
    'French': 'Francês',
    'German': 'Alemão',
    'Portuguese': 'Português',
    'Language': 'Idioma',
    'Connection': 'Conexão',
    'Connect': 'Conectar',
    'Username': 'Nome de usuário',
    'Password': 'Senha',
    'Set Password': 'Mudar Senha',
    'Done': 'Feito',
    'Manage Users': 'Gerenciar usuários',
    'Manage Groups': 'Gerenciar grupos',
    'Manage Polices': 'Gerenciar políticas',
    'Manage Admins': 'Gerenciar administradores',
    'Manage Quotas': 'Gerenciar cotas',
    'Reports': 'Relatórios',
    'My Quota': 'Minha cota',
    'My Jobs': 'Meus trabalhos',
    'Add': 'Adicionar',
    'Save': 'Salvar',
    'Cancel': 'Cancelar',
    'User': 'Usuário',
    'Policy': 'Política',
    'Admin': 'Administrador',
    'Name': 'Nome',
    'Group': 'Grupo',
    'Groups': 'Grupos',
    'Polices': 'Políticas',
    'Logout': 'Sair',
    'Printer': 'Impressora',
    'Printers': 'Impressoras',
    'Infinite Quota': 'Cota infinita',
    'Quotas': 'Cotas',
    'Quota': 'Cota',
    'Report': 'Relatório',
    'Jobs': 'Trabalhos',
    'Job': 'Trabalho',
    'Permissions': 'Permissões',
    'Permission': 'Permissão',
    'Filter': 'Filtrar',
    'Quantity': 'Quantidade'
};


/***/ }),

/***/ "./src/app/translation/translation.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/translation/translation.pipe.ts ***!
  \*************************************************/
/*! exports provided: TranslatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return TranslatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _translation_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../translation/translation.service */ "./src/app/translation/translation.service.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(_translate) {
        this._translate = _translate;
    }
    TranslatePipe.prototype.transform = function (value, args) {
        if (!value) {
            return;
        }
        return this._translate.instant(value);
    };
    TranslatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'translate',
            pure: false
        }),
        __metadata("design:paramtypes", [_translation_translation_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], TranslatePipe);
    return TranslatePipe;
}());



/***/ }),

/***/ "./src/app/translation/translation.service.ts":
/*!****************************************************!*\
  !*** ./src/app/translation/translation.service.ts ***!
  \****************************************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _translation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translation */ "./src/app/translation/translation.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var TranslateService = /** @class */ (function () {
    function TranslateService(_translations) {
        this._translations = _translations;
    }
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        get: function () {
            return this._currentLang;
        },
        enumerable: true,
        configurable: true
    });
    TranslateService.prototype.use = function (lang) {
        this._currentLang = lang;
        localStorage.setItem('language', lang);
    };
    TranslateService.prototype.translate = function (key) {
        var lang = this._translations.get(this.currentLang) || {};
        return lang[key] || key;
    };
    TranslateService.prototype.instant = function (key) {
        return this.translate(key);
    };
    TranslateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_translation__WEBPACK_IMPORTED_MODULE_1__["TRANSLATIONS"])),
        __metadata("design:paramtypes", [Object])
    ], TranslateService);
    return TranslateService;
}());



/***/ }),

/***/ "./src/app/translation/translation.ts":
/*!********************************************!*\
  !*** ./src/app/translation/translation.ts ***!
  \********************************************/
/*! exports provided: TRANSLATIONS, Dictionary, TRANSLATION_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSLATIONS", function() { return TRANSLATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSLATION_PROVIDERS", function() { return TRANSLATION_PROVIDERS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _de__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./de */ "./src/app/translation/de.ts");
/* harmony import */ var _fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fr */ "./src/app/translation/fr.ts");
/* harmony import */ var _pt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pt */ "./src/app/translation/pt.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var TRANSLATIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('translations');
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        var _a;
        this.dictionary = (_a = {},
            _a[_de__WEBPACK_IMPORTED_MODULE_1__["LANG_DE_NAME"]] = _de__WEBPACK_IMPORTED_MODULE_1__["LANG_DE_TRANS"],
            _a[_fr__WEBPACK_IMPORTED_MODULE_2__["LANG_FR_NAME"]] = _fr__WEBPACK_IMPORTED_MODULE_2__["LANG_FR_TRANS"],
            _a[_pt__WEBPACK_IMPORTED_MODULE_3__["LANG_PT_NAME"]] = _pt__WEBPACK_IMPORTED_MODULE_3__["LANG_PT_TRANS"],
            _a);
    }
    Dictionary.prototype.get = function (language) {
        return this.dictionary[language];
    };
    return Dictionary;
}());

var TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useClass: Dictionary },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Alan/Developer/Quotator/frontend/quotator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map