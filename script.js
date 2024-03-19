

window.addEventListener("load", function () {

    let listedPlanets;

    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
        let randomPlanet = pickPlanet(listedPlanets);
        console.log(randomPlanet);
        addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
    });


    document.addEventListener("submit", function (event) {
        event.preventDefault();
        let faultyItems = document.querySelector('#faultyItems');
        let pilotName = document.querySelector('input[name=pilot]').value;
        let coPilotName = document.querySelector('input[name=copilot]').value;
        let fuelLevel = Number(document.querySelector('input[name=fuelLevel]').value);
        let cargoMass = Number(document.querySelector('input[name=cargoMass]').value);

        formSubmission(document, faultyItems, pilotName, coPilotName, fuelLevel, cargoMass);
    });

});
