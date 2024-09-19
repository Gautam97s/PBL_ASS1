function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validateForm() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let valid = true;

    if (email.value.trim() === "") {
        email.style.border = "2px solid red";
        valid = false;
    } else if (!validateEmail(email.value)) {
        email.style.border = "2px solid red";
        alert('Please enter a valid email address.');
        valid = false;
    } else {
        email.style.border = "";
    }

    if (password.value.trim() === "") {
        password.style.border = "2px solid red";
        valid = false;
    } else {
        password.style.border = "";
    }



    return valid;
}

document.querySelector('.btn').addEventListener('click', (event) => {
    if (!validateForm()) {
        event.preventDefault(); 
    }
});
