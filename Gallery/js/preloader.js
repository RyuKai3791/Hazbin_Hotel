window.addEventListener('load', function() {
    // ESTABLECER UN TIEMPO MÍNIMO DE CARGA
    let tiempoMinimo = 2600;

    // OBTENER EL TIEMPO ACTUAL
    let tiempoInicio = new Date().getTime();

    let tiempoRestante = tiempoMinimo - (new Date().getTime() - tiempoInicio);

    if (tiempoRestante > 0) {
        setTimeout(function() {
            document.getElementById('preloader').style.display = 'none';
            document.getElementById('contenido').style.display = 'block';
        }, tiempoRestante);

    } else {
        // SI YA HA PASADO EL TIEMPO MÍNIMO, OCULTA EL PRELOADER INMEDIATAMENTE
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('contenido').style.display = 'block';
        var bodyElement = document.body;
        bodyElement.style.animation = '';
    }
});