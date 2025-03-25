function filterCountries() {
    var input = document.getElementById('searchInput'); 
    var filter = input.value.toLowerCase(); 
    var paises = document.getElementsByClassName('pais-item'); 

    for (var i = 0; i < paises.length; i++) {
        var paisNombre = paises[i].querySelector('.pais-btn').textContent || paises[i].querySelector('.pais-btn').innerText;

        if (paisNombre.toLowerCase().indexOf(filter) > -1) {
            paises[i].style.display = "";
        } else {
            paises[i].style.display = "none"; 
        }
    }
}

function toggleAccordeon(id) {
    var acordeon = document.getElementById(id + 'Accordeon');
    
    if (acordeon.classList.contains('active')) {
        acordeon.classList.remove('active');
    } else {
        acordeon.classList.add('active');
    }
}
