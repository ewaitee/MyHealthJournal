$(document).ready(function(){

	$(".storyfour").hide();
	$(".storythree").show();

	$('.storythree').click(function(){
	$(".storyfour").fadeToggle(2000);
	});

    
	$(".storythree").hide();
	$(".storytwo").show();

	$('.storytwo').click(function(){
	$(".storythree").fadeToggle(2000);
	
	});


	$(".storytwo").hide();
	$(".texttwo").hide();
	$(".line").hide();
	$(".storyone").show();

	$('.storyone').click(function(){
	$(".storytwo").fadeToggle(2000);
	$(".texttwo").delay(1000).fadeToggle(2000);
	$(".line").delay(2000).fadeToggle(2000);
	});

 
});




