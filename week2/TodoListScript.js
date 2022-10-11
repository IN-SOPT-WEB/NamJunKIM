"use strict";
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const ToggleNavigator = (idx) => {
    const todaySection = $('.today-section');
    const tomorrowSection = $('.tomorrow-section');
    switch (idx) {
        case 0:
            todaySection.classList.remove('hidden');
            tomorrowSection.classList.add('hidden');
            todaySection.style.width = '100%';
            break;
        case 1:
            todaySection.classList.add('hidden');
            tomorrowSection.classList.remove('hidden');
            tomorrowSection.style.width = '100%';
            break;
        case 2:
            todaySection.classList.remove('hidden');
            tomorrowSection.classList.remove('hidden');
            todaySection.style.width = '50%';
            tomorrowSection.style.width = '50%';
            break;
    }
};
const showTodo = () => {
};
const makeTodayTodo = () => {
};
const deleteTodayTodo = () => {
};
const makeTomorrowTodo = () => {
};
const deleteTodoItem = (event) => {
    if (event.target.classList.contains('item-delete__button')) {
        const removeListItem = event.target.parentNode;
        removeListItem.remove();
    }
};
const attachEvent = ({ navMenuList, tomorrowTodoAddButton, todayTodoAddButton }) => {
    const Section = $$('.section');
    for (let i = 0; i < navMenuList.length; i++) {
        navMenuList[i].addEventListener('click', () => ToggleNavigator(i));
    }
    Section.forEach((itemDeleteButton) => {
        itemDeleteButton.addEventListener('click', deleteTodoItem);
    });
    tomorrowTodoAddButton.addEventListener('click', () => { });
    todayTodoAddButton.addEventListener('click', () => { });
};
const todoEventManager = (items) => {
    attachEvent(items);
};
window.onload = () => {
    todoEventManager({
        navMenuList: $$('.nav-btn'),
        todayTodoAddButton: $('.today-add__button'),
        itemDeleteButton: $$('.item-delete__button'),
        tomorrowTodoAddButton: $('.tomorrow-add__button')
    });
};
