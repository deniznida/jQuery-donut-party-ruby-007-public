$(function(){ 
  var donutCounter = new DonutCounter();
});

// your code here
function DonutCounter(){
	var num_of_guests = 0;
	var num_of_donuts = 0;

	$("#guests .add").click(function(){
		num_of_guests++;
		$('.guest-count').html(num_of_guests);
	});

	$("#guests .remove").click(function(){
		if (num_of_guests > 0){
			num_of_guests--;
			$('.guest-count').html(num_of_guests);
		}
		
	});

	$("#donuts .add").click(function(){
		num_of_donuts++;
		$('.donut-count').html(num_of_donuts);
	});

	$("#donuts .remove").click(function(){
		if (num_of_donuts > 0){
			num_of_donuts--;
			$('.donut-count').html(num_of_donuts);
		}	
	});

	$("#check").click(function() {
		if (num_of_guests === 0){
			$("#status").html('Invite someone you jerk!');
		} else if (num_of_guests > num_of_donuts){
			$("#status").html('Guests are sad :(');
		} else if (num_of_guests > num_of_donuts){
			$("#status").html('Guests are sad :(');
		} else if ((num_of_donuts/num_of_guests) > 3){
			$("#status").html('ARE YOU TRYING TO KILL US ALL!?');
		} else {
			$("#status").html('Guests are having a blast!');
		}
	});
}