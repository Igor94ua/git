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

 $(document).ready(function () {
  $('#page-nav').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function () {},
    end: function () {},
    scrollChange: function ($currentListItem) {}
  });
})

$(document).ready(function () {
  $('#portfolio-filter').mixItUp();
});

    //FORM VALIDATE
$(document).ready(function () {  
    $('#contact-form').validate({
      rules: {
          email: {
              required: true,
              email: true
          },
          theme: {
              required: true
          },
          message: {
              required: true
          }
      },
      messages: {
          email: {
              required: 'Введите Ваш email',
              email: 'Отсутсвует символ @'
          },
          theme: {
              required: 'Введите тему сообщения'
          },
          message: {
              required: 'Введите текст сообщения'
          }
      },
      submitHandler: function (form) {
          ajaxFormSubmit();
      }
  });
});

  // Функция AJAX запрса на сервер
$(document).ready(function () {
  function ajaxFormSubmit() {
      let string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку. 

      //Формируем ajax запрос
      $.ajax({
          type: "POST", // Тип запроса - POST
          url: "php/mail.php", // Куда отправляем запрос
          data: string, // Какие даные отправляем, в данном случае отправляем переменную string

          // Функция если все прошло успешно
          success: function (html) {
              $("#contact-form").slideUp(800);
              $('#answer').html(html);
          }
      });

      // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепочку срабатывания остальных функций
      return false;
  }
  
});

$(document).ready(function () {
  $('#backTop').hide();
  $(window).scroll( function () {

    if($(this).scrollTop() > 200){
      $('#backTop').fadeIn();
    }
    else{
      $('#backTop').fadeOut();
    }
  })

});

    //-PLACEHOLDER
    const formRows = document.querySelectorAll('.input_wrapper')
    const formRowsInputs = document.querySelectorAll('.input')

    for (let i = 0; i < formRows.length; i++) {

        formRows[i].addEventListener('click', function () {
            const placeholderElement = this.querySelector('.fake-placeholder')
            placeholderElement.classList.add('active')
        })

    }

    for (let i = 0; i < formRowsInputs.length; i++) {
        formRowsInputs[i].addEventListener('blur', function () {

            const thisParent = this.parentElement;

            if (this.value == '') {
                thisParent.querySelector('label').classList.remove('active');
            }
        })
    }