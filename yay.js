// Form validation function
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    if (message == "") {
        alert("Message must be filled out");
        return false;
    }

    // If everything is valid, you can proceed with form submission
    alert("Form successfully submitted!");
    return true;
}

// Email validation function
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


// Form validation function
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    if (message == "") {
        alert("Message must be filled out");
        return false;
    }

    // If everything is valid, you can proceed with form submission
    alert("Form successfully submitted!");
    return true;
}

// Email validation function
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


