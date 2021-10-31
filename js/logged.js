window.addEventListener('load', () => {
  
    
    const name = localStorage.getItem('NAME');

    document.getElementById('navn').innerHTML = name;
});
