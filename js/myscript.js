$(document).ready(function(){



	$(".storyfour").hide();
	$(".storythree").show();

	$('.storythree').click(function(){
	$(".storyfour").slideToggle();
	});

    
	$(".storythree").hide();
	$(".storytwo").show();

	$('.storytwo').click(function(){
	$(".storythree").slideToggle();
	});


	$(".storytwo").hide();
	$(".storyone").show();

	$('.storyone').click(function(){
	$(".storytwo").slideToggle();
	});

});