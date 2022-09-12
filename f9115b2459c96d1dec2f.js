"use strict";
(self["webpackChunkbeprayed"] = self["webpackChunkbeprayed"] || []).push([["src_pages_Home_Demo_index_tsx"],{

/***/ "./src/components/LayoutDivider.tsx":
/*!******************************************!*\
  !*** ./src/components/LayoutDivider.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LayoutDivider = ({ desktop, mobile }) => {
    const [width, setWindowWidth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);
    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, width > 1024 ? desktop() : mobile());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutDivider);


/***/ }),

/***/ "./src/pages/Home/Demo/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/Home/Demo/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LayoutDivider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/LayoutDivider */ "./src/components/LayoutDivider.tsx");


const Demo = () => {
    const content = {
        desktop: () => {
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " flex max-h-content_h animate-fade_in" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " m-auto flex w-auto flex-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "m-auto flex" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-auto space-y-6 text-[#414141]" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: " flex w-[60%] text-[44px] font-semibold leading-tight tracking-tight" }, "Our new website is on its way."),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "space-y-3 text-lg" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Sign up to be the first"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "to know when we launch.")),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "space-y-4" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-sm" }, "Enter your email here*"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { className: "border-b border-b-[#414141] outline-0", placeholder: "email" })),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "h-9 w-1/4 bg-[#414141] text-sm text-white" }, "Notify Me")))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "max-h-content_h w-1/2", src: "https://static.wixstatic.com/media/45d10e_187e077f527448b3afe5d2fc52a9d4f8~mv2_d_2890_3648_s_4_2.jpg/v1/fill/w_490,h_1079,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/45d10e_187e077f527448b3afe5d2fc52a9d4f8~mv2_d_2890_3648_s_4_2.jpg" }))));
        },
        mobile: () => {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "animate-fade_in overflow-auto opacity-100" });
        },
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LayoutDivider__WEBPACK_IMPORTED_MODULE_1__["default"], { ...content });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Demo);


/***/ })

}]);
//# sourceMappingURL=js/f9115b2459c96d1dec2f.js.map