const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let input = document.getElementById("number-input")
let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")
let toggle = document.getElementById("toggle-check")

function copyWhenClickOnPassword(passwordElement, passwordName) {
    if (passwordElement.textContent === "") {
        alert("Please generate a password first.")
        return
    } else {
        navigator.clipboard.writeText(passwordElement.textContent).then(() => {
            alert(`${passwordName} copied to clipboard`);
        })
    }
}

function getRandomPassword() {
    let firstRandomPassword = characters[Math.floor(Math.random() * characters.length)]
    let secondRandomPassword = characters[Math.floor(Math.random() * characters.length)]
        
    firstPassword.textContent += firstRandomPassword
    secondPassword.textContent += secondRandomPassword
}

function onToggleGetRandomPassword() {
    let firstRandomPasswordToggleOn = characters[Math.floor(Math.random() * characters.length / 2 + 6)]
    let secondRandomPasswordToggleOn = characters[Math.floor(Math.random() * characters.length / 2 + 6)]

    firstPassword.textContent += firstRandomPasswordToggleOn
    secondPassword.textContent += secondRandomPasswordToggleOn
}

function randomPasswordLenghtAndCheckToggle() {
    if (input.value === "" || input.value < "0" || input.value >= "0" && input.value <= "4") {
        alert("Please enter a number greater than 4")
    } else if (input.value > 15) {
        alert("Please enter a number less than 16")
    } else {
        for ( let i = 0; i < input.value; i++ ) {
            if (toggle.checked === true) {
                onToggleGetRandomPassword()
            } else {
                getRandomPassword()
            }
        }
    }
}

function generateRandomPassword() {
    firstPassword.textContent = ""
    secondPassword.textContent = ""
    randomPasswordLenghtAndCheckToggle()
}