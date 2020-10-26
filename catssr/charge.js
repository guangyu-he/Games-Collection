const isDivisible = (dividend, divisor) => dividend % divisor === 0;

function counterfunction() {
    //Recharge counter
    //100charges=50money

    if (ssr.money < 50) {
        newstext("your money is less than minimum cost!");
        return;
    }

    var buycounter = prompt("Input the number of counters 100counters=50money", "100");
    if (buycounter == null || buycounter == "") {
        return;
    }
    buycounter = parseInt(buycounter)
    if (isDivisible(buycounter, 100)) {
        newstext("pass!")

        cost = buycounter / 2;
        if (ssr.money < cost) {
            newstext("money is not enough!")
        } else {
            ssr.money = ssr.money - cost;
            ssr.counter = ssr.counter + buycounter;
            document.getElementById("counter").innerHTML = "剩余counter:" + ssr.counter;
            document.getElementById("money").innerHTML = "剩余money:" + ssr.money;
        }
    } else {
        alert("should be divibible by 100")
    }
}

function moneyfunction() {
    // withdraw money
    if (ssr.counter < 100) {
        newstext("your counter is less than minimum cost!");
        return;
    }

    var drawcounter = prompt("Input the number of counter 100counters=50money", "100");
    if (drawcounter == null || drawcounter == "") {
        return;
    }
    drawcounter = parseInt(drawcounter)
    if (isDivisible(drawcounter, 100)) {
        newstext("pass!")

        cost = drawcounter / 2;
        if (ssr.counter < cost) {
            newstext("counter is not enough!")
        } else {
            ssr.money = ssr.money + cost;
            ssr.counter = ssr.counter - drawcounter;
            document.getElementById("counter").innerHTML = "剩余counter:" + ssr.counter;
            document.getElementById("money").innerHTML = "剩余money:" + ssr.money;
        }
    } else {
        alert("should be divibible by 100")
    }
}