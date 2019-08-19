function load() {
    catstr = localStorage.getItem("catstr");

    if (catstr == null || catstr == "") {

    } else {
        cat = JSON.parse(catstr);
    }
}

function save() {
    catstr = JSON.stringify(cat);
    localStorage.setItem("catstr", catstr);
}