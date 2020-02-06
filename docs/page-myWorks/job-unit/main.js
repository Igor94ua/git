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