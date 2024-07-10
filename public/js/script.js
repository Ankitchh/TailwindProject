
document.getElementById("booking").addEventListener("submit", function (event) {
    event.preventDefault() // Prevent form submission

    let names = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let guests = document.getElementById("guests").value;

    let isValid = true;

    if (names === "") {
        document.getElementById("nameError").innerHTML = "Name Cannot be Empty";
        isValid = false;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }

    if(isValid){
        this.submit();
    }
    });
    // Add more validation checks for email, phone, date
