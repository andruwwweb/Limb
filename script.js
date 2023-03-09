document.addEventListener('DOMContentLoaded', () => {

    //Main screen animation //Не работает для Сафари
    // const orderButton = document.querySelector('.open-form');
    // setInterval(function(){
    //     orderButton.classList.add('moving')
    // }, 1000)
    // setInterval(function(){
    //     orderButton.classList.remove('moving')
    // }, 2000)


    //Services screen slider
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        speed: 400,
        spaceBetween: 100,
        allowTouchMove: true,
        pagination: {
            el: '.swiper-pagination',
          },
        breakpoints: {
            1400: {
                spaceBetween: 100,
                slidesPerView: 3,
            },
            1200: {
                spaceBetween: 30,
                slidesPerView: 3,
                pagination: {
                    el: '.swiper-pagination',
                  },
            },
            992: {
                slidesPerView: 2,
                pagination: {
                    el: '.swiper-pagination',
                  },
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                  },
                  loop: true,
            },
            576: {
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                  },
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    el: '.swiper-pagination',
                  },
            }
        }
    })

    //Burger
    let burgerButton = document.querySelector('.burger');
    let burgerItems = document.querySelectorAll('.burger-item');
    let burgerMenu = document.querySelector('.head-nav');
    function transformBurger() {
        burgerItems.forEach((item, index) => {
            if (index === 1) {
                item.classList.toggle('index-1')
            }
            else if (index === 0) {
                item.classList.toggle('index-0')
            }
            else if (index === 2) {
                item.classList.toggle('index-2')
            }
        });
        burgerMenu.classList.toggle('show-burger');
    }
    burgerButton.addEventListener('click', transformBurger);



})

