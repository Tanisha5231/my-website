function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("formFeedback");

    if (!name || !email || !subject || !message) {
        feedback.textContent = "All fields are required.";
        feedback.style.color = "red";
        return false;
    }

    feedback.textContent = "Thank you for reaching out! We'll get back to you soon.";
    feedback.style.color = "green";

   
    return false; 
}
