function nextday(){
    for(var i=0;i<5;i++){
        var next_health = parseInt(pl[i].health);
        var next_age, next_water, next_fert;
        if(pl[i].id != ""){
            if(status_index(pl[i].status,"sick")){
                var dead_rate = randomNum(0,100);
                if(pl[i].age < 10){
                    if(dead_rate <= 85 && pl[i].health <= 50){
                        addmessage(pl[i].name + "生病死掉了");
                        plant_dead(i);
                    }else{}
                }else{
                    if(dead_rate <= 50 && pl[i].health <= 30){
                        addmessage(pl[i].name + "生病死掉了");
                        plant_dead(i);
                    }else{}
                }
            }else{}

            if(next_health == 100 && status_index(pl[i].status,"sick") && pl[i].water >= 50 && pl[i].fert >= 50){
                //自愈
                pl[i].status = status_remove(pl[i].status,"sick");
            }else{}

            if(pl[i].water <= 0){
                next_health = next_health - 10;
            }else{}
            if(pl[i].fert <= 0){
                next_health = next_health - 5;
            }else{}
            if(status_index(pl[i].status,"overwatered") || status_index(pl[i].status,"overferted")){
                next_health = next_health - 20;
            }else{}

            if(next_health <= 0 && !status_index(pl[i].status,"sick")){
                pl[i].status = pl[i].status + ",sick"
            }else{}
            if(next_health <= 0){
                next_health = 0;
            }else{}

            var bug_rate = randomNum(0,100);
            var bug_threshold;
            var bug_nr = 0;
            for(var j=0;j<5;j++){
                if(status_index(pl[j].status,"bug")){
                    bug_nr++;
                }else{}
            }
            bug_threshold = bug_nr * 10 + 10;
            if( bug_rate <= bug_threshold ){
                if(!status_index(pl[i].status,"bug")){
                    pl[i].status = pl[i].status + ",bug"
                }else{}
            }else{}
            if(status_index(pl[i].status,"bug")){
                next_health = next_health - 20;
            }else{}

            next_age = parseInt(pl[i].age) + 1;

            if(next_age < 10){
                next_water = parseInt(pl[i].water) - 5;
                next_fert = parseInt(pl[i].fert) - 1;
            }else if(next_age >= 10 && pl[i].age < 30){
                next_water = parseInt(pl[i].water) - 10;
                next_fert = parseInt(pl[i].fert) - 5;
            }
            else{
                next_water = parseInt(pl[i].water) - 20;
                next_fert = parseInt(pl[i].fert) - 10;
            }

            if(next_water <= 0){
                next_water = 0;
            }else{}
            if(next_fert <= 0){
                next_fert = 0;
            }
            
            if(next_age >= 10 && pl[i].name == "tiny"){
                if(status_index(pl[i].status,"sr")){
                    pl[i].name = "sr";
                }else if(status_index(pl[i].status,"ssr")){
                    pl[i].name = "ssr";
                }else{
                    pl[i].name = "r";
                }
            }else{}

            pl[i].age = String(next_age);
            pl[i].water = String(next_water);
            pl[i].fert = String(next_fert);
            pl[i].health = String(next_health);
        }
        else{
            next_water = parseInt(pl[i].water) - 1; //没有花时自然蒸发
            pl[i].water = String(next_water);
        }  
    }
    usr.day = String(parseInt(usr.day) + 1);
    text_display();
    //plselected = null;
}

function status_index(status,status_type){
    var status_array = status.split(",");
    for(i=0;i<10;i++){
        if(status_array[i] == status_type){
            return true;
        }else{}
    }
    return false;
}
function status_remove(status,status_type){
    var status_array = status.split(",");
    var status_output = "";
    for(i=0;i<status_array.length;i++){
        if(status_array[i] == status_type){
            status_array[i] = ""
        }else{}
        if(status_array[i] != ""){
            status_output = status_output + status_array[i];
        }else{}
    }
    if(status_output == ","){
        status_output == "";
    }
    return status_output;
}

function plant_dead(id){
    pl[id].id = "";
    pl[id].name = "";
    pl[id].age = "";
    pl[id].life = "";
    pl[id].health = "";
    pl[id].status = "";
}

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