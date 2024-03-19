// Write your helper functions here! 5 functions! 

//require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">
    `             
}



function validateInput(testInput) {
    if (testInput === "") {
        return ("Empty");
    } else if (isNaN(testInput)) {
        return ("Not a Number");
    } else {
        return ("Is a Number");
    }
}


function formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoLevel) {


    if (fuelLevel < 10000);
   
    let cargoMass = document.getElementById('cargoMass')
    let fuelStatus = document.getElementById('fuelStatus')
    let launchStatus = document.getElementById('launchStatus')
    let pilotStatus = document.getElementById('pilotStatus')
    let copilotStatus = document.getElementById('copilotStatus')
    let launchStatus1 = document.getElementById('launchStatus')

    const validateFuel = validateInput(fuelLevel)
    const validateCargo = validateInput(cargoMass)

    if (pilot === '' || copilot === '' || fuelLevel === '' || cargoMass === '') {
        alert("Please submit a valid response")
    }

    if (validatedFuel === 'Not a Number' || validateCargo === 'Not a Number') {
        alert("Please submit a valid respone")
    }

    //creating an alert

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;



    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        launchStatus.innerHTML = 'Shuttle is Ready for Launch'
        launchStatus.style.color = 'green'
    }

    if (fuelLevel < 10000) {
        faultyItems.style.visibility = 'visibile'
        fuelStatus.innerHTML = 'Fuel level is too low for launch'
        launchStatus.innerHTML = 'Shuttle not ready for launch'
        launchStatyus.style.color = 'red'
    } else {
        fuelStatus.innerHTML = 'Fuel level high enough for launch'
    }

    if (cargoLevel >= 10000) {
        fuelStatus.innerHTML = 'Fuel level is too low for launch'
        launchStatus.innerHTML = 'Shuttle not ready for launch'
        launchStatyus.style.color = 'red'
    } else {
        fuelStatus.innerHTML = 'Cargo mass low enough for launch'
    }
}



async function myFetch() {

    let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
        return response.json()
    })
    return planetsReturned;

}


function pickPlanet(planets) {
    const randomNumber = Math.floor(Math.random() * planets.length);
    return planets[randomNumber];
}


// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet;
// module.exports.myFetch = myFetch;