$( document ).ready(function() {
   
    fetch('./nav/nav.html')
  .then(response => {
    return response.text()
  })
  .then( data => {
    let path = window.location.pathname.replace('/','').split('/');
    let classActive = 'home'; 
    if(path.length > 1 && path[1] != ''){
        classActive =  path[1];
    }

    $(data).find('#navbarSupportedContent .active').removeClass('active');
    $(data).find('.nav-item[data-item="about"]').addClass('active');

  }).then(data => {
    document.querySelector("#navbarSupportedContent").innerHTML = data;
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


