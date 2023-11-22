// Add your code here
function submitData(name, email) {
    // Define the data object
    const data = {
      name: name,
      email: email
    };
  
    // Define the fetch request with the required parameters
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        // Access the id from the response and append it to the DOM
        document.body.innerHTML += data.id;
      })
      .catch(error => {
        // Append the error message to the DOM
        document.body.innerHTML += error.message;
      });
  }
  
  // Return the fetch chain
module.exports = submitData;


  submitData("Muna", "monabadee@gmail.com");
