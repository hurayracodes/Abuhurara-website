 // Change navbar color on scroll
window.addEventListener('scroll', function () {
  const nav = document.querySelector('#nav-links');
  if (window.scrollY > 0) {
    nav.classList.add('window-scroll');
  } else {
    nav.classList.remove('window-scroll');
  }
});

// show menu
// show and hide the mobile menu
const menu = document.querySelector('.navigation');
const openBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-x');

openBtn.addEventListener('click', () => {
menu.style.display = 'block';
openBtn.style.display = 'none';
closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
closeBtn.style.display = 'none';
menu.style.display = 'none';
openBtn.style.display = 'block';
});


// Tesstimonals
//  <!-- Swiper JS -->
  // <!-- Include plugin after Swiper -->
    /* ========
Debugger plugin, simple demo plugin to console.log some of callbacks
======== */
    function myPlugin({ swiper, extendParams, on }) {
      extendParams({
        debugger: false,
      });

      on('init', () => {
        if (!swiper.params.debugger) return;
        console.log('init');
      });
      on('click', (swiper, e) => {
        if (!swiper.params.debugger) return;
        console.log('click');
      });
      on('tap', (swiper, e) => {
        if (!swiper.params.debugger) return;
        console.log('tap');
      });
      on('doubleTap', (swiper, e) => {
        if (!swiper.params.debugger) return;
        console.log('doubleTap');
      });
      on('sliderMove', (swiper, e) => {
        if (!swiper.params.debugger) return;
        console.log('sliderMove');
      });
      on('slideChange', () => {
        if (!swiper.params.debugger) return;
        console.log(
          'slideChange',
          swiper.previousIndex,
          '->',
          swiper.activeIndex
        );
      });
      on('slideChangeTransitionStart', () => {
        if (!swiper.params.debugger) return;
        console.log('slideChangeTransitionStart');
      });
      on('slideChangeTransitionEnd', () => {
        if (!swiper.params.debugger) return;
        console.log('slideChangeTransitionEnd');
      });
      on('transitionStart', () => {
        if (!swiper.params.debugger) return;
        console.log('transitionStart');
      });
      on('transitionEnd', () => {
        if (!swiper.params.debugger) return;
        console.log('transitionEnd');
      });
      on('fromEdge', () => {
        if (!swiper.params.debugger) return;
        console.log('fromEdge');
      });
      on('reachBeginning', () => {
        if (!swiper.params.debugger) return;
        console.log('reachBeginning');
      });
      on('reachEnd', () => {
        if (!swiper.params.debugger) return;
        console.log('reachEnd');
      });
    }

    // Init Swiper
    var swiper = new Swiper('.swiper', {
      // Install Plugin To Swiper
      modules: [myPlugin],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // Enable debugger
      debugger: true,
    });



