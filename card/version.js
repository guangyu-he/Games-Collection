var localStorage = window.localStorage;

var cardmoney;

var cardstr;
var cardstatus = {
    deckbalance: "",
    mode: "",
    wintimes: "",
    losetimes: "",
    decknum: "",
};

function savecard() {
    cardstr = JSON.stringify(cardstatus);
    localStorage.setItem("cardstr", cardstr);
}

function version() {
    document.getElementsByTagName('body')[0].style.zoom = 1;
    var version = "191217 - 1415";
    document.getElementById("version").innerHTML = version;

    cardstr = localStorage.getItem("cardstr");

    if (typeof(cardstr) == "object") {
        cardstatus.mode = 0;
        cardstatus.wintimes = 0;
        cardstatus.losetimes = 0;
        cardstatus.decknum = 0;
        savecard();
    } else {
        cardstatus = JSON.parse(cardstr);
        cardstatus.mode = parseInt(cardstatus.mode);
        cardstatus.wintimes = parseInt(cardstatus.wintimes);
        cardstatus.losetimes = parseInt(cardstatus.losetimes);
        cardstatus.decknum = parseInt(cardstatus.decknum);
    }

    cardmoney = parseInt(localStorage.getItem("cardmoney"));
    if (isNaN(cardmoney)) {
        cardstatus.deckbalance = 0;
        savecard();
    } else {
        cardstatus.deckbalance = cardmoney;
        savecard();
    }

    decksaved();

    if (cardstatus.mode == 1) {
        document.getElementById("gamemode").innerHTML = "现开模式";
    } else {
        document.getElementById("gamemode").innerHTML = "构筑模式";
    }

    document.getElementById("deckmoney").innerHTML = "金币数：" + cardstatus.deckbalance;

    if (cardstatus.wintimes == "2") {
        alert("现开赛BO3胜利，奖励1卡包");
        cardstatus.decknum++;
        deldeck();
        cardstatus.losetimes = 0;
        cardstatus.wintimes = 0;
        savecard();
    }
    if (cardstatus.losetimes == "2") {
        alert("现开赛BO3失败，奖励1卡包");
        cardstatus.decknum++;
        deldeck();
        cardstatus.losetimes = 0;
        cardstatus.wintimes = 0;
        savecard();
    }
}