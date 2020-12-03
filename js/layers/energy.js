function enUpg(id) {
    if (id == 11) {
        game.enUpgCost = 2;
        // game.enUpgMult.u11mult = 
    } else if (id == 12) {

    } else if (id == 13) {

    } else if (id == 14) {
        
    } else if (id == 15) {

    }
    if (game.energy >= game.enUpgCost) {
        game.energy -= game.enUpgCost;
    }
}