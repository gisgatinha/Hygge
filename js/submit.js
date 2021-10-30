function handleSubmit() {
  
    const name = document.getElementById('navn').value;

    localStorage.setItem("NAME", name);

    return;

}
