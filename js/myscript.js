$(document).ready(function(){


	$(".storyfour").hide();
	$(".line5").hide();
	$(".storythree").show();


	$('.storythree').click(function(){
	$(".storyfour").fadeToggle(2000);
	$(".line5").delay(1500).fadeToggle(2000);
	});

    
	$(".storythree").hide();
	$(".storytwo").show();

	$('.storytwo').click(function(){
	$(".storythree").fadeToggle(2000);
	
	});


	$(".storytwo").hide();
	$(".texttwo").hide();
	$(".line").hide();
	$(".line2").hide();
	$(".stuf").hide();
	$(".lightboxone").hide();
	$(".storyone").show();


	$('.storyone').click(function(){
	$(".lightboxone").addClass("zdex") .fadeToggle(2000);;
	$(".stuf").delay(1000).fadeToggle(2000);
	});
	
	$('.lightboxone').click(function(){
	$(".lightboxone").removeClass("zdex");
	$(".storytwo").fadeToggle(2000);
	$(".texttwo").delay(1000).fadeToggle(2000);
	$(".line").delay(2000).fadeToggle(2000);
	$(".line2").delay(2000).fadeToggle(2000);
	});
 
});




