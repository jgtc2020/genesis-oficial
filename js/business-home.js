
$('.icon-back-hero-banner-mobile__bs-view').click(function(){
  alert("me clikearon!!");
});


$('.item-filter').click(function(){
  $('.item-filter').removeClass("ct_item-active");
  $(this).addClass("ct_item-active");
});




$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');
	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
    
		// OCULTANDO PRODUCTOS =========================
		$('.product-item').css('transition', '.5s');
		$('.product-item').css('opacity', '0');
		function hideProduct(){
			$('.product-item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.product-item[category="'+catProduct+'"]').show();
      $('.product-item[category="'+catProduct+'"]').css('transition', '.5s');
			$('.product-item[category="'+catProduct+'"]').css('opacity', '1');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});
