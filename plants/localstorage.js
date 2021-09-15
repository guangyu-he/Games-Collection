var localStorage = window.localStorage;
var cardmoney;

function local_load() {
    plstr = localStorage.getItem("plstr");

    if (plstr == null || plstr == "") {
        addmessage("本地无存档");
        return;
    } else {
        usrstr = localStorage.getItem("usrstr");
        usr = JSON.parse(usrstr);
        pl = JSON.parse(plstr);

        cardmoney = localStorage.getItem("cardmoney");

        if ((cardmoney == "" || cardmoney == null) && pl.money == "") {
            cardmoney = 0;
        } else if ((cardmoney == "" || cardmoney == null) && pl.money != "") {

        } else {
            usr.money = cardmoney;
        }
        addmessage("本地存档已加载");
        text_display();
    }

}

function local_save() {

    plstr = JSON.stringify(pl);
    usrstr = JSON.stringify(usr);
    localStorage.setItem("plstr", plstr);
    localStorage.setItem("usrstr", usrstr);
    cardmoney = usr.money;
    localStorage.setItem("cardmoney", cardmoney);

    addmessage("已储存(local)");
    text_display();
}