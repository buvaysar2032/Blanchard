

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelectorAll('.header__dropdown-btn');
  const drops = document.querySelectorAll('.header__dropdown-container');
  const arrows = document.querySelectorAll('.header__dropdown-btn-icon');
  btn.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentbtn = e.currentTarget;
      let drop = currentbtn.closest('.header__item-bottom').querySelector('.header__dropdown-container');
      let arrow = currentbtn.closest('.header__dropdown-btn').querySelector('.header__dropdown-btn-icon');
      drops.forEach(el => {
        if (el !== drop) {
          el.classList.remove('dropdown__container--active');
        }
      })
      arrows.forEach(el => {
        if (el !== arrow) {
          el.classList.remove('header__dropdown-btn-icon--active');
        }
      })
      drop.classList.toggle('dropdown__container--active');
      arrow.classList.toggle('header__dropdown-btn-icon--active');
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header__list-bottom')) {
      drops.forEach(el => {
        el.classList.remove('dropdown__container--active');
      })
    }
  })
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header__dropdown-btn')) {
      arrows.forEach(el => {
        el.classList.remove('header__dropdown-btn-icon--active');
      })
    }
  })
});





new Swiper('.hero__swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 1500,
  },
  effect: 'fade',
  speed: 8000,
  updateOnWindowResize: true,
  navigation: {
    nextEl: ".hero__swiper-button-next",
    prevEl: ".hero__swiper-button-prev"
  },
});

new Swiper('.gallery__swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
  a11y: {
    prevSlideMessage: 'Нажмите, чтобы увидеть Предыдущиый слайд',
    nextSlideMessage: 'Нажмите, чтобы увидеть Следующий слайд',
    lastSlideMessage: 'Это последний слайд',
    firstSlideMessage: 'Это первый слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    slideLabelMessage: 'слайд с изображением картины художника'
  },
  slidesPerGroup: 3,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    541: {
      spaceBetween: 33,
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 33,
    },
    1680: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  }
});



let accordions = document.querySelectorAll('.catalog__accordion-item');
let icon = document.querySelectorAll('.icon');
let title = document.querySelectorAll('.catalog__accordion-title')
accordions.forEach(el => {
  el.addEventListener('click', (e) => {
    let currentbtn1 = e.currentTarget;
    let down = currentbtn1.closest('.catalog__accordion-item').querySelector('.icon');
    let downtext = currentbtn1.closest('.catalog__accordion-item').querySelector('.catalog__accordion-title');
    accordions.forEach(el => {
      if (el !== currentbtn1) {
        el.classList.remove('catalog__accordion-item--active');
      }
    });
    icon.forEach(el => {
      if (el !== down) {
        el.classList.remove('icon--active');
      }
    });
    title.forEach(el => {
      if (el !== downtext) {
        el.classList.remove('catalog__accordion-title--active');
      }
    });
    down.classList.toggle('icon--active');
    downtext.classList.toggle('catalog__accordion-title--active');
    currentbtn1.classList.toggle('catalog__accordion-item--active');
  });
});


tippy('.tooltip', {
  content: 'Пример современных тенденций — современная методология разработки',
  theme: 'tomato'
});


tippy('.tooltip-2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  theme: 'tomato2'
});


tippy('.tooltip-3', {
  content: 'В стремлении повысить качество',
  theme: 'tomato3'
});

const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  placeholder: true,
});



const gallerybtns = document.querySelectorAll('.swiper__gallery-btn');
const modal = document.querySelector('.modal');
const modalexit = document.querySelector('.modal__exit');
const scroll111 = document.querySelectorAll('.container');
gallerybtns.forEach(function (el) {
  el.addEventListener('click', function () {
    modal.classList.add('modal--active')
    document.body.classList.add('stop__overflow');
    scroll111.forEach(function (m) {
      m.classList.add('scroll--active');
    });
  });
});
modalexit.addEventListener('click', function () {
  modal.classList.remove('modal--active');
  document.body.classList.remove('stop__overflow');
  scroll111.forEach(function (m) {
    m.classList.remove('scroll--active');
  });
});
modal.addEventListener('click', function () {
  modal.classList.remove('modal--active');
  document.body.classList.remove('stop__overflow');
  scroll111.forEach(function (m) {
    m.classList.remove('scroll--active');
  });
});


new Accordion('.accordion-js', {
  openOnInit: [0]
});


new Swiper('.events__swiper', {
  slidesPerView: 3,
  spaceBetween: 47,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
    prevSlideMessage: 'Нажмите, чтобы увидеть Предыдущиый слайд',
    nextSlideMessage: 'Нажмите, чтобы увидеть Следующий слайд',
    lastSlideMessage: 'Это последний слайд',
    firstSlideMessage: 'Это первый слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    slideLabelMessage: 'слайд с актуальными новостями и событиями'
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        pagination: true,
      },
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 34,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        pagination: true,
      },
      slidesPerGroup: 2,
    },
    856: {
      spaceBetween: 24,
      slidesPerGroup: 2,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        pagination: true,
      },
    },
    1120: {
      slidesPerGroup: 1,
      spaceBetween: 47,
      pagination: false,
    }
  }
});


new Swiper('.projects__swiper', {
  slidesPerView: 3,
  spaceBetween: 47,
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
  a11y: {
    prevSlideMessage: 'Нажмите, чтобы увидеть Предыдущиый слайд',
    nextSlideMessage: 'Нажмите, чтобы увидеть Следующий слайд',
    lastSlideMessage: 'Это последний слайд',
    firstSlideMessage: 'Это первый слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    slideLabelMessage: 'слайд с изображением логотипа партнёра компании'
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    540: {
      slidesPerView: 2,
    },
    1120: {
      slidesPerView: 3,
    }
  }
});



document.querySelectorAll('.catalog__accordion-open-btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.catalog__tab').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('catalog__tab--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tab--active');
  });
});



var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);





new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  colorWrong: '#D11616',
  messages: {
    name: {
      required: 'Вы не ввели имя',
    },
    tel: {
      required: 'Вы не ввели телефон',
      function: 'Недопустимый формат'
    },
  },
});



ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.76020621014886, 37.61457004930558],
    zoom: 14
  });
  var myPlacemark = new ymaps.Placemark([55.76020621014886, 37.61457004930558], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/Group 68.svg',
    iconImageSize: [48, 48],
    iconImageOffset: [-3, -42]
  });
  myMap.geoObjects.add(myPlacemark);
};


var $page = $('html, body');
$('a[href*="#"]').click(function () {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
  return false;
});


const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const link = menu.querySelectorAll('.header__link');
burger.addEventListener('click', function () {
  menu.classList.toggle('header__nav--active');
  burger.classList.toggle('burger--active');
  document.body.classList.toggle('stop-scroll');
  document.body.classList.toggle('add-scroll');
});
link.forEach(function (e) {
  e.addEventListener('click', function () {
    burger.classList.remove('burger--active')
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
    document.body.classList.remove('add-scroll');
  });
});


const search = document.querySelector('.header__form-btn');
const input = document.querySelector('.header__search');
const remove = document.querySelector('.header__form-btn-2');
const form = document.querySelector('.header__form');
search.addEventListener('click', function () {
  input.classList.add('header__search--active');
  remove.classList.add('header__form-btn-2--active');
  search.classList.add('header__form-btn--active');
  form.classList.add('header__form--active')
})
remove.addEventListener('click', function () {
  remove.classList.remove('header__form-btn-2--active');
  input.classList.remove('header__search--active');
  search.classList.remove('header__form-btn--active');
})

const search2 = document.querySelector('.header__form-btn');
const input2 = document.querySelector('.header__search');
const remove2 = document.querySelector('.header__form-btn-2');
const form2 = document.querySelector('.header__form-1024');
search2.addEventListener('click', function () {
  input2.classList.add('header__search--active');
  remove2.classList.add('header__form-btn-2--active');
  search2.classList.add('header__form-btn--active');
  form2.classList.add('header__form-1024--active')
})
remove2.addEventListener('click', function () {
  remove2.classList.remove('header__form-btn-2--active');
  input2.classList.remove('header__search--active');
  search2.classList.remove('header__form-btn--active');
  form2.classList.remove('header__form-1024--active')
})
