<script src="https://cdn.emailjs.com/dist/email.min.js"></script>

<script>
  // Initialize EmailJS with your user ID
  emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

  // Get form elements
  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  // Handle form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

// Gather form data
    const formData = new FormData(form);
    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    // Optional: Validate password length
    if (formValues.password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    // Send email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formValues)
      .then((response) => {
        console.log("Success:", response);
        formStatus.textContent = "Your message has been sent successfully!";
        form.reset(); // Reset the form
      })
      .catch((error) => {
        console.error("Error:", error);
        formStatus.textContent = "Oops! There was an error sending your message.";
      });
  });
</script>
