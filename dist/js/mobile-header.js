(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _goPreviousPage = require("./modules/goPreviousPage");

var _goPreviousPage2 = _interopRequireDefault(_goPreviousPage);

var _headerMobileAnimetion = require("./modules/headerMobileAnimetion");

var _headerMobileAnimetion2 = _interopRequireDefault(_headerMobileAnimetion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 426) {
        (0, _goPreviousPage2.default)();
        (0, _headerMobileAnimetion2.default)();
    }
});

},{"./modules/goPreviousPage":2,"./modules/headerMobileAnimetion":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var goPreviousPage = function goPreviousPage() {
    var backBtn = document.querySelector(".mobile-header__back-btn");
    backBtn.addEventListener("click", function () {
        window.history.back();
    });
};
exports.default = goPreviousPage;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var headerMobileAnimetion = function headerMobileAnimetion() {
    var scrollBefore = 0;
    var header = document.querySelector(".mobile-header");

    header.classList.add("animate__animated");

    window.addEventListener("scroll", function () {
        var scrolled = window.scrollY;

        if (scrollBefore > scrolled) {
            scrollBefore = scrolled;
            if (header.classList.contains("animate__slideOutUp")) {
                header.classList.remove("animate__slideOutUp");
                header.classList.add("animate__slideInDown");
            }

            // console.log("ScrollUP");
            // //Desired action
        } else {

            scrollBefore = scrolled;
            if (scrollY > 0) {
                header.classList.remove("animate__slideInDown");
                header.classList.add("animate__slideOutUp");
            } else if (scrollY < 0) {
                header.classList.remove("animate__slideOutUp");
                header.classList.add("animate__slideInDown");
            }

            // console.log("ScrollDOWN");
            // // Desired action
        }
    });
};
exports.default = headerMobileAnimetion;

},{}]},{},[1]);