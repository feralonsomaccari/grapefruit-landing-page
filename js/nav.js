const mobileNav = document.querySelector('.mobile-nav');
const hamburger = document.querySelector('.main-nav__hamburger');
const backdrop = document.querySelector('.backdrop');

hamburger.addEventListener('click', () => {
  /* classList returns DOMTokenList wich its not a array so I have to cast it to one to use the 'includes' function */
  [...mobileNav.classList].includes('mobile-nav--show') ? mobileNav.classList.remove('mobile-nav--show') : mobileNav.classList.add('mobile-nav--show');
  backdrop.style.display = "block";
});

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('mobile-nav--show');
    backdrop.style.display = "none";
})
