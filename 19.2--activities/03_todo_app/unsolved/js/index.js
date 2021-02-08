// Create event listener to enter items below
$("#enter").on("click", function(){
    // Write code to run here
    var task = $("#todoItem").val();
    if (task){
    $("#todoList").append("<div class='task'>" + task + "<div class='x fas fa-times'></div></div>");
}
else {
    alert("Type Something First.")
}
});
  
// Create event listener to delete items below
$(document).on("click", ".x", function(){
    $(this).parent().remove();
});

// Create event listener to toggle 
$(document).on("click", ".task", function(){
    $(this).toggleClass("done");
});

if ($(this).hasClass(done)) {
    $(this).find(div);removeClass(fa-times);
    $(this).find(div);addClass(fa-check);
}
else {
    $(this).find(div);addClass(fa-times);
   }