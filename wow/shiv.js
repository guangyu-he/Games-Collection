var Shiv = [20, 9, 1, 0.5, 0];
var Shiv_dot = 0;
var Shiv_damage = 0;
var Shiv_damage_sum = 0;

function shiv_func(){

    if(Shiv[4] == 0){
        if(energy[0] < Shiv[0]){}
        else{

            news.newstext = "";
            document.getElementById("newstext").innerHTML = news.newstext;
            talents();

            vanish_state = 1;

            energy[0] -= Shiv[0];
            
            Shiv_dot += Shiv[1];
            Shiv[4] = 25;

            crit_state = randomNum(0,10);
            if(crit_state <= wow.crit*10){
                combos(Shiv[2] + 1);
                Shiv_damage = Shiv[3] * wow.player_ap * (wow.vers + 1) * 2 * (planning_damage + nightwalk_damage + 1);
                newstext("/毒刃(C)"+ (Shiv_damage).toFixed(0));
            }else{
                combos(Shiv[2]);
                Shiv_damage = Shiv[3] * wow.player_ap * (wow.vers + 1) * (planning_damage + nightwalk_damage + 1);
                newstext("/毒刃"+ (Shiv_damage).toFixed(0));
            }

            wow.crit = crit_ini;
            dot_display();
            damage();
        }
    }else{}
}

function shiv_buff_damage(skill_damage){
    if(Shiv_dot > 0){
        return skill_damage * 1.2;
    }else{
        return skill_damage;
    }
}
