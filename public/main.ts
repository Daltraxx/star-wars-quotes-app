const updateBtn = document.querySelector('#update-button');
const deleteBtn = document.querySelector('#delete-button');


import replaceWithDarthVaderQuote from "./js/replaceWithDarthVaderQuote.js";
import deleteFirstVaderQuote from "./js/deleteFirstVaderQuote.js";

updateBtn ? updateBtn.addEventListener('click', replaceWithDarthVaderQuote) : console.log('no element with id update-button found');
deleteBtn ? deleteBtn.addEventListener('click', deleteFirstVaderQuote) : console.log('no element with id delete-button found');