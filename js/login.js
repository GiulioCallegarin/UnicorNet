const togglePassword = document.querySelector("#togglePassword");
const horn = document.querySelector("#horn");
const password = document.querySelector('#password')

togglePassword.addEventListener("click", function () {
    if (horn.style.fill != 'rgb(220, 112, 193)') {
        horn.style.fill = 'rgb(220, 112, 193)';
        password.setAttribute("type", "text");
    }
    else {
        horn.style.fill = 'rgb(117, 117, 117)';
        password.setAttribute("type", "password");
    }
});

const logButton = document.querySelector("#logButton");
const username = document.getElementById("username");
const errore = document.getElementById('textError');
logButton.addEventListener("click", function () {
    if (String(username.value).toLowerCase() == "test" && password.value == "test")
        window.open("home.html", "_self");
    else if (String(username.value).toLowerCase() == "" && password.value == "") {
        errore.innerHTML = "Username e password mancanti.";
        username.style.border = "2px";
        username.style.borderStyle = "solid";
        username.style.borderColor = "red";
        password.style.border = "2px";
        password.style.borderStyle = "solid";
        password.style.borderColor = "red";
    }
    else if (String(username.value).toLowerCase() == "") {
        errore.innerHTML = "Username mancante.";
        password.style.border = "0";
        username.style.border = "2px";
        username.style.borderStyle = "solid";
        username.style.borderColor = "red";
    }
    else if (password.value == "") {
        errore.innerHTML = "Password mancante.";
        username.style.border = "0";
        password.style.border = "2px";
        password.style.borderStyle = "solid";
        password.style.borderColor = "red";
    }
    else {
        errore.innerHTML = "Username o password incorretti.";
        username.style.border = "2px";
        username.style.borderStyle = "solid";
        username.style.borderColor = "red";
        password.style.border = "2px";
        password.style.borderStyle = "solid";
        password.style.borderColor = "red";
    }
});

username.onclick = function() {
    username.style.border = "0";
};

password.onclick = function() {
    password.style.border = "0";
};