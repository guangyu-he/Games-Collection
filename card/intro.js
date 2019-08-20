function introstart(){
	document.getElementById("intro").innerHTML = "x|x代表生物，只能在自己回合使用:例如2|2，攻击力为2，生命为2，当生命为0时消失。在战斗回合，在战场格中每一格上下对应战斗，对手若对应位置没有生物，则对手损失血量，当任一一方血量为0时该方游戏失败。||-2-2和-1-1表示法术，可以在任何回合使用，使用后会使电脑玩家指定战场格内的生物损失2点攻击力，2点血量(或1点)||mana表示法力||选择要使用的牌，1|1和-1-1需要1点法力，1|1|d 2|2 -2-2需要两点法力，3|3需要3点法力，4|4需要4点法力";
}

function introblock(){
	document.getElementById("intro").innerHTML = "选择要放置的战场格";
}

function introinsblock(){
	document.getElementById("intro").innerHTML = "选择目标生物";
}

function intropbattle(){
	document.getElementById("intro").innerHTML = "你的战斗回合，你的生物进行进攻";
}

function introcbattle(){
	document.getElementById("intro").innerHTML = "电脑玩家的战斗回合，电脑生物进行进攻";
}

function introcc(){
	document.getElementById("intro").innerHTML = "电脑玩家回合，提示：你可以在该回合使用法术";
}

function introselect(){
	document.getElementById("intro").innerHTML = "进攻选择回合，你可以在该回合选择生物是否进行攻击，勾选表示本回合攻击，取消勾选表示本回合不攻击";
}

function introdeck(){
	document.getElementById("intro").innerHTML = "套牌构筑界面，你可以选择构筑模式：“构筑”模式可以自建套牌，点击需要的卡进行构筑；“现开”模式需要使用金币购买卡包，然后打开卡包，每包3张卡牌，利用开包得到的卡牌进行构筑。该模式的金币可通过赢得比赛获得，现开模式下赢得比赛奖励5金币，构筑模式下为1金币。另外，在现开模式下输掉比赛会损失1金币";
}