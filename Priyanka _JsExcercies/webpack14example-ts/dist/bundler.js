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

/***/ "./src/address.ts":
/*!************************!*\
  !*** ./src/address.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Address; });
class Address {
    constructor(hno, city, street) {
        this.hno = hno;
        this.city = city;
        this.street = street;
    }
    describe() {
        let description = "Address[hno =";
        description += this.hno;
        description += ", City Name = ";
        description += String(this.city);
        description += ",Street = ";
        description += String(this.street);
        description += "]\n"; //Hack, should not do it 
        return description;
    }
}


/***/ }),

/***/ "./src/contact.ts":
/*!************************!*\
  !*** ./src/contact.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address */ "./src/address.ts");

class Contact {
    constructor(pid, name, age, hno, street, city) {
        this.pid = Number(pid);
        this.name = name;
        this.age = Number(age);
        this.address = new _address__WEBPACK_IMPORTED_MODULE_0__["default"](hno, street, city);
        this.friendsList = [];
    }
    //Q. In address class have fields like House Number, street Name, City, State, ZipCode
    describe() {
        let description = "==>Person Name is ";
        description += this.name + "</br>";
        description += " and person age is ";
        description += String(this.age) + "</br>";
        description += " and address is ";
        description += this.address.describe() + "</br>";
        description += "\n"; //Hack, should not do it 
        return description;
    }
}
// //fill code to add another contact here
// //but asynchronously
// Contact.prototype.addContact = function (friendContact) {
//   this.friendsList.push(friendContact);
// }
// //asynchronously return this person 
// //friends list using callback function
// Contact.prototype.getFriendsList = function () {
//   let friendsData = ' ';
//   for(friend of this.friendsList){
//     friendsData += 'Friends Names :  [' + friend.name + ' ' + friend.age +']';
//   }
//   return friendsData;
// }


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: addPersons, getPersonDetails, show */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPersons", function() { return addPersons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPersonDetails", function() { return getPersonDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ "./src/contact.ts");

let Contacts = []; //Empty Array. This is supposed to hold Persons Objects
//Q. Can you creat new function to take many contacts in single function
//input can be from json text
function addPersons() {
    //1. Build Persons List here
    //Ex: const persons = [{}, {}, {}, {} ]
    const contactList = [
        {
            pid: 10,
            name: "Ramu",
            age: 34,
            hno: "123-5",
            street: "Kranthi Nagar",
            city: "Hyd",
        },
        {
            pid: 11,
            name: "Vani",
            age: 31,
            hno: "123-5",
            street: "Musheerabad",
            city: "Hyd",
        },
        {
            pid: 12,
            name: "Madhu",
            age: 35,
            hno: "123-5",
            street: "Mehadipatnam",
            city: "Hyd",
        },
        {
            pid: 13,
            name: "Latha",
            age: 36,
            hno: "243-5",
            street: "LIngampally",
            city: "Hyd",
        },
    ];
    //for loop to add every person in list
    // const addressBooks =[{'pid':10,'name':'Modi'},{'pid':10,'name':'Jassu'}];
    const addressBooks = [
        { pid: 10, friends: [11, 13] },
        { pid: 11, friends: [12, 13] },
    ];
    for (let contactInfo of contactList) {
        const contact = new _contact__WEBPACK_IMPORTED_MODULE_0__["default"](contactInfo.pid, contactInfo.name, contactInfo.age, contactInfo.hno, contactInfo.street, contactInfo.city);
        //3.Add it to the list
        Contacts.push(contact);
    }
    let ele = document.getElementById("sel");
    for (let contact of Contacts) {
        ele.innerHTML =
            ele.innerHTML +
                '<option value="' +
                contact.pid +
                '">' +
                contact.name +
                "</option>";
    }
    for (const friendsList of addressBooks) {
        const pid = friendsList.pid;
        getContactAsync(pid, (contact) => {
            const currentContact = contact;
            if (currentContact == null) {
                return;
            }
            for (const friendId of friendsList.friends) {
                getContactAsync(friendId, (friendContact) => {
                    // let currentContact = null;
                    // currentContact = friendContact;
                    if (friendContact == null) {
                        return;
                    }
                    currentContact.addContact(friendContact);
                });
            }
        });
    }
}
function getContactAsync(pid, cbk) {
    //return the result should be using  callback and timeout
    setTimeout(() => {
        for (const contact of Contacts) {
            if (contact.pid === pid) {
                cbk(contact);
            }
        }
        cbk(null);
    }, 0);
}
function getContact(pid) {
    //return the result should be using  callback and timeout
    for (const contact of Contacts) {
        if (contact.pid === pid) {
            return contact;
        }
    }
    return null;
}
//Asyn
function getPersonDetails() {
    //1. Get Age condition using html input ageCondition
    let pidCond = document.getElementById("pidCondition");
    let pidCondition = Number(pidCond.value);
    getContactAsync(pidCondition, (contact) => {
        let currentContact = null;
        currentContact = contact;
        if (currentContact == null) {
            return;
        }
        let personsList = " ";
        if (currentContact != null) {
            personsList += currentContact.describe();
            personsList += currentContact.getFriendsList();
        }
        let listElement = document.getElementById("personsDetails");
        listElement.innerHTML = personsList;
    });
}
function show(ele) {
    // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
    var msg = document.getElementById("msg");
    msg.innerHTML =
        "Selected Peroson: <b>" +
            ele.options[ele.selectedIndex].text +
            "</b> </br>" +
            "ID: <b><input type = text name = pid value =  " +
            ele.value +
            ">";
}
//Fill this code to get given Person details
//Name, person Address and person address book
//Example: for given person name 'Modi'
//Name: Modi
//Age: 65
//Person Self Address: New Delhi
//Person Contact List (address Book): [Amit, Naidu, Kcr, Kaveri, Mamatha]
//function getPersonDetails() {
//1. get given person name
//2. get given person details
//3. get given person address book
//4. update UI with this list
//}
// function getPersonDetails() {
//   //1. Get Age condition using html input ageCondition
//   let pidCondition = document.getElementById("pidCondition").value;
//   let newAddressbook = Contacts;
//   let currentContact = null;
//   for(const contact of Contacts){
//     if(contact.pid == pidCondition){
//       currentContact = contact;
//       break;
//     }
//   }
//   let personsList = ' ';
//   if( currentContact != null) {
//     personsList += currentContact.describe();
//     personsList += currentContact.getFriendsList();
//   }
//   let listElement = document.getElementById("personsDetails");
//   listElement.innerHTML = personsList;
// }


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91aS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91aS8uL3NyYy9hZGRyZXNzLnRzIiwid2VicGFjazovL3VpLy4vc3JjL2NvbnRhY3QudHMiLCJ3ZWJwYWNrOi8vdWkvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFlLE1BQU0sT0FBTztJQUkxQixZQUFZLEdBQVcsRUFBQyxJQUFZLEVBQUMsTUFBYztRQUNuRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFSCxRQUFRO1FBQ04sSUFBSSxXQUFXLEdBQVUsZUFBZSxDQUFDO1FBQ3ZDLFdBQVcsSUFB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QkFBK0I7QUFDL0Isb0NBQW9DO0FBQ3BDLHVDQUF1QztBQUN2QyxrQ0FBa0M7QUFDbEMsZUFBZTtBQUNmLFFBQVE7QUFDUixNQUFNO0FBQ04sMkJBQTJCO0FBQzNCLGtDQUFrQztBQUNsQyxnREFBZ0Q7QUFDaEQsc0RBQXNEO0FBQ3RELE1BQU07QUFDTixpRUFBaUU7QUFDakUseUNBQXlDO0FBQ3pDLElBQUkiLCJmaWxlIjoiYnVuZGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkcmVzcyB7XG4gIGhubzogc3RyaW5nO1xuICBjaXR5OiBzdHJpbmc7XG4gIHN0cmVldDogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihobm86IHN0cmluZyxjaXR5OiBzdHJpbmcsc3RyZWV0OiBzdHJpbmcpe1xuICB0aGlzLmhubyA9IGhubztcbiAgdGhpcy5jaXR5ID0gY2l0eTtcbiAgdGhpcy5zdHJlZXQgPSBzdHJlZXQ7XG4gIH1cblxuZGVzY3JpYmUoKTogc3RyaW5nIHtcbiAgbGV0IGRlc2NyaXB0aW9uOnN0cmluZyA9IFwiQWRkcmVzc1tobm8gPVwiO1xuICAgIGRlc2NyaXB0aW9uICs9IHRoaXMuaG5vO1xuICAgIGRlc2NyaXB0aW9uICs9IFwiLCBDaXR5IE5hbWUgPSBcIjtcbiAgICBkZXNjcmlwdGlvbiArPSBTdHJpbmcodGhpcy5jaXR5KTtcbiAgICBkZXNjcmlwdGlvbiArPSBcIixTdHJlZXQgPSBcIjtcbiAgICBkZXNjcmlwdGlvbiArPSBTdHJpbmcodGhpcy5zdHJlZXQpXG4gICAgXG4gICAgZGVzY3JpcHRpb24gKz0gXCJdXFxuXCI7IC8vSGFjaywgc2hvdWxkIG5vdCBkbyBpdCBcblxuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbn1cbn0iLCJpbXBvcnQgQWRkcmVzcyBmcm9tICcuL2FkZHJlc3MnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IHtcbiAgcGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgYWdlOiBudW1iZXI7XG4gIGFkZHJlc3M6YW55O1xuICBmcmllbmRzTGlzdDogW107XG4gIGNvbnN0cnVjdG9yKHBpZDpudW1iZXIsbmFtZTpzdHJpbmcsYWdlOm51bWJlciwgaG5vOnN0cmluZyxzdHJlZXQ6c3RyaW5nLGNpdHk6c3RyaW5nKXtcbiAgdGhpcy5waWQgPSBOdW1iZXIocGlkKTtcbiAgdGhpcy5uYW1lID0gbmFtZTtcbiAgdGhpcy5hZ2UgPSBOdW1iZXIoYWdlKTtcbiAgdGhpcy5hZGRyZXNzID0gbmV3IEFkZHJlc3MoaG5vLHN0cmVldCxjaXR5KTtcbiAgdGhpcy5mcmllbmRzTGlzdCA9IFtdO1xuICBcbiAgfVxuXG4vL1EuIEluIGFkZHJlc3MgY2xhc3MgaGF2ZSBmaWVsZHMgbGlrZSBIb3VzZSBOdW1iZXIsIHN0cmVldCBOYW1lLCBDaXR5LCBTdGF0ZSwgWmlwQ29kZVxuXG5kZXNjcmliZSgpIDpzdHJpbmcge1xuICBsZXQgZGVzY3JpcHRpb24gOnN0cmluZyA9IFwiPT0+UGVyc29uIE5hbWUgaXMgXCI7XG4gIGRlc2NyaXB0aW9uICs9IHRoaXMubmFtZSArIFwiPC9icj5cIjtcbiAgZGVzY3JpcHRpb24gKz0gXCIgYW5kIHBlcnNvbiBhZ2UgaXMgXCI7XG4gIGRlc2NyaXB0aW9uICs9IFN0cmluZyh0aGlzLmFnZSkgK1wiPC9icj5cIjtcbiAgZGVzY3JpcHRpb24gKz0gXCIgYW5kIGFkZHJlc3MgaXMgXCI7XG4gIGRlc2NyaXB0aW9uICs9IHRoaXMuYWRkcmVzcy5kZXNjcmliZSgpICtcIjwvYnI+XCI7XG4gIGRlc2NyaXB0aW9uICs9IFwiXFxuXCI7IC8vSGFjaywgc2hvdWxkIG5vdCBkbyBpdCBcblxuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbn1cbn1cblxuXG4vLyAvL2ZpbGwgY29kZSB0byBhZGQgYW5vdGhlciBjb250YWN0IGhlcmVcbi8vIC8vYnV0IGFzeW5jaHJvbm91c2x5XG4vLyBDb250YWN0LnByb3RvdHlwZS5hZGRDb250YWN0ID0gZnVuY3Rpb24gKGZyaWVuZENvbnRhY3QpIHtcbi8vICAgdGhpcy5mcmllbmRzTGlzdC5wdXNoKGZyaWVuZENvbnRhY3QpO1xuLy8gfVxuXG4vLyAvL2FzeW5jaHJvbm91c2x5IHJldHVybiB0aGlzIHBlcnNvbiBcbi8vIC8vZnJpZW5kcyBsaXN0IHVzaW5nIGNhbGxiYWNrIGZ1bmN0aW9uXG4vLyBDb250YWN0LnByb3RvdHlwZS5nZXRGcmllbmRzTGlzdCA9IGZ1bmN0aW9uICgpIHtcbi8vICAgbGV0IGZyaWVuZHNEYXRhID0gJyAnO1xuLy8gICBmb3IoZnJpZW5kIG9mIHRoaXMuZnJpZW5kc0xpc3Qpe1xuLy8gICAgIGZyaWVuZHNEYXRhICs9ICdGcmllbmRzIE5hbWVzIDogIFsnICsgZnJpZW5kLm5hbWUgKyAnICcgKyBmcmllbmQuYWdlICsnXSc7XG4vLyAgIH1cbi8vICAgcmV0dXJuIGZyaWVuZHNEYXRhO1xuLy8gfVxuICAgXG4gICIsImltcG9ydCBDb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cbmxldCBDb250YWN0czogYW55ID0gW107IC8vRW1wdHkgQXJyYXkuIFRoaXMgaXMgc3VwcG9zZWQgdG8gaG9sZCBQZXJzb25zIE9iamVjdHNcbi8vUS4gQ2FuIHlvdSBjcmVhdCBuZXcgZnVuY3Rpb24gdG8gdGFrZSBtYW55IGNvbnRhY3RzIGluIHNpbmdsZSBmdW5jdGlvblxuLy9pbnB1dCBjYW4gYmUgZnJvbSBqc29uIHRleHRcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBlcnNvbnMoKSB7XG4gIC8vMS4gQnVpbGQgUGVyc29ucyBMaXN0IGhlcmVcbiAgLy9FeDogY29uc3QgcGVyc29ucyA9IFt7fSwge30sIHt9LCB7fSBdXG4gIGNvbnN0IGNvbnRhY3RMaXN0ID0gW1xuICAgIHtcbiAgICAgIHBpZDogMTAsXG4gICAgICBuYW1lOiBcIlJhbXVcIixcbiAgICAgIGFnZTogMzQsXG4gICAgICBobm86IFwiMTIzLTVcIixcbiAgICAgIHN0cmVldDogXCJLcmFudGhpIE5hZ2FyXCIsXG4gICAgICBjaXR5OiBcIkh5ZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcGlkOiAxMSxcbiAgICAgIG5hbWU6IFwiVmFuaVwiLFxuICAgICAgYWdlOiAzMSxcbiAgICAgIGhubzogXCIxMjMtNVwiLFxuICAgICAgc3RyZWV0OiBcIk11c2hlZXJhYmFkXCIsXG4gICAgICBjaXR5OiBcIkh5ZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcGlkOiAxMixcbiAgICAgIG5hbWU6IFwiTWFkaHVcIixcbiAgICAgIGFnZTogMzUsXG4gICAgICBobm86IFwiMTIzLTVcIixcbiAgICAgIHN0cmVldDogXCJNZWhhZGlwYXRuYW1cIixcbiAgICAgIGNpdHk6IFwiSHlkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwaWQ6IDEzLFxuICAgICAgbmFtZTogXCJMYXRoYVwiLFxuICAgICAgYWdlOiAzNixcbiAgICAgIGhubzogXCIyNDMtNVwiLFxuICAgICAgc3RyZWV0OiBcIkxJbmdhbXBhbGx5XCIsXG4gICAgICBjaXR5OiBcIkh5ZFwiLFxuICAgIH0sXG4gIF07XG5cbiAgLy9mb3IgbG9vcCB0byBhZGQgZXZlcnkgcGVyc29uIGluIGxpc3RcbiAgLy8gY29uc3QgYWRkcmVzc0Jvb2tzID1beydwaWQnOjEwLCduYW1lJzonTW9kaSd9LHsncGlkJzoxMCwnbmFtZSc6J0phc3N1J31dO1xuICBjb25zdCBhZGRyZXNzQm9va3MgPSBbXG4gICAgeyBwaWQ6IDEwLCBmcmllbmRzOiBbMTEsIDEzXSB9LFxuICAgIHsgcGlkOiAxMSwgZnJpZW5kczogWzEyLCAxM10gfSxcbiAgXTtcblxuICBmb3IgKGxldCBjb250YWN0SW5mbyBvZiBjb250YWN0TGlzdCkge1xuICAgIGNvbnN0IGNvbnRhY3QgPSBuZXcgQ29udGFjdChjb250YWN0SW5mby5waWQsIGNvbnRhY3RJbmZvLm5hbWUsIGNvbnRhY3RJbmZvLmFnZSwgXG4gICAgICBjb250YWN0SW5mby5obm8sIGNvbnRhY3RJbmZvLnN0cmVldCwgY29udGFjdEluZm8uY2l0eSk7XG4gICAgXG4gICAgLy8zLkFkZCBpdCB0byB0aGUgbGlzdFxuICAgIENvbnRhY3RzLnB1c2goY29udGFjdCk7XG4gIH1cbiAgbGV0IGVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsXCIpO1xuICBmb3IgKGxldCBjb250YWN0IG9mIENvbnRhY3RzKSB7XG4gICAgZWxlLmlubmVySFRNTCA9XG4gICAgICBlbGUuaW5uZXJIVE1MICtcbiAgICAgICc8b3B0aW9uIHZhbHVlPVwiJyArXG4gICAgICBjb250YWN0LnBpZCArXG4gICAgICAnXCI+JyArXG4gICAgICBjb250YWN0Lm5hbWUgK1xuICAgICAgXCI8L29wdGlvbj5cIjtcbiAgfVxuXG4gIGZvciAoY29uc3QgZnJpZW5kc0xpc3Qgb2YgYWRkcmVzc0Jvb2tzKSB7XG4gICAgY29uc3QgcGlkID0gZnJpZW5kc0xpc3QucGlkO1xuICAgIGdldENvbnRhY3RBc3luYyhwaWQsIChjb250YWN0OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRDb250YWN0ID0gY29udGFjdDtcbiAgICAgIGlmIChjdXJyZW50Q29udGFjdCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBmcmllbmRJZCBvZiBmcmllbmRzTGlzdC5mcmllbmRzKSB7XG4gICAgICAgIGdldENvbnRhY3RBc3luYyhmcmllbmRJZCwgKGZyaWVuZENvbnRhY3Q6IGFueSkgPT4ge1xuICAgICAgICAgIC8vIGxldCBjdXJyZW50Q29udGFjdCA9IG51bGw7XG4gICAgICAgICAgLy8gY3VycmVudENvbnRhY3QgPSBmcmllbmRDb250YWN0O1xuICAgICAgICAgIGlmIChmcmllbmRDb250YWN0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjdXJyZW50Q29udGFjdC5hZGRDb250YWN0KGZyaWVuZENvbnRhY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDb250YWN0QXN5bmMocGlkOiBudW1iZXIsIGNiazogYW55KSB7XG4gIC8vcmV0dXJuIHRoZSByZXN1bHQgc2hvdWxkIGJlIHVzaW5nICBjYWxsYmFjayBhbmQgdGltZW91dFxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGNvbnRhY3Qgb2YgQ29udGFjdHMpIHtcbiAgICAgIGlmIChjb250YWN0LnBpZCA9PT0gcGlkKSB7XG4gICAgICAgIGNiayhjb250YWN0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2JrKG51bGwpO1xuICB9LCAwKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGFjdChwaWQ6IG51bWJlcikge1xuICAvL3JldHVybiB0aGUgcmVzdWx0IHNob3VsZCBiZSB1c2luZyAgY2FsbGJhY2sgYW5kIHRpbWVvdXRcbiAgZm9yIChjb25zdCBjb250YWN0IG9mIENvbnRhY3RzKSB7XG4gICAgaWYgKGNvbnRhY3QucGlkID09PSBwaWQpIHtcbiAgICAgIHJldHVybiBjb250YWN0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLy9Bc3luXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGVyc29uRGV0YWlscygpIHtcbiAgLy8xLiBHZXQgQWdlIGNvbmRpdGlvbiB1c2luZyBodG1sIGlucHV0IGFnZUNvbmRpdGlvblxuICBsZXQgcGlkQ29uZDogYW55ID1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBpZENvbmRpdGlvblwiKTtcbiAgbGV0IHBpZENvbmRpdGlvbjogbnVtYmVyID0gTnVtYmVyKHBpZENvbmQudmFsdWUpO1xuICBnZXRDb250YWN0QXN5bmMocGlkQ29uZGl0aW9uLCAoY29udGFjdDogYW55KSA9PiB7XG4gICAgbGV0IGN1cnJlbnRDb250YWN0ID0gbnVsbDtcbiAgICBjdXJyZW50Q29udGFjdCA9IGNvbnRhY3Q7XG4gICAgaWYgKGN1cnJlbnRDb250YWN0ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHBlcnNvbnNMaXN0ID0gXCIgXCI7XG4gICAgaWYgKGN1cnJlbnRDb250YWN0ICE9IG51bGwpIHtcbiAgICAgIHBlcnNvbnNMaXN0ICs9IGN1cnJlbnRDb250YWN0LmRlc2NyaWJlKCk7XG4gICAgICBwZXJzb25zTGlzdCArPSBjdXJyZW50Q29udGFjdC5nZXRGcmllbmRzTGlzdCgpO1xuICAgIH1cbiAgICBsZXQgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlcnNvbnNEZXRhaWxzXCIpO1xuICAgIGxpc3RFbGVtZW50LmlubmVySFRNTCA9IHBlcnNvbnNMaXN0O1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3coZWxlOiBhbnkpIHtcbiAgLy8gR0VUIFRIRSBTRUxFQ1RFRCBWQUxVRSBGUk9NIDxzZWxlY3Q+IEVMRU1FTlQgQU5EIFNIT1cgSVQuXG4gIHZhciBtc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1zZ1wiKTtcbiAgbXNnLmlubmVySFRNTCA9XG4gICAgXCJTZWxlY3RlZCBQZXJvc29uOiA8Yj5cIiArXG4gICAgZWxlLm9wdGlvbnNbZWxlLnNlbGVjdGVkSW5kZXhdLnRleHQgK1xuICAgIFwiPC9iPiA8L2JyPlwiICtcbiAgICBcIklEOiA8Yj48aW5wdXQgdHlwZSA9IHRleHQgbmFtZSA9IHBpZCB2YWx1ZSA9ICBcIiArXG4gICAgZWxlLnZhbHVlICtcbiAgICBcIj5cIjtcbn1cblxuLy9GaWxsIHRoaXMgY29kZSB0byBnZXQgZ2l2ZW4gUGVyc29uIGRldGFpbHNcbi8vTmFtZSwgcGVyc29uIEFkZHJlc3MgYW5kIHBlcnNvbiBhZGRyZXNzIGJvb2tcblxuLy9FeGFtcGxlOiBmb3IgZ2l2ZW4gcGVyc29uIG5hbWUgJ01vZGknXG4vL05hbWU6IE1vZGlcbi8vQWdlOiA2NVxuLy9QZXJzb24gU2VsZiBBZGRyZXNzOiBOZXcgRGVsaGlcbi8vUGVyc29uIENvbnRhY3QgTGlzdCAoYWRkcmVzcyBCb29rKTogW0FtaXQsIE5haWR1LCBLY3IsIEthdmVyaSwgTWFtYXRoYV1cbi8vZnVuY3Rpb24gZ2V0UGVyc29uRGV0YWlscygpIHtcblxuLy8xLiBnZXQgZ2l2ZW4gcGVyc29uIG5hbWVcblxuLy8yLiBnZXQgZ2l2ZW4gcGVyc29uIGRldGFpbHNcblxuLy8zLiBnZXQgZ2l2ZW4gcGVyc29uIGFkZHJlc3MgYm9va1xuXG4vLzQuIHVwZGF0ZSBVSSB3aXRoIHRoaXMgbGlzdFxuLy99XG5cbi8vIGZ1bmN0aW9uIGdldFBlcnNvbkRldGFpbHMoKSB7XG4vLyAgIC8vMS4gR2V0IEFnZSBjb25kaXRpb24gdXNpbmcgaHRtbCBpbnB1dCBhZ2VDb25kaXRpb25cbi8vICAgbGV0IHBpZENvbmRpdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGlkQ29uZGl0aW9uXCIpLnZhbHVlO1xuLy8gICBsZXQgbmV3QWRkcmVzc2Jvb2sgPSBDb250YWN0cztcbi8vICAgbGV0IGN1cnJlbnRDb250YWN0ID0gbnVsbDtcbi8vICAgZm9yKGNvbnN0IGNvbnRhY3Qgb2YgQ29udGFjdHMpe1xuLy8gICAgIGlmKGNvbnRhY3QucGlkID09IHBpZENvbmRpdGlvbil7XG4vLyAgICAgICBjdXJyZW50Q29udGFjdCA9IGNvbnRhY3Q7XG4vLyAgICAgICBicmVhaztcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgbGV0IHBlcnNvbnNMaXN0ID0gJyAnO1xuLy8gICBpZiggY3VycmVudENvbnRhY3QgIT0gbnVsbCkge1xuLy8gICAgIHBlcnNvbnNMaXN0ICs9IGN1cnJlbnRDb250YWN0LmRlc2NyaWJlKCk7XG4vLyAgICAgcGVyc29uc0xpc3QgKz0gY3VycmVudENvbnRhY3QuZ2V0RnJpZW5kc0xpc3QoKTtcbi8vICAgfVxuLy8gICBsZXQgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlcnNvbnNEZXRhaWxzXCIpO1xuLy8gICBsaXN0RWxlbWVudC5pbm5lckhUTUwgPSBwZXJzb25zTGlzdDtcbi8vIH1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==