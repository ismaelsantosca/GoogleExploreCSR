$( document ).ready(function() {

    let headerHtml = '../templates/header/header.html';
    if($('header').hasClass('home')){
        headerHtml = './templates/header/header-home.html';
    }  

    fetch(headerHtml).then(response => { return response.text()})
                     .then( header => {
                          let path = window.location.pathname.replace('/','').split('/');
                          let classActive = 'home'; 
                          if(path.length > 1 && path[1] != ''){
                              classActive =  path[1];
                          }

                          $(header).find('#navbarSupportedContent .active').removeClass('active');
                          document.querySelector("header").innerHTML = header;
                          $('.nav-item[data-item="'+classActive+'"]').addClass('active');

                      });

    let footerHtml = '../templates/footer/footer.html';
    if($('footer').hasClass('home')){
        footerHtml = './templates/footer/footer-home.html';
    }  

    fetch(footerHtml).then(response => { return response.text()})
                      .then( footer => {
                        document.querySelector("footer").innerHTML = footer;
                      });

});