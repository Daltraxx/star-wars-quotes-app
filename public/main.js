"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var updateBtn = document.querySelector('#update-button');
var deleteBtn = document.querySelector('#delete-button');
var replaceWithDarthVaderQuote_js_1 = require("./js/replaceWithDarthVaderQuote.js");
var deleteFirstVaderQuote_js_1 = require("./js/deleteFirstVaderQuote.js");
updateBtn ? updateBtn.addEventListener('click', replaceWithDarthVaderQuote_js_1.default) : console.log('no element with id update-button found');
deleteBtn ? deleteBtn.addEventListener('click', deleteFirstVaderQuote_js_1.default) : console.log('no element with id delete-button found');
