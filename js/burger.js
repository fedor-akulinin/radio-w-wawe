window.addEventListener('DOMContentLoaded',function() {
    document.querySelector('.burger__open').addEventListener('click', function () {
        document.querySelector('#header-top').classList.toggle('is-active')
        document.querySelector('.header-top__block').classList.toggle('is-active')
        document.querySelector('#nav__item').classList.toggle('is-active')
        document.querySelector('.burger__open').classList.toggle('is-active')
        document.querySelector('.header-top__btns').classList.toggle('is-active')
        document.querySelector('.burger__close').classList.toggle('is-active')
        document.querySelector('.header-bottom__more').classList.toggle('is-active')
        document.querySelector('.header-bottom__item').classList.toggle('is-active')
        document.querySelector('.header-bottom__block').classList.toggle('is-active')
        document.querySelector('.header-bottom').classList.toggle('is-active')
        })
    document.querySelector('#burger-close').addEventListener('click', function () {
        document.querySelector('#header-top').classList.remove('is-active')
        document.querySelector('.header-top__block').classList.remove('is-active')
        document.querySelector('#nav__item').classList.remove('is-active')
        document.querySelector('.burger__open').classList.remove('is-active')
        document.querySelector('.header-top__btns').classList.remove('is-active')
        document.querySelector('.burger__close').classList.remove('is-active')
        document.querySelector('.header-bottom__more').classList.remove('is-active')
        document.querySelector('.header-bottom__item').classList.remove('is-active')
        document.querySelector('.header-bottom__block').classList.remove('is-active')
        document.querySelector('.header-bottom').classList.remove('is-active')
    })
    document.querySelector('.search__btn').addEventListener('click', function () {
        document.querySelector('#search__input').classList.toggle('searching')
        document.querySelector('.nav__item').classList.toggle('close')
        document.querySelector('.header-container').classList.toggle('search')
        document.querySelector('.header-top__btns').classList.toggle('search')
        document.querySelector('#header-btn').classList.toggle('close')
        document.querySelector('#logo').classList.toggle('close')

    })
    document.querySelector('.search__btn-src').addEventListener('click', function (){
        document.querySelector('#search__input').classList.remove('searching')
        document.querySelector('.nav__item').classList.remove('close')
        document.querySelector('.header-container').classList.remove('search')
        document.querySelector('.header-top__btns').classList.remove('search')
        document.querySelector('#header-btn').classList.remove('close')
        document.querySelector('#logo').classList.remove('close')
    })
})  