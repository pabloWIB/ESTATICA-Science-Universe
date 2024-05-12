$(function(){
    setTimeout(function(){
        $("#video").addClass("animationVideo1");
		$(".footerContent").addClass("mainContentrAnimation");
    }, 700);
});

$(function(){
    setTimeout(function(){
        $("#headerContent").addClass("navBarAnimation");
		$(".mainContent").addClass("mainContentrAnimation");
    }, 500);
});

$(function(){
	$(".Menu").click(function(e){
		$(".overlayMenu").toggleClass("overlayMenuOpen");
		$(".backVid").toggleClass("animationVideo2");
		$("body").toggleClass("bodyOverflowAnimation");
	});
});

$(function(){
	$(".sectionBackground").hover(function(e){
		$(".sectionBackground").toggleClass("backgroundAnimation");
	});
});

$(function(){
	$(".findArrowUnderline").hover(function(e){
		$(".textArea2").toggleClass("pene");
	});
});

