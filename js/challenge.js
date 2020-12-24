// Challenges

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
            game.challGoal = 2e12;
            document.getElementById("startChall2").innerHTML = "Running"
        } else if (chall == 3) {
            game.currentChallenge = 3;
            game.challGoal = 1e23; 
            game.clickCap = 1;
            document.getElementById("startChall3").innerHTML = "Running"
        } else if (chall == 4) {
            game.currentChallenge = 4;
            game.challGoal = 1e13;
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