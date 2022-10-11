"use strict";
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const Section = $$('.section');
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
const getTodoItem = (e) => {
    e.preventDefault();
    let todayInput = $('.today-todo__input');
    let tomorrowInput = $('.tomorrow-todo__input');
    if (e.target.classList.contains('today-add__button')) {
        if (todayInput.value !== '') {
            const li = document.createElement('li');
            li.innerHTML = `<p class="list-item__content">${todayInput.value}</p>
            <button type="button" class="item-delete__button action-btn">
                X
            </button>`;
            li.classList.add('todo-list__item');
            $('.today-todos').appendChild(li);
            todayInput.value = '';
        }
        else {
            alert('할일을 입력해주세요');
        }
    }
    if (e.target.classList.contains('tomorrow-add__button')) {
        if (tomorrowInput.value !== '') {
            const li = document.createElement('li');
            li.innerHTML = `<p class="list-item__content">${tomorrowInput.value}</p>
            <button type="button" class="item-delete__button action-btn">
                X
            </button>`;
            li.classList.add('todo-list__item');
            $('.tomorrow-todos').appendChild(li);
            tomorrowInput.value = '';
        }
        else {
            alert('할일을 입력해주세요');
        }
    }
};
const deleteTodoItem = (e) => {
    if (e.target.classList.contains('item-delete__button')) {
        const removeListItem = e.target.parentNode;
        removeListItem.remove();
    }
};
const attachEvent = ({ navMenuList }) => {
    for (let i = 0; i < navMenuList.length; i++) {
        navMenuList[i].addEventListener('click', () => ToggleNavigator(i));
    }
    Section.forEach((itemDeleteButton) => {
        itemDeleteButton.addEventListener('click', deleteTodoItem);
    });
    Section.forEach((itemAddButton) => {
        itemAddButton.addEventListener('click', getTodoItem);
    });
};
const todoEventManager = (items) => {
    attachEvent(items);
};
window.onload = () => {
    todoEventManager({
        navMenuList: $$('.nav-btn'),
        itemAddButton: $$('.item-add__button'),
        itemDeleteButton: $$('.item-delete__button'),
    });
};
