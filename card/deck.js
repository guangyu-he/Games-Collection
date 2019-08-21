function deckstart() {
    displaydeck();
}

function deck() {
    if (cardstatus.mode == 1) {
        var r = confirm("切换游戏模式将删除原模式下套牌！")
        if (r == true) {
            deldeck();
        } else {
            return;
        }
    }

    cardstatus.mode = 0;
    savecard();
    builddisplay();
}

function deckback() {
    location.reload();
}


var decc = 0; //如果等于1不用从cookie读取
function decksure() {
    decksaving();
    decc = 1;
    location.reload();
}

function deckdel() {
    if (cardstatus.mode == 1) {
        var r = confirm("确定删除现开模式套牌？")
        if (r == true) {
            deldeck();
        } else {

        }
    } else {
        deldeck();
    }
}

var cardtot = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function defaultdeck() {
    cardtot = ["mana", "mana", "mana", "mana", "mana", "1|1|d", "1|1", "2|2", "3|3", "4|4", "-2-2", "-1-1"];

    deckdisplay();
}

function yiyid() {
    for (var dec = 0; dec <= 11; dec++) {
        if (cardtot[dec] == 0) {
            cardtot[dec] = "1|1|d";
            break;
        }
    }
    deckdisplay();
}

function yiyi() {
    for (var dec = 0; dec <= 11; dec++) {
        if (cardtot[dec] == 0) {
            cardtot[dec] = "1|1";
            break;
        }
    }
    deckdisplay();
}

function erer() {
    for (var dec = 0; dec <= 11; dec++) {
        if (cardtot[dec] == 0) {
            cardtot[dec] = "2|2";
            break;
        }
    }
    deckdisplay();
}

function sansan() {
    for (var dec = 0; dec <= 11; dec++) {
        if (cardtot[dec] == 0) {
            cardtot[dec] = "3|3";
            break;
        }
    }
    deckdisplay();
}

function sisi() {
    for (var dec = 0; dec <= 11; dec++) {
        if (cardtot[dec] == 0) {
            cardtot[dec] = "4|4";
            break;
        }
    }
    deckdisplay();
}

function jianer() {
    for (var dec = 0; dec <= 11; dec++) {
        if (cardtot[dec] == 0) {
            cardtot[dec] = "-2-2";
            break;
        }
    }
    deckdisplay();
}

function jianyi() {
    for (var dec = 0; dec <= 11; dec++) {
        if (cardtot[dec] == 0) {
            cardtot[dec] = "-1-1";
            break;
        }
    }
    deckdisplay();
}

function decmana() {
    for (var dec = 0; dec <= 11; dec++) {
        if (cardtot[dec] == 0) {
            cardtot[dec] = "mana";
            break;
        }
    }
    deckdisplay();
}

function deckdisplay() {
    if (cardstatus.mode == 1) {
        limitsavingdis();
    } else {
        decksavingdis();
    }
    //document.getElementById("deckdis").innerHTML = cardtot;
}

function decksaved() {
    cardtot = localStorage.getItem("cardtot");
    if (cardtot == "" || cardtot == null) {
        cardtot = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else {
        cardtot = cardtot.split(",");
    }
    document.getElementById("deckdis").innerHTML = cardtot;
}

function decksaving() {
    localStorage.setItem("cardtot", cardtot);
}

function deldeck() {
    cardtot = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    localStorage.setItem("cardtot", cardtot);
    deckdisplay();
}

function decksavingdis() {

    document.getElementById("decksaving1").innerHTML = cardtot[0];
    document.getElementById("decksaving2").innerHTML = cardtot[1];
    document.getElementById("decksaving3").innerHTML = cardtot[2];
    document.getElementById("decksaving4").innerHTML = cardtot[3];
    document.getElementById("decksaving5").innerHTML = cardtot[4];
    document.getElementById("decksaving6").innerHTML = cardtot[5];
    document.getElementById("decksaving7").innerHTML = cardtot[6];
    document.getElementById("decksaving8").innerHTML = cardtot[7];
    document.getElementById("decksaving9").innerHTML = cardtot[8];
    document.getElementById("decksaving10").innerHTML = cardtot[9];
    document.getElementById("decksaving11").innerHTML = cardtot[10];
    document.getElementById("decksaving12").innerHTML = cardtot[11];
}