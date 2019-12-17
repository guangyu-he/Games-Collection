var cardmoney;

function load() {
    newstr = localStorage.getItem("newstr");
    if (newstr == null) {
        newstr = "";
    } else {
        news = JSON.parse(newstr);
        savenews();
    }
    catstr = localStorage.getItem("catstr");

    if (catstr == null || catstr == "") {

    } else {
        cat = JSON.parse(catstr);

        cat.pstate1 = parseInt(cat.pstate1);
        cat.pstate2 = parseInt(cat.pstate2);
        cat.pstate3 = parseInt(cat.pstate3);
        cat.pstate4 = parseInt(cat.pstate4);
        cat.pstate5 = parseInt(cat.pstate5);
        cat.pday = parseInt(cat.pday);

        cat.day = parseInt(cat.day);
        cat.money = parseInt(cat.money);
        cat.food = parseInt(cat.food);

        cardmoney = localStorage.getItem("cardmoney");

        if ((cardmoney == "" || cardmoney == null) && cat.money == "") {
            cardmoney = 0;
        } else if ((cardmoney == "" || cardmoney == null) && cat.money != "") {

        } else {
            cat.money = parseInt(cardmoney);
        }
        //save();
    }
}

function save() {
    catstr = JSON.stringify(cat);
    localStorage.setItem("catstr", catstr);

    cardmoney = cat.money;
    localStorage.setItem("cardmoney", cardmoney);

    newstext("已储存");
    savenews();
}

function savenews() {
    newstr = JSON.stringify(news);
    localStorage.setItem("newstr", newstr);
}