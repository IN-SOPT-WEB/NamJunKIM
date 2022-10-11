"use strict";
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const tagStorage = JSON.parse(window.localStorage.getItem('tags')) || [] ;

const loadLocalstorage = ()=>{
    tagStorage.map((tagName)=>{
        const loadedTag = document.createElement('li');
        loadedTag.classList.add('tag-item');
        loadedTag.innerText = tagName;
        $('.tags-list').appendChild(loadedTag);
        loadedTag.addEventListener('click', deleteTag);
    })
}

const saveToLocalStorage = () => {
    window.localStorage.setItem('tags', JSON.stringify(tagStorage));
}

const deleteTag = (e) => {
    e.target.remove();
    const savedItemIndex = tagStorage.indexOf(e.target.innerText);
    tagStorage.splice(savedItemIndex, 1);
    saveToLocalStorage();
}

const addTag = (e) => {
    e.preventDefault();
    if(e.keyCode === 13){
        if(!e.target.value.match(/^\S/g) || tagStorage.includes(e.target.value)){
            alert('이미 존재하는 태그이거나 빈 태그입니다.');
        }else{
            const tagListItem = document.createElement('li');
            tagListItem.innerText = `${e.target.value}`
            tagListItem.classList.add('tag-item');
            $('.tags-list').appendChild(tagListItem);
            tagListItem.addEventListener('click', deleteTag);
            tagStorage.push(e.target.value);
            saveToLocalStorage();
            e.target.value='';
        }
    }
}

const goToHome = () => {
    location.href = 'velog.html';
}

const attachEvent = ({ Input, moveToHome }) => {
    Input.addEventListener('keydown', addTag);
    moveToHome.addEventListener('click', goToHome);
};

const handleTagEventManager = (items) => {
    loadLocalstorage()
    attachEvent(items);
};

window.onload = () => {
    handleTagEventManager({
        Input:$('.tags-input'),
        moveToHome:$('.move-btn'),
    });
};