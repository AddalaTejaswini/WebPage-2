function validator() {
    var username = document.forms["login_form"]["uname"].value;
    var email = document.forms["login_form"]["email"].value;
    var password = document.forms["login_form"]["password"].value;
    var passwordvalidation = /^[A-za-z]\w{7,14}$/;
    var letters = /^[A-Za-z]+$/;

	if (username == "") {
        document.getElementById("error").innerHTML = "Give your name";
        document.login_form.uname.style.borderColor = "red";
        return false;
    } else if (!username.match(letters)){
        document.getElementById("error").innerHTML = "name should contain only Alphabets";
        document.login_form.uname.style.borderColor = "red";
        return false;
    }
	if (email == "") {
        document.login_form.email.style.borderColor = "";
        document.getElementById("error").innerHTML = "Give your mail id";
        document.login_form.email.style.borderColor = "red";
        return false;
    }

    if (password == "") {
        document.login_form.password.style.borderColor = "";
        document.getElementById("error").innerHTML = "Give your password";
        document.login_form.password.style.borderColor = "red";
        return false;
    }
    if (!password.match(passwordvalidation)) {
        document.getElementById("error").innerHTML = "Password should be more than 7 and should not exceed 14 ";
        document.login_form.password.style.borderColor = "red";
        return false;
    } 
 if (!document.getElementById('male').checked && !document.getElementById('female').checked) {
        document.myForm.year.style.borderColor = "";
        document.getElementById("error").innerHTML = "Give your gender";
     }
	else {
	return true;
	}
	return false;
	}

