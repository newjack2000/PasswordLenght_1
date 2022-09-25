let inputElement = document.getElementById("userName");

function textSize(event) {
   document.getElementById("stringLength").innerHTML = event.target.value.length;
}

/* Your solution goes here */
/* 
inputElement.addEventListener("input", function(event){
   document.getElementById("stringLength").innerHTML = event.target.value.length;
});
*/
var textareaElement = document.getElementById("userName");
function updateCount(userName) {
    document.getElementById("stringLength").innerHTML = textareaElement.value.length;
}
consolelog("Count: " + stringLength)
);