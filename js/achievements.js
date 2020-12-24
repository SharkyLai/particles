function checkAchs(id) {
    // Ach 11
    if (id == 11) {
        if (game.achs.ach11 == 0) {
            if (game.clicks >= 1) {
                game.achs.ach11 = 1;
                document.getElementById('ach11').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 12) {
        if (game.achs.ach12 == 0) {
            if (game.gen1.amount >= 1) {
                game.achs.ach12 = 1;
                document.getElementById('ach12').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 13) {
        if (game.achs.ach13 == 0) {
            if (game.powergen1.amount >= 1) {
                game.achs.ach13 = 1;
                document.getElementById('ach13').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 14) {
        if (game.achs.ach14 == 0) {
            if (game.gen2.amount >= 1) {
                game.achs.ach14 = 1;
                document.getElementById('ach14').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 15) {
        if (game.achs.ach15 == 0) {
            if (game.chall1Comp >= 1) {
                game.achs.ach15 = 1;
                document.getElementById('ach15').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 16) {
        if (game.achs.ach16 == 0) {
            if (game.upgrade1Bought == 1 && game.upgrade2Bought == 1 && game.upgrade3Bought == 1 && game.upgrade4Bought == 1 && game.upgrade5Bought == 1 && game.upgrade6Bought == 1 && game.upgrade7Bought == 1 && game.upgrade8Bought == 1 && game.upgrade9Bought == 1 && game.upgrade10Bought == 1 && game.upgrade11Bought == 1 && game.upgrade12Bought == 1 && game.upgrade13Bought == 1 && game.upgrade14Bought == 1 && game.upgrade15Bought == 1 && game.upgrade16Bought == 1 && game.upgrade17Bought == 1 && game.upgrade18Bought == 1 && game.upgrade19Bought == 1 && game.upgrade20Bought == 1) {
                game.achs.ach16 = 1;
                document.getElementById('ach16').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 17) {
        if (game.achs.ach17 == 0) {
            if (game.chall2Comp >= 1) {
                game.achs.ach17 = 1;
                document.getElementById('ach17').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 18) {
        if (game.achs.ach18 == 0) {
            if (game.powergen2.amount >= 1) {
                game.achs.ach18 = 1;
                document.getElementById('ach18').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 21) {
        if (game.achs.ach21 == 0) {
            if (game.gen3.amount >= 1) {
                game.achs.ach21 = 1;
                document.getElementById('ach21').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 22) {
        if (game.achs.ach22 == 0) {
            if (game.emp.upg11.bought >= 1) {
                game.achs.ach22 = 1;
                document.getElementById('ach22').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 23) {
        if (game.achs.ach23 == 0) {
            if (game.powerMult >= 1e10) {
                game.achs.ach23 = 1;
                document.getElementById('ach23').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 24) {
        if (game.achs.ach24 == 0) {
            if (game.chall3Comp >= 1) {
                game.achs.ach24 = 1;
                document.getElementById('ach24').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 25) {
        if (game.achs.ach25 == 0) {
            if (game.emp.upg11.bought >= 1 && game.emp.upg21.bought >= 1 && game.emp.upg22.bought >= 1 && game.emp.upg31.bought >= 1) {
                game.achs.ach25 = 1;
                document.getElementById('ach25').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 26) {
        if (game.achs.ach26 == 0) {
            if (game.parti >= 1e25) {
                game.achs.ach26 = 1;
                document.getElementById('ach26').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 27) {
        if (game.achs.ach27 == 0) {
            if (game.positiveEnergy >= 1) {
                game.achs.ach27 = 1;
                document.getElementById('ach27').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 28) {
        if (game.achs.ach28 == 0) {
            if (game.positiveEnergy >= 56) {
                game.achs.ach28 = 1;
                document.getElementById('ach28').style.backgroundColor = 'green';
            }
        }
    }
}