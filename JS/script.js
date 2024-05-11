$(function(){
    setTimeout(function(){
        $("#video").addClass("animationVideo1");
    }, 1000);
});

$(function(){
    setTimeout(function(){
        $("#headerContent").addClass("navBarAnimation");
    }, 500);
});

$(function(){
	$(".Menu").click(function(e){
		$(".overlayMenu").toggleClass("overlayMenuOpen");
		$(".backVid").toggleClass("animationVideo2");
	});
});

$(function(){
	$(".sectionBackground").hover(function(e){
		$(".sectionBackground").toggleClass("backgroundAnimation");
	});
});

