function docHeight() {
	var $globalHeight = $(window).height();

	$(".ap-sis").css("height", $globalHeight);

	$(window).smartresize(function() {
		$globalHeight = $(window).height();

		$(".ap-sis").css("height", $globalHeight);
	});
}

$(function() {
	docHeight();
});
