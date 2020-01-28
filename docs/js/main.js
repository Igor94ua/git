 $(document).ready(function () {
   $("#menu").on("click", "a", function (event) {
     event.preventDefault();
     var id = $(this).attr('href'),
       top = $(id).offset().top;
     $('body,html').animate({
       scrollTop: top
     }, 1500);
   });
 });

 $(document).ready(function () {
   $(".button").click(function () {
     var value = $(this).attr("data-filter");
     var elem = $(".elem");
     if (value == "all") {
       $(elem).show("500");
     } else {
       $(elem).not("." + value).hide("500");
       $(elem).filter("." + value).show("500");
     }
   });
 })

 document.querySelector('.menu-icon-wrapper').onclick = function () {
   document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
   document.querySelector('.mobile_nav').classList.toggle('mobile_nav-active');
   document.querySelector('.overlay_menu').classList.toggle('overlay_menu-active');  
 }

 document.querySelector('.overlay_menu').onclick = function(){
  document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  document.querySelector('.mobile_nav').classList.toggle('mobile_nav-active');
  document.querySelector('.overlay_menu').classList.toggle('overlay_menu-active');  
 }