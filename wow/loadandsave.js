//var cardmoney;

function load() {
    newstr = localStorage.getItem("newstr");
    if (newstr == null) {
        newstr = "";
    } else {
        news = JSON.parse(newstr);
        savenews();
    }
    wowstr = localStorage.getItem("wowstr");

    if (wowstr == null || wowstr == "") {

    } else {
        wow = JSON.parse(wowstr);
/* 
        cardmoney = localStorage.getItem("cardmoney");

        if ((cardmoney == "" || cardmoney == null) && cat.money == "") {
            cardmoney = 0;
        } else if ((cardmoney == "" || cardmoney == null) && cat.money != "") {

        } else {
            //cat.money = parseInt(cardmoney);
        } */
        //save();
    }
}

function save() {
    wowstr = JSON.stringify(wow);
    localStorage.setItem("wowstr", wowstr);

    //cardmoney = cat.money;
    //localStorage.setItem("cardmoney", cardmoney);

    //newstext("已储存");
    savenews();
}

function savenews() {
    newstr = JSON.stringify(news);
    localStorage.setItem("newstr", newstr);
}