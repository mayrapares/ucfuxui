$('.tab').on("click", function(){
   
if ($(this).hasClass("tab1")) {
    $(".tab1").addClass("active");
    $(".tab2").removeClass("active");
    $("#tabContent1").css("display", "block");
    $("#tabContent2").css("display", "none");
}
 
else if ($(this).hasClass("tab2")) {
    $(".tab2").addClass("active");
    $(".tab1").removeClass("active");
    $("#tabContent2").css("display", "block");
    $("#tabContent1").css("display", "none");
}

});

// var number = 2;
//if (number < 1) {
//  console.log("The number is less than 1");
//}
//else if (number > 1) {
 // console.log("The number is greater than 1");
//}
//else {
  //console.log("The number is 1");
//} 
