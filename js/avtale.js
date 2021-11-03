window.addEventListener('load', () => {
    
    window.open("../suksess.html");
    
    const name = localStorage.getItem('NAME');
    const sted = localStorage.getItem('PLASS');
    const dato = localStorage.getItem('DATO');
    const time = localStorage.getItem('TIME');
    const aktiv = localStorage.getItem('AKTIV');
    const annet = localStorage.getItem('ANNET');
    const number = localStorage.getItem('QUANTITY');
    const comment = localStorage.getItem('COMENTS');

    document.getElementById('navn').innerHTML = name;
    document.getElementById('sted').innerHTML = sted;
    document.getElementById('dato').innerHTML = dato;
    document.getElementById('tid').innerHTML = time;
    document.getElementById('aktivitet').innerHTML = aktiv;
    document.getElementById('annet').innerHTML = annet;
    document.getElementById('antal').innerHTML = number;
    document.getElementById('komment').innerHTML = comment;

});

