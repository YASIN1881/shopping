const swiper = new Swiper ('.swiper', {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    }
})