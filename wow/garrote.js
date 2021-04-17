var Garrote = [45, 18, 1, 1.08, 0];
var Garrote_dot = 0;
var Garrote_damage = 0;
var Garrote_damage_sum = 0;

function garrote_func(){
    if(Garrote[4] == 0){
        if(energy[0] < Garrote[0]){
        }else{

            news.newstext = "";
            document.getElementById("newstext").innerHTML = news.newstext;

            var temp_crit = 0;

            energy[0] -= Garrote[0];
            
            news.newstext = "";
            document.getElementById("newstext").innerHTML = news.newstext;
            talents();

            if(wow.talent2 == "诡诈"){
                Garrote[4] = 0;
                Garrote_damage = Garrote[3] * wow.player_ap * 1.8 * (wow.vers + 1) * (planning_damage + 1) / Garrote[1]
            }else{
                vanish_state = 1;
                Garrote[4] = 6;
                Garrote_damage = Garrote[3] * wow.player_ap * (wow.vers + 1) * (nightwalk_damage + planning_damage + 1) / Garrote[1]
            }

            crit_state = randomNum(0,10);
            if (crit_state <= temp_crit*10){
                combos(Garrote[2] + 1);
            }else{
                combos(Garrote[2]);
            }

            if(Garrote_dot <= Garrote[1]*0.3){
                Garrote_dot += Garrote[1]
            }else{
                Garrote_dot = Garrote[1]
            }

            dot_display();
            damage();
        }
    }else{}  
}
