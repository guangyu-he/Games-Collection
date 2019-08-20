
function instantblock1(card){
	//insdis.style.display = "none";
	//instdis.style.display = "none";
	//hdis.style.display = "block";
	//htdis.style.display = "block";
	if(cbo==1){
		if(card=="-2-2"){	
			ctough1=ctough1-2;
			cpower1=cpower1-2;
		}
		if(card=="-1-1"){	
			ctough1=ctough1-1;
			cpower1=cpower1-1;
		}
		returnpandt();
		document.getElementById("cbp1").style.border = "0px";
		document.getElementById("cbp2").style.border = "0px";
		document.getElementById("cbp3").style.border = "0px";
		cbo=0;
	}
	
}

function instantblock2(card){
	//insdis.style.display = "none";
	//instdis.style.display = "none";
	//hdis.style.display = "block";
	//htdis.style.display = "block";
	if(cbo==1){
		if(card=="-2-2"){
			ctough2=ctough2-2;
			cpower2=cpower2-2;
		}
		if(card=="-1-1"){
			ctough2=ctough2-1;
			cpower2=cpower2-1;
		}
		returnpandt();
		document.getElementById("cbp1").style.border = "0px";
		document.getElementById("cbp2").style.border = "0px";
		document.getElementById("cbp3").style.border = "0px";
		cbo=0;
	}
}

function instantblock3(card){
	//insdis.style.display = "none";
	//instdis.style.display = "none";
	//hdis.style.display = "block";
	//htdis.style.display = "block";
	if(cbo==1){
		if(card=="-2-2"){
			ctough3=ctough3-2;
			cpower3=cpower3-2;
		}
		if(card=="-1-1"){
			ctough3=ctough3-1;
			cpower3=cpower3-1;
		}
		returnpandt();
		document.getElementById("cbp1").style.border = "0px";
		document.getElementById("cbp2").style.border = "0px";
		document.getElementById("cbp3").style.border = "0px";
		cbo=0;
	}
}
