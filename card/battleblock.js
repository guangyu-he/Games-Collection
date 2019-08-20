var pbattle1,pbattle2,pbattle3;
pbattle1="0|0";
pbattle2="0|0";
pbattle3="0|0";
var pb1,pb2,pb3;
pb1=0;
pb2=0;
pb3=0;
function pbattleblock1(card){
	//pbdis.style.display = "none";
	//pbtdis.style.display = "none";
	//hdis.style.display = "block";
	//htdis.style.display = "block";
	if(pb1==0&&bo==1){
		//document.getElementById("pbattle1").innerHTML = card;
		pbattle1=card;
		pb1=1;
		getpandt();
		battlepicture();
		document.getElementById("pbp1").style.border = "0px";
		document.getElementById("pbp2").style.border = "0px";
		document.getElementById("pbp3").style.border = "0px";
		bo=0;
		if(pb1==1||pb2==1||pb3==1){
				document.getElementById("button4").style.display = "block";
				document.getElementById("button2").style.display = "none";
		}
		if(card1==card){
			card1="null";
			j1=0;
			document.getElementById("phand1").innerHTML = card1;
			cardpicture();
			return;
		}
		if(card2==card){
			card2="null";
			j2=0;
			document.getElementById("phand2").innerHTML = card2;
			cardpicture();
			return;
			
		}
		if(card3==card){
			card3="null";
			j3=0;
			document.getElementById("phand3").innerHTML = card3;
			cardpicture();
			return;
		}
		if(card4==card){
			card4="null";
			j4=0;
			document.getElementById("phand4").innerHTML = card4;
			cardpicture();
			return;
		}
		if(card5==card){
			card5="null";
			j5=0;
			document.getElementById("phand5").innerHTML = card5;
			cardpicture();
			return;
		}
	}
	else if(bo==0){
		
	}
	else{
		alert("already have");
	}
	
}

function pbattleblock2(card){
	//pbdis.style.display = "none";
	//pbtdis.style.display = "none";
	//hdis.style.display = "block";
	//htdis.style.display = "block";
	if(pb2==0&&bo==1){
		//document.getElementById("pbattle2").innerHTML = card;
		pbattle2=card;
		pb2=1;
		getpandt();
		battlepicture();
		document.getElementById("pbp1").style.border = "0px";
		document.getElementById("pbp2").style.border = "0px";
		document.getElementById("pbp3").style.border = "0px";
		bo=0;
		if(pb1==1||pb2==1||pb3==1){
				document.getElementById("button4").style.display = "block";
				document.getElementById("button2").style.display = "none";
		}
		if(card1==card){
			card1="null";
			j1=0;
			document.getElementById("phand1").innerHTML = card1;
			cardpicture();
			return;
		}
		if(card2==card){
			card2="null";
			j2=0;
			document.getElementById("phand2").innerHTML = card2;
			cardpicture();
			return;
		}
		if(card3==card){
			card3="null";
			j3=0;
			document.getElementById("phand3").innerHTML = card3;
			cardpicture();
			return;
		}
		if(card4==card){
			card4="null";
			j4=0;
			document.getElementById("phand4").innerHTML = card4;
			cardpicture();
			return;
		}
		if(card5==card){
			card5="null";
			j5=0;
			document.getElementById("phand5").innerHTML = card5;
			cardpicture();
			return;
		}
	}
	else if(bo==0){
		
	}
	else{
		alert("already have");
	}
	
}

function pbattleblock3(card){
	//pbdis.style.display = "none";
	//pbtdis.style.display = "none";
	//hdis.style.display = "block";
	//htdis.style.display = "block";
	if(pb3==0&&bo==1){
		//document.getElementById("pbattle3").innerHTML = card;
		pbattle3=card;
		pb3=1;
		getpandt();
		battlepicture();
		document.getElementById("pbp1").style.border = "0px";
		document.getElementById("pbp2").style.border = "0px";
		document.getElementById("pbp3").style.border = "0px";
		bo=0;
		if(pb1==1||pb2==1||pb3==1){
				document.getElementById("button4").style.display = "block";
				document.getElementById("button2").style.display = "none";
		}
		if(card1==card){
			card1="null";
			j1=0;
			document.getElementById("phand1").innerHTML = card1;
			cardpicture();
			return;
		}
		if(card2==card){
			card2="null";
			j2=0;
			document.getElementById("phand2").innerHTML = card2;
			cardpicture();
			return;
		}
		if(card3==card){
			card3="null";
			j3=0;
			document.getElementById("phand3").innerHTML = card3;
			cardpicture();
			return;
		}
		if(card4==card){
			card4="null";
			j4=0;
			document.getElementById("phand4").innerHTML = card4;
			cardpicture();
			return;
		}
		if(card5==card){
			card5="null";
			j5=0;
			document.getElementById("phand5").innerHTML = card5;
			cardpicture();
			return;
		}
	}
	else if(bo==0){
		
	}
	else{
		alert("already have");
	}
}
