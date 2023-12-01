// Oppgave 1
let planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
  "Eris",
];
//console.log(planets)

//fjerne siste element med .pop
planets.pop();

//legg til nytt element med .push
planets.push("Sedna");

//bonus metode for å ta ut element 3 og 7
planets.splice(2, 1);

planets.splice(5, 1);

console.log(planets);

// Oppgave 1.1
let text = `dette er index 5: `;
console.log(text + planets[5]);
//console.log(planets[5])


// Oppgave 2
const person = [
  {
    name: "Emil",
    age: 23,
    country: "Germany",
    hobbies: ["Physics", "Warhammer", "Dnd", "Magic: The Gathering"],
  },
  {
    name: "Tobias",
    age: 20,
    country: "Norway",
    hobbies: ["Poetry", "Gaming", "Arts and carpentry", "Steelworks"],
  },
];

const Teddy = person[0];
const Tobi = person[1];

console.log(person);

console.log(Teddy);

console.log(Tobi);


// Oppgave 3 
//asks for password, its not safe but my skills are just not there yet xD
let testing = true;
let password = "";
while(testing) {
    password = prompt("Choose a password! Needs to contain between 8-20 characters!");
    //console.log(password);

    if (password.length < 8) {
        window.alert("Password too short. Needs to contain between 8-20 characters!");
    } else if (password.length > 20) {
        window.alert("Password too long. Needs to contain between 8-20 characters!");
    } else {
        testing = false
        window.alert("Password successfully set!");
    }
}
console.log(password);


// Oppgave 4
// upgrading password program from above c:

function containsNumbers(str) {
    //i used the test() method on my input(str) with the RegEx to check for the numbers 0-9
    //returns true if it contains numbers otherwise false
    return /[0-9]/.test(str)
}

function checkValid(input) {
    if (!containsNumbers(input)) {
        window.alert("Password needs to contain a number!");
        return false
    } else if (input.length < 8) {
        window.alert("Password too short. Needs to contain a number and between 8-20 characters!");
        return false
    } else if (input.length > 20) {
        window.alert("Password too long. Needs to contain a number and between 8-20 characters!");
        return false
    } else {
        window.alert("Password successfully set!");
        return true
    }
}

function createPassword() {
    let password = "";
    let valid = false;
    // test until valid is true
    while(!valid) {
        password = prompt("Choose a password! Needs to contain a number and between 8-20 characters!");
        valid = checkValid(password)
    }
    return password
}

let newPassword = createPassword()
console.log(newPassword);