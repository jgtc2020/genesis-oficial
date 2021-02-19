


document.getElementsByClassName("input-user-card-login-oficial")[0].addEventListener('focus', function(){
	$('.icon-input-user').addClass("active-user");
});

document.getElementsByClassName("input-user-card-login-oficial")[0].addEventListener('blur', function(){
	$('.active-user').removeClass("active-user");
});

document.getElementsByClassName("input-user-card-login-oficial-2")[0].addEventListener('focus', function(){
	$('.icon-input-lock').addClass("active-lock");
});

document.getElementsByClassName("input-user-card-login-oficial-2")[0].addEventListener('blur', function(){
	$('.active-lock').removeClass("active-lock");
});
