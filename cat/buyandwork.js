function buyfood() {
    var sure;
    sure = confirm("花费50购买猫粮100");
    if (sure == true) {
        if (cat.money >= 50) {
            cat.food = parseInt(cat.food) + 100;
            cat.money = parseInt(cat.money) - 50;
            document.getElementById("food").innerHTML = "剩余食物:" + cat.food;
            document.getElementById("money").innerHTML = "剩余金钱:" + cat.money;
            //save();
        } else {
            alert("你这么穷还是先去打工挣钱吧！")
        }
    }

}

function workformoney() {
    var sure;
    sure = confirm("打工挣钱将自动跳过一天！获得50金钱");
    if (sure == true) {
        nextday();
        nextday();
        cat.money = parseInt(cat.money) + 50;
        document.getElementById("money").innerHTML = "剩余金钱:" + cat.money;
        save();
    }

}