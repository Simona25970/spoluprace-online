window.onload = () => {
     document.querySelectorAll("resizable").forEach
          ((element) => {
               element.onclick = () => {
                    element.classList.toggle("bigger");
               };
          });

     const scrollBtn = document.getElementById("scrollToTop");

     window.onscroll = function () {
          if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
               scrollBtn.style.display = "block";
          } else {
               scrollBtn.style.display = "none";
          }
     };

     // plynulý scroll nahoru
     scrollBtn.onclick = function () {
          window.scrollTo({
               top: 0,
               behavior: 'smooth',
          });
     };


     document.querySelectorAll(".more").forEach((more) => {
          more.onclick = () => {
               const show = more.getAttribute("data-show");
               const element = document.querySelector(show);
               const classList = element.classList;
               classList.toggle("hidden");

               if (element.classList.contains("hidden")) {
                    more.innerText = "Číst více";
               } else {
                    more.innerText = "Číst méně";
               }
          };
     });

     // Mobile menu header, jak začít
     $(document).ready(function () {
          $('.mobile-nav-icon').click(function () {
               var nav = $('.jq--main-nav');
               var icon = $('.jq--nav-icon');

               nav.toggleClass('open');

               // výměna ikonek
               if (nav.hasClass('open')) {
                    icon.attr("src", "img/crossMenu.png");
               } else {
                    icon.attr("src", "img/hamburgerMenu.png");
               }
          });

          // Zavření menu po kliknutí na odkaz (pro plynulé scrollování na stejné stránce)
          $('.jq--main-nav li a').click(function () {
               var nav = $('.jq--main-nav');
               var icon = $('.jq--nav-icon');

               // Pokud je menu vysunuté (má třídu 'open' nebo je vidět přes slideToggle)
               if (nav.hasClass('open') || nav.is(':visible')) {

                    // Pokud používáš animaci .open (vysouvání z boku):
                    nav.removeClass('open');

                    // Pokud používáš slideToggle (vysouvání shora dolů):
                    // nav.slideUp(200); 

                    // Vrátíme ikonku zpět na hamburger
                    icon.attr("src", "img/hamburgerMenu.png");
               }
          });

          // zavření menu po kliknutí na odkaz (pro plynulý scroll)
          $('.jq--main-nav a').click(function () {
               $('.jq--main-nav').removeClass('open');
               $('.jq--nav-icon').attr("src", "img/hamburgerMenu.png");
          });
     });

     // Mobile menu - o mně, blog, faq, cookies, zásady ochrany
     $(document).ready(function () {
          $('.mobile-navbar-icon').click(function () {
               var nav = $('.jq--main-navbar');
               var icon = $('.jq--navbar-icon');

               nav.toggleClass('open');

               // výměna ikonek
               if (nav.hasClass('open')) {
                    icon.attr("src", "img/crossMenu.png");
               } else {
                    icon.attr("src", "img/hamburgerMenu.png");
               }
          });

          // Zavření menu po kliknutí na odkaz (pro plynulé scrollování na stejné stránce)
          $('.jq--main-navbar li a').click(function () {
               var nav = $('.jq--main-navbar');
               var icon = $('.jq--navbar-icon');

               // Pokud je menu vysunuté (má třídu 'open' nebo je vidět přes slideToggle)
               if (nav.hasClass('open') || nav.is(':visible')) {

                    // Pokud používáš animaci .open (vysouvání z boku):
                    nav.removeClass('open');

                    // Pokud používáš slideToggle (vysouvání shora dolů):
                    // nav.slideUp(200); 

                    // Vrátíme ikonku zpět na hamburger
                    icon.attr("src", "img/hamburgerMenu.png");
               }
          });

          // zavření menu po kliknutí na odkaz (pro plynulý scroll)
          $('.jq--main-navbar a').click(function () {
               $('.jq--main-navbar').removeClass('open');
               $('.jq--navbar-icon').attr("src", "img/hamburgerMenu.png");
          });
     });


     // Cookies
     $(document).ready(function () {
          // Zkontroluje, jestli už uživatel dříve souhlasil (ukládá se do prohlížeče)
          if (!localStorage.getItem('cookieSeen')) {
               $('#cookie-bar').delay(1000).fadeIn(); // Ukáže se s vteřinovým zpožděním
          }

          $('#cookie-button').click(function () {
               $('#cookie-bar').fadeOut();
               localStorage.setItem('cookieSeen', 'true'); // Zapamatuje si souhlas
          });
     });
};


(function ($) {
     $(function () {
          /* Scroll to section */
          $(".jq--scroll-outset").click(function () {
               $("html, body").animate({ scrollTop: $(".jq--outset").offset().top }, 400);
          });
          $(".jq--scroll-about-us").click(function () {
               $("html, body").animate({ scrollTop: $(".jq--about-us").offset().top }, 800);
          });


          $(".jq--scroll-contact").click(function () {
               $("html, body").animate({ scrollTop: $(".jq--contact").offset().top }, 1200);

               var nav = $('.jq--main-nav');
               var icon = $('.jq--nav-icon');

               nav.removeClass('open'); // Pokud používáš metodu s třídou 'open'
               // nav.slideUp(200);     // Pokud používáš metodu slideToggle

               icon.attr("src", "img/hamburgerMenu.png");
          });




          /* Scroll btn to section - jak začít */
          $(".jq--scroll-btn-overview").click(function () {
               $("html, body").animate({ scrollTop: $(".jq--overview").offset().top }, 400);
          });
          $(".jq--scroll-btn-eshops").click(function () {
               $("html, body").animate({ scrollTop: $(".jq--eshops").offset().top }, 800);
          });
          $(".jq--scroll-btn-products").click(function () {
               $("html, body").animate({ scrollTop: $(".jq--products").offset().top }, 1200);
          });

          /* Scroll button - provize, tabulka */
          $(".jq--scroll-button-commission").click(function () {
               $("html, body").animate({ scrollTop: $(".jq--commission").offset().top }, 1200);
          });
          $(".jq--scroll-button-reward").click(function () {
               $("html, body").animate({ scrollTop: $(".jq--reward").offset().top }, 1200);
          });
     });
})(jQuery);





