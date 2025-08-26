 // Change navbar color on scroll
window.addEventListener('scroll', function () {
  const nav = document.querySelector('.navigation');
  if (window.scrollY > 0) {
    nav.classList.add('window-scroll');
  } else {
    nav.classList.remove('window-scroll');
  }
});

// Show and hide question and answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');
    changeIcon(faq);
  });
});


// let hoverStars = document.querySelector('.Portfolio-hero');
// hoverStars.addEventListener('mousemove', () =>{
//   let starsNumber = 200;
//   let startsColor = 'White'
//   let starSize = 0.005;


//       // set up the stars
//     var stars = [];
//     for (let i = 0; i < starsNumber; i++) {
//         stars[i] = {
//             r: Math.random() * starSize * canvas.width / 2,
//             x: Math.floor(Math.random() * canvas.width),
//             y: Math.floor(Math.random() * canvas.height),
//         }
//     }
//   });



