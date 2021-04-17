var Attack = []
var Attack_damage = 0;
var Attack_damage_sum = 0;

var energy = [120, 10, 1];

var combo = 0;
var crit_state = 0;

var DPS;

var crit_ini,mastery_ini;

//variables in legends
var legend_masterass_time = 0;

function wait(){
    news.newstext = "";
    document.getElementById("newstext").innerHTML = news.newstext;
    talents();

    vanish_state = 1;

    damage();
}

function damage(){
    
    if(planning_state == 1){
        planning_damage = 0.1;
    }else{
        planning_damage = 0;
    }

    if(masterass_time > 0){
        wow.crit = crit_ini + 0.5;
    }else{
        wow.crit = crit_ini;
    }

    if(Garrote_dot > 0){
        crit_state = randomNum(0,10);
        var damage_garrote = 0;
        if (crit_state <= wow.crit*10){
            damage_garrote = Garrote_damage * (wow.haste + wow.mastery + 1) * 2;
            newstext("/锁喉(C)"+ (damage_garrote).toFixed(0));
        }else{
            damage_garrote = Garrote_damage * (wow.haste + wow.mastery + 1);
            newstext("/锁喉"+ (damage_garrote).toFixed(0));
        }
        Garrote_damage_sum += damage_garrote;
        wow.boss_life -= damage_garrote;
        Garrote_dot -= 1;                
    }else{}

    if (Garrote[4] > 0){
        Garrote[4] -= 1;
    }else{
        Garrote[4] = 0;
    }

    if(Rupture_dot > 0){
        
        crit_state = randomNum(0,10);
        var damage_rupture = 0;
        if (crit_state <= wow.crit*10){
            damage_rupture = Rupture_damage * (wow.haste + wow.mastery + 1) * 2;
            newstext("/割裂(C)"+ (damage_rupture).toFixed(0));
        }else{
            damage_rupture = Rupture_damage * (wow.haste + wow.mastery + 1);
            newstext("/割裂"+ (damage_rupture).toFixed(0));
        }
        Rupture_damage_sum += damage_rupture;
        wow.boss_life -= damage_rupture;
        Rupture_dot -= 1;          
    }else{}

    if(doom_time > 0){
        crit_state = randomNum(0,10);
        var damage_doom = 0;
        if (crit_state <= wow.crit*10){
            damage_doom = doom_damage * (wow.haste + wow.mastery + 1) * 2;
            newstext("/末日之刃(C)"+ (damage_doom).toFixed(0));
        }else{
            damage_doom = doom_damage * (wow.haste + wow.mastery + 1);
            newstext("/末日之刃"+ (damage_doom).toFixed(0));
        }
        doom_damage_sum += damage_doom;
        wow.boss_life -= damage_doom;
        doom_time -= 1;
    }else{}
    
    Mutilate_damage_sum += Mutilate_damage ;
    wow.boss_life -= Mutilate_damage;
    Mutilate_damage = 0;

    Shiv_damage_sum += Shiv_damage;
    wow.boss_life -= Shiv_damage;
    Shiv_damage = 0;

    if(Shiv[4] > 0){
        Shiv[4] -= 1;
    }else{
        Shiv[4] = 0;
    }

    Envenom_damage_sum += Envenom_damage;
    wow.boss_life -= Envenom_damage;
    Envenom_damage = 0;

    Poisonbomb_damage_sum += Poisonbomb_damage;
    wow.boss_life -= Poisonbomb_damage;
    Poisonbomb_damage = 0;
    if(Shiv_dot > 0){
        Shiv_dot -= 1;
    }else{
        Shiv_dot = 0;
    }

    if(Envenom_dot > 0){
        Envenom_dot -= 1;
    }else{
        Envenom_dot = 0;
    }

    Attack_damage = wow.player_ap * 0.1;
    var damage_attack = 0;
    var slice_bonus_damage = 0;
    if(slice_time > 0){
        slice_bonus_damage = 0.5;
    }else{}

    crit_state = randomNum(0,10);
    if (crit_state <= wow.crit*10){
        damage_attack = ( Attack_damage * (wow.haste + 1) * (wow.vers + 1)) * 2 * (planning_damage + slice_bonus_damage + 1);
        newstext("/攻击(C)"+ (damage_attack).toFixed(0));
    }else{
        damage_attack = Attack_damage * (wow.haste + 1) * (wow.vers + 1) * (planning_damage + slice_bonus_damage + 1);
        newstext("/攻击"+ (damage_attack).toFixed(0));
    }
    Attack_damage_sum += damage_attack;
    wow.boss_life -= damage_attack;

    Poison_func();

    if(Poison_dot > 0){

        if(wow.talent1 == "毒药大师"){
            poisonmaster_damage = 0.3;
        }else{
            poisonmaster_damage = 0;
        }

        crit_state = randomNum(0,10);
        var damage_poison = 0;
        if (crit_state <= wow.crit*10){
            damage_poison = ( Poison[3] * wow.player_ap * (wow.haste + wow.mastery + 1) * (wow.vers + 1) / Poison[1] ) * 2 * (planning_damage + poisonmaster_damage + 1);
            newstext("/毒药dot(C)"+ (damage_poison).toFixed(0));
        }else{
            damage_poison = Poison[3] * wow.player_ap * (wow.haste + wow.mastery + 1) * (wow.vers + 1) / Poison[1] * (planning_damage + poisonmaster_damage + 1);
            newstext("/毒药dot"+ (damage_poison).toFixed(0));
        }
        Poison_damage_sum += damage_poison + Poison_damage;
        wow.boss_life -= damage_poison + Poison_damage;
        Poison_dot -= 1; 
        if(Poison_dot <= 0){
            Poison_state = 0;
        }else{}
        Poison_damage = 0;               
    }else{}

    Ambush_damage_sum += Ambush_damage;
    wow.boss_life -= Ambush_damage;
    Ambush_damage = 0;

    planning_time -= 1;
    if(planning_time <= 0){
        planning_state = 0;
    }else{
        planning_state = 1;
    }

    slice_time -= 1;
    if(slice_time <= 0){
        slice_time = 0;
    }else{}

    vanish_cd -= 1;
    if(vanish_cd <= 0){
        vanish_cd = 0;
    }else{}

    deathmark_cd -= 1;
    if(deathmark_cd <= 0){
        deathmark_cd = 0;
    }else{}

    masterass_time -= 1;
    if(masterass_time <= 0){
        masterass_time = 0;
    }else{}

    legend_masterass_time -= 1;
    if(legend_masterass_time <= 0){
        legend_masterass_time = 0;
    }else{}

    if(vendetta_time < 0){
        vendetta_time = 0;
        wow.player_ap = wow.player_ap / 1.3;
    }else if(vendetta_time == 0){

    }
    else{
        vendetta_time -= 1;
    }

    vendetta_cd -= 1;
    if(vendetta_cd <= 0){
        vendetta_cd = 0;
    }else{}

    wow.crit = crit_ini;

    display_dps();

    dot_display();
    energy_regen()
    display_combat_stat();

    if(wow.boss_life == "" || wow.boss_life == null){
    }else{
        document.getElementById("boss_status").innerHTML = "boss血量:" + (wow.boss_life).toFixed(0);
    }

    wow.turn += 1;
    document.getElementById("turn").innerHTML = "回合:" + wow.turn;

    if(wow.turn >= 70 && wow.legend == "佐迪克徽章"){
        wow.mastery = mastery_ini + 0.3;
        document.getElementById("legend").className = "button button-caution";
    }

    if(wow.turn == 101){
        if(wow.highest_dps == "" || wow.highest_dps == null){
            wow.highest_dps = 0;
        }else{
            wow.highest_dps = parseInt(wow.highest_dps);
        }
        if(DPS > wow.highest_dps){
            wow.highest_dps = DPS;
            alert("你创造了最高dps记录：" + DPS.toFixed(0));
        }else{
            alert("100回合，dps为：" + DPS.toFixed(0) + "/最高：" + wow.highest_dps.toFixed(0));
        }
        wow.turn = 0;
        wow.crit = crit_ini;
        wow.mastery = mastery_ini;
        save();
        test();
        location.reload();
    }
}

function energy_regen(){
    var regen_slice = 0;
    var regen_rate = 0;

    if(slice_time > 0){
        regen_rate += 0.1
    }else{}

    regen_rate += wow.haste;
    energy[2] = 1 + regen_rate;

    if(Rupture_dot>0 && Poison_state == 1){
        energy[0] += 8;
    }else{}
    if(Garrote_dot>0 && Poison_state == 1){
        energy[0] += 8;
    }

    energy[0] += 10 * energy[2] ;

    if(vendetta_time >= 7){
        energy[0] += 20;
    }else{}
    
    if(wow.talent4=="精力" && energy[0] > 170){
        energy[0] = 170;
    }else if(wow.talent4 !="精力" && energy[0] > 120){
        energy[0] = 120;
    }

    document.getElementById("energy").innerHTML = "能量:" + energy[0].toFixed(0);
}
