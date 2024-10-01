function validationForm(){
    var username = document.forms["myForm"]["username"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var confirm_password = document.forms["myForm"]["confirm-password"].value;
    let length = password.length;

    if(username == ""){
        alert("Username Must be Filled");
        return false;
    } else if(email == ""){
        alert("Email must be Filled");
        return false;
    } else if (!validateemail()) {
        alert("Invalid Email");
        return false;
    } else if (length != 7 ){
        alert("Password must be 7 characters");
        return false;
    }else if(password == ""){
        alert("Password must be Filled");
        return false;
    } else if(confirm_password == ""){
        alert("Confirm Password must be Filled");
        return false;
    } else if (password != confirm_password) {
        alert("Password and Confirm Password do not match");
        return false;
    }else {
        alert("Your account has been registered");
    }
}

function validateemail(){
    var email = document.forms["myForm"]["email"].value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.match(mailformat))
        {
           return true;
        }
        else
        {
           return false;
        }
}