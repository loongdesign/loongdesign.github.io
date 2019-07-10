$("html").click(function() {
    $(".dropdown").hide();
});

$("nav ul li a:not(:only-child)").click(function(e) {
    $(this).siblings(".dropdown").toggle();

    $(".dropdown").not($(this).siblings()).hide();
    e.stopPropagation();
});



// ==========================================================================
function menudrop_open() {
  document.querySelector('.drop').style.display = 'block';
  
}
function menudrop_close() {
  document.querySelector('.drop').style.display = 'none';
}