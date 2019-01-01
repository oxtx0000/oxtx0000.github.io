var txt ={ 
	"riders":[
		{"img":"001.png\">","src":"#","line":"守护这片沙滩的又是谁","from":"假面骑士faiz——影帝茄"},
		{"img":"002.png\">","src":"#","line":"片头加上这几个字，就是假面骑士了","from":"通用"},
		{"img":"003.gif\">","src":"#","line":"嘚瑟得不行","from":"假面骑士drive——brain"},
		{"img":"004.png\">","src":"https://www.bilibili.com/video/av23638787?from=search&seid=11090983587911244074","line":"菠萝菠萝哒","from":"假面骑士blade——橘前辈"}
	]
}	
	var i;
	var x="";
	for(i in txt.riders){
	x+="<li><div class=\"img_box\"><img src=\"images/"+txt.riders[i].img+"</div>";
	x+="<div class=\"lines\"><h1><a target=\"_blank\" href=\""+txt.riders[i].src+"\">"+txt.riders[i].line+"</a></h1>";
	x+="<span class=\"from\"><h3>"+txt.riders[i].from+"</h3></span></div></li><BR>";
}
	document.getElementById("release").innerHTML = x;

