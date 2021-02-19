
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




					 /*Content-choise*/
					 var elmentsContentChoise = document.getElementsByClassName("option");

					 var funtionChoise = function(e){
						 var containerChoise = e.target.parentElement.getElementsByClassName("container-chiose")[0];
						 $(containerChoise).addClass("container-chiose-color");
					 };

					 for (var i = 0; i < elmentsContentChoise.length; i++) {
					 elmentsContentChoise[i].addEventListener('click', funtionChoise, false);
					 }
					 /*Over here ends*/


					 document.getElementsByClassName("btn-choise-next")[0].addEventListener('click', function(){
						 window.open("index.html","_top");
					 });
