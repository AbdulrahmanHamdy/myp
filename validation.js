function validateForm() {
    const userfname = document.getElementById("first-name").value.trim();
    const userlname = document.getElementById("last-name").value.trim();
    const password = document.getElementById("password").value.trim();
    const email = document.getElementById("email").value.trim();

    let flag = false;

    if (!/^[a-zA-Z0-9]{6,12}$/.test(userfname)) {
        document.getElementById("first-name").style.borderColor = "red";
        document.getElementById("first-name-error").textContent = "First name must be 6-12 alphanumeric characters.";
        flag = true;
    } else {
        document.getElementById("first-name").style.borderColor = "initial";
        document.getElementById("first-name-error").textContent = "";
    }

    if (!/^[a-zA-Z0-9]{6,12}$/.test(userlname)) {
        document.getElementById("last-name").style.borderColor = "red";
        document.getElementById("last-name-error").textContent = "Last name must be 6-12 alphanumeric characters.";
        flag = true;
    } else {
        document.getElementById("last-name").style.borderColor = "initial";
        document.getElementById("last-name-error").textContent = "";
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("password-error").textContent = "Password must be at least 8 characters long and include both upper and lower case letters.";
        flag = true;
    } else {
        document.getElementById("password").style.borderColor = "initial";
        document.getElementById("password-error").textContent = "";
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(email)) {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email-error").textContent = "email must be at least 8 characters long and include @ sign.";
        flag = true;
    } else {
        document.getElementById("email").style.borderColor = "initial";
        document.getElementById("email-error").textContent = "";
    }

    if (!flag) {
        const text = `First Name: ${userfname}\nLast Name: ${userlname}\nEmail: ${email}`;
        alert(text);
    }

    return !flag;  // Prevent form submission if there are validation errors
}
