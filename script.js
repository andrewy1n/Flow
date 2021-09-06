let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorlinks) {
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}

$( window ).ready(function() {
  
    var wHeight = $(window).height();

    $('.container')
      .height(wHeight)
      .scrollie({
        scrollOffset : -100,
        scrollingInView : function(elem) {
                   
          var bgColor = elem.data('background');
          
          $('body').css('background-color', bgColor);
          
        }
      });

  });