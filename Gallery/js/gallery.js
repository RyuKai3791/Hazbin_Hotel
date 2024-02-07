// Onclick
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}

// Get the modal
var modal = document.querySelector(".modal");
        
// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.querySelectorAll('.myImg');
var captionText = document.querySelector(".caption");

// Set click event for each image
images.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modal.querySelector(".modal-content").src = this.src;
        modal.querySelector(".caption").innerHTML = this.alt;
    }
});

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}