$(function(){
    setTimeout(function(){
        $("#video").addClass("animationVideo1");
    }, 700);
});

$(function(){
    setTimeout(function(){
        $("#headerContent").addClass("navBarAnimation");
		$(".mainContent").addClass("mainContentrAnimation");
    }, 2500);
});

$(function(){
    setTimeout(function(){
		$(".footerContent").addClass("mainContentrAnimation");
    }, 2700);
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

