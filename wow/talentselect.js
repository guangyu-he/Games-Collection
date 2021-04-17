function talent_display(){
    if(wow.talent1 == "" || wow.talent1 == null){
    }else{
        document.getElementById("talent1").innerHTML = wow.talent1;
    }

    if(wow.talent2 == "" || wow.talent2 == null){
    }else{
        document.getElementById("talent2").innerHTML = wow.talent2;
    }

    if(wow.talent3 == "" || wow.talent3 == null){
    }else{
        document.getElementById("talent3").innerHTML = wow.talent3;
    }

    if(wow.talent4 == "" || wow.talent4 == null){
    }else{
        document.getElementById("talent4").innerHTML = wow.talent4;
    }

    if(wow.legend == "" || wow.legend == null){
    }else{
        document.getElementById("legend").innerHTML = wow.legend;
    }
    save();
}

function talent1_1_func(){

    wow.talent1 = "毒药大师"
    talent_display()
}

function talent1_2_func(){

    wow.talent1 = "深谋远虑"
    talent_display()
}   

function talent1_3_func(){

    wow.talent1 = "侧袭"
    talent_display()
} 


function talent2_1_func(){

    wow.talent2 = "夜行者"
    talent_display()
}

function talent2_2_func(){

    wow.talent2 = "诡诈"
    talent_display()
}   

function talent2_3_func(){

    wow.talent2 = "刺客大师"
    talent_display()
} 


function talent3_1_func(){

    wow.talent3 = "毒药炸弹"
    document.getElementById("crimson").style = "display:none"
    talent_display()
}

function talent3_2_func(){

    wow.talent3 = "隐刃"
    document.getElementById("crimson").style = "display:none"
    talent_display()
}   

function talent3_3_func(){

    wow.talent3 = "猩红风暴"
    document.getElementById("crimson").style = "display:inline"
    talent_display()
}

function talent4_1_func(){

    wow.talent4 = "精力"

    energy[0] = 170
    energy[2] = 1.1 

    document.getElementById("energy").innerHTML = "能量:" + energy[0];
    document.getElementById("deathmark").style = "display:none"
    talent_display()
}

function talent4_2_func(){

    wow.talent4 = "运筹帷幄"

    energy[0] = 120
    energy[2] = 1

    document.getElementById("energy").innerHTML = "能量:" + energy[0];
    document.getElementById("deathmark").style = "display:none"
    talent_display()
}   

function talent4_3_func(){

    wow.talent4 = "死亡标记"

    energy[0] = 120
    energy[2] = 1 

    document.getElementById("energy").innerHTML = "能量:" + energy[0];
    document.getElementById("deathmark").style = "display:inline"
    talent_display()
} 

function legend1_func(){

    wow.legend = "末日之刃"
    talent_display()
}

function legend2_func(){

    wow.legend = "佐迪克徽章"
    talent_display()
}   

function legend3_func(){

    wow.legend = "刺客大师的决议"
    talent_display()
} 


function display_dps(){

    if(wow.legend == "末日之刃"){
        if(wow.talent3 == "毒药炸弹"){
            DPS = (Garrote_damage_sum + Rupture_damage_sum + Mutilate_damage_sum + Shiv_damage_sum + Envenom_damage_sum + Poison_damage_sum + Attack_damage_sum + Ambush_damage_sum + Poisonbomb_damage_sum) / wow.turn
            document.getElementById("damagetext").innerHTML = "锁喉" + Garrote_damage_sum.toFixed(0) + "/割裂" + Rupture_damage_sum.toFixed(0) + "/毁伤" + Mutilate_damage_sum.toFixed(0) + "/末日" + doom_damage_sum.toFixed(0) + "/毒刃" + Shiv_damage_sum.toFixed(0) + "/毒伤" + Envenom_damage_sum.toFixed(0) + "/毒药" + Poison_damage_sum.toFixed(0) + "/攻击" + Attack_damage_sum.toFixed(0)  + "/伏击" + Ambush_damage_sum.toFixed(0) + "/毒药炸弹" + Poisonbomb_damage_sum.toFixed(0) + " || DPS:" + DPS.toFixed(0);
        }else{
            DPS = (Garrote_damage_sum + Rupture_damage_sum + Mutilate_damage_sum + Shiv_damage_sum + Envenom_damage_sum + Poison_damage_sum + Attack_damage_sum + Ambush_damage_sum) / wow.turn
            document.getElementById("damagetext").innerHTML = "锁喉" + Garrote_damage_sum.toFixed(0) + "/割裂" + Rupture_damage_sum.toFixed(0) + "/毁伤" + Mutilate_damage_sum.toFixed(0) + "/末日" + doom_damage_sum.toFixed(0) + "/毒刃" + Shiv_damage_sum.toFixed(0) + "/毒伤" + Envenom_damage_sum.toFixed(0) + "/毒药" + Poison_damage_sum.toFixed(0) + "/攻击" + Attack_damage_sum.toFixed(0)  + "/伏击" + Ambush_damage_sum.toFixed(0) + " || DPS:" + DPS.toFixed(0);
        }
    }else{
        if(wow.talent3 == "毒药炸弹"){
            DPS = (Garrote_damage_sum + Rupture_damage_sum + Mutilate_damage_sum + Shiv_damage_sum + Envenom_damage_sum + Poison_damage_sum + Attack_damage_sum + Ambush_damage_sum + Poisonbomb_damage_sum) / wow.turn
            document.getElementById("damagetext").innerHTML = "锁喉" + Garrote_damage_sum.toFixed(0) + "/割裂" + Rupture_damage_sum.toFixed(0) + "/毁伤" + Mutilate_damage_sum.toFixed(0) + "/毒刃" + Shiv_damage_sum.toFixed(0) + "/毒伤" + Envenom_damage_sum.toFixed(0) + "/毒药" + Poison_damage_sum.toFixed(0) + "/攻击" + Attack_damage_sum.toFixed(0)  + "/伏击" + Ambush_damage_sum.toFixed(0) + "/毒药炸弹" + Poisonbomb_damage_sum.toFixed(0) + " || DPS:" + DPS.toFixed(0);
        }else{
            DPS = (Garrote_damage_sum + Rupture_damage_sum + Mutilate_damage_sum + Shiv_damage_sum + Envenom_damage_sum + Poison_damage_sum + Attack_damage_sum + Ambush_damage_sum) / wow.turn
            document.getElementById("damagetext").innerHTML = "锁喉" + Garrote_damage_sum.toFixed(0) + "/割裂" + Rupture_damage_sum.toFixed(0) + "/毁伤" + Mutilate_damage_sum.toFixed(0) + "/毒刃" + Shiv_damage_sum.toFixed(0) + "/毒伤" + Envenom_damage_sum.toFixed(0) + "/毒药" + Poison_damage_sum.toFixed(0) + "/攻击" + Attack_damage_sum.toFixed(0)  + "/伏击" + Ambush_damage_sum.toFixed(0) + " || DPS:" + DPS.toFixed(0);
        }
    }

}