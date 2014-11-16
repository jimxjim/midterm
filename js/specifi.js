$(document).ready(function() {

	$('.s1').click(function(){
		$('.imgshow1').fadeIn(500);
		opacity();
	});
	$('.s2').click(function(){
		$('.imgshow2').fadeIn(500);
		opacity();		
	});
	$('.s3').click(function(){
		$('.imgshow3').fadeIn(500);
		opacity();		
	});

	$('.imgshow1').click(function(){
		$(this).fadeOut(100);
		opacity();
	});
	$('.imgshow2').click(function(){
		$(this).fadeOut(100);
		opacity();
	});
	$('.imgshow3').click(function(){
		$(this).fadeOut(100);
		opacity();
	});
});

function opacity() {
	$('.head,.content,.footer,.fix').toggleClass('opacity');
}