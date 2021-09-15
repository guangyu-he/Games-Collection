function text_display(){

    for(var i=0;i<5;i++){            
        var name_dis = "name_dis_" + String(i+1);
        var state_dis = "state_dis_" + String(i+1);
        var life_state = "life_state_" + String(i+1);
        var fert_state = "fert_state_" + String(i+1);
        var water_state = "water_state_" + String(i+1);
        if(pl[i].id == ""){
            document.getElementById(state_dis).style = "display:none";
        }else{
            document.getElementById(state_dis).style = "display:inline";
            document.getElementById(name_dis).innerHTML = lan.plname + pl[i].name + "," + pl[i].age;
            document.getElementById(life_state).innerHTML = lan.pllife + pl[i].health + "/" + "100";
            document.getElementById(fert_state).innerHTML = lan.plfert + pl[i].fert + "/" + "100"; //按百分比计算
            document.getElementById(water_state).innerHTML = lan.plwater + pl[i].water + "/" + "100"; //按百分比计算
        }
    }

    document.getElementById("date").innerHTML = lan.date + usr.day;

    document.getElementById("fertilizer_state").innerHTML = lan.fertilizer_state + usr.fert_nr;
    document.getElementById("debug_state").innerHTML = lan.debug_state + usr.debug_nr;
    document.getElementById("supernurse_state").innerHTML = lan.supernurse_state + usr.supernurse_nr;
    document.getElementById("money_state").innerHTML = lan.money_state + usr.money;



    if(usr.name == "local" && usr.day == "0"){
        document.getElementById("save").style = "display:none";
    }else{
        document.getElementById("save").style = "display:block";
    }
}