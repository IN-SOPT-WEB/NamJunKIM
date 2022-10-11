"use strict";
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

//로컬 스토리지에 저장한 요소가 있다면 받고, 없다면 빈 배열로 선언
const tagStorage = JSON.parse(window.localStorage.getItem('tags')) || [] ;

//로컬 스토리지 호출
const loadLocalstorage = ()=>{
    tagStorage.map((tagName)=>{
        const loadedTag = document.createElement('li');
        loadedTag.classList.add('tag-item');
        loadedTag.innerText = tagName;
        $('.tags-list').appendChild(loadedTag);
        loadedTag.addEventListener('click', deleteTag);
    })
}
// 로컬 스토리지에 저장
const saveToLocalStorage = () => {
    window.localStorage.setItem('tags', JSON.stringify(tagStorage));
}

// 태그 삭제 및 로컬스토리지에서 제거
const deleteTag = (e) => {
    e.target.remove();
    const savedItemIndex = tagStorage.indexOf(e.target.innerText);
    tagStorage.splice(savedItemIndex, 1);
    saveToLocalStorage();
}

// 태그 추가 및 로컬스토리지 저장 
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

//velog.html로 이동
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
//모든 요소가 로딩된 후 이벤트 실행
window.onload = () => {
    handleTagEventManager({
        Input:$('.tags-input'),
        moveToHome:$('.move-btn'),
    });
};