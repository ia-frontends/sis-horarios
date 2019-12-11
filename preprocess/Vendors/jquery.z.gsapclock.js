var gsapClock = (function($) {
	var s;
	return {
		settings: {
			$minuteHand: $("#minute-hand"),
			$hourHand: $("#hour-hand"),
			$buttonTop: $("#button-top")
		},
		init: function() {
			s = this.settings;
			this.bindUIActions();
		},
		bindUIActions: function() {
			var tl = new TimelineMax();
			function buttonPress() {
				TweenMax.to($("#button-top"), 0.1, {
					y: 4
				});
				TweenMax.to($("#button-top"), 0.1, {
					y: 0,
					delay: 0.1
				});
			}

			tl.add(
				TweenMax.to($("#minute-hand"), 2, {
					rotation: "360",
					repeat: -1,
					ease: Power0.easeNone,
					transformOrigin: "50% 100%"
				}),
				TweenMax.to($("#hour-hand"), 48, {
					rotation: "360",
					repeat: -1,
					ease: Power0.easeNone,
					transformOrigin: "0% 50%"
				})
			);
			tl.pause();

			function animationControll() {
				buttonPress();
				tl.resume();
				setTimeout(function() {
					buttonPress();
					tl.pause();
				}, 2000);
			}

			animationControll();
			setInterval(function() {
				animationControll();
			}, 3500);
		}
	};
})(jQuery);
