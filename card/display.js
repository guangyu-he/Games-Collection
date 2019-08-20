function maindisplay(){
	//chdis.style.display = "block";
	//chtdis.style.display = "block";
	pb.style.display = "block";
	pbt.style.display = "block";
	document.getElementById("status").style.display="block";
	document.getElementById("cstatus").style.display="block";
	document.getElementById("start").style.display="block";
	
	document.getElementById("decksel").style.display="none";
	
	document.getElementById("decksure").style.display="none";
	document.getElementById("deckdel").style.display="none";
	document.getElementById("deckback").style.display="none";
	
	document.getElementById("decksaving").style.display="none";
	document.getElementById("limitsaving").style.display="none";
	document.getElementById("deckoption").style.display="none";
	document.getElementById("deck").style.display="block";
	
	document.getElementById("decklimit").style.display="none";
	document.getElementById("deckbought").style.display="none";
	document.getElementById("deckopenradio").style.display="none";
}

function displaydeck(){
	chdis.style.display = "none";
	chtdis.style.display = "none";
	pb.style.display = "none";
	pbt.style.display = "none";
	document.getElementById("status").style.display="none";
	document.getElementById("cstatus").style.display="none";
	document.getElementById("start").style.display="none";
	document.getElementById("deck").style.display="none";
	document.getElementById("deckoption").style.display="block";
	
}

function limitdisplay(){
	document.getElementById("gamemode").innerHTML = "现开模式";
	
	document.getElementById("decksel").style.display="none";
	
	document.getElementById("decksure").style.display="block";
	document.getElementById("deckdel").style.display="block";
	document.getElementById("deckback").style.display="block";
	
	document.getElementById("limitsaving").style.display="block";
	document.getElementById("decksaving").style.display="none";

	document.getElementById("decklimit").style.display="block";
	document.getElementById("deckbought").style.display="block";
	document.getElementById("deckopenradio").style.display="block";
}

function builddisplay(){
	document.getElementById("gamemode").innerHTML = "构筑模式";
	
	document.getElementById("decksel").style.display="block";
	
	document.getElementById("decksure").style.display="block";
	document.getElementById("deckdel").style.display="block";
	document.getElementById("deckback").style.display="block";
	
	document.getElementById("decksaving").style.display="block";
	document.getElementById("limitsaving").style.display="none";
	
	document.getElementById("decklimit").style.display="none";
	document.getElementById("deckbought").style.display="none";
	document.getElementById("deckopenradio").style.display="none";
}