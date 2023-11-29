function submitUsername() {
    var username = document.getElementById('username').value;

    if (username.trim() === "") {
        alert("Please enter a username.");
    } else {
        document.getElementById('usernameList').innerHTML += "<li>" + username + "</li>";
    }
}

function submitPassword() {
    var password = document.getElementById('password').value;

    if (password.trim() === "") {
        alert("Please enter a password.");
    } else {
        document.getElementById('passwordList').innerHTML += "<li>" + password + "</li>";
    }
}

function submitAuthCode() {
    var authcode = document.getElementById('authCode').value;

    if (authcode.trim() === "") {
        alert("Please enter an authentication code.");
    } else {
        document.getElementById('authCodeList').innerHTML += "<li>" + authcode + "</li>";
    }
}