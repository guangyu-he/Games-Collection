function limit() {
    if (cardstatus.mode == 0) {
        var r = confirm("切换游戏模式将删除原模式下套牌！")
        if (r == true) {
            deldeck();
        } else {
            return;
        }
    }
    cardstatus.mode = 1;
    savecard();
    limitdisplay();
    document.getElementById("deckmoney").innerHTML = "余额：" + cardstatus.deckbalance;
    document.getElementById("decknumber").innerHTML = "卡包数：" + cardstatus.decknum;
}

var deckopened = ["mana", "mana", "mana", "mana", "mana", "1|1|d", "1|1", "2|2", "3|3", "4|4", "-2-2", "-1-1"];
var deckopenning = [null, null, null];

function deckopen() {
    if (cardstatus.decknum == 0) {
        alert("无卡包，请购买");
    } else {
        if (cardtot[11] != 0) {
            alert("请删除原套牌后再添加");
            return;
        }
        for (var i = 0; i < 3; i++) {
            var ii = Math.floor((Math.random() * deckopened.length));
            deckopenning[i] = deckopened[ii];
            ii = i + 1;
            if (deckopenning[i] == "1|1|d") {
                document.getElementById("decklimitopen" + ii.toString()).src = "11dh.gif";
            } else if (deckopenning[i] == "1|1") {
                document.getElementById("decklimitopen" + ii.toString()).src = "11h.gif";
            } else if (deckopenning[i] == "2|2") {
                document.getElementById("decklimitopen" + ii.toString()).src = "22h.gif";
            } else if (deckopenning[i] == "3|3") {
                document.getElementById("decklimitopen" + ii.toString()).src = "33h.gif";
            } else if (deckopenning[i] == "4|4") {
                document.getElementById("decklimitopen" + ii.toString()).src = "44h.gif";
            } else if (deckopenning[i] == "-2-2") {
                document.getElementById("decklimitopen" + ii.toString()).src = "fuer.gif";
            } else if (deckopenning[i] == "-1-1") {
                document.getElementById("decklimitopen" + ii.toString()).src = "fuyi.gif";
            } else if (deckopenning[i] == "mana") {
                document.getElementById("decklimitopen" + ii.toString()).src = "mana.gif";
            } else {
                document.getElementById("decklimitopen" + i.toString()).src = "null.gif";
            }
        }
        cardstatus.decknum--;
        savecard();
        //document.getElementById("deckopendis").innerHTML = deckopenning;

        document.getElementById("deckmoney").innerHTML = "余额：" + cardstatus.deckbalance;
        document.getElementById("decknumber").innerHTML = "卡包数：" + cardstatus.decknum;
    }
}

function deckbuy() {
    if (cardstatus.deckbalance <= 0) {
        alert("余额为0");
        return;
    }
    cardstatus.deckbalance--;
    cardstatus.decknum++;
    savecard();
    document.getElementById("deckmoney").innerHTML = "余额：" + cardstatus.deckbalance;
    document.getElementById("decknumber").innerHTML = "卡包数：" + cardstatus.decknum;
}

function deckpay() {
    cardstatus.deckbalance++;
    savecard();
    document.getElementById("deckmoney").innerHTML = "余额：" + cardstatus.deckbalance;
    document.getElementById("decknumber").innerHTML = "卡包数：" + cardstatus.decknum;
}

function deckdefault() {
    cardstatus.deckbalance = 5;
    cardstatus.decknum = 0;
    savecard();
    document.getElementById("deckmoney").innerHTML = "余额：" + cardstatus.deckbalance;
    document.getElementById("decknumber").innerHTML = "卡包数：" + cardstatus.decknum;
}


function deckopen1() {
    if (deckopenning[0] == "mana") {
        decmana();
        deckopenning[0] = null;
    }
    if (deckopenning[0] == "1|1|d") {
        yiyid();
        deckopenning[0] = null;
    }
    if (deckopenning[0] == "1|1") {
        yiyi();
        deckopenning[0] = null;
    }
    if (deckopenning[0] == "2|2") {
        erer();
        deckopenning[0] = null;
    }
    if (deckopenning[0] == "3|3") {
        sansan();
        deckopenning[0] = null;
    }
    if (deckopenning[0] == "4|4") {
        sisi();
        deckopenning[0] = null;
    }
    if (deckopenning[0] == "-2-2") {
        jianer();
        deckopenning[0] = null;
    }
    if (deckopenning[0] == "-1-1") {
        jianyi();
        deckopenning[0] = null;
    }
    document.getElementById("decklimitopen1").src = "null.gif";
}

function deckopen2() {
    if (deckopenning[1] == "mana") {
        decmana();
        deckopenning[1] = null;
    }
    if (deckopenning[1] == "1|1|d") {
        yiyid();
        deckopenning[1] = null;
    }
    if (deckopenning[1] == "1|1") {
        yiyi();
        deckopenning[1] = null;
    }
    if (deckopenning[1] == "2|2") {
        erer();
        deckopenning[1] = null;
    }
    if (deckopenning[1] == "3|3") {
        sansan();
        deckopenning[1] = null;
    }
    if (deckopenning[1] == "4|4") {
        sisi();
        deckopenning[1] = null;
    }
    if (deckopenning[1] == "-2-2") {
        jianer();
        deckopenning[1] = null;
    }
    if (deckopenning[1] == "-1-1") {
        jianyi();
        deckopenning[1] = null;
    }
    document.getElementById("decklimitopen2").src = "null.gif";
}

function deckopen3() {
    if (deckopenning[2] == "mana") {
        decmana();
        deckopenning[2] = null;
    }
    if (deckopenning[2] == "1|1|d") {
        yiyid();
        deckopenning[2] = null;
    }
    if (deckopenning[2] == "1|1") {
        yiyi();
        deckopenning[2] = null;
    }
    if (deckopenning[2] == "2|2") {
        erer();
        deckopenning[2] = null;
    }
    if (deckopenning[2] == "3|3") {
        sansan();
        deckopenning[2] = null;
    }
    if (deckopenning[2] == "4|4") {
        sisi();
        deckopenning[2] = null;
    }
    if (deckopenning[2] == "-2-2") {
        jianer();
        deckopenning[2] = null;
    }
    if (deckopenning[2] == "-1-1") {
        jianyi();
        deckopenning[2] = null;
    }
    document.getElementById("decklimitopen3").src = "null.gif";
}

function limitsavingdis() {
    for (ii = 0; ii < 12; ii++) {
        i = ii + 1;
        if (cardtot[ii] == "1|1|d") {
            document.getElementById("limitsaving" + i.toString()).src = "11dh.gif";
        } else if (cardtot[ii] == "1|1") {
            document.getElementById("limitsaving" + i.toString()).src = "11h.gif";
        } else if (cardtot[ii] == "2|2") {
            document.getElementById("limitsaving" + i.toString()).src = "22h.gif";
        } else if (cardtot[ii] == "3|3") {
            document.getElementById("limitsaving" + i.toString()).src = "33h.gif";
        } else if (cardtot[ii] == "4|4") {
            document.getElementById("limitsaving" + i.toString()).src = "44h.gif";
        } else if (cardtot[ii] == "-2-2") {
            document.getElementById("limitsaving" + i.toString()).src = "fuer.gif";
        } else if (cardtot[ii] == "-1-1") {
            document.getElementById("limitsaving" + i.toString()).src = "fuyi.gif";
        } else if (cardtot[ii] == "mana") {
            document.getElementById("limitsaving" + i.toString()).src = "mana.gif";
        } else {
            document.getElementById("limitsaving" + i.toString()).src = "null.gif";
        }
    }
}