// Save text in chrome storage
function savemytxt() {
var mytxt = document.getElementById('mytxt').value
  localStorage['mytxt'] = mytxt;
    }
window.addEventListener('DOMContentLoaded', function () {
 
 // add an event listener to save text when input is given
 document.getElementById('mytxt').addEventListener('input', savemytxt);
 
 // reload the text in the browser
 var mytxt = localStorage['mytxt'];
 if (!mytxt) {
 return;
 }
 document.getElementById('mytxt').value = mytxt;
});
