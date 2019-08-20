var localStorage = window.localStorage;
var card;

function version() {
    var version = "07.02.19.1350";
    document.getElementById("version").innerHTML = version;
    mode = getCookie("mode");
    decksaved();
    if (mode == 1) {
        document.getElementById("gamemode").innerHTML = "现开模式";
    } else {
        document.getElementById("gamemode").innerHTML = "构筑模式";
    }

    var catstr = localStorage.getItem("catstr");
    var cat;
    if (catstr == null || catstr == "") {} else {
        cat = JSON.parse(catstr);
        alert(cat.money);
    }
    setCookie("deckbalance", cat.money, 30);
    deckbalance = getCookie("deckbalance");
    document.getElementById("deckbalance").innerHTML = "金币数：" + deckbalance;

    wintimes = getCookie("wintimes");
    losetimes = getCookie("losetimes");
    if (wintimes == "2") {
        alert("现开赛BO3胜利，奖励1卡包");
        decknum++;
        setCookie("decknum", decknum, 30);
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
        losetimes = 0;
        wintimes = 0;
        setCookie("losetimes", losetimes, 30);
        setCookie("wintimes", wintimes, 30);
    }
    if (losetimes == "2") {
        alert("现开赛BO3失败，奖励1卡包");
        decknum++;
        setCookie("decknum", decknum, 30);
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
        losetimes = 0;
        wintimes = 0;
        setCookie("losetimes", losetimes, 30);
        setCookie("wintimes", wintimes, 30);
    }
}