const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
   })
  }

$(function(){
    $('.animation__layer').parallax({
      mouseport: $('.animation')
    });
});

$(function(){
    $('.animation-principies-item').parallax({
      mouseport: $('.animation-principies')
    });
});


$(document).ready(function(){
    $('.principies__title').click(function(event) {
        if($('.principies-container').hasClass('.one')) {
            $('.principies__title').not($(this)).removeClass('.active');
            $('.principies__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 800,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                    
                }
            }
        ]
    });
});

let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let mountains_front = document.getElementById("mountains_front");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let header = document.querySelector("header");

window.addEventListener("scroll", () =>  {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + "px";
    moon.style.top = value * 1.05 + "px";
    mountains_behind.style.top = value * 0.5 + "px";
    mountains_front.style.top = value * 0 + "px";
    text.style.marginRight = value * 4 + "px";
    text.style.marginTop = value * 1.5 + "px";
    btn.style.marginTop = value * 1.5 + "px";
    header.style.top = value * 0.5 + "px";
});

const openMenu = document.querySelector(".js-open-btn");
const closeMenu = document.querySelector(".js-close-btn");
const mobileMenu = document.querySelector(".list");

openMenu.addEventListener("click", () => {
    closeMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    openMenu.classList.toggle("hidden");
});

closeMenu.addEventListener("click", () => {
    closeMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    openMenu.classList.toggle("hidden");
});