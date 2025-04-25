"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var noMoreVaderQuotes = function () {
    var messageSection = document.querySelector('#message');
    if (messageSection) {
        messageSection.textContent = 'No Darth Vader quote to delete!';
    }
};
exports.default = noMoreVaderQuotes;
