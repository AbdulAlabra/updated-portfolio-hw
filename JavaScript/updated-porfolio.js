function scrolling() {
    window.scroll(function () {
        var winTop = $(window).scrollTop();
        if (winTop >= 30) {
            $("body").addClass("sticky-header");
        } else {
            $("body").removeClass("sticky-header");
        }//if-else
    });//win func.
};//ready func.

scrolling();




//   header code starts here 

// function scrollFooter(scrollY, heightFooter) {
//     console.log(scrollY);
//     console.log(heightFooter);

//     if (scrollY >= heightFooter) {
//         $('footer').css({
//             'bottom': '0px'
//         });
//     }
//     else {
//         $('footer').css({
//             'bottom': '-' + heightFooter + 'px'
//         });
//     }
// }

// $(window).load(function () {
//     var windowHeight = $(window).height(),
//         footerHeight = $('footer').height(),
//         heightDocument = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;

//     // Definindo o tamanho do elemento pra animar
//     $('#scroll-animate, #scroll-animate-main').css({
//         'height': heightDocument + 'px'
//     });

//     // Definindo o tamanho dos elementos header e conteúdo
//     $('header').css({
//         'height': windowHeight + 'px',
//         'line-height': windowHeight + 'px'
//     });

//     $('.wrapper-parallax').css({
//         'margin-top': windowHeight + 'px'
//     });

//     scrollFooter(window.scrollY, footerHeight);

//     // ao dar rolagem
//     window.onscroll = function () {
//         var scroll = window.scrollY;

//         $('#scroll-animate-main').css({
//             'top': '-' + scroll + 'px'
//         });

//         $('header').css({
//             'background-position-y': 50 - (scroll * 100 / heightDocument) + '%'
//         });

//         scrollFooter(scroll, footerHeight);
//     }
// });