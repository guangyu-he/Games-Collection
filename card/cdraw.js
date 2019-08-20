var cd;
var ccard,ccard1,ccard2,ccard3,ccard4,ccard5;
var ccardtot= ["mana","mana","mana","mana","mana","1|1|d","1|1","2|2","3|3","4|4","2|2","1|1"];
var cz,czz;
czz=0;
function ccardf(){
	cz=true;
	if(czz==12){
		ccard="null";
		return ccard;
	}
	while(cz&&czz!=12){
		var cdn = Math.floor((Math.random()*ccardtot.length));
		cd = ccardtot[cdn];
		if(cd!=0){
			cz=false;
			czz++;
			ccardtot[cdn]=0;
		}		
	}
	ccard=cd;
	return ccard;
}
