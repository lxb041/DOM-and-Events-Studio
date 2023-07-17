// Write your JavaScript code here.
// Remember to pay attention to page loading!

let rocketPosX = 0;
let rocketPosY = 0;

function handler() {
const takeOffButton = document.getElementById("takeoff");
takeOffButton.addEventListener("click", function() {
    const confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (confirmation) {
      flightStatus.innerHTML = "Shuttle in flight";
      shuttleBackground.style.backgroundColor = "blue";
      spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
    }
});

const landingButton = document.getElementById("landing");
landingButton.addEventListener('click', function() {
    alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green"
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;


});

const abortButton = document.getElementById("missionAbort");
abortButton.addEventListener("click", function() {
    const confirmation = window.confirm("Confirm that you want to abort the mission")
    if(confirmation) {
        flightStatus.innerHTML = 'Mission Aborted';
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0
    }
});

//ROCKET IMAGE 
const rocket = document.getElementById('rocket');

document.addEventListener("click", function(event) {
    if(event.target.id === 'left') {
        rocketPosX -= 10;
        rocket.style.marginLeft = rocketPosX + 'px'

    }
    if(event.target.id === 'right') {
        rocketPosY += 10
        rocket.style.marginLeft = rocketPosX + 'px'
        
    }
    if(event.target.id === 'up') {
        rocketPosY += 10
        rocket.style.marginBottom = rocketPosY + 'px'
        
    }
    if(event.target.id === 'down') {
        rocketPosX -= 10;
        rocket.style.marginBottom = rocketPosY + 'px'
        
    }
})

}

window.onload = handler; 