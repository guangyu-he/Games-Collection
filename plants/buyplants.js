function adoptfunction(){
    var ii = 0;
    for(var i=0;i<5;i++){
        if(pl[i].id == ""){
            break;
        }else{
            ii++;
        }
    }
    if(ii == 5){
        addmessage("花盆已满");
        return;
    }

    addmessage("捡了一只小幼苗");
    var adopt_rare = randomNum(0,100);
    if(adopt_rare <= 50){
        addmessage("50");
        adopt_rare_func("r");
    }
    else if(adopt_rare > 50 && adopt_rare <= 85){
        addmessage("85"+adopt_rare);
        adopt_rare_func("sr");
    }else if(adopt_rare > 85 && adopt_rare <= 100){
        addmessage("100"+adopt_rare);
        adopt_rare_func("ssr");
    }else{}
    text_display();
}

function adopt_rare_func(str){
    for(var i=0;i<5;i++){
        if(pl[i].id == ""){
            pl[i].id = String(randomNum(10000,99999));
            pl[i].name = "tiny";
            pl[i].age = "1";
            pl[i].life = "100";
            pl[i].health = "100";
            pl[i].status = str;
            break;
        }
    }
}

