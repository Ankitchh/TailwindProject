document.getElementById('hamburger').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('bg-slate-500');
    } else {
        menu.classList.add('hidden');
    }
});


//  validation of booking table form
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
        document.getElementById("dateError").innerHTML = "Cannot be empty";
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

        // Time validation
        if (time === "") {
            document.getElementById("timeError").innerHTML = "Cannot be empty";
            isValid = false;
        } else {
            let parts = date.split('-');
            let year = parseInt(parts[0], 10);
            let month = parseInt(parts[1], 10) - 1;
            let day = parseInt(parts[2], 10);
            let enteredDate = new Date(year, month, day);
    
            let enteredTime = time.split(':');
            let enteredHour = parseInt(enteredTime[0], 10);
            let enteredMinute = parseInt(enteredTime[1], 10);
    
            let openingTime, closingTime;
    
            // Set opening and closing times based on the day of the week
            if (enteredDate.getDay() >= 1 && enteredDate.getDay() <= 5) { // Monday to Friday
                openingTime = { hour: 8, minute: 0 };
                closingTime = { hour: 22, minute: 0 };
            } else { // Saturday and Sunday
                openingTime = { hour: 9, minute: 0 };
                closingTime = { hour: 23, minute: 0 };
            }
    
            // Check if the entered time is within the allowed range
            let enteredTotalMinutes = enteredHour * 60 + enteredMinute;
            let openingTotalMinutes = openingTime.hour * 60 + openingTime.minute;
            let closingTotalMinutes = closingTime.hour * 60 + closingTime.minute;
    
            if (enteredTotalMinutes < openingTotalMinutes || enteredTotalMinutes > closingTotalMinutes) {
                document.getElementById("timeError").innerHTML = "Enter a valid time within business hours";
                isValid = false;
            } else {
                document.getElementById("timeError").innerHTML = "";
            }
        }
            let noOfGuest=/^(?:[1-9]|1[0-5])$/;

        if (guests === ""){
            document.getElementById("guestError").innerHTML = "Cannot be empty";
            isValid = false;
        }
        else if(!noOfGuest.test(guests)){
            document.getElementById("guestError").innerHTML = "Maximum 15 is allowed";
            isValid = false;
        }

        else{
            document.getElementById("guestError").innerHTML = "";
        }

    if(isValid){
        this.submit();
    }

    

    


    });

    

   
