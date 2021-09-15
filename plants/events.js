function waterfunction(){
    if(plselected == null){
        return;
    }else{}
    var over_watered_rate = randomNum(0,100);
    //alert(pl[plselected].water + "/" + over_watered_rate);
    if(parseInt(pl[plselected].water) >= over_watered_rate && !status_index(pl[plselected].status,"overwatered")){
        pl[plselected].status = pl[plselected].status + ",overwatered";
    }
    pl[plselected].water = parseInt(pl[plselected].water) + 100;
    if(pl[plselected].water >= 100){
        pl[plselected].water = String(100);
    }
    else{
        pl[plselected].water = String(pl[plselected].water);
    }
    text_display();
}

function fertfunction(){
    if(plselected == null){
        return;
    }else{}
    if(usr.fert_nr <= 0){
        addmessage("肥料不够了")
        return;
    }else{
        usr.fert_nr--;
    }
    var over_ferted_rate = randomNum(0,100);
    //alert(pl[plselected].fert + "/" + over_ferted_rate);
    if(parseInt(pl[plselected].fert) >= over_ferted_rate && !status_index(pl[plselected].status,"overferted")){
        pl[plselected].status = pl[plselected].status + ",overferted";
    }
    pl[plselected].fert = parseInt(pl[plselected].fert) + 100;
    if(pl[plselected].fert >= 100){
        pl[plselected].fert = String(100);
    }
    else{
        pl[plselected].fert = String(pl[plselected].fert);
    }
    
    text_display();
}

function nursefunction(){
    if(plselected == null){
        return;
    }else{}
    pl[plselected].health = String(100);

    if(status_index(pl[plselected].status,"overwatered") || status_index(pl[plselected].status,"overferted")){
        pl[plselected].status = status_remove(pl[plselected].status,"overwatered");
        pl[plselected].status = status_remove(pl[plselected].status,"overferted");
        document.getElementById("status").innerHTML = pl[plselected].status;
    }else{}

    text_display();
}

function bugfunction(){
    if(plselected == null){
        return;
    }else{}
    if(usr.debug_nr <= 0){
        addmessage("杀虫剂不够了")
        return;
    }else{
        usr.debug_nr--;
    }
    if(status_index(pl[plselected].status,"bug")){
        pl[plselected].status = status_remove(pl[plselected].status,"bug");
        document.getElementById("status").innerHTML = pl[plselected].status;
    }else{}

    text_display();
}