var cardmoney;

function load() {

    //load news save
    newsbattlestr = localStorage.getItem("newsbattlestr");
    if (newsbattlestr == null) {
        newsbattlestr = "";
        newsbattle.newstext = "";
    } else {
        newsbattle = JSON.parse(newsbattlestr);
        savenews();
    }

    //load data save
    battlestr = localStorage.getItem("battlestr");
    cardmoney = localStorage.getItem("cardmoney");

    if (battlestr == null && cardmoney == null) //vanilla player
    {
        cardmoney = 0;

        battle.money = 0;
        newvalue();

    } else if (battlestr == null && cardmoney != null) //player from card/cat
    {
        battle.money = parseInt(cardmoney);
        newvalue();

    } else {
        battle = JSON.parse(battlestr);
        battle.money = parseInt(cardmoney);
        readvalue();

    }

    bossstatusdisplay();
    //save();
}

function newvalue() {
    battle.cha1name = "1";
    battle.cha2name = "2";
    battle.cha3name = "3";
    battle.cha1life = 20;
    battle.cha2life = 40;
    battle.cha3life = 20;
    battle.cha1energy = 20;
    battle.cha2energy = 20;
    battle.cha3energy = 20;
    battle.cha1weight = 1;
    battle.cha2weight = 1;
    battle.cha3weight = 1;
    battle.bossname = "HAHA";
    battle.bosslife = 100;
    battle.bossenergy = 0;
    battle.bossweight = 1;
}

function readvalue() {
    battle.cha1life = parseInt(battle.cha1life);
    battle.cha2life = parseInt(battle.cha2life);
    battle.cha3life = parseInt(battle.cha3life);
    battle.cha1energy = parseInt(battle.cha1energy);
    battle.cha2energy = parseInt(battle.cha2energy);
    battle.cha3energy = parseInt(battle.cha3energy);
    battle.cha1weight = parseInt(battle.cha1weight);
    battle.cha2weight = parseInt(battle.cha2weight);
    battle.cha3weight = parseInt(battle.cha3weight);
    battle.bosslife = parseInt(battle.bosslife);
    battle.bossenergy = parseInt(battle.bossenergy);
    battle.weight = parseInt(battle.weight);
}

function save() {
    battlestr = JSON.stringify(battle);
    localStorage.setItem("battlestr", battlestr);

    cardmoney = battle.money;
    localStorage.setItem("cardmoney", cardmoney);

    newstext("已储存");
    savenews();
}

function savenews() {
    newsbattlestr = JSON.stringify(newsbattle);
    localStorage.setItem("newsbattlestr", newsbattlestr);
}