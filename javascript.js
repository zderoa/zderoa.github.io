function posaljiporuku() {

    ime = document.getElementById('ImePrezime').value;
    prezime = document.getElementById('Email').value;
    poruka = document.getElementById('Poruka').value;
    if (ime.length > 0 && prezime.length > 0 && poruka.length > 0) {
        var link = "mailto:zderoaljosa@gmail.com"
            + "?subject=" + encodeURIComponent("Upit iz kontakt forme")
            + "&body=" + "Ime i Prezime: " + encodeURIComponent(document.getElementById('ImePrezime').value) + "%0APoruka: " + encodeURIComponent(document.getElementById('Poruka').value)
            ;

        window.location.href = link;
        document.querySelector('#posalji').textContent = 'PORUKA POSLATA';
    }

    else {

        alert("Molimo Vas da unesete sve podatke")

    }
}

