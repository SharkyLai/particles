var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("gameSave", JSON.stringify(game))
}, 15000)
  
var savegame = JSON.parse(localStorage.getItem("gameSave"))
if (savegame !== null) {
    game = savegame
} 