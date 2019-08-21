function deckstart() {
    displaydeck();
}

function deck() {
    if (mode == 1) {
        var r = confirm("切换游戏模式将删除原模式下套牌！")
        if (r == true) {
            deldeck();
        } else {

        }
    }

    mode = 0;
    setCookie("mode", mode, 30);
    builddisplay();
}

function deckback() {
    maindisplay();

}


var decc = 0; //如果等于1不用从cookie读取
function decksure() {
    maindisplay();

    decksaving();
    decc = 1;
}

function deckdel() {
    if (mode == 1) {
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
    if (mode == 1) {
        limitsavingdis();
    } else {
        decksavingdis();
    }
    //document.getElementById("deckdis").innerHTML = cardtot;
}

function decksaved() {
    cardtot[0] = getCookie("cardtot0");
    cardtot[1] = getCookie("cardtot1");
    cardtot[2] = getCookie("cardtot2");
    cardtot[3] = getCookie("cardtot3");
    cardtot[4] = getCookie("cardtot4");
    cardtot[5] = getCookie("cardtot5");
    cardtot[6] = getCookie("cardtot6");
    cardtot[7] = getCookie("cardtot7");
    cardtot[8] = getCookie("cardtot8");
    cardtot[9] = getCookie("cardtot9");
    cardtot[10] = getCookie("cardtot10");
    cardtot[11] = getCookie("cardtot11");
    document.getElementById("deckdis").innerHTML = cardtot;
}

function decksaving() {
    setCookie("cardtot0", cardtot[0], 30);
    setCookie("cardtot1", cardtot[1], 30);
    setCookie("cardtot2", cardtot[2], 30);
    setCookie("cardtot3", cardtot[3], 30);
    setCookie("cardtot4", cardtot[4], 30);
    setCookie("cardtot5", cardtot[5], 30);
    setCookie("cardtot6", cardtot[6], 30);
    setCookie("cardtot7", cardtot[7], 30);
    setCookie("cardtot8", cardtot[8], 30);
    setCookie("cardtot9", cardtot[9], 30);
    setCookie("cardtot10", cardtot[10], 30);
    setCookie("cardtot11", cardtot[11], 30);
}

function deldeck() {
    delCookie("cardtot0");
    delCookie("cardtot1");
    delCookie("cardtot2");
    delCookie("cardtot3");
    delCookie("cardtot4");
    delCookie("cardtot5");
    delCookie("cardtot6");
    delCookie("cardtot7");
    delCookie("cardtot8");
    delCookie("cardtot9");
    delCookie("cardtot10");
    delCookie("cardtot11");
    cardtot = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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