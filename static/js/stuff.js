alert('Welcome to my stuff page!'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
  alert('HELLO WORLD!');
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
  $('#houdini_text').hide();
});

$('#reappear').click(function() {
  $('#houdini_text').show();
});


// Problem 3 (Tickle Me Pink) -----------------------------------------------
// WRITE CODE HERE
$('#tickle_me_pink').click(function() {
  $('#tickled_text').css('color','Pink');
});

// Problem 4 (Greet Me) -----------------------------------------------------
// WRITE CODE HERE
$('#greet_me').click(function(val) {
	haha = document.getElementById("my_name").value;
	alert(haha);
});
 