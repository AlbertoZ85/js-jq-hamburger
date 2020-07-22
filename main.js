// Con HIDE e SHOW
// $('.header-right i').click(function(){
//     $('.hamburger-menu').show('slow');
// });
//
// $('.close i').click(function(){
//     $('.hamburger-menu').hide('slow');
// });

// Con ADD/REMOVE CLASS
$('.header-right i').click(function(){
    $('.hamburger-menu').addClass('active');
});

$('.close i').click(function(){
    $('.hamburger-menu').removeClass('active');
});
