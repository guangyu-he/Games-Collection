function undo() {
    if (numberleft[10] <= 0) {
        return;
    }
    if (cal1 == "" && cal2 == "" && cal3 == "") {
        return;
    }
    numberleft[10]--;
    numberleftdisplay();
    if (cal1 == "√") {
        counter = counter + mathcost[4] - 1;
        setCookie("counter", counter, "30");
        document.getElementById("counter").innerHTML = counter;
        if (cal2 != 0) {
            if (cal2 == cs1) {
                document.getElementById("cbutton1").style.display = "block";
            } else if (cal2 == cs2) {
                document.getElementById("cbutton2").style.display = "block";
            } else if (cal2 == cs3) {
                document.getElementById("cbutton3").style.display = "block";
            } else if (cal2 == "") {
                //return;
            } else {
                numberleft[cal2]++;
                numberleftdisplay();
            }
        }
    } else if (cal1 == "joint()") {
        numberleft[11]++;
        numberleftdisplay();
        if (cal2 != 0) {
            if (cal2 == cs1) {
                document.getElementById("cbutton1").style.display = "block";
            } else if (cal2 == cs2) {
                document.getElementById("cbutton2").style.display = "block";
            } else if (cal2 == cs3) {
                document.getElementById("cbutton3").style.display = "block";
            } else if (cal2 == "") {
                //return;
            } else {
                numberleft[cal2]++;
                numberleftdisplay();
            }
        }
        if (cal3 != 0) {
            if (cal3 == cs1) {
                document.getElementById("cbutton1").style.display = "block";
            } else if (cal3 == cs2) {
                document.getElementById("cbutton2").style.display = "block";
            } else if (cal3 == cs3) {
                document.getElementById("cbutton3").style.display = "block";
            } else if (cal3 == "") {
                return;
            } else {
                numberleft[cal3]++;
                numberleftdisplay();
            }
        }
    } else {
        if (cal1 != 0) {
            if (cal1 == cs1) {
                document.getElementById("cbutton1").style.display = "block";
            } else if (cal1 == cs2) {
                document.getElementById("cbutton2").style.display = "block";
            } else if (cal1 == cs3) {
                document.getElementById("cbutton3").style.display = "block";
            } else if (cal1 == "") {
                //return;
            } else {
                numberleft[cal1]++;
                numberleftdisplay();
            }
        }
        if (cal2 == "+") {
            counter = counter + mathcost[0] - 1;
            setCookie("counter", counter, "30");
            document.getElementById("counter").innerHTML = counter;
            window.location="javascript:window.android.mc('"+counter+"')";
        } else if (cal2 == "-") {
            counter = counter + mathcost[1] - 1;
            setCookie("counter", counter, "30");
            document.getElementById("counter").innerHTML = counter;
            window.location="javascript:window.android.mc('"+counter+"')";
        } else if (cal2 == "x") {
            counter = counter + mathcost[2] - 1;
            setCookie("counter", counter, "30");
            document.getElementById("counter").innerHTML = counter;
            window.location="javascript:window.android.mc('"+counter+"')";
        } else if (cal2 == "÷") {
            counter = counter + mathcost[3] - 1;
            setCookie("counter", counter, "30");
            document.getElementById("counter").innerHTML = counter;
            window.location="javascript:window.android.mc('"+counter+"')";
        } else if (cal2 == "²") {
            counter = counter + mathcost[5] - 1;
            setCookie("counter", counter, "30");
            document.getElementById("counter").innerHTML = counter;
            window.location="javascript:window.android.mc('"+counter+"')";
        } else {

        }
        if (cal3 != 0) {
            if (cal3 == cs1) {
                document.getElementById("cbutton1").style.display = "block";
            } else if (cal3 == cs2) {
                document.getElementById("cbutton2").style.display = "block";
            } else if (cal3 == cs3) {
                document.getElementById("cbutton3").style.display = "block";
            } else if (cal3 == "") {
                //return;
            } else {
                numberleft[cal3]++;
                numberleftdisplay();
            }
        }
    }
    cal1 = "";
    i1 = 0;
    cal2 = "";
    i2 = 0;
    cal3 = "";
    i3 = 0;
    display();

    result = "";
    resultdisply();
    document.getElementById("csave").style.display = "none";
}