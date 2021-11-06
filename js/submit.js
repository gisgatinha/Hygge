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

function gjestSubmit() {
  
    const username = document.getElementById('navn').value;
    const name = document.getElementById('navnet').value;
    const contact = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    localStorage.setItem("BRUKERNAVN", username);
    localStorage.setItem("NAME", name);
    localStorage.setItem("PHONE", contact);
    localStorage.setItem("E-MAIL", email);
    
    

    return;

}
