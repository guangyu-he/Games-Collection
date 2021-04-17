var Poison = [0, 12, 0.045, 0.38, 0];
var Poison_damage = 0;
var Poison_dot = 0;
var Poison_damage_sum = 0;
var Poison_state = 0;

function Poison_func(){

    talents();

    var Poison_try = randomNum(0,10);
    var range = 0;
    if(Envenom_dot > 0){
        range = 8
    }else{
        range = 5
    }
    if(Poison_try <= range){
        if(Poison_state == 1){

            if(wow.talent1 == "毒药大师"){
                poisonmaster_damage = 0.3;
            }else{
                poisonmaster_damage = 0;
            }

            crit_state = randomNum(0,10);
            if (crit_state <= wow.crit*10){
                Poison_damage = Poison[2] * wow.player_ap * (wow.vers + wow.mastery + 1) * 2 * (planning_damage + nightwalk_damage + poisonmaster_damage + 1);
                newstext("/毒药(C)"+ (Poison_damage).toFixed(0));
            }else{
                Poison_damage = Poison[2] * wow.player_ap * (wow.vers + wow.mastery + 1) * (planning_damage + nightwalk_damage + poisonmaster_damage + 1);
                newstext("/毒药"+ (Poison_damage).toFixed(0));
            }
            Poison_dot = Poison[1];
        }else{
            Poison_state = 1;
            Poison_dot = Poison[1];
        }
    }else{
    }
    wow.crit = crit_ini;
}
