function joint() {
    if (numberleft[11] <= 0) {
        return;
    }
    if (i1 == 0) {
        i1 = 1;
        cal1 = "joint()";
        display();
        numberchange(11);
    } else if (i2 == 0) {
        i2 = 1;
        cal2 = "joint()";
        display();
        numberchange(11);
    } else if (i3 == 0) {
        i3 = 1;
        cal3 = "joint()";
        display();
        numberchange(11);
    } else {
        alert("calculate table is full!");
    }
}