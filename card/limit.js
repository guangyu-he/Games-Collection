var mode=0;
function limit(){
	if(mode==0){
		var r=confirm("切换游戏模式将删除原模式下套牌！")
		if (r==true)
		{
			deldeck();
		}
		else
		{
			return;
		}
	}
	mode=1;
	setCookie("mode",mode,30);
	limitdisplay();
	deckbalance=getCookie("deckbalance");
	decknum=getCookie("decknum");
	document.getElementById("deckbalance").innerHTML = "余额："+deckbalance;
	document.getElementById("decknumber").innerHTML = "卡包数："+decknum;
}

var decknum=0;
var deckopened=["mana","mana","mana","mana","mana","1|1|d","1|1","2|2","3|3","4|4","-2-2","-1-1"];
var deckopenning=[null,null,null];
var deckbalance=0;
function deckopen(){
	if(decknum==0){
		alert("无卡包，请购买");
	}
	else{
		if(cardtot[11]!=0){
			alert("请删除原套牌后再添加");
			return;
		}
		for(var i=0;i<3;i++){
			var ii=Math.floor((Math.random()*deckopened.length));
			deckopenning[i]=deckopened[ii];
		}
		decknum--;
		setCookie("decknum",decknum,30);
		//document.getElementById("deckopendis").innerHTML = deckopenning;
		document.getElementById("deckopen1").innerHTML = deckopenning[0];
		document.getElementById("deckopen2").innerHTML = deckopenning[1];
		document.getElementById("deckopen3").innerHTML = deckopenning[2];
		document.getElementById("deckbalance").innerHTML = "余额："+deckbalance;
		document.getElementById("decknumber").innerHTML = "卡包数："+decknum;
	}
}

function deckbuy(){
	if(deckbalance<=0){
		alert("余额为0");
		return;
	}
	deckbalance--;
	decknum++;
	setCookie("deckbalance",deckbalance,30);
	setCookie("decknum",decknum,30);
	document.getElementById("deckbalance").innerHTML = "余额："+deckbalance;
	document.getElementById("decknumber").innerHTML = "卡包数："+decknum;
}

function deckpay(){
	deckbalance++;
	setCookie("deckbalance",deckbalance,30);
	document.getElementById("deckbalance").innerHTML = "余额："+deckbalance;
	document.getElementById("decknumber").innerHTML = "卡包数："+decknum;
}

function deckdefault(){
	deckbalance=5;
	decknum=0;
	delCookie("deckbalance");
	delCookie("decknumber");
	document.getElementById("deckbalance").innerHTML = "余额："+deckbalance;
	document.getElementById("decknumber").innerHTML = "卡包数："+decknum;
}


function deckopen1(){
	if(deckopenning[0]=="mana"){
		decmana();
		deckopenning[0]=null;
	}
	if(deckopenning[0]=="1|1|d"){
		yiyid();
		deckopenning[0]=null;
	}
	if(deckopenning[0]=="1|1"){
		yiyi();
		deckopenning[0]=null;
	}
	if(deckopenning[0]=="2|2"){
		erer();
		deckopenning[0]=null;
	}
	if(deckopenning[0]=="3|3"){
		sansan();
		deckopenning[0]=null;
	}
	if(deckopenning[0]=="4|4"){
		sisi();
		deckopenning[0]=null;
	}
	if(deckopenning[0]=="-2-2"){
		jianer();
		deckopenning[0]=null;
	}
	if(deckopenning[0]=="-1-1"){
		jianyi();
		deckopenning[0]=null;
	}
	document.getElementById("deckopen1").innerHTML = deckopenning[0];
}

function deckopen2(){
	if(deckopenning[1]=="mana"){
		decmana();
		deckopenning[1]=null;
	}
	if(deckopenning[1]=="1|1|d"){
		yiyid();
		deckopenning[1]=null;
	}
	if(deckopenning[1]=="1|1"){
		yiyi();
		deckopenning[1]=null;
	}
	if(deckopenning[1]=="2|2"){
		erer();
		deckopenning[1]=null;
	}
	if(deckopenning[1]=="3|3"){
		sansan();
		deckopenning[1]=null;
	}
	if(deckopenning[1]=="4|4"){
		sisi();
		deckopenning[1]=null;
	}
	if(deckopenning[1]=="-2-2"){
		jianer();
		deckopenning[1]=null;
	}
	if(deckopenning[1]=="-1-1"){
		jianyi();
		deckopenning[1]=null;
	}
	document.getElementById("deckopen2").innerHTML = deckopenning[1];
}

function deckopen3(){
	if(deckopenning[2]=="mana"){
		decmana();
		deckopenning[2]=null;
	}
	if(deckopenning[2]=="1|1|d"){
		yiyid();
		deckopenning[2]=null;
	}
	if(deckopenning[2]=="1|1"){
		yiyi();
		deckopenning[2]=null;
	}
	if(deckopenning[2]=="2|2"){
		erer();
		deckopenning[2]=null;
	}
	if(deckopenning[2]=="3|3"){
		sansan();
		deckopenning[2]=null;
	}
	if(deckopenning[2]=="4|4"){
		sisi();
		deckopenning[2]=null;
	}
	if(deckopenning[2]=="-2-2"){
		jianer();
		deckopenning[2]=null;
	}
	if(deckopenning[2]=="-1-1"){
		jianyi();
		deckopenning[2]=null;
	}
	document.getElementById("deckopen3").innerHTML = deckopenning[2];
}

function limitsavingdis(){
	document.getElementById("limitsaving1").innerHTML = cardtot[0];
	document.getElementById("limitsaving2").innerHTML = cardtot[1];
	document.getElementById("limitsaving3").innerHTML = cardtot[2];
	document.getElementById("limitsaving4").innerHTML = cardtot[3];
	document.getElementById("limitsaving5").innerHTML = cardtot[4];
	document.getElementById("limitsaving6").innerHTML = cardtot[5];
	document.getElementById("limitsaving7").innerHTML = cardtot[6];
	document.getElementById("limitsaving8").innerHTML = cardtot[7];
	document.getElementById("limitsaving9").innerHTML = cardtot[8];
	document.getElementById("limitsaving10").innerHTML = cardtot[9];
	document.getElementById("limitsaving11").innerHTML = cardtot[10];
	document.getElementById("limitsaving12").innerHTML = cardtot[11];
}
