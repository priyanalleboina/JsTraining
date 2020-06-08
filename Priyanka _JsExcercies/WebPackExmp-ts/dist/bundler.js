var ui =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: getArithmetic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArithmetic", function() { return getArithmetic; });
/* harmony import */ var _mathlibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathlibrary */ "./src/mathlibrary.ts");

function getArithmetic() {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const result = document.getElementById('error');
    const val1 = Number(num1.value); //explicit number conversion
    const val2 = Number(num2.value); //explicit number conversion
    if (!_mathlibrary__WEBPACK_IMPORTED_MODULE_0__["default"].validate(val1, val2)) {
        result.innerHTML = "Invalid numbers";
        return;
    }
    document.getElementById('sumResult').innerHTML = String(_mathlibrary__WEBPACK_IMPORTED_MODULE_0__["default"].add(val1, val2)); //implicit conversion to string here
    document.getElementById('mulResult').innerHTML = _mathlibrary__WEBPACK_IMPORTED_MODULE_0__["default"].multiplication(val1, val2);
    document.getElementById('subResult').innerHTML = _mathlibrary__WEBPACK_IMPORTED_MODULE_0__["default"].subtraction(val1, val2);
    document.getElementById('divResult').innerHTML = String(_mathlibrary__WEBPACK_IMPORTED_MODULE_0__["default"].division(val1, val2)); //implicit conversion to string here
}


/***/ }),

/***/ "./src/mathlibrary.ts":
/*!****************************!*\
  !*** ./src/mathlibrary.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class MathLibrary {
    constructor() {
    }
    validate(num1, num2) {
        //if (typeof num1 != 'number' || typeof num2 != 'number')
        if (isNaN(num1) || isNaN(num2)) {
            return false;
        }
        return true;
    }
    add(num1, num2) {
        return num1 + num2; //return number
    }
    multiplication(num1, num2) {
        return String(num1 * num2); //converts to string and returns
    }
    subtraction(num1, num2) {
        var sub = num1 - num2;
        return sub.toString(); //converts to string and returns
    }
    division(num1, num2) {
        if (num2 == 0)
            return 0;
        return num1 / num2; //return number
    }
}
const mathLibrary = new MathLibrary();
/* harmony default export */ __webpack_exports__["default"] = (mathLibrary);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91aS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91aS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly91aS8uL3NyYy9tYXRobGlicmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBd0M7QUFFakMsU0FBUyxhQUFhO0lBQzNCLE1BQU0sSUFBSSxHQUFRLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEQsTUFBTSxJQUFJLEdBQVEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVsRCxNQUFNLE1BQU0sR0FBUyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELE1BQU0sSUFBSSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7SUFDckUsTUFBTSxJQUFJLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtJQUNyRSxJQUFJLENBQUMsb0RBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO1FBQ3JDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7UUFDckMsT0FBTztLQUNSO0lBRUQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLG9EQUFXLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsb0NBQW9DO0lBQzFILFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxHQUFHLG9EQUFXLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxvREFBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckYsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLG9EQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsb0NBQW9DO0FBQ2pJLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7QUFBQSxNQUFNLFdBQVc7SUFDYjtJQUNBLENBQUM7SUFDRCxRQUFRLENBQUMsSUFBWSxFQUFFLElBQVk7UUFDakMseURBQXlEO1FBQ3pELElBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsR0FBRyxDQUFDLElBQVksRUFBRSxJQUFZO1FBQzVCLE9BQU8sSUFBSSxHQUFDLElBQUksQ0FBQyxDQUFDLGVBQWU7SUFDbkMsQ0FBQztJQUNELGNBQWMsQ0FBQyxJQUFZLEVBQUUsSUFBWTtRQUN2QyxPQUFPLE1BQU0sQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0M7SUFDNUQsQ0FBQztJQUNELFdBQVcsQ0FBQyxJQUFZLEVBQUUsSUFBWTtRQUNwQyxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ3BCLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsZ0NBQWdDO0lBQ3pELENBQUM7SUFDRCxRQUFRLENBQUMsSUFBWSxFQUFFLElBQVk7UUFDakMsSUFBSSxJQUFJLElBQUksQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxHQUFDLElBQUksQ0FBQyxDQUFDLGVBQWU7SUFDbkMsQ0FBQztDQUNGO0FBRUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUU7QUFDdEIsMEVBQVcsRUFBQyIsImZpbGUiOiJidW5kbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgbWF0aExpYnJhcnkgZnJvbSAnLi9tYXRobGlicmFyeSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXJpdGhtZXRpYygpIHtcclxuICBjb25zdCBudW0xOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtMScpO1xyXG4gIGNvbnN0IG51bTI6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW0yJyk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA6YW55ICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvcicpO1xyXG4gIGNvbnN0IHZhbDE6IG51bWJlciA9IE51bWJlcihudW0xLnZhbHVlKTsgLy9leHBsaWNpdCBudW1iZXIgY29udmVyc2lvblxyXG4gIGNvbnN0IHZhbDI6IG51bWJlciA9IE51bWJlcihudW0yLnZhbHVlKTsgLy9leHBsaWNpdCBudW1iZXIgY29udmVyc2lvblxyXG4gIGlmICghbWF0aExpYnJhcnkudmFsaWRhdGUodmFsMSwgdmFsMikpIHtcclxuICAgIHJlc3VsdC5pbm5lckhUTUwgPSBcIkludmFsaWQgbnVtYmVyc1wiO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VtUmVzdWx0JykuaW5uZXJIVE1MID0gU3RyaW5nKG1hdGhMaWJyYXJ5LmFkZCh2YWwxLCB2YWwyKSk7IC8vaW1wbGljaXQgY29udmVyc2lvbiB0byBzdHJpbmcgaGVyZVxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtdWxSZXN1bHQnKS5pbm5lckhUTUwgPSBtYXRoTGlicmFyeS5tdWx0aXBsaWNhdGlvbih2YWwxLCB2YWwyKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ViUmVzdWx0JykuaW5uZXJIVE1MID0gbWF0aExpYnJhcnkuc3VidHJhY3Rpb24odmFsMSwgdmFsMik7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdlJlc3VsdCcpLmlubmVySFRNTCA9IFN0cmluZyhtYXRoTGlicmFyeS5kaXZpc2lvbih2YWwxLCB2YWwyKSk7IC8vaW1wbGljaXQgY29udmVyc2lvbiB0byBzdHJpbmcgaGVyZVxyXG59IiwiY2xhc3MgTWF0aExpYnJhcnkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcbiAgICB2YWxpZGF0ZShudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAvL2lmICh0eXBlb2YgbnVtMSAhPSAnbnVtYmVyJyB8fCB0eXBlb2YgbnVtMiAhPSAnbnVtYmVyJylcclxuICAgICAgaWYoaXNOYU4obnVtMSkgfHwgaXNOYU4obnVtMikpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBhZGQobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gbnVtMStudW0yOyAvL3JldHVybiBudW1iZXJcclxuICAgIH1cclxuICAgIG11bHRpcGxpY2F0aW9uKG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIFN0cmluZyhudW0xKm51bTIpOyAvL2NvbnZlcnRzIHRvIHN0cmluZyBhbmQgcmV0dXJuc1xyXG4gICAgfVxyXG4gICAgc3VidHJhY3Rpb24obnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIpIDpzdHJpbmcge1xyXG4gICAgICB2YXIgc3ViID0gbnVtMS1udW0yO1xyXG4gICAgICByZXR1cm4gc3ViLnRvU3RyaW5nKCk7IC8vY29udmVydHMgdG8gc3RyaW5nIGFuZCByZXR1cm5zXHJcbiAgICB9XHJcbiAgICBkaXZpc2lvbihudW0xIDpudW1iZXIsIG51bTIgOm51bWJlcikgOm51bWJlciB7XHJcbiAgICAgIGlmIChudW0yID09IDApIHJldHVybiAwO1xyXG4gICAgICByZXR1cm4gbnVtMS9udW0yOyAvL3JldHVybiBudW1iZXJcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgY29uc3QgbWF0aExpYnJhcnkgPSBuZXcgTWF0aExpYnJhcnkoKVxyXG4gIGV4cG9ydCBkZWZhdWx0IG1hdGhMaWJyYXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=