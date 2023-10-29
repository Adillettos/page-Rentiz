
const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.header__menu');
const body = document.body;

if (body && menu) {
    burger.addEventListener('click', function () {
        menu.classList.toggle('_active');
        burger.classList.toggle('_active');
        body.classList.toggle('_lock');
    });
}

// -- filter dropdown

const filter = document.querySelector('.filter');

if (filter) {
    const items = filter.querySelectorAll('.block-filter');

    items.forEach(item => {
        item.addEventListener('click', event => {
            item.querySelector('.block-filter__dropdown').classList.toggle('_active');
            item.querySelector('.block-filter__icon').classList.toggle('_active');

            if (event.target.classList.contains('block-filter__item')) {
                item.querySelector('.block-filter__value').textContent = event.target.textContent;
            }
        })
    })
}

// -- Swiper

const puopularSlider = new Swiper('.popular-slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
        nextEl: '.popular-slider-next',
        prevEl: '.popular-slider-prev',
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        678: {
            slidesPerView: 2,
        }
    }
});

const reviewsSlider = new Swiper('.reviews__slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    autoHeight: true,
    // Navigation arrows
    navigation: {
        nextEl: '.slider-reviews-next',
        prevEl: '.slider-reviews-prev',
    }
});


const galleryItems = document.querySelectorAll('.gallery__item');
if (galleryItems.length > 0) {
    galleryItems.forEach(item => {
        new Swiper(item, {
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
            },
            effect: 'fade',
        })
    })
}