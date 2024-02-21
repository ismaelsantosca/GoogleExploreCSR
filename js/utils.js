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
    document.querySelector("header").innerHTML = header;
    $('.nav-item[data-item="'+classActive+'"]').addClass('active');

  });

});