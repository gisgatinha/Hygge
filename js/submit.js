function handleSubmit() {
  
    const name = document.getElementById('navn').value;

    localStorage.setItem("NAME", name);

    return;

}

function vertSubmit() {
  
    const name = document.getElementById('navn').value;
    const organization = document.getElementById('navnet').value;
    const contact = document.getElementById('kontaktnavn').value;
    const email = document.getElementById('email').value;

    localStorage.setItem("BRUKERNAVN", name);
    localStorage.setItem("CONTACT", contact);
    localStorage.setItem("ORGANIZATION", organization);
    localStorage.setItem("E-MAIL", email);

    return;

}

