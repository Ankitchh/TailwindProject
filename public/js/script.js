document.getElementById('hamburger').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('bg-slate-500');
    } else {
        menu.classList.add('hidden');
    }
});


document.getElementById("booking").addEventListener("submit", function (event) {
    event.preventDefault() // Prevent form submission

    let names = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let guests = document.getElementById("guests").value;
    

    let isValid = true;
    let today = new Date(); // Today's date
    let futureLimit = new Date();
    futureLimit.setMonth(futureLimit.getMonth() + 2); // Date limit: 2 months from now




// name validation
    if (names === "") {
        document.getElementById("nameError").innerHTML = "Cannot be Empty";
        isValid = false;
    }
    else if(names.length<=2){
        document.getElementById("nameError").innerHTML = "Use more then 3 alpahbets ";
        isValid = false;
    }
    else if(/\d/.test(names)){
        document.getElementById("nameError").innerHTML = "Number not allowed in name";
        isValid = false;
    }
    else {
        document.getElementById("nameError").innerHTML = "";
    }


    //email validation

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Cannot be empty";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerHTML = "Enter a valid email address";
        isValid = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    // phone number validation
    const phoneRegex = /^\d{10}$/;
    if(phone === ""){
        document.getElementById("phoneError").innerHTML = "Cannot be empty";
        isValid = false;
    }
    else if(!phoneRegex.test(phone)){
        document.getElementById("phoneError").innerHTML = "invalid input";
        isValid = false;
    }
    else if(/[^0-9]/.test(phone)){
        document.getElementById("phoneError").innerHTML = "invalid input";
        isValid = false;
    }
    else{
        document.getElementById("phoneError").innerHTML = ""
    }

    // date validation

    let dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (date === "") {
        document.getElementById("dateError").innerHTML = "Date cannot be empty";
        isValid = false;
    } else if (!dateRegex.test(date)) {
        document.getElementById("dateError").innerHTML = "Enter a valid date in YYYY-MM-DD format";
        isValid = false;
    } else {
        
        // Validate using Date object
        let enteredDate = new Date(date);
        
        if (enteredDate < today) {
            document.getElementById("dateError").innerHTML = "Date must be today or in the future";
            isValid = false;
        } else if (enteredDate > futureLimit) {
            document.getElementById("dateError").innerHTML = "Date cannot be more than 2 months in the future";
            isValid = false;
        } else {
            document.getElementById("dateError").innerHTML = "";
        }
    }

    if(isValid){
        this.submit();
    }
    });
    // Add more validation checks for email, phone, date
