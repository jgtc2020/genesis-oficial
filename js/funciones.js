

				/*Header*/
				/*Over here ends*/

				$('.container-general-profile-section-fragment').scroll(function(){
					var winTopProfile = $('.container-general-profile-section-fragment').scrollTop();
					if (winTopProfile>=10) {
					$('.header-profile').addClass("sticky-header");
				}else {
					$('.header-profile').removeClass("sticky-header");
				}
				});





				/*Profile*/

				document.querySelector("#profile-header").addEventListener('click', function (){
				document.querySelector(".general-profile").classList.toggle("general-profile-active");
			 })

				document.getElementById("btn-profile-out").addEventListener('click', function (){
				$('.general-profile-active').removeClass("general-profile-active");
				 })
				/*Over here ends*/



				/*Notifications*/

				var buttonNot = document.getElementsByClassName("icon-notification-click");

				var clickfunction = function(){
					$('.notifications').addClass("active");
				};

				for(let i=0;i<buttonNot.length;i++){
					buttonNot[i].addEventListener('click',clickfunction, false);
				}

				document.getElementsByClassName("icon-exit-button-header-nots")[0].addEventListener('click', function(){
					$('.active').removeClass("active");
				})

				/*Over here ends*/







				/*Hidden-load-screen*/
				function Hidden(){
					var container= document.getElementById('load-hidden');
					container.style.transform = 'translateX(-100%)';
					container.style.transition = '1.5s';
				}
				window.setTimeout("Hidden()", 2000);
				/*Over here ends*/












				/*Cart*/
				document.querySelector("#cart").addEventListener('click', function (){
				document.querySelector(".general-cart").classList.toggle("general-cart-active");
		 })


		   document.getElementById("btn-out-cart").addEventListener('click', function (){
          $('.general-cart-active').removeClass("general-cart-active");
           })


					 document.getElementsByClassName("content-section-general")[0].addEventListener('click', function (){
							$('.general-cart-active').removeClass("general-cart-active");
							 })



					 /*Over here ends*/




					 /*Dropdown*/
					 document.querySelector(".item-filter-1").addEventListener('click', function (){
 				   document.querySelector(".content-filter-1").classList.toggle("hola-active");
 				})
				document.querySelector(".item-filter-2").addEventListener('click', function (){
				document.querySelector(".content-filter-2").classList.toggle("hola-active");
		    })
		   document.querySelector(".item-filter-3").addEventListener('click', function (){
		   document.querySelector(".content-filter-3").classList.toggle("hola-active");
	     })
	     document.querySelector(".item-filter-4").addEventListener('click', function (){
	     document.querySelector(".content-filter-4").classList.toggle("hola-active");
       })
       document.querySelector(".item-filter-5").addEventListener('click', function (){
       document.querySelector(".content-filter-5").classList.toggle("hola-active");
       })
				/*Over here ends*/




				/*Popup-document*/
				//var functionAppearPopup = function(){
					//$('.general-popup-document').addClass("active-popup-document");
				//};
			 //setTimeout(functionAppearPopup, 750);

			 //function cardOut(){
					 //$('.active-popup-document').removeClass("active-popup-document");

			 //}
			 //document.getElementsByClassName("btn-card-popup-document")[0].addEventListener('click', cardOut, false);



			 /*Aside-left*/
			 $('.item-aside-left').click(function(){
				 $('.item-aside-left').removeClass('icon-item-aside-left-active');
				 $(this).addClass('icon-item-aside-left-active');
			 });




			 //Cards-link-home
			 var cardsProduct = document.getElementsByClassName("img");

			 const functionOpenProductPage = function(){
				 window.open("producto.php","_top");
			 };
			 for (var i = 0; i <cardsProduct.length; i++) {
			 cardsProduct[i].addEventListener('click', functionOpenProductPage, false);
			 }





			 //Notifications-mobile-viewBox
			 document.getElementsByClassName("icon-chat-header-mobile-view")[0].addEventListener('click', function(){
				 $('.container-general-notifications-mv').addClass("active-nt-mv");
			 });

			 document.getElementsByClassName("btn-close-notifications-mv")[0].addEventListener('click', function(){
				 $('.active-nt-mv').removeClass("active-nt-mv");
			 });
			 //Over here ends




			 //Notifications-section-fragment
			 document.getElementsByClassName("icon-notification-header-mobile-view")[0].addEventListener('click', function(){
				 $('.notification-section-fragment').addClass("active-notifications-section-fragment");
			 });

			 document.getElementsByClassName("btn-close-notifications-section-fragment")[0].addEventListener('click', function(){
				 $('.active-notifications-section-fragment').removeClass("active-notifications-section-fragment");
			 });
			 //Over here ends



			 //See-more-section-fragment
			 $('.container-general-see-more-section-fragment').scroll(function(){
				 var winTopProfile = $('.container-general-see-more-section-fragment').scrollTop();
				 if (winTopProfile>=10) {
				 $('.header-profile').addClass("sticky-header");
			 }else {
				 $('.header-profile').removeClass("sticky-header");
			 }
			 });



			 //Bottom-navigation-mobile-viewBox
			 document.getElementsByClassName("home")[0].addEventListener('click', function(){
				 removeOnTopClasses();
				$('.header-profile').removeClass("sticky-header");
 			});

				$('.profile').click(function(){
					removeOnTopClasses();
				var profile = document.getElementsByClassName("container-general-profile-section-fragment")[0];
				  $(profile).addClass("active-section-fragment");
				});

				document.getElementsByClassName("see-more")[0].addEventListener('click', function(){
					removeOnTopClasses();
				$('.container-general-see-more-section-fragment').addClass("active-section-fragment");
				});

				document.getElementsByClassName("search-bottom")[0].addEventListener('click', function(){
					removeOnTopClasses();
					$('.general-container-section-search-mobile-view-fragment').addClass("active-section-fragment");
				});


				$('.icon-bt-nav-bar-mv').click(function(){
					$('.icon-bt-nav-bar-mv').removeClass("active-icon-bt-nav-bar-mv");
					$(this).addClass("active-icon-bt-nav-bar-mv");
				});

				const removeOnTopClasses = () => {
					if ($('.container-general-see-more-section-fragment').hasClass("active-section-fragment")) {
						$('.active-section-fragment').removeClass("active-section-fragment");
					}
					if ($('.general-container-section-search-mobile-view-fragment').hasClass("active-section-fragment")) {
						$('.active-section-fragment').removeClass("active-section-fragment");
					}
					if ($('.container-general-profile-section-fragment').hasClass("active-section-fragment")) {
						$('.active-section-fragment').removeClass("active-section-fragment");
					}
        };




			 //Over here ends

			 document.getElementsByClassName("search-input")[0].addEventListener('keyup', function(e){
				 var input = document.getElementsByClassName("search-input")[0].value;
				 var titleRealTimeSearch = document.getElementsByClassName('title-real-time-search')[0];
				 titleRealTimeSearch.textContent = input;
			 });



			 //Aside right
			 var itemsAside = document.getElementsByClassName("item-dropdown-card-aside-right");

			 var itemsAsideFunction = function(e) {
				 var icon = e.target.getElementsByClassName("icon-dropdown")[0];
					if ($(icon).hasClass("rotate")) {
							$(icon).removeClass("rotate");
					}else {
						$(icon).addClass("rotate");
					}
			 };

			 for (var i = 0; i <itemsAside.length; i++) {
			 itemsAside[i].addEventListener('click', itemsAsideFunction, false);
		 };






			 function hola(nombre, apellido){
				 this.nombre = nombre;
				 this.apellido = apellido;
			 }
		  	var jose = new hola('Jose', 'Torres');
