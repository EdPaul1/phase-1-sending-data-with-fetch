let data = {
    name: "Steve",
    email: "steve@steve.com"
}
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        // Access the newly converted object
        const id = data.id;
    
        // Append the new id to the DOM
        const p = document.createElement('p');
        p.textContent = id;
        document.body.appendChild(p);
      })
      .catch(error => {
        // Append the error message to the DOM
        const p = document.createElement('p');
        p.textContent = error.message;
        document.body.appendChild(p);
      });
}

