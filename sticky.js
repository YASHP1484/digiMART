const nav = document.querySelector('.header');
    const offset = nav.getBoundingClientRect();
    
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > offset.top) {
        nav.style.position = 'fixed';
        nav.style.top = 0;
      } else {
        nav.style.position = 'relative';
        nav.style.top = '';
      }
    })