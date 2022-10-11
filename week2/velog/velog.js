"use strict";
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const moveToWrite = () => {
    location.href = "write.html";
}
const toggleDropdown = () => {
    $('.dropbox').classList.toggle('hidden');
}

const openModal = (e) => {
    let modalCard = e.target.closest('.article__card').cloneNode(true);
    let modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal-wrapper');
    modalCard.classList.remove('article__card');
    modalCard.classList.add('modal-card');
    modalCard.addEventListener('click', closeModal);
    $('body').appendChild(modalWrapper)
    $('.modal-wrapper').appendChild(modalCard);
    document.body.style.overflow ='hidden';
}

const closeModal = () => {
    $('body').lastChild.remove();
    document.body.style.overflow ='unset';
}

const stopPropagation = (e) => {
    e.stopPropagation();
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

const attachEvent = ({ writeArticle, handleDropdown, dropdownOptions, allModalCards }) => {
    writeArticle.addEventListener('click', moveToWrite);
    handleDropdown.addEventListener('click', toggleDropdown);
    dropdownOptions.forEach((item)=>item.addEventListener('click', pickdropdownMenu))
    allModalCards.forEach((item)=>item.addEventListener('click', openModal))
    
};
const todoEventManager = (items) => {
    attachEvent(items);
};
window.onload = () => {
    todoEventManager({
        writeArticle: $('.write_article-button'),
        handleDropdown: $('.period_setting'),
        dropdownOptions: $$('.option'),
        allModalCards: $$('.article__card'),
    });
};
