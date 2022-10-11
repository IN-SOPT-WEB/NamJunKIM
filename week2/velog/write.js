"use strict";
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const addTag =(e) => {


    if(e.keyCode === 13){
        e.preventDefault();
        if(!e.target.value.match(/^\S/g)){
            alert('공백을 없애주세요.');
        }else{
            const tagListItem = document.createElement('li');
            tagListItem.innerText = `${e.target.value}`
            tagListItem.classList.add('tag-item');
            $('.tags-list').appendChild(tagListItem);
            tagListItem.addEventListener('click', deleteTag);
            e.target.value='';
        }
    }
}

const deleteTag = (e) => {
    e.target.remove();
}

const attachEvent = ({ Input, AllTagItems }) => {
    Input.addEventListener('keydown', addTag);
    AllTagItems.forEach((item)=>item.addEventListener('click', deleteTag));
    
    
};
const handleTagEventManager = (items) => {
    attachEvent(items);
};
window.onload = () => {
    handleTagEventManager({
        Input:$('.tags-input'),
        AllTagItems:$$('.tag-item'),
        
    });
};