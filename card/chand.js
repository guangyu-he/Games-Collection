//电脑抽牌
var i1=0;
var i2=0;
var i3=0;
var i4=0;
var i5=0;
function cdraw(){
	document.getElementById("cmana").innerHTML = cmana;
	if(i1==0){
		ccard1 = ccardf();
		var mj = cmanajf(ccard1);
		if(mj==2){
			return;
		}
		else{
			document.getElementById("chand1").innerHTML = ccard1;
			var oo=oldmanaenough(ccard1,cmana)
			if(oo!=true){
					oldcard[0] = ccard1;
			}	
			i1=1;
			return;
		}
	}
	if(i1==1&&i2==0){
		ccard2 = ccardf();
		var mj = cmanajf(ccard2);
		if(mj==2){
			return;
		}
		else{
			document.getElementById("chand2").innerHTML = ccard2;
			var oo=oldmanaenough(ccard2,cmana)
			if(oo!=true){
				oldcard[1] = ccard2;
			}
			i2=1;
			return;
		}
	}
	if(i1==1&&i2==1&&i3==0){
		ccard3 = ccardf();
		var mj = cmanajf(ccard3);
		if(mj==2){
			return;
		}
		else{
			document.getElementById("chand3").innerHTML = ccard3;
			var oo=oldmanaenough(ccard3,cmana)
			if(oo!=true){
				oldcard[2] = ccard3;
			}
			i3=1;
			return;
		}
	}
	if(i1==1&&i2==1&&i3==1&&i4==0){
		ccard4 = ccardf();
		var mj = cmanajf(ccard4);
		if(mj==2){
			return;
		}
		else{
			document.getElementById("chand4").innerHTML = ccard4;
			var oo=oldmanaenough(ccard4,cmana)
			if(oo!=true){
				oldcard[3] = ccard4;
			}
			i4=1;
			return;
		}
	}
	if(i1==1&&i2==1&&i3==1&&i4==1&&i5==0){
		ccard5 = ccardf();
		var mj = cmanajf(ccard5);
		if(mj==2){
			return;
		}
		else{
			document.getElementById("chand5").innerHTML = ccard5;
			var oo=oldmanaenough(ccard5,cmana)
			if(oo!=true){
				oldcard[4] = ccard5;
			}
			i5=1;
			return;
		}
	}
	if(i1==1&&i2==1&&i3==1&&i4==1&&i5==1&&czz!=12){
		alert("电脑手牌已满！替换第一张牌");
		ccard1 = ccardf();
		var mj = cmanajf(ccard1);
		if(mj==2){
			i1=0;
			return;
		}
		else{
			document.getElementById("chand1").innerHTML = ccard1;
			var oo=oldmanaenough(ccard1,cmana)
			if(oo!=true){
					oldcard[0] = ccard1;
			}
			return;
		}
	}	
}