"use strict";
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);


const carousel = $('.carousel-section');
const slideLength = $$('.article__card').length-2;
const CARD_WIDTH = 318;
let currentSlide = 1;

//Write.html로 이동
const moveToWrite = () => {
    location.href = "write.html";
}

//클릭시 모달 호출
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
//모달 닫기
const closeModal = () => {
    $('body').lastChild.remove();
    document.body.style.overflow ='unset';
}
//이벤트 버블링 방지(미사용)
const stopPropagation = (e) => {
    e.stopPropagation();
}

//드랍다운 토글
const toggleDropdown = () => {
    $('.dropdownbox').classList.toggle('hidden');
}

// 드랍다운에서 선택된 메뉴 표시
const pickdropdownMenu = (e) => {
    const periodOptions = $$('.option');
    const pickedOption = $('.period');

    [...periodOptions].map((options)=>{
        options.classList.remove('selected-menu');
    })
    e.target.classList.add('selected-menu');
    pickedOption.innerText = e.target.innerText;
}

// 캐러셀 슬라이드 왼쪽으로 이동
const slidePrevious = () => {
    if (currentSlide === 1) {
        currentSlide = slideLength;
      } else {
        currentSlide--;
      }
    carousel.style.transform = `translateX(-${CARD_WIDTH * (currentSlide - 1)}px)`;
};

//캐러셀 슬라이드 오른쪽으로 이동
const slideNext = () => {
    if (currentSlide >= slideLength) {
        currentSlide = 0;
    }
    carousel.style.transform = `translateX(-${CARD_WIDTH * currentSlide}px)`;
    currentSlide += 1;
};

const attachEvent = ({ writeArticle, handleDropdown, dropdownOptions, allModalCards, previousSlideBtn, nextSlideBtn }) => {
    writeArticle.addEventListener('click', moveToWrite);
    handleDropdown.addEventListener('click', toggleDropdown);
    dropdownOptions.forEach((item)=>item.addEventListener('click', pickdropdownMenu));
    allModalCards.forEach((item)=>item.addEventListener('click', openModal));
    previousSlideBtn.addEventListener('click', slidePrevious);
    nextSlideBtn.addEventListener('click', slideNext);
    
};
const todoEventManager = (items) => {
    attachEvent(items);
};

//모든 요소가 로딩된 후 이벤트 실행
window.onload = () => {
    todoEventManager({
        writeArticle: $('.write_article-button'),
        handleDropdown: $('.period_setting'),
        dropdownOptions: $$('.option'),
        allModalCards: $$('.article__card'),
        previousSlideBtn: $('.carousel-left__btn'),
        nextSlideBtn: $('.carousel-right__btn'),
    });
};
