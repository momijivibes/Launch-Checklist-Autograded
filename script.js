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

    // Get the form element by its ID
    let form = document.getElementById('launchForm');
    
    // Add event listener to the form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const pilotName = document.querySelector("input[name=pilotName]").value;
        const copilotName = document.querySelector("input[name=copilotName]").value;
        const fuelLevel = Number(document.querySelector("input[name=fuelLevel]").value);
        const cargoMass = Number(document.querySelector("input[name=cargoMass]").value);
        const faultyItems = document.getElementById('faultyItems');

        // Call the formSubmission function with the form information
        formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass);
    });
    
});

