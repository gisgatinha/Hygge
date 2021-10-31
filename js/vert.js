
window.addEventListener('load', () => {
    window.open("../suksess_vert.html");
    const name = localStorage.getItem('BRUKERNAVN');
    const organization = localStorage.getItem('CONTACT');
    const contact = localStorage.getItem('ORGANIZATION');
    const email = localStorage.getItem('E-MAIL');

    document.getElementById('navn').innerHTML = name;
    document.getElementById('navnet').innerHTML = organization;
    document.getElementById('kontaktnavn').innerHTML = contact;
    document.getElementById('email').innerHTML = email;    
    

})
