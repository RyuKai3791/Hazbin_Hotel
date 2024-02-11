// WAIT FOR WINDOW TO LOAD
window.addEventListener('load', function() {
    // SET MINIMUM LOADING TIME
    let minLoadingTime = 4900;

    // GET CURRENT TIME
    let startTime = new Date().getTime();

    let remainingTime = minLoadingTime - (new Date().getTime() - startTime);

    // CHECK IF MINIMUM TIME IS NOT YET ELAPSED
    if (remainingTime > 0) {
        // DELAY HIDING THE PRELOADER UNTIL MINIMUM TIME ELAPSES
        setTimeout(function() {
            document.getElementById('preloader').style.display = 'none';
            document.getElementById('contenido').style.display = 'block';
        }, remainingTime);

    } else {
        // IF MINIMUM TIME HAS ALREADY ELAPSED, HIDE THE PRELOADER IMMEDIATELY
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('contenido').style.display = 'block';
        var bodyElement = document.body;
        bodyElement.style.animation = '';
    }
});