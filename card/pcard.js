var d,dn;
var card="";
var card1,card2,card3,card4,card5;
var z,zz;
zz=0;
function pcard(){
	z=true;
	if(zz==12){
		card="null";
		return card;
	}
	while(z&&zz!=12){
		dn = Math.floor((Math.random()*cardtot.length));
		d = cardtot[dn];
		if(d!=0){
			z=false;
			zz++;
			cardtot[dn]=0;
		}		
	}
	card=d;
	return card;
}
