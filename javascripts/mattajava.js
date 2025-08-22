function showWelcome() {
    alert("Welcome to JavaJuice!")
}
function goodMorning() {
    alert("Good Morning!")
}
function goodAfternoon() {
    alert("Good Afternoon!")
}
function goodNight() {
    alert("Good Night!")
}
function specialMessage() {
    alert("Tsura mo special!")
}

//User info

function getName(){
    let name = prompt("Enter your Name: ")
    if (name) {
        document.getElementById("displayName").innerText = "Hello " + name + ", kupal mo naman!";
    }
}
//calculation
function calculateAge() {
    let input = prompt("Enter Your Birthday: ");
    if (input) {
        let age;

        if(/^\d{4}$/.test(input)) {
            age = new Date().getFullYear() - parseInt(input);

        } else {
        let birthDate = new Date(input);
        if (!isNaN(birthDate)) {
            let today = new Date();
            age = today.getFullYear() - birthDate.getFullYear();


            if (
                today.getMonth() < birthDate.getMonth() ||
                (today.getMonth() == birthDate.getMonth() &&
            today.getDate() < birthDate.getDate())
            ) {
                age--;
            }
            }
        }
        if (age) {
            document.getElementById("getAge").innerText =
            "You are " + age + " years old." + " EW SO OLD";
        } else {
            document.getElementById(getAge).innerText =
            "Invalid input. Use YYYY or MM/DD/YYYY.";
        }
    }
}


function getProfile() {
    let fname = prompt ("First name: ");
    let lname = prompt ("Last name: ");
    let hobby = prompt ("Favorite Hobby: ");
    let food = prompt ("Favorite Food: ");
    document.getElementById("displayProfile").innerText =
    "Name: " + fname + " " + lname + " | Hobby: " + hobby + " | Food: " + food;
}


function askPermission() {
    let answer = confirm("May I change the bg-color?")
    if (answer) {
        document.body.style.backgroundColor = "pink";
    } else {
        alert("Ok, keep original color!")
    }
}

function changeText() {
    document.getElementById("text").innerText = "Text has been changed!";
}

function resetText() {
    document.getElementById("text").innerText = "Text has been reset";
}

function simpleCalc() {
    let a = parseInt(prompt("Enter First Number: "));
    let b = parseInt(prompt("Enter Second Number: "));
    if (!isNaN(a) && !isNaN(b)) {
        let result = a + b;
        document.getElementById("calcResult").innerText = a + " + " + b + " = " + result; 
    }
}