var j1=0;
var j2=0;
var j3=0;
var j4=0;
var j5=0;
function pdraw(){
	document.getElementById("mana").innerHTML = mana;
	if(j1==0){
		card1 = pcard();
		document.getElementById("phand1").innerHTML = card1;
		j1=1;
		return;
	}
	if(j1==1&&j2==0){
		card2 = pcard();
		document.getElementById("phand2").innerHTML = card2;
		j2=1;
		return;
	}
	if(j1==1&&j2==1&&j3==0){
		card3 = pcard();
		document.getElementById("phand3").innerHTML = card3;
		j3=1;
		return;
	}
	if(j1==1&&j2==1&&j3==1&&j4==0){
		card4 = pcard();
		document.getElementById("phand4").innerHTML = card4;
		j4=1;
		return;
	}
	if(j1==1&&j2==1&&j3==1&&j4==1&&j5==0){
		card5 = pcard();
		document.getElementById("phand5").innerHTML = card5;
		j5=1;
		return;
	}
	if(j1==1&&j2==1&&j3==1&&j4==1&&j5==1&&zz!=12){
		alert("手牌已满！替换第一张牌");
		card1 = pcard();
		document.getElementById("phand1").innerHTML = card1;
		return;
	}
}