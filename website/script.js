document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Validate form inputs
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();
  
    // Email validation using a regular expression
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!name || !email || !subject || !message || !emailRegex.test(email)) {
      alert('Please fill in all fields with valid inputs.');
      return;
    }
  
    // Construct the form data
    var formData = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };
  
    // Perform form submission
    submitForm(formData);
  });
  
  function submitForm(formData) {
    // Make an API request to the backend (API Gateway) for form submission
    fetch('https://irn2u0gwl0.execute-api.ca-central-1.amazonaws.com/dev/submit', { // URL that represents the backend API endpoint to which the form data is going to be sent
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(function(response) {
              window.location.href = 'thank-you.html';
    })
  }