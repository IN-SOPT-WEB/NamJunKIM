"use strict";
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const moveToWrite = () => {
    location.href = "write.html";
}
const toggleDropdown = () => {
    $('.dropbox').classList.toggle('hidden');
}

const pickdropdownMenu = (e) => {
    const periodOptions = $$('.option');
    const pickedOption = $('.period');

    [...periodOptions].map((options)=>{
        options.classList.remove('selected-menu');
    })
    e.target.classList.add('selected-menu');
    pickedOption.innerText = e.target.innerText;

}

const attachEvent = ({ writeArticle, handleDropdown, dropdownOptions }) => {
    writeArticle.addEventListener('click', moveToWrite);
    handleDropdown.addEventListener('click', toggleDropdown);
    dropdownOptions.forEach((item)=>item.addEventListener('click', pickdropdownMenu))
    
};
const todoEventManager = (items) => {
    attachEvent(items);
};
window.onload = () => {
    todoEventManager({
        writeArticle: $('.write_article-button'),
        handleDropdown: $('.period_setting'),
        dropdownOptions: $$('.option'),
    });
};
