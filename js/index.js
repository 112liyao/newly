function size(origin,type){
	var type=type||"x";
	var originw=origin;
	if(type=="x"){
		var client=$(window).width();
	}else if(type=="y"){
		var client=$(window).height();
	}
	var bili=client/originw*100+"px";
	$("html").css("fontSize",bili);
}
$(document).ready(function(){
	size(1334,'y');
})
