var pl = [{id: "", name: "", age: "", fert: "100", water: "100", health: "", status: ""},
{id: "", name: "", age: "", fert: "100", water: "100", health: "", status: ""},
{id: "", name: "", age: "", fert: "100", water: "100", health: "", status: ""},
{id: "", name: "", age: "", fert: "100", water: "100", health: "", status: ""},
{id: "", name: "", age: "", fert: "100", water: "100", health: "", status: ""}];

var usr = {
    name: "local",
    money: "0",
    fert_nr: "0",
    debug_nr: "0",
    supernurse_nr: "0",
    day: "1",
    status: "",
};

var hint = true; 

var localStorage = window.localStorage;
var cardmoney;

var message = "";

var plselected;

var fert_price = 2;
var debug_price = 4;

var fert_ini_nr = 10;
var debug_ini_nr = 10;