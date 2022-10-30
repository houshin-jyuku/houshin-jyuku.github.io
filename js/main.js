'use strict';

{
  const header = document.querySelector('header');
  const toTop = document.getElementById('to_top');
  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  // const images = document.querySelectorAll('.hero a');
  // const open = document.getElementById('open');
  // const overlay =document.querySelector('.overlay');
  // const close = document.getElementById('close');
  // const course = document.getElementById('course');
  // const h2s = document.querySelectorAll('h2.select');
  // let currentIndex = 0;

  function onScrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('scrolled');
        toTop.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
        toTop.classList.remove('scrolled');
      }
    });
  }
  
  onScrollObserver.observe(document.getElementById('target'));
  
  toTop.addEventListener('click', e => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  
  // function play() {
  //   setTimeout(() => {
  //     images[currentIndex].classList.remove('current');
  //     currentIndex++;
  //     if (currentIndex > images.length - 1) {
  //       currentIndex = 0;
  //     }
  //     images[currentIndex].classList.add('current');
  //     play();
  //   }, 4000);
  // }

  // play();

  // open.addEventListener('click', () => {
  //   overlay.classList.add('show');
  //   open.classList.add('hide');
  // });

  // close.addEventListener('click', () => {
  //   overlay.classList.remove('show');
  //   open.classList.remove('hide');
  // });

  // btn.addEventListener('click', () => {
  //   course.classList.toggle('show');
  //   h2s.forEach(h2 => {
  //     h2.parentNode.classList.remove('appear');
  //   });
  // });

  // h2s.forEach(h2 => {
  //   h2.addEventListener('click', () => {
  //     h2.parentNode.classList.toggle('appear');
  //   });
  // });

}