var cardmoney;

function load() {

    //load news save
    newsssrstr = localStorage.getItem("newsssrstr");
    if (newsssrstr == null) {
        newsssrstr = "";
    } else {
        newsssr = JSON.parse(newsssrstr);
        savenews();
    }

    //load data save
    ssrstr = localStorage.getItem("ssrstr");
    cardmoney = localStorage.getItem("cardmoney");

    if (ssrstr == null && cardmoney == null) //vanilla player
    {
        cardmoney = 0;

        ssr.money = 0;
        ssr.counter = 0;
        ssr.promote = 0;

        ssr.rnum = 0;
        ssr.srnum = 0;
        ssr.ssrnum = 0;
    } else if (ssrstr == null && cardmoney != null) //player from card/cat
    {
        ssr.money = parseInt(cardmoney);
        ssr.counter = 0;
        ssr.promote = 0;

        ssr.rnum = 0;
        ssr.srnum = 0;
        ssr.ssrnum = 0;
    } else {
        ssr = JSON.parse(ssrstr);
        ssr.money = parseInt(cardmoney);
        ssr.counter = parseInt(ssr.counter);
        ssr.promote = parseInt(ssr.promote);

        ssr.rnum = parseInt(ssr.rnum);
        ssr.srnum = parseInt(ssr.srnum);
        ssr.ssrnum = parseInt(ssr.ssrnum);

    }

    //save();
}

function save() {
    ssrstr = JSON.stringify(ssr);
    localStorage.setItem("ssrstr", ssrstr);

    cardmoney = ssr.money;
    localStorage.setItem("cardmoney", cardmoney);

    newstext("已储存");
    savenews();
}

function savenews() {
    newsssrstr = JSON.stringify(newsssr);
    localStorage.setItem("newsssrstr", newsssrstr);
}