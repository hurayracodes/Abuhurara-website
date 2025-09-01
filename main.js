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



