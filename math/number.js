function zero() {
    if (i1 == 0) {
        i1 = 1;
        cal1 = 0;
        display();
        numberchange(0);
    } else if (i2 == 0) {
        i2 = 1;
        cal2 = 0;
        display();
        numberchange(0);
    } else if (i3 == 0) {
        i3 = 1;
        cal3 = 0;
        display();
        numberchange(0);
    } else {
        alert("calculate table is full!");
    }

}

function one() {
    if (i1 == 0) {
        i1 = 1;
        cal1 = 1;
        display();
        numberchange(1);
    } else if (i2 == 0) {
        i2 = 1;
        cal2 = 1;
        display();
        numberchange(1);
    } else if (i3 == 0) {
        i3 = 1;
        cal3 = 1;
        display();
        numberchange(1);
    } else {
        alert("calculate table is full!");
    }

}

function two() {
    if (i1 == 0) {
        i1 = 1;
        cal1 = 2;
        display();
        numberchange(2);
    } else if (i2 == 0) {
        i2 = 1;
        cal2 = 2;
        display();
        numberchange(2);
    } else if (i3 == 0) {
        i3 = 1;
        cal3 = 2;
        display();
        numberchange(2);
    } else {
        alert("calculate table is full!");
    }

}

function three() {
    if (i1 == 0) {
        i1 = 1;
        cal1 = 3;
        display();
        numberchange(3);
    } else if (i2 == 0) {
        i2 = 1;
        cal2 = 3;
        display();
        numberchange(3);
    } else if (i3 == 0) {
        i3 = 1;
        cal3 = 3;
        display();
        numberchange(3);
    } else {
        alert("calculate table is full!");
    }

}

function four() {
    if (i1 == 0) {
        i1 = 1;
        cal1 = 4;
        display();
        numberchange(4);
    } else if (i2 == 0) {
        i2 = 1;
        cal2 = 4;
        display();
        numberchange(4);
    } else if (i3 == 0) {
        i3 = 1;
        cal3 = 4;
        display();
        numberchange(4);
    } else {
        alert("calculate table is full!");
    }

}

function five() {
    if (i1 == 0) {
        i1 = 1;
        cal1 = 5;
        display();
        numberchange(5);
    } else if (i2 == 0) {
        i2 = 1;
        cal2 = 5;
        display();
        numberchange(5);
    } else if (i3 == 0) {
        i3 = 1;
        cal3 = 5;
        display();
        numberchange(5);
    } else {
        alert("calculate table is full!");
    }

}

function six() {
    if (i1 == 0) {
        i1 = 1;
        cal1 = 6;
        display();
        numberchange(6);
    } else if (i2 == 0) {
        i2 = 1;
        cal2 = 6;
        display();
        numberchange(6);
    } else if (i3 == 0) {
        i3 = 1;
        cal3 = 6;
        display();
        numberchange(6);
    } else {
        alert("calculate table is full!");
    }

}

function seven() {
    if (i1 == 0) {
        i1 = 1;
        cal1 = 7;
        display();
        numberchange(7);
    } else if (i2 == 0) {
        i2 = 1;
        cal2 = 7;
        display();
        numberchange(7);
    } else if (i3 == 0) {
        i3 = 1;
        cal3 = 7;
        display();
        numberchange(7);
    } else {
        alert("calculate table is full!");
    }

}

function eight() {
    if (i1 == 0) {
        i1 = 1;
        cal1 = 8;
        display();
        numberchange(8);
    } else if (i2 == 0) {
        i2 = 1;
        cal2 = 8;
        display();
        numberchange(8);
    } else if (i3 == 0) {
        i3 = 1;
        cal3 = 8;
        display();
        numberchange(8);
    } else {
        alert("calculate table is full!");
    }

}

function nine() {
    if (i1 == 0) {
        i1 = 1;
        cal1 = 9;
        display();
        numberchange(9);
    } else if (i2 == 0) {
        i2 = 1;
        cal2 = 9;
        display();
        numberchange(9);
    } else if (i3 == 0) {
        i3 = 1;
        cal3 = 9;
        display();
        numberchange(9);
    } else {
        alert("calculate table is full!");
    }

}

var nc;

function numberchange(nc) {
    if (numberleft[nc] <= 0) {
        counterchange(nc);
    } else {
        numberleft[nc]--;
        numberleftdisplay();
    }
}

function ininum() {
    if (initotal == 0) {
        alert("you have used all your initial number");
        return;
    }
    if (i1 == 0) {
        i1 = 1;
        cal1 = Number(initial);
        initotal--;
        display();
    } else if (i2 == 0) {
        i2 = 1;
        cal2 = Number(initial);
        initotal--;
        display();
    } else if (i3 == 0) {
        i3 = 1;
        cal3 = Number(initial);
        initotal--;
        display();
    } else {
        alert("calculate table is full!");
    }
    document.getElementById("initimes").innerHTML = initotal;
}

function cnum1() {
    if (i1 == 0) {
        i1 = 1;
        cal1 = cs1;
        display();
        document.getElementById("cbutton1").style.display = "none";
        //document.getElementById("cbutton1").value = "";
        //cs1 = 0;
    } else if (i2 == 0) {
        i2 = 1;
        cal2 = cs1;
        display();
        document.getElementById("cbutton1").style.display = "none";
        //document.getElementById("cbutton1").value = "";
        //cs1 = 0;
    } else if (i3 == 0) {
        i3 = 1;
        cal3 = cs1;
        display();
        document.getElementById("cbutton1").style.display = "none";
        //document.getElementById("cbutton1").value = "";
        //cs1 = 0;
    } else {
        alert("calculate table is full!");
    }

}

function cnum2() {
    if (i1 == 0) {
        i1 = 1;
        cal1 = cs2;
        display();
        document.getElementById("cbutton2").style.display = "none";
        //document.getElementById("cbutton2").value = "";
        //cs2 = 0;
    } else if (i2 == 0) {
        i2 = 1;
        cal2 = cs2;
        display();
        document.getElementById("cbutton2").style.display = "none";
        //document.getElementById("cbutton2").value = "";
        //cs2 = 0;
    } else if (i3 == 0) {
        i3 = 1;
        cal3 = cs2;
        display();
        document.getElementById("cbutton2").style.display = "none";
        //document.getElementById("cbutton2").value = "";
        //cs2 = 0;
    } else {
        alert("calculate table is full!");
    }

}

function cnum3() {
    if (i1 == 0) {
        i1 = 1;
        cal1 = cs3;
        display();
        document.getElementById("cbutton3").style.display = "none";
        //document.getElementById("cbutton3").value = "";
        //cs3 = 0;
    } else if (i2 == 0) {
        i2 = 1;
        cal2 = cs3;
        display();
        document.getElementById("cbutton3").style.display = "none";
        //document.getElementById("cbutton3").value = "";
        //cs3 = 0;
    } else if (i3 == 0) {
        i3 = 1;
        cal3 = cs3;
        display();
        document.getElementById("cbutton3").style.display = "none";
        //document.getElementById("cbutton3").value = "";
        //cs3 = 0;
    } else {
        alert("calculate table is full!");
    }

}