// Use jQuery to target the <h1> tag and make it red.
$("h1").css("color", "red");
// Use jQuery to target the blue class and make it blue.
$(".notBlue").css("color", "orange");

$(".blue").css("color", "blue");
// Use jQuery to target the addMe ID and change its HTML to Hello.
$("#addMe").html("Hello");

$("h1").fadeOut("fast");
$(".notBlue").fadeOut("fast");
$(".blue").fadeOut("fast");
$("#addMe").fadeOut("fast");

// $(".body").fadeOut("fast");

$("h1").fadeIn(1000);
$(".notBlue").fadeIn(3000);
$(".blue").fadeIn(5000);
$("#addMe").fadeIn(7000);

// $(".body").fadeIn(3000);