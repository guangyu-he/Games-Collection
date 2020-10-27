function buyfood() {
    if (hint == 1) {
        if (confirm('购买100猫粮需花费50金钱.有一定概率遇到打折销售,此时可获得200猫粮!')) {
            //console.log('yes');
        } else {
            return;
        }
    }
    var sure;
    sure = confirm("确认购买猫粮吗?");
    if (sure == true) {
        if (cat.money >= 50) {
            oldfood = cat.food;
            cat.food = parseInt(cat.food) + 100;
            getmorefood();
            fooddifferent = cat.food - oldfood;
            cat.money = parseInt(cat.money) - 50;
            newstext("获得了" + fooddifferent + "猫粮");
            document.getElementById("food").innerHTML = "剩余食物:" + cat.food;
            document.getElementById("money").innerHTML = "剩余金钱:" + cat.money;
            //save();
        } else {
            newstext("你这么穷还是先去打工挣钱吧！")
        }
    }

}

function workformoney() {
    if (hint == 1) {
        if (confirm('选择去打工将自动跳过一天,猫咪将自动消耗一天饮食,并且不进行任何活动.然后你将获得50金钱。有几率获得额外金钱。注意如果猫粮不够,将导致对猫咪的负面影响!')) {
            //console.log('yes');
        } else {
            return;
        }
    }
    var sure;
    sure = confirm("确认去打工挣钱吗?");
    if (sure == true) {
        nextday();
        var oldmoney = cat.money;
        cat.money = parseInt(cat.money) + 50;
        earnmoremoney();
        var differmoney = cat.money - oldmoney;
        newstext("打工收获了" + differmoney + "金钱!")
        document.getElementById("money").innerHTML = "剩余金钱:" + cat.money;
        nextday();
    }

}