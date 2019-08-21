function load() {
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

        cardstr = localStorage.getItem("cardstr");
        alert(cardstr);

        if (cardstr == "" || cardstr == null) {
            cardstr = 0;
        } else {
            alert(cardstr + "!!!");
            cat.money = parseInt(cardstr);
        }
        save();
    }
}

function save() {
    catstr = JSON.stringify(cat);
    localStorage.setItem("catstr", catstr);

    cardstr = cat.money;
    localStorage.setItem("cardstr", cardstr);
}