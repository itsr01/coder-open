// ---------------------------------------------------------------------------------
//StartServiceWorker

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js', {
        scope: '.'
    }).then(function(registration) {
        // Registration was successful
        //console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
    });
}

// ---------------------------------------------------------------------------------

// function darkToggle() {
//     document.getElementById("bode").classList.toggle('bg-dark-blue');
//     document.getElementById("bode").classList.toggle('text-white');
//     document.getElementById("mainNav").classList.toggle('navbar-dark');
// }

// ---------------------------------------------------------------------------------

var darkThemeActive = JSON.parse(localStorage.getItem('dark_theme')) || [];

if (darkThemeActive == true) {
    darkToggleOn();
    document.getElementById("toggleDarkMode").setAttribute('checked', 'checked');
}

function darkToggle() {
    var darkThemeActive = JSON.parse(localStorage.getItem('dark_theme')) || [];
    if (darkThemeActive == true) {
        darkToggleOff();
    } else {
        darkToggleOn();
    }
}

function darkToggleOn() {
    document.getElementById("bode").classList.add('bg-dark-blue');
    document.getElementById("bode").classList.add('text-white');
    document.getElementById("mainNav").classList.add('navbar-dark');
    localStorage.setItem('dark_theme', true);
}

function darkToggleOff() {
    document.getElementById("bode").classList.remove('bg-dark-blue');
    document.getElementById("bode").classList.remove('text-white');
    document.getElementById("mainNav").classList.remove('navbar-dark');
    localStorage.setItem('dark_theme', false);
}