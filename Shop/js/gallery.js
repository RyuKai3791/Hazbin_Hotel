// ONCLICK FUNCTION TO OPEN MODAL
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}

// GET THE MODAL ELEMENT
var modal = document.querySelector(".modal");

// GET ALL IMAGES AND CAPTION ELEMENT
var images = document.querySelectorAll('.myImg');
var captionText = document.querySelector(".caption");

// SET CLICK EVENT FOR EACH IMAGE
images.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modal.querySelector(".modal-content").src = this.src;
        modal.querySelector(".caption").innerHTML = this.alt;
    }
});

// GET THE SPAN ELEMENT TO CLOSE THE MODAL
var span = document.querySelector(".close");

// CLOSE MODAL ON SPAN CLICK
span.onclick = function() { 
    modal.style.display = "none";
}