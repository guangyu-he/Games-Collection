function pcre1(){
	//var r=confirm("是否出这张牌");
	//if (r==true){
	if(card1=="-2-2"){
		var m=manaenough(card1);
		if(m==true){
			j1=0; 
			cre(card1);
			card1="null";
			document.getElementById("phand1").innerHTML = card1;
			cardpicture();
		}
		
		else{
			alert("法力不足");
		}
	}
	if(card1=="-1-1"){
		var m=manaenough(card1);
		if(m==true){
			j1=0; 
			cre(card1);
			card1="null";
			document.getElementById("phand1").innerHTML = card1;
			cardpicture();
		}
		
		else{
			alert("法力不足");
		}
	}
	if(order==1&&card1!="-2-2"&&card1!="-1-1"){
		var m=manaenough(card1);
		if(m==true){
			cre(card1); 		
		}
		else if(m==3){
			j1=0;  
			cre(card1); 
			card1="null";
			document.getElementById("phand1").innerHTML = card1;
			cardpicture();
			
		}
		else if(m==2){
			
		}
		else{
			alert("法力不足");
		}	
	}
	//}
	
}

function pcre2(){
	if(card2=="-2-2"){
		var m=manaenough(card2);
		if(m==true){
			j2=0; 
			cre(card2); 
			card2="null"
			document.getElementById("phand2").innerHTML = card2;
			cardpicture();
		}
		else{
			alert("法力不足");
		}
	}
	if(card2=="-1-1"){
		var m=manaenough(card2);
		if(m==true){
			j2=0; 
			cre(card2); 
			card2="null"
			document.getElementById("phand2").innerHTML = card2;
			cardpicture();
		}
		else{
			alert("法力不足");
		}
	}
	if(order==1&&card2!="-2-2"&&card2!="-1-1"){
		var m=manaenough(card2);
		if(m==true){
			cre(card2);	
		}
		else if(m==3){
			j2=0;
			cre(card2);
			card2="null";
			document.getElementById("phand2").innerHTML = card2; 
			cardpicture();
		}
		else if(m==2){
			
		}
		else{
			alert("法力不足");
		}
	}	
}

function pcre3(){
	if(card3=="-2-2"){
		var m=manaenough(card3);
		if(m==true){
			j3=0; 
			cre(card3); 
			card3="null"
			document.getElementById("phand3").innerHTML = card3;
			cardpicture();
		}
		else{
			alert("法力不足");
		}
	}
	if(card3=="-1-1"){
		var m=manaenough(card3);
		if(m==true){
			j3=0; 
			cre(card3); 
			card3="null"
			document.getElementById("phand3").innerHTML = card3;
			cardpicture();
		}
		else{
			alert("法力不足");
		}
	}
	if(order==1&&card3!="-2-2"&&card3!="-1-1"){
		var m=manaenough(card3);
		if(m==true){
			cre(card3);
		}
		else if(m==3){
			j3=0;
			cre(card3);
			card3="null";
			document.getElementById("phand3").innerHTML = card3; 
			cardpicture();			
		}
		else if(m==2){
				
		}
		else{
			alert("法力不足");
		}
	}
}

function pcre4(){
	if(card4=="-2-2"){
		var m=manaenough(card4);
		if(m==true){
			j4=0; 
			cre(card4); 
			card4="null"
			document.getElementById("phand4").innerHTML = card4;
			cardpicture();
		}
		else{
			alert("法力不足");
		}
	}
	if(card4=="-1-1"){
		var m=manaenough(card4);
		if(m==true){
			j4=0; 
			cre(card4); 
			card4="null"
			document.getElementById("phand4").innerHTML = card4;
			cardpicture();
		}
		else{
			alert("法力不足");
		}
	}
	if(order==1&&card4!="-2-2"&&card4!="-1-1"){
		var m=manaenough(card4);
		if (m==true){
			cre(card4);
		}
		else if(m==3){
			j4=0;
			cre(card4);
			card4 = "null";
			document.getElementById("phand4").innerHTML = card4;
			cardpicture();			
		}
		else if(m==2){
			
		}
		else{
			alert("法力不足");
		}
	}
}

function pcre5(){
	if(card5=="-2-2"){
		var m=manaenough(card5);
		if(m==true){
			j5=0; 
			cre(card5); 
			card5="null"
			document.getElementById("phand5").innerHTML = card5;
			cardpicture();
		}
		else{
			alert("法力不足");
		}
	}
	if(card5=="-1-1"){
		var m=manaenough(card5);
		if(m==true){
			j5=0; 
			cre(card5); 
			card5="null"
			document.getElementById("phand5").innerHTML = card5;
			cardpicture();
		}
		else{
			alert("法力不足");
		}
	}
	if(order==1&&card5!="-2-2"&&card5!="-1-1"){
		var m=manaenough(card5);
		if (m==true){
			cre(card5);	
		}
		else if(m==3){
			j5=0;
			cre(card5); 
			card5="null";
			document.getElementById("phand5").innerHTML = card5; 
			cardpicture();
		}
		else if(m==2){
			
		}
		else{
			alert("法力不足");
		}
	}	
}
