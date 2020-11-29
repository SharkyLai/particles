updateAll();

var gameLoop = window.setInterval(function() {
    generateParti();
    generatePower();
    generate1stGen();
    document.getElementById("powerCount").innerHTML = "You have " + format(game.power) + " Power, translated to a x" + format(game.powerMult) + " boost to clicking."
    document.getElementById("partiCount").innerHTML = "You have " + format(game.parti) + " Particles.";
}, game.genSpeed)
  
var updateLoop = window.setInterval(function() {
    updatePartiPerClick();
    updatePartiPerSecond();
    updatePowerPerSecond();
}, 100)

var updatePlayTimeLoop = window.setInterval(function() {
    game.playTime++;
}, 1000)