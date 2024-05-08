function sendEmail() {
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    // Simple form validation
    if (name === '' || email === '' || phone === '' || message === '') {
        alert("Please fill in all fields.");
        return;
    }

    // Sending email using Email.js
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "yogeshabnave101@gmail.com",
        Password: "57C3C36F1945510A18BB8E13571C027DD4AF",
        port:"2525",
        To: 'yogeshabnave101@gmail.com',
        From: "yogeshabnave101@gmail.com",
        Subject: "Contact form nirmala bag website",
        Body: "Name: " + name + "<br>Email: " + email + "<br>Phone: " + phone + "<br>Message: " + message,
    }).then(function (message) {
        debugger
        console.log("message",message)
        // Reset form fields after successful submission
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";

        // Provide feedback to the user
        alert("Thank you! Your message has been sent successfully. We will contact you within 48 hours.");
    }).catch(function (error) {
        // Provide feedback to the user in case of an error
        console.log("error",error)

        alert("Oops! Something went wrong. Please try again later.");
    });
}
