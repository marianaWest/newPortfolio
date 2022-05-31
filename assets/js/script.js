let fields = {};

document.addEventListener("DOMContentLoaded", function() {
fields.userName = document.getElementById("userName");
fields.email = document.getElementById("email");
fields.userContact = document.getElementById("userName");
})

function isNotEmpty(value) {
    if (value == null || typeof value == "undefined") return false;

    return (value.length > 0);
}

function isEmail(email) {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return regex.test(String(email).toLowerCase());
       }

function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
        field.className = "placeholderRed";
    } else {
        field.className = "";
    }
    return isFieldValid;
    }

    function isValid() {
        let valid = true;
        valid &= fieldValidation(fields.userName, isNotEmpty);
        valid &= fieldValidation(fields.email, isNotEmpty);
        valid &= fieldValidation(fields.userContact, isNotEmpty);
        return valid;
    }

    class User {
        constructor(userName, email, userContact) {
            this.userName = userName;
            this.email = email; 
            this.userContact = userContact;
        }

    }

    function sendContact() {
        if (isValid()) {
            let usr = new User(userName.value, email.value, userContact.value);
            alert("Thank you!")
        } else {
            alert("There was an error")
        }
    }