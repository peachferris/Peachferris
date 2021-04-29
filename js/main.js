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
        arrows: true,
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        speed: 1000,
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

