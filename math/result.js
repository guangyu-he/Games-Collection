function calculate() {
    if (typeof cal1 == "number") {
        if (typeof cal2 == "string") {
            if (cal2 == "+") {
                if (typeof cal3 == "number") {
                    result = cal1 + cal3;
                    //alert(result);
                    resultdisply();
                }
            } else if (cal2 == "-") {
                if (typeof cal3 == "number") {
                    result = cal1 - cal3;
                    //alert(result);
                    resultdisply();
                }
            } else if (cal2 == "x") {
                if (typeof cal3 == "number") {
                    result = cal1 * cal3;
                    //alert(result);
                    resultdisply();
                }
            } else if (cal2 == "÷") {
                if (typeof cal3 == "number") {
                    result = cal1 / cal3;
                    //alert(result);
                    resultdisply();
                }
            } else if (cal2 = "²") {
                result = Math.pow(cal1, 2);
                resultdisply();
            } else {

            }
        }
    } else if (typeof cal1 == "string" && cal1 != "") {
        if (typeof cal2 == "number") {
            if (cal1 == "√") {
                result = Math.sqrt(cal2);
                resultdisply();
            } else if (cal1 == "joint()") {
                if (typeof cal2 == "number" && typeof cal3 == "number") {
                    if (cal2 == 0) {
                        result = cal3;
                    } else {
                        var str1, str2, str3;
                        str2 = String(cal2);
                        str3 = String(cal3);
                        str1 = str2.concat(str3);
                        result = Number(str1);
                    }
                    resultdisply();
                }
            } else {

            }
        }
    } else {

    }

    cal1 = "";
    cal2 = "";
    cal3 = "";
    i1 = 0;
    i2 = 0;
    i3 = 0;
    display();

    if (result == quest) {
        alert("you win!");
        document.getElementById("giveup").value = "restart";
        win();
    } else {
        restturn--;
        document.getElementById("restturn").innerHTML = restturn;
        if (restturn == 0) {
            alert("you lose!");
            lose();
            document.getElementById("giveup").value = "restart";
            result = "";
            resultdisply();
            document.getElementById("csave").style.display = "none";
        }
    }
}

var gaincounter = 0;

function win() {
    if (initial == 0) {
        gaincounter = restturn * quest;
    } else {
        gaincounter = restturn * initial;
    }
    alert(gaincounter);
    counter = counter + gaincounter;
    setCookie("counter", counter, "30");
    window.location="javascript:window.android.mc('"+counter+"')";
    document.getElementById("counter").innerHTML = counter;
    result = "";
    resultdisply();
    document.getElementById("csave").style.display = "none";
}

function lose() {
    if (restturn == 0) {
        return;
    }

    if (initial == 0) {
        gaincounter = quest / restturn;
    } else {
        gaincounter = initial / restturn;
    }
}