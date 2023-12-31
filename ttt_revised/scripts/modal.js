// get the modal
var modal = document.getElementById("myModal");

// get the button that opens the modal
var btn = document.getElementById("okay");

// get the "don't care" button
var dontCareBtn = document.getElementById("dont-care");

// get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// when the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
};

// when the user clicks on the "don't care" button, close the modal
dontCareBtn.onclick = function() {
  modal.style.display = "none";
};

// when the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// when the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// to open the modal on page load
window.onload = function() {
  modal.style.display = "block";
};

// When the user clicks on the "okay" button, close the modal as well
btn.onclick = function() {
  modal.style.display = "none";
};
