var bo=0;
var cbo=0;
//判断法力是否足够
function manaenough(card){
	if(card=="1|1|d"&&mana>=2){
		mana=mana-2;
		document.getElementById("mana").innerHTML = mana;
		bo=1;
		return true;
	}
	if(card=="1|1"&&mana>=1){
		mana=mana-1;
		document.getElementById("mana").innerHTML = mana;
		bo=1;
		return true;
	}
	if(card=="2|2"&&mana>=2){
		mana=mana-2;
		document.getElementById("mana").innerHTML = mana; 
		bo=1;
		return true;
	}
	if(card=="3|3"&&mana>=3){
		mana=mana-3;
		document.getElementById("mana").innerHTML = mana;
		bo=1;
		return true;
	}
	if(card=="4|4"&&mana>=4){
		mana=mana-4;
		document.getElementById("mana").innerHTML = mana;
		bo=1;
		return true;
	}
	if(card=="-2-2"&&mana>=2){
		mana=mana-2;
		document.getElementById("mana").innerHTML = mana;
		cbo=1;
		return true;
	}
	if(card=="-1-1"&&mana>=1){
		mana=mana-1;
		document.getElementById("mana").innerHTML = mana;
		cbo=1;
		return true;
	}
	if(card=="mana"){
		return 3;
	}
	if(card=="null"||card==null){
		//alert("瞎按啥？");
		return 2;
	}
}

var oldcard = new Array("","","","","");
//仅判断法力是否足够
function oldmanaenough(ccard,cmana){
	if(ccard=="1|1|d"&&cmana>=2){
		return true;
	}
	if(ccard=="1|1"&&cmana>=1){
		return true;
	}
	if(ccard=="2|2"&&cmana>=2){
		return true;
	}
	if(ccard=="3|3"&&cmana>=3){
		return true;
	}
	if(ccard=="4|4"&&cmana>=4){
		return true;
	}
	if(card=="-2-2"&&mana>=2){
		return true;
	}
	return false;
}

//电脑判断法力
function cmanajf(ccardj){
	if(ccardj=="mana"){
		cmana++;
		document.getElementById("cmana").innerHTML = cmana;
		return 2;
	}
	return 0;
}

//电脑判断哪个手牌
var handcard;
function ccounterhand(handcard){
	if(handcard==ccard1){
		ccounter = 1;
	}
	if(handcard==ccard2){
		ccounter = 2;
	}
	if(handcard==ccard3){
		ccounter = 3;
	}
	if(handcard==ccard4){
		ccounter = 4;
	}
	if(handcard==ccard5){
		ccounter = 5;
	}
		
}
function ccounterbattle(){
	if(ccounter == 1){
		document.getElementById("chand1").innerHTML = "null";
		i1=0;
	}
	if(ccounter == 2){
		document.getElementById("chand2").innerHTML = "null";
		i2=0;
	}
	if(ccounter == 3){
		document.getElementById("chand3").innerHTML = "null";
		i3=0;
	}
	if(ccounter == 4){
		document.getElementById("chand4").innerHTML = "null";
		i4=0;
	}
	if(ccounter == 5){
		document.getElementById("chand5").innerHTML = "null";
		i5=0;
	}
		
}

//电脑判断法力足够
function cmanaenough(ccard,cmana){
	if(ccard=="1|1|d"&&cmana>=2){
		cmana=cmana-2;
		document.getElementById("cmana").innerHTML = cmana;
		ccounterhand(ccard);
		return true;
	}
	if(ccard=="1|1"&&cmana>=1){
		cmana=cmana-1;
		document.getElementById("cmana").innerHTML = cmana;
		ccounterhand(ccard);
		return true;
	}
	if(ccard=="2|2"&&cmana>=2){
		cmana=cmana-2;
		document.getElementById("cmana").innerHTML = cmana; 
		ccounterhand(ccard);
		return true;
	}
	if(ccard=="3|3"&&cmana>=3){
		cmana=cmana-3;
		document.getElementById("cmana").innerHTML = cmana;
		ccounterhand(ccard);
		return true;
	}
	if(ccard=="4|4"&&cmana>=4){
		cmana=cmana-4;
		document.getElementById("cmana").innerHTML = cmana;
		ccounterhand(ccard);
		return true;
	}
	if(ccard=="mana"){
		
		return 2;
	}
	if(ccard==null){
		//alert("瞎按啥？");
		return 3;
	}
}
