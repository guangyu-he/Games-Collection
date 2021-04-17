var ambush_state = 0;
var Ambush_damage = 0;
var Ambush_damage_sum = 0;
var Ambush = [50, 0, 2, 0.955, 0];

function ambush_func(){
    if(ambush_state == 1 || vanish_state == 0){

        if(vanish_state == 0){
            if(energy[0] < Ambush[0]){
                return;
            }
            energy[0] -= Ambush[0];
        }

        news.newstext = "";
        document.getElementById("newstext").innerHTML = news.newstext;
        talents();

        vanish_state = 1;

        crit_state = randomNum(0,10);
        if (crit_state <= wow.crit*10){
            combos(Ambush[2] + 1);
            Ambush_damage = Ambush[3] * wow.player_ap * (wow.vers + 1) * (planning_damage + nightwalk_damage + 1) * 2;
            newstext("/伏击(C)"+ (Ambush_damage).toFixed(0));
        }else{
            combos(Ambush[2]);
            Ambush_damage = Ambush[3] * wow.player_ap * (wow.vers + 1) * (planning_damage + nightwalk_damage + 1);
            newstext("/伏击"+ (Ambush_damage).toFixed(0));
        } 

        document.getElementById("ambush").className = "button button-pill button-warning";
        ambush_state = 0;

        wow.crit = crit_ini;
        dot_display();
        damage();
        
    }else{}
    
}
