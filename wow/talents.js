//variables in talents
var planning_state = 0;
var planning_time = 0;
var planning_damage = 0;

var nightwalk_damage = 0;

var masterass_time = 0;

var sixcombo_damage = 0;
var poisonmaster_damage = 0;

var doom_envenom = 0;

function talents(){

    if(wow.talent2 == "刺客大师" && vanish_state == 0){
        masterass_time = 4;
    }else{}
    
    if(masterass_time > 0){
        wow.crit = crit_ini + 0.5;
    }else{
        wow.crit = crit_ini;
    }

    if(wow.legend == "刺客大师的决议" && vanish_state == 0){
        legend_masterass_time = 4;
    }else{}

    if(legend_masterass_time >0 ){
        wow.crit = 1;
    }else{
        wow.crit = crit_ini;
    }

    if(wow.talent2 == "夜行者" && vanish_state == 0){
        nightwalk_damage = 0.2;
    }else{
        nightwalk_damage = 0;
    }

    if(wow.talent4 == "运筹帷幄"){
        sixcombo_damage = 0.1;
    }else{
        sixcombo_damage = 0;
    }

    //深谋远虑
    if(planning_state == 1){
        planning_damage = 0.1;
    }else{
        planning_damage = 0;
    }

    if(wow.legend == "末日之刃"){
        doom_envenom = 0.05;
    }else{
        doom_envenom = 0;
    }
}

function combos(skill_combo){

    combo += skill_combo;

    if(wow.talent4 == "运筹帷幄"){
        if(combo > 6){
            combo = 6;
        }else{}
    }else{
        if(combo > 5){
            combo = 5;
        }else{}
    }
}