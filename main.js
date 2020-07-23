// Con HIDE e SHOW
// $('.header-right > a').click(function(){
//     $('.hamburger-menu').show('slow');
// });
//
// $('.close').click(function(){
//     $('.hamburger-menu').hide('slow');
// });

// L'elemento 'a' ha un line-height, prende tutta l'altezza
// del header, quindi l'area cliccabile è più estesa. Se voglio
// concentrare l'azione solo sull'icona aggiungo 'i' nel selettore

// Con FADE IN/OUT
// $('.header-right > a').click(function(){
//     $('.hamburger-menu').fadeIn('slow');
// });
//
// $('.close').click(function(){
//     $('.hamburger-menu').fadeOut('slow');
// });

// A quanto pare i metodi show/hide e fade in/out sono molto simili
// quando hanno entrambi specificato il tempo della transizione. Pare che, per fare un esempio, entrambi fadeIn e show cambino il display da 'none' a 'block' e opacity parta da 0 e gradualmente vada verso 1; la differenza sta in width e height: con fade NON cambiano, mentre con show partono da 0 e gradualmente vanno verso 'auto'

// Con ADD/REMOVE CLASS
$('.header-right > a').click(function(){
    $('.hamburger-menu').addClass('active');
});

$('.close').click(function(){
    $('.hamburger-menu').removeClass('active');
});
