$( document ).ready(function() {
   
    fetch('./header/header.html')
  .then(response => {
    return response.text()
  })
  .then( header => {
    let path = window.location.pathname.replace('/','').split('/');
    let classActive = 'home'; 
    if(path.length > 1 && path[1] != ''){
        classActive =  path[1];
    }

    $(header).find('#navbarSupportedContent .active').removeClass('active');
    $(header).find('.nav-item[data-item="'+classActive+'"]').addClass('active');

    document.querySelector("header").innerHTML = header;

  });

});

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


