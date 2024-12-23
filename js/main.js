'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const header = document.querySelector('header');
  const toTop = document.getElementById('to_top');
  const links = document.querySelectorAll('.items ul li');

  // オーバーレイ
  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide')
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide')
  });

  // メニュー
  links.forEach(link => {
    link.addEventListener('click', e => {
      var elem = e.target.id.substring(1)
      var element = document.getElementById(elem);
      element.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    });
  });

  // スクロール
  const target = document.getElementById('target');
  
  const onScrollObserver = new IntersectionObserver(onScrollCallback);

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
  
  onScrollObserver.observe(target);
  
  toTop.addEventListener('click', e => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  // メイン画面
  const bg = document.querySelector('.bg');
  const lefts = document.querySelectorAll('.left');
  const rights = document.querySelectorAll('.right');
  const fades = document.querySelectorAll('.fade');
  const logo = document.querySelector('.logo-img');
  
  const options = {
    threshold: thresholdList(),
  };
  
  const observer = new IntersectionObserver(callback, options);

  observer.observe(bg);

  function thresholdList() {
    let thresholds = [];
    let numSteps = 10;
    for(let i = 1; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }
    return thresholds;
  }

  function callback(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let ratio = Math.round(entry.intersectionRatio * 100);
        if (ratio >= 50) {
          lefts.forEach(left => {
            left.classList.add('leftline');
          })
          rights.forEach(right => {
            right.classList.add('rightline');
          })
          fades.forEach(fade => {
            fade.classList.add('fadeIn');
          })
          logo.classList.add('fadeIndelay');
        } else {
          lefts.forEach(left => {
            left.classList.remove('leftline');
          })
          rights.forEach(right => {
            right.classList.remove('rightline');
          })
          fades.forEach(fade => {
            fade.classList.remove('fadeIn');
          })
          logo.classList.remove('fadeIndelay');
        }
      }
    });
  }

  //イメージ
  const slides = ["img/img1.png",
                  // "img/img2.jpg",
                  // "img/img3.jpg",
                  // "img/img4.jpg"                  
                ];
  const dots = [];
  let currentIndex = 0;
  
  function moveSlides() {
    document.getElementById("slide_img").src = slides[currentIndex];
    updateDots();
    if(currentIndex === slides.length-1 ) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
  }

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', (e) => {
        currentIndex = i;
        updateDots();
        moveSlides();
      });
      dots.push(button);
      document.querySelector('.dots').appendChild(button);
    }
    dots[0].classList.add('current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }
  
  setupDots();
  setInterval(moveSlides, 4000);

  window.addEventListener('resize', () => {
    moveSlides();
  });
  
};