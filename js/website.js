$('img').click( function(){
	var imageSource = $(this).attr('src');
	alert(imageSource);
	$('.lightbox img').attr('src',imageSource)

	$('.lightbox').fadeIn();

	$('.lightbox').click( function(){
		$('.lightbox').fadeOut();
	})
$('img').click( function(){
	var imageSource = $(this).attr('src');
	alert(imageSource);
	$('.full-photo img').attr('src',imageSource)

	$('.full-photo').fadeIn();

	$('.full-photo').click( function(){
		$('.full-photo').fadeOut();
