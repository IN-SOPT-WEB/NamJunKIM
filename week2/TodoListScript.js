"use strict";
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const Section = $$('.section');

// 네비게이션 바 이동 및 section 크기 조정
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

//계획 입력하기
const getTodoItem = (e) => {
    e.preventDefault();
    let todayInput = $('.today-todo__input');
    let tomorrowInput = $('.tomorrow-todo__input');

    //오늘할일 등록시
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
    //내일할일 등록시
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

//아이템 삭제
const deleteTodoItem = (e) => {
    if (e.target.classList.contains('item-delete__button')) {
        const removeListItem = e.target.parentNode;
        removeListItem.remove();
    }
};

//클릭시 이벤트 등록
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


// 모든 DOM요소를 불러온 뒤 이벤트 부착
window.onload = () => {
    todoEventManager({
        navMenuList: $$('.nav-btn'),
        itemAddButton: $$('.item-add__button'),
        itemDeleteButton: $$('.item-delete__button'),
    });
};
