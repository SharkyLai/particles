// Challenges

function challReset() {
    game.parti = 0;
    game.partiPerClick = 0;
    game.challGoal = undefined;
    // Multipliers
    game.clicks = 0;
    game.u1mult = 1;
    game.u2mult = 1;
    game.u3mult = 1;
    game.u4mult = 1;
    game.u5mult = 1;
    game.u6mult = 1;
    game.u7mult = 1;
    game.u8mult = 1;
    game.u15mult = 1;
    if (game.achs.ach26 == 0) game.u20mult = 1
    if (game.achs.ach26 == 1) game.u20mult = 1e8
    // Bought Upgrades
    game.upgrade1Bought = 0;
    game.upgrade2Bought = 0;
    game.upgrade3Bought = 0;
    game.upgrade4Bought = 0;
    game.upgrade5Bought = 0;
    game.upgrade6Bought = 0;
    game.upgrade7Bought = 0;
    game.upgrade8Bought = 0;
    game.upgrade9Bought = 0;
    game.upgrade10Bought = 0;
    game.upgrade11Bought = 0;
    game.upgrade12Bought = 0;
    game.upgrade13Bought = 0;
    game.upgrade14Bought = 0;
    game.upgrade15Bought = 0;
    game.upgrade16Bought = 0;
    game.upgrade17Bought = 0;
    game.upgrade18Bought = 0;
    game.upgrade19Bought = 0;
    if (game.achs.ach26 == 0) game.upgrade20Bought = 0
    // game.power = 0;
    game.partiPerSecond = 0;
    game.powerPerSecond = 0;
    game.genSpeed = 1000;
    // Caps
    game.caps.firstRow = 10;
    game.caps.firstRow = 20;
    game.caps.powerMult = 100;
    // Gen 1
    game.gen1.cost = 10;
    game.gen1.costMult = 1.5;
    game.gen1.amount = 0;
    game.gen1.bought = 0;
    game.gen1.mult = 1;
    game.gen1.production = 0;
    game.gen1.productionMult = 1;
    // Gen 2
    game.gen2.cost = 1e4;
    game.gen2.costMult = 2.5;
    game.gen2.amount = 0;
    game.gen2.bought = 0;
    game.gen2.mult = 1;
    game.gen2.production = 0;
    game.gen2.productionMult = 1;
    // Gen 3
    game.gen3.cost = 1e12;
    game.gen3.costMult = 5;
    game.gen3.amount = 0;
    game.gen3.bought = 0;
    game.gen3.mult = 1;
    game.gen3.production = 0;
    game.gen3.productionMult = 1;
    // Power Gen 1
    game.powergen1.cost = 50;
    game.powergen1.costMult = 2;
    game.powergen1.amount = 0;
    game.powergen1.bought = 0;
    game.powergen1.mult = 1;
    game.powergen1.production = 0;
    game.powergen1.productionMult = 1;
    // Power Gen 2
    game.powergen2.cost = 1.5e3;
    game.powergen2.costMult = 5;
    game.powergen2.amount = 0;
    game.powergen2.bought = 0;
    game.powergen2.mult = 1;
    game.powergen2.production = 0;
    game.powergen2.productionMult = 1;
}

function startChallenge(chall) {
    if (game.currentChallenge == "none") {
        if (confirm("Are you sure you want to start this challenge? You will have to perform a challenge reset.")) {
            challReset();
            updateAll();
        } else {
            chall == 0;
            return;
        }
        if (chall == 1) {
            game.currentChallenge = 1;
            game.challGoal = 3e6;
            document.getElementById("startChall1").innerHTML = "Running"
        } else if (chall == 2) {
            game.currentChallenge = 2;
            game.challGoal = 1e13;
            document.getElementById("startChall2").innerHTML = "Running"
        } else if (chall == 3) {
            game.currentChallenge = 3;
            game.challGoal = 1e23; 
            game.clickCap = 10;
            document.getElementById("startChall3").innerHTML = "Running"
        } else if (chall == 4) {
            game.currentChallenge = 4;
            game.challGoal = 1e14;
            document.getElementById("startChall4").innerHTML = "Running"
        }
        challCheck = window.setInterval(function() {
            if (game.parti >= game.challGoal) {
                if (game.currentChallenge == 1) {
                    if (game.chall1Comp == 0) {
                        game.energy += 1;
                        checkAchs(15);
                    }
                    document.getElementById("startChall1").innerHTML = "Completed";
                    game.chall1Comp += 1;
                    leaveChallenge();
                } else if (game.currentChallenge == 2) {
                    if (game.chall2Comp == 0) {
                        game.energy += 1;
                        checkAchs(17);
                    }
                    document.getElementById("startChall2").innerHTML = "Completed";
                    game.chall2Comp += 1;
                    leaveChallenge();
                } else if (game.currentChallenge == 3) {
                    if (game.chall3Comp == 0) {
                        game.energy += 1;
                        checkAchs(24);
                    }
                    document.getElementById("startChall3").innerHTML = "Completed";
                    game.chall3Comp += 1;
                    leaveChallenge();
                } else if (game.currentChallenge == 4) {
                    if (game.chall4Comp == 0) {
                        game.energy += 1;
                    }
                    document.getElementById("startChall3").innerHTML = "Completed";
                    game.chall4Comp += 1;
                    leaveChallenge();
                } 
            }
        }, 100)
    }
}

function leaveChallenge() {
    if (game.currentChallenge == "none") return;
    game.currentChallenge = "none";
    challReset();
    updateAll();
}