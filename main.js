var ham = $('a i');
var hamburgeList = $('.hamburger-menu');

ham.click(function() {
    hamburgeList.toggleClass('active');
});