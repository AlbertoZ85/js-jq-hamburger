// Con HIDE e SHOW
// $('.header-right i').click(function(){
//     $('.hamburger-menu').show('slow');
// });
//
// $('.close i').click(function(){
//     $('.hamburger-menu').hide('slow');
// });

// Con FADE IN/OUT
// $('.header-right i').click(function(){
//     $('.hamburger-menu').fadeIn('slow');
// });
//
// $('.close i').click(function(){
//     $('.hamburger-menu').fadeOut('slow');
// });

// A quanto pare i metodi show/hide e fade in/out sono molto simili
// quando hanno entrambi specificato il tempo della transizione. Pare che, per fare un esempio, entrambi fadeIn e show cambino il display da 'none' a 'block' e opacity parta da 0 e gradualmente vada verso 1; la differenza sta in width e height: con fade NON cambiano, mentre con show partono da 0 e gradualmente vanno verso 'auto'

// Con ADD/REMOVE CLASS
$('.header-right i').click(function(){
    $('.hamburger-menu').addClass('active');
});

$('.close i').click(function(){
    $('.hamburger-menu').removeClass('active');
});
