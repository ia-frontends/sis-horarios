function animBasicEn(Class, callBack) {
	var $el = Class,
		$tl = new TimelineMax();
	$.each($($el), function() {
		$tl.to($(this), 0.2, {
			ease: Expo.easeOut,
			y: 0,
			opacity: 1,
			onComplete: callBack
		});
	});
}

function animBasicOut(Class, callBack) {
	var $el = Class,
		$tl = new TimelineMax();

	$tl.to($($el), 0.8, {
		ease: Expo.easeIn,
		y: 16,
		opacity: 0,
		onComplete: callBack
	});
}
