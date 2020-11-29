function buyUpgrade1() {
    if (game.parti >= 0.25) {
    if (game.upgrade1Bought != 0) return;
    // if (game.upgrade1Bought = 0) {
    game.parti -= 0.25;
    game.u1mult = 2;
    // game.partiPerClick *= 2;
    document.getElementById("buttonupgrade1").style.backgroundColor = "lightgrey"
    updatePartiPerClick();
    checkAchs(16);
    document.getElementById("partiCount").innerHTML = "You have " + format(game.parti) + " Particles.";
    document.getElementById("displayPartiPerClick").innerHTML = "You gain " + format(game.partiPerClick) + " Particles per click."
    game.upgrade1Bought = 1;
    // }
    }
}


function buyUpgrade2() {
   if (game.parti >= 1.5) {
    if (game.upgrade2Bought != 0) return;
       game.parti -= 1.5;
       game.u2mult = Math.sqrt(game.clicks * 2) / 5;
       document.getElementById("buttonupgrade2").style.backgroundColor = "lightgrey"
       updatePartiPerClick();
       if (game.u2mult > game.caps.firstRow) {
          game.u2mult = game.caps.firstRow;
       } else if (game.u2mult < 1) {
           game.u2mult = 1;
       }
       game.upgrade2Bought = 1;
       checkAchs(16);
       document.getElementById("partiCount").innerHTML = "You have " + format(game.parti) + " Particles.";
       document.getElementById("displayPartiPerClick").innerHTML = "You gain " + format(game.partiPerClick) + " Particles per click."
   }
}

function buyUpgrade3() {
    if (game.parti >= 4) {
        if (game.upgrade3Bought != 0) return;
        game.parti -= 4;
        game.u3mult = Math.log10(game.parti) + 2;
        document.getElementById("buttonupgrade3").style.backgroundColor = "lightgrey"
        updatePartiPerClick();
        if (game.u3mult > game.caps.firstRow) {
            game.u3mult = game.caps.firstRow;
        } else if (game.u3mult < 1) {
            game.u3mult = 1;
        }
        game.upgrade3Bought = 1;
        checkAchs(16);
        document.getElementById("partiCount").innerHTML = "You have " + format(game.parti) + " Particles.";
        document.getElementById("displayPartiPerClick").innerHTML = "You gain " + format(game.partiPerClick) + " Particles per click."
    }
}

function buyUpgrade4() {
    if (game.parti >= 15) {
        if (game.upgrade4Bought != 0) return;
        game.parti -= 15;
       // game.gen1.productionMult *= 2;
        game.u4mult = 2;
        document.getElementById("buttonupgrade4").style.backgroundColor = "lightgrey"
        updatePartiPerSecond();
        checkAchs(16);
        game.upgrade4Bought = 1;
    }
}

function buyUpgrade5() {
    if (game.parti >= 30) {
        if (game.upgrade5Bought != 0) return;
        game.parti -= 30;
        game.u5mult = Math.sqrt(game.gen1.bought * 2);
        if (game.u5mult > game.caps.firstRow) {
            game.u5mult = game.caps.firstRow;
        } else if (game.u5mult < 1) {
            game.u5mult = 1;
        }
        checkAchs(16);
        document.getElementById("buttonupgrade5").style.backgroundColor = "lightgrey"
        updatePartiPerSecond();
        game.upgrade5Bought = 1;
    }
}

function buyUpgrade6() {
    if (game.parti >= 80) {
        if (game.upgrade6Bought != 0) return;
        game.parti -= 80;
        game.u6mult = 2;
        checkAchs(16);
        document.getElementById("buttonupgrade6").style.backgroundColor = "lightgrey"
        updatePowerPerSecond();
        game.upgrade6Bought = 1;
    }
}

function buyUpgrade7() {
    if (game.parti >= 150) {
        if (game.upgrade7Bought != 0) return;
        game.parti -= 150;
        game.u7mult = Math.log10(Math.pow(game.power, 4));
        if (game.u7mult > game.caps.secondRow) {
            game.u7mult = game.caps.secondRow;
        } else if (game.u7mult < 1) {
            game.u7mult = 1;
        }
        checkAchs(16);
        document.getElementById("buttonupgrade7").style.backgroundColor = "lightgrey"
        updatePartiPerClick();
        game.upgrade7Bought = 1;
    }

}

function buyUpgrade8() {
    if (game.parti >= 400) {
        if (game.upgrade8Bought != 0) return;
        game.parti -= 400;
        game.u8mult = Math.log10(Math.pow(game.power, 4));
        if (game.u8mult > game.caps.secondRow) {
            game.u8mult = game.caps.secondRow;
        } else if (game.u8mult < 1) {
            game.u8mult = 1;
        }
        checkAchs(16);
        document.getElementById("buttonupgrade8").style.backgroundColor = "lightgrey"
        updatePartiPerSecond();
        game.upgrade8Bought = 1;
    }
}

function buyUpgrade9() {
    if (game.parti >= 1000) {
        if (game.upgrade9Bought != 0) return;
        game.parti -= 1000;
        game.u2mult = Math.sqrt(Math.pow(game.clicks, 2));
        if (game.u2mult > game.caps.firstRow) {
            game.u2mult = game.caps.firstRow;
         } else if (game.u2mult < 1) {
             game.u2mult = 1;
         }
         checkAchs(16);
         updatePartiPerClick();
        document.getElementById("buttonupgrade9").style.backgroundColor = "lightgrey"
        game.upgrade9Bought = 1;
    }
}

function buyUpgrade10() {
    if (game.parti >= 4000) {
        if (game.upgrade10Bought != 0) return;
        game.parti -= 4000;
        if (game.u3mult > game.caps.firstRow) {
            game.u3mult = game.caps.firstRow;
        } else if (game.u3mult < 1) {
            game.u3mult = 1;
        }
        checkAchs(16);
        updatePartiPerClick();
        document.getElementById("buttonupgrade10").style.backgroundColor = "lightgrey"
        game.upgrade10Bought = 1;
    }
}

function buyUpgrade11() {
    if (game.currentChallenge == 1) return;
    if (game.parti >= 8000) {
       if (game.upgrade11Bought != 0) return;
       game.parti -= 8000;
       if (game.caps.firstRow < 150) game.caps.firstRow = 150;
       checkAchs(16);
       document.getElementById("buttonupgrade11").style.backgroundColor = "lightgrey"
       updatePartiPerClick();
       updatePartiPerSecond();
       game.upgrade11Bought = 1;
    }
}

function buyUpgrade12() {
    if (game.currentChallenge == 1) return;
    if (game.parti >= 15000) {
        if (game.upgrade12Bought != 0) return;
        game.parti -= 15000;
        if (game.powergen1.bought % 5 == 0) {
            game.powergen1.productionMult = Math.pow(2, game.powergen1.bought / 5);
        }
        updatePowerPerSecond();
        checkAchs(16);
        document.getElementById("buttonupgrade12").style.backgroundColor = "lightgrey"
        game.upgrade12Bought = 1;
    }
}

function buyUpgrade13() {
    if (game.currentChallenge == 1) return;
    if (game.parti >= 80000) {
        if (game.upgrade13Bought != 0) return;
        game.parti -= 80000;
        game.u7mult = Math.sqrt(Math.pow(game.power, 4));
        if (game.u7mult > game.caps.secondRow) {
            game.u7mult = game.caps.secondRow;
        } else if (game.u7mult < 1) {
            game.u7mult = 1;
        }
        updatePartiPerClick();
        checkAchs(16);
        document.getElementById("buttonupgrade13").style.backgroundColor = "lightgrey"
        game.upgrade13Bought = 1;
    }
}

function buyUpgrade14() {
    if (game.currentChallenge == 1) return;
    if (game.parti >= 200000) {
        if (game.upgrade14Bought != 0) return;
        game.parti -= 200000;
        game.u8mult = Math.sqrt(Math.pow(game.power, 4));
        if (game.u8mult > game.caps.secondRow) {
            game.u8mult = game.caps.secondRow;
        } else if (game.u8mult < 1) {
            game.u8mult = 1;
        }
        updatePartiPerSecond();
        checkAchs(16);
        document.getElementById("buttonupgrade14").style.backgroundColor = "lightgrey"
        game.upgrade14Bought = 1;
    }
}

function buyUpgrade15() {
    if (game.currentChallenge == 1) return;
    if (game.parti >= 1e6) {
        if (game.upgrade15Bought != 0) return;
        document.getElementById("buttonupgrade15").style.backgroundColor = "lightgrey"
        game.parti -= 1e6;
        game.u15mult = Math.cbrt(Math.pow(game.gen1.bought, 2));
        if (game.u15mult < 1) {
            game.u15mult = 1;
        }
        game.upgrade15Bought = 1;
        checkAchs(16);
    }
}

function buyUpgrade16() {
    if (game.currentChallenge == 1) return;
    if (game.parti >= 1e7) {
        if (game.upgrade16Bought != 0) return;
        game.parti -= 1e7;
        checkAchs(16);
        document.getElementById("buttonupgrade16").style.backgroundColor = "lightgrey"
        game.upgrade16Bought = 1;
    }
}

function buyUpgrade17() {
    if (game.currentChallenge == 1) return;
    if (game.parti >= 3e8) {
        if (game.upgrade17Bought != 0) return;
        game.parti -= 3e8;
        game.caps.secondRow = 250;
        checkAchs(16);
        document.getElementById("buttonupgrade17").style.backgroundColor = "lightgrey"
        game.upgrade17Bought = 1;
    }
}

function buyUpgrade18() {
    if (game.currentChallenge == 1) return;
    if (game.parti >= 5e9) {
        if (game.upgrade18Bought != 0) return;
        game.parti -= 5e9;
        game.u1mult = 500;
        game.u4mult = 10;
        game.u6mult = 10;
        checkAchs(16);
        document.getElementById("buttonupgrade18").style.backgroundColor = "lightgrey";
        game.upgrade18Bought = 1;
    }
}

function buyUpgrade19() {
    if (game.currentChallenge == 1) return;
    if (game.parti >= 1e13) {
        if (game.upgrade19Bought != 0) return;
        game.parti -= 1e13;
        checkAchs(16);
        game.powerMult = Math.pow((Math.log10(game.power) * Math.sqrt(game.power)), game.emp.upg21.mult);
        document.getElementById("buttonupgrade19").style.backgroundColor = "lightgrey";
        game.upgrade19Bought = 1;
    }
}

function buyUpgrade20() {
    if (game.currentChallenge == 1) return;
    if (game.parti >= 1e15) {
        if (game.upgrade20Bought != 0) return;
        game.parti -= 1e15;
        game.caps.powerMult = 1e10;
        checkAchs(16);
        document.getElementById("buttonupgrade20").style.backgroundColor = "lightgrey";
        game.upgrade20Bought = 1;
    }
}

function buyRepUpgrade11() {
    if (game.parti >= game.rep.upg11.cost) {
        game.parti -= game.rep.upg11.cost;
        game.rep.upg11.mult *= 2;
        game.rep.upg11.cost *= game.rep.upg11.costMult;
        game.rep.upg11.bought++;
        document.getElementById("rep11").innerHTML = "Multiplies all Particle gain by 2. Currently: " + format(game.rep.upg11.mult) + "x Cost: " + format(game.rep.upg11.cost) + " Particles";
    }
}