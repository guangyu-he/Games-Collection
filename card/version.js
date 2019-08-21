var localStorage = window.localStorage;

var cardmoney;

var cardstatus = {
    deckbalance: "",
    mode: "",
    wintimes: "",
    losetimes: "",
    decknum: ""
};

var cardstr;


function savecard() {
    cardstr = JSON.stringify(cardstatus);
    localStorage.setItem("cardstr", cardstr);
}

function version() {
    var version = "19.08.21-1700";
    document.getElementById("version").innerHTML = version;

    cardmoney = parseInt(localStorage.getItem("cardmoney"));

    if (cardmoney == null || cardmoney == "") {
        cardstatus.deckbalance = 0;
    } else {
        cardstatus.deckbalance = cardmoney;
        savecard();
    }

    cardstr = localStorage.getItem("cardstr");
    if (cardstr == null || cardstr == "") {
        mode = 0;
        wintimes = 0;
        losetimes = 0;
        decknum = 0;
    } else {
        cardstatus = JSON.parse(cardstr);
        mode = parseInt(cardstatus.mode);
        wintimes = parseInt(cardstatus.wintimes);
        losetimes = parseInt(cardstatus.losetimes);
        decknum = parseInt(cardstatus.decknum);
    }

    decksaved();

    if (mode == 1) {
        document.getElementById("gamemode").innerHTML = "现开模式";
    } else {
        document.getElementById("gamemode").innerHTML = "构筑模式";
    }

    document.getElementById("deckmoney").innerHTML = "金币数：" + cardstatus.deckbalance;

    if (wintimes == "2") {
        alert("现开赛BO3胜利，奖励1卡包");
        cardstatus.decknum++;
        deldeck();
        cardstatus.losetimes = 0;
        cardstatus.wintimes = 0;
        savecard();
    }
    if (losetimes == "2") {
        alert("现开赛BO3失败，奖励1卡包");
        cardstatus.decknum++;
        deldeck();
        cardstatus.losetimes = 0;
        cardstatus.wintimes = 0;
        savecard();
    }
}