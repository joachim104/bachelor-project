(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jensbackvall/bachelor2020/bachelor-project/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "F2+r":
/*!**********************************************************************!*\
  !*** ./src/app/planethunt-tutorial/planethunt-tutorial.component.ts ***!
  \**********************************************************************/
/*! exports provided: PlanetHuntTutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetHuntTutorialComponent", function() { return PlanetHuntTutorialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




function PlanetHuntTutorialComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanetHuntTutorialComponent_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.clickLeft(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlanetHuntTutorialComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanetHuntTutorialComponent_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.clickRight(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PlanetHuntTutorialComponent {
    constructor() {
        this.position = 1;
    }
    ngOnInit() { }
    clickLeft() {
        if (this.position > 1) {
            this.position = this.position - 1;
        }
        if (this.position !== 4) {
            document.getElementById('skip').textContent = 'skip vejledning';
        }
        this.scroll(this.position);
    }
    clickRight() {
        if (this.position < 4) {
            this.position = this.position + 1;
        }
        if (this.position === 4) {
            document.getElementById('skip').textContent = 'start planetjagten';
        }
        this.scroll(this.position);
    }
    // Scroll to specific HTML element on page
    scroll(id) {
        const elId = String(id);
        const el = document.getElementById(elId);
        el.scrollIntoView({ behavior: "smooth" });
    }
}
PlanetHuntTutorialComponent.ɵfac = function PlanetHuntTutorialComponent_Factory(t) { return new (t || PlanetHuntTutorialComponent)(); };
PlanetHuntTutorialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlanetHuntTutorialComponent, selectors: [["planethunt-tutorial"]], decls: 22, vars: 2, consts: [[1, "text-white"], [1, "top-0", "left-0", "grid", "grid-cols-5", "fixed", "text-center", "w-full", "p-4"], [4, "ngIf"], [1, "col-start-2", "col-end-5", "uppercase", "text-3xl"], [1, "w-tutorial"], ["id", "1", 1, "float-left", "w-screen", "px-4", "py-24"], [1, "text-center", "text-2xl"], ["id", "2", 1, "float-left", "w-screen", "px-4", "py-24"], ["id", "3", 1, "float-left", "w-screen", "px-4", "py-24"], ["id", "4", 1, "float-left", "w-screen", "px-4", "py-24"], ["routerLink", "/inventory"], ["id", "skip", 1, "bottom-0", "left-0", "fixed", "text-center", "w-full", "p-4", "uppercase", "text-3xl"], [3, "click"], ["src", "../../assets/images/arrow-left.png", "alt", "left arrow", 1, "max-h-10"], ["src", "../../assets/images/arrow-left.png", "alt", "left arrow", 1, "max-h-10", "transform", "rotate-180", "float-right"]], template: function PlanetHuntTutorialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlanetHuntTutorialComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " s\u00E5dan g\u00F8r du ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PlanetHuntTutorialComponent_div_5_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 1. V\u00E6lg en planet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 2. Klik p\u00E5 planeten ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " 3. Find en planetstolpe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " 4. Scan planetstolpen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " skip vejledning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.position !== 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.position !== 4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanetHuntTutorialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'planethunt-tutorial',
                templateUrl: 'planethunt-tutorial.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LYdu":
/*!************************************************************************!*\
  !*** ./src/app/planethunt-startpage/planethunt-startpage.component.ts ***!
  \************************************************************************/
/*! exports provided: PlanethuntStartpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanethuntStartpageComponent", function() { return PlanethuntStartpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class PlanethuntStartpageComponent {
    constructor() { }
    ngOnInit() {
        console.log('logged baby!');
    }
}
PlanethuntStartpageComponent.ɵfac = function PlanethuntStartpageComponent_Factory(t) { return new (t || PlanethuntStartpageComponent)(); };
PlanethuntStartpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlanethuntStartpageComponent, selectors: [["planethunt-startpage"]], decls: 14, vars: 0, consts: [[1, "h-screen", "flex", "flex-col"], [1, "l-0", "t-0", "p-2"], ["src", "../../assets/images/logo-cirkel.png", "alt", "Brorfelde Logo", 1, "max-h-16"], [1, "text-center", "text-white", "pt-2", "text-xl"], [1, "uppercase"], [1, "text-center", "text-white", "p-4", "text-6xl"], [1, "w-full"], ["src", "../../assets/images/brorfelde-landscape.jpg", "alt", "Brorfelde landscape photo", 1, "mx-auto"], [1, "p-4", "w-full"], ["routerLink", "/tutorial"], ["src", "../../assets/images/sun.png", "alt", "The sun", 1, "max-h-72", "mx-auto"]], template: function PlanethuntStartpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "velkommen til");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "planetjagten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanethuntStartpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'planethunt-startpage',
                templateUrl: 'planethunt-startpage.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "NNSq":
/*!******************************************************************!*\
  !*** ./src/app/planethunt-signup/planethunt-signup.component.ts ***!
  \******************************************************************/
/*! exports provided: PlanethuntSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanethuntSignupComponent", function() { return PlanethuntSignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _planethunt_username_form_planethunt_username_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planethunt-username-form/planethunt-username-form.component */ "OONm");



class PlanethuntSignupComponent {
    constructor() { }
    ngOnInit() { }
}
PlanethuntSignupComponent.ɵfac = function PlanethuntSignupComponent_Factory(t) { return new (t || PlanethuntSignupComponent)(); };
PlanethuntSignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlanethuntSignupComponent, selectors: [["planethunt-signup"]], decls: 7, vars: 0, consts: [[1, "h-screen", "flex", "flex-col", "text-white"], [1, "text-center", "text-3xl", "uppercase", "p-4"], [1, "text-center", "p-4", "mx-8"], [1, "mx-auto"]], template: function PlanethuntSignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " v\u00E6lg brugernavn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " For at kunne jagte planeter, skal du v\u00E6lge et brugernavn. Det beh\u00F8ver ikke at v\u00E6re dit eget, s\u00E5 alt fra Han Solo til Niels Bohr eller Supernova er godt. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "planethunt-username-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_planethunt_username_form_planethunt_username_form_component__WEBPACK_IMPORTED_MODULE_1__["PlanethuntUsernameFormComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanethuntSignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'planethunt-signup',
                templateUrl: 'planethunt-signup.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OONm":
/*!********************************************************************************!*\
  !*** ./src/app/planethunt-username-form/planethunt-username-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: PlanethuntUsernameFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanethuntUsernameFormComponent", function() { return PlanethuntUsernameFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _userdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../userdata */ "yoaq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class PlanethuntUsernameFormComponent {
    constructor() {
        this.username = '';
        this.submitted = false;
    }
    onSubmit() {
        console.log('username: ', this.username);
        const newUser = new _userdata__WEBPACK_IMPORTED_MODULE_1__["Userdata"](this.username, [
            {
                id: 1,
                name: 'Solen',
                points: 0,
                letter: '?',
                facts: 'Fakta om solen',
                visited: 0
            },
            {
                id: 2,
                name: 'Merkur',
                points: 0,
                letter: '?',
                facts: 'Fakta om merkur',
                visited: 0
            },
            {
                id: 3,
                name: 'Venus',
                points: 0,
                letter: '?',
                facts: 'Fakta om venus',
                visited: 0
            },
            {
                id: 4,
                name: 'Jorden',
                points: 0,
                letter: '?',
                facts: 'Fakta om jorden',
                visited: 0
            },
            {
                id: 5,
                name: 'Mars',
                points: 0,
                letter: '?',
                facts: 'Fakta om mars',
                visited: 0
            },
            {
                id: 6,
                name: 'Jupiter',
                points: 0,
                letter: '?',
                facts: 'Fakta om jupiter',
                visited: 0
            },
            {
                id: 7,
                name: 'Saturn',
                points: 0,
                letter: '?',
                facts: 'Fakta om saturn',
                visited: 0
            },
            {
                id: 8,
                name: 'Uranus',
                points: 0,
                letter: '?',
                facts: 'Fakta om uranus',
                visited: 0
            },
            {
                id: 9,
                name: 'Neptun',
                points: 0,
                letter: '?',
                facts: 'Fakta om neptun',
                visited: 0
            },
            {
                id: 10,
                name: 'Pluto',
                points: 0,
                letter: '?',
                facts: 'Fakta om pluto',
                visited: 0
            },
        ]);
        console.log('new userdata: ', newUser);
        this.submitted = true;
    }
    ngOnInit() { }
}
PlanethuntUsernameFormComponent.ɵfac = function PlanethuntUsernameFormComponent_Factory(t) { return new (t || PlanethuntUsernameFormComponent)(); };
PlanethuntUsernameFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlanethuntUsernameFormComponent, selectors: [["planethunt-username-form"]], decls: 9, vars: 1, consts: [[3, "ngSubmit"], ["usernameForm", "ngForm"], [1, "form-group"], ["type", "text", "placeholder", "skriv dit brugernavn her", "required", "", "name", "username", 1, "m-4", "form-control", "text-center", "bg-base", "border-2", "text-xl", "border-solid", 3, "ngModel", "ngModelChange"], [1, "text-center"], ["type", "submit", 1, "bg-indigo-800", "border-2", "border-solid", "rounded-lg", "p-4", 3, "click"]], template: function PlanethuntUsernameFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PlanethuntUsernameFormComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlanethuntUsernameFormComponent_Template_input_ngModelChange_3_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanethuntUsernameFormComponent_Template_button_click_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "START PLANETJAGTEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanethuntUsernameFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'planethunt-username-form',
                templateUrl: 'planethunt-username-form.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'brorfelde';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "Ufys":
/*!**************************************************************************!*\
  !*** ./src/app/planethunt-wordpuzzle/planethunt-wordpuzzle.component.ts ***!
  \**************************************************************************/
/*! exports provided: PlanethuntWordpuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanethuntWordpuzzleComponent", function() { return PlanethuntWordpuzzleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PlanethuntWordpuzzleComponent {
    constructor() { }
    ngOnInit() { }
}
PlanethuntWordpuzzleComponent.ɵfac = function PlanethuntWordpuzzleComponent_Factory(t) { return new (t || PlanethuntWordpuzzleComponent)(); };
PlanethuntWordpuzzleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlanethuntWordpuzzleComponent, selectors: [["planethunt-wordpuzzle"]], decls: 1, vars: 0, template: function PlanethuntWordpuzzleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "This is where the wordpuzzle goes, where a user is presented with all of his/her letters that can be rearranged to create a new word.\nHow do we catch the order of the letters? Maybe asign positions a value? Think.\n");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanethuntWordpuzzleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'planethunt-wordpuzzle',
                templateUrl: 'planethunt-wordpuzzle.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "YSlc":
/*!************************************************************************!*\
  !*** ./src/app/planethunt-inventory/planethunt-inventory.component.ts ***!
  \************************************************************************/
/*! exports provided: PlanethuntInventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanethuntInventoryComponent", function() { return PlanethuntInventoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PlanethuntInventoryComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanethuntInventoryComponent_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const planet_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.scroll(planet_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const planet_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", planet_r3.imgurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Point: ", planet_r3.points, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Bogstav: ", planet_r3.letter, " ");
} }
function PlanethuntInventoryComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const planet_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", planet_r6.letter, " \u00A0 ");
} }
function PlanethuntInventoryComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Bogstav: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const planet_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", planet_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", planet_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", planet_r7.imgurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Fakta om ", planet_r7.name, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", planet_r7.fakta, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Point: ", planet_r7.points, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](planet_r7.letter);
} }
class PlanethuntInventoryComponent {
    constructor() {
        // The array below is inserted to fill out the template during initial setup
        this.planetArray = [
            {
                id: 1,
                name: 'Solen',
                points: 3,
                letter: 'a',
                fakta: 'Solen er meget stor, større end du tror.',
                imgurl: '../../assets/images/placeholder-planet.jpg'
            },
            {
                id: 2,
                name: 'Solen',
                points: 3,
                letter: 'a',
                fakta: 'Solen er meget stor, større end du tror.',
                imgurl: '../../assets/images/placeholder-planet.jpg'
            },
            {
                id: 3,
                name: 'Solen',
                points: 3,
                letter: 'a',
                fakta: 'Solen er meget stor, større end du tror.',
                imgurl: '../../assets/images/placeholder-planet.jpg'
            },
            {
                id: 4,
                name: 'Solen',
                points: 1,
                letter: '?',
                fakta: 'Solen er meget stor, større end du tror.',
                imgurl: '../../assets/images/placeholder-planet.jpg'
            },
            {
                id: 5,
                name: 'Solen',
                points: 3,
                letter: 'r',
                fakta: 'Solen er meget stor, større end du tror.',
                imgurl: '../../assets/images/placeholder-planet.jpg'
            },
            {
                id: 6,
                name: 'Solen',
                points: 2,
                letter: 'a',
                fakta: 'Solen er meget stor, større end du tror.',
                imgurl: '../../assets/images/placeholder-planet.jpg'
            },
            {
                id: 7,
                name: 'Solen',
                points: 3,
                letter: 'm',
                fakta: 'Solen er meget stor, større end du tror.',
                imgurl: '../../assets/images/placeholder-planet.jpg'
            },
            {
                id: 8,
                name: 'Solen',
                points: 3,
                letter: 'a',
                fakta: 'Solen er meget stor, større end du tror.',
                imgurl: '../../assets/images/placeholder-planet.jpg'
            },
            {
                id: 9,
                name: 'Solen',
                points: 1,
                letter: 'a',
                fakta: 'Solen er meget stor, større end du tror.',
                imgurl: '../../assets/images/placeholder-planet.jpg'
            },
            {
                id: 10,
                name: 'Solen',
                points: 2,
                letter: 'a',
                fakta: 'Solen er meget stor, større end du tror.',
                imgurl: '../../assets/images/placeholder-planet.jpg'
            },
        ];
        this.totalpoints = 0;
    }
    ngOnInit() {
        this.calculatePointTotal();
    }
    // TODO: get planets from database to populate the planetArray. OBS! Initiate all planets with a letter value of ? (question mark)
    // TODO: When first hololink is opened, start timer
    // TODO: When a hololink is visited, update the image for that planet in the database
    // Scroll to specific HTML element on page
    scroll(id) {
        const elId = String(id);
        const el = document.getElementById(elId);
        el.scrollIntoView({ behavior: "smooth" });
    }
    // Calculate the total points based on the points for each planet
    calculatePointTotal() {
        this.planetArray.forEach(planet => {
            this.totalpoints = this.totalpoints + planet.points;
        });
    }
}
PlanethuntInventoryComponent.ɵfac = function PlanethuntInventoryComponent_Factory(t) { return new (t || PlanethuntInventoryComponent)(); };
PlanethuntInventoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlanethuntInventoryComponent, selectors: [["planethunt-inventory"]], decls: 18, vars: 4, consts: [["id", "inventory", 1, "grid", "grid-cols-3", "gap-4", "p-4", "text-white"], [1, "col-span-3", "text-center", "p-4", "text-4xl", "uppercase"], [4, "ngFor", "ngForOf"], [1, "col-start-2", "col-end-4", "p-1", "grid", "grid-col"], [1, "grid", "grid-col", "text-xl"], ["class", "float-left uppercase", 4, "ngFor", "ngForOf"], [1, "top-0", "right-0", "mt-4", "mr-4", "fixed", "focus:outline-none"], [3, "click"], ["src", "../../assets/images/inventory-icon-bg.png", "alt", "inventory navigation", 1, "max-h-14"], ["alt", "planet image", 3, "src"], [1, "float-left", "uppercase"], [1, "flex", "flex-col", "p-4", "h-screen", "text-white", 3, "id"], [1, "text-white", "text-6xl", "text-center", "uppercase", "p-4"], ["alt", "planet image", 1, "mx-auto", "max-h-planetcard", "max-w-planetcard", 3, "src"], [1, "p-4"], [1, "text-2xl", "capitalize", "pb-2"], [1, "text-lg", "py-2"], [1, "text-2xl", "py-2"], [1, "uppercase"]], template: function PlanethuntInventoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " mine planeter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlanethuntInventoryComponent_div_3_Template, 6, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Tid: 00:12:34 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Mine bogstaver: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlanethuntInventoryComponent_p_13_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PlanethuntInventoryComponent_ng_container_14_Template, 16, 7, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanethuntInventoryComponent_Template_button_click_16_listener() { return ctx.scroll("inventory"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.planetArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Point Total: ", ctx.totalpoints, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.planetArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.planetArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanethuntInventoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'planethunt-inventory',
                templateUrl: 'planethunt-inventory.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _planethunt_startpage_planethunt_startpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./planethunt-startpage/planethunt-startpage.component */ "LYdu");
/* harmony import */ var _planethunt_tutorial_planethunt_tutorial_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./planethunt-tutorial/planethunt-tutorial.component */ "F2+r");
/* harmony import */ var _planethunt_inventory_planethunt_inventory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./planethunt-inventory/planethunt-inventory.component */ "YSlc");
/* harmony import */ var _planethunt_signup_planethunt_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./planethunt-signup/planethunt-signup.component */ "NNSq");
/* harmony import */ var _planethunt_username_form_planethunt_username_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./planethunt-username-form/planethunt-username-form.component */ "OONm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _planethunt_startpage_planethunt_startpage_component__WEBPACK_IMPORTED_MODULE_4__["PlanethuntStartpageComponent"],
        _planethunt_tutorial_planethunt_tutorial_component__WEBPACK_IMPORTED_MODULE_5__["PlanetHuntTutorialComponent"],
        _planethunt_inventory_planethunt_inventory_component__WEBPACK_IMPORTED_MODULE_6__["PlanethuntInventoryComponent"],
        _planethunt_signup_planethunt_signup_component__WEBPACK_IMPORTED_MODULE_7__["PlanethuntSignupComponent"],
        _planethunt_username_form_planethunt_username_form_component__WEBPACK_IMPORTED_MODULE_8__["PlanethuntUsernameFormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _planethunt_startpage_planethunt_startpage_component__WEBPACK_IMPORTED_MODULE_4__["PlanethuntStartpageComponent"],
                    _planethunt_tutorial_planethunt_tutorial_component__WEBPACK_IMPORTED_MODULE_5__["PlanetHuntTutorialComponent"],
                    _planethunt_inventory_planethunt_inventory_component__WEBPACK_IMPORTED_MODULE_6__["PlanethuntInventoryComponent"],
                    _planethunt_signup_planethunt_signup_component__WEBPACK_IMPORTED_MODULE_7__["PlanethuntSignupComponent"],
                    _planethunt_username_form_planethunt_username_form_component__WEBPACK_IMPORTED_MODULE_8__["PlanethuntUsernameFormComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _planethunt_inventory_planethunt_inventory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planethunt-inventory/planethunt-inventory.component */ "YSlc");
/* harmony import */ var _planethunt_signup_planethunt_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./planethunt-signup/planethunt-signup.component */ "NNSq");
/* harmony import */ var _planethunt_startpage_planethunt_startpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./planethunt-startpage/planethunt-startpage.component */ "LYdu");
/* harmony import */ var _planethunt_tutorial_planethunt_tutorial_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./planethunt-tutorial/planethunt-tutorial.component */ "F2+r");
/* harmony import */ var _planethunt_wordpuzzle_planethunt_wordpuzzle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./planethunt-wordpuzzle/planethunt-wordpuzzle.component */ "Ufys");









const routes = [
    { path: '', redirectTo: '/startpag', pathMatch: 'full' },
    { path: 'startpage', component: _planethunt_startpage_planethunt_startpage_component__WEBPACK_IMPORTED_MODULE_4__["PlanethuntStartpageComponent"] },
    { path: 'tutorial', component: _planethunt_tutorial_planethunt_tutorial_component__WEBPACK_IMPORTED_MODULE_5__["PlanetHuntTutorialComponent"] },
    { path: 'inventory', component: _planethunt_inventory_planethunt_inventory_component__WEBPACK_IMPORTED_MODULE_2__["PlanethuntInventoryComponent"] },
    { path: 'wordpuzzle', component: _planethunt_wordpuzzle_planethunt_wordpuzzle_component__WEBPACK_IMPORTED_MODULE_6__["PlanethuntWordpuzzleComponent"] },
    { path: 'signup', component: _planethunt_signup_planethunt_signup_component__WEBPACK_IMPORTED_MODULE_3__["PlanethuntSignupComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yoaq":
/*!*****************************!*\
  !*** ./src/app/userdata.ts ***!
  \*****************************/
/*! exports provided: Userdata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Userdata", function() { return Userdata; });
class Userdata {
    constructor(username, planets) {
        this.username = username;
        this.planets = planets;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map