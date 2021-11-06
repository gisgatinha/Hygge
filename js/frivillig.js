window.addEventListener('load', () => {
    
    window.open("../gjest/avtale.html");
    
    const name = localStorage.getItem('NAME');

    document.getElementById('navn').innerHTML = name;
});

function avtaleSubmit() {
  
    
    const sted = document.getElementById('sted').value;
    const dato = document.getElementById('dato').value;
    const time = document.getElementById('tid').value;
    const aktiv = document.getElementById('aktivitet').value;
    const annet = document.getElementById('annet').value;
    const number = document.getElementById('antal').value;
    const comment = document.getElementById('komment').value;


    localStorage.setItem("PLASS", sted);
    localStorage.setItem("DATO", dato);
    localStorage.setItem("TIME", time);
    localStorage.setItem("AKTIV", aktiv);
    localStorage.setItem("ANNET", annet);
    localStorage.setItem("QUANTITY", number);
    localStorage.setItem("COMENTS", comment);

    return;

}


