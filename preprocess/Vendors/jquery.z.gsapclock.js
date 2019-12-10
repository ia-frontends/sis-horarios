// var gsapClock = (function($) {
// 	var s;
// 	return {
// 		settings: {
// 			$minuteHand: $("#minute-hand"),
// 			$hourHand: $("#hour-hand"),
// 			$buttonTop: $("#button-top")
// 		},
// 		init: function() {
// 			s = this.settings;
// 			this.bindUIActions();
// 		},
// 		bindUIActions: function() {}
// 	};
// })(jQuery);

var tl = new TimelineMax();

//make it easier to play with the timing:
var durations = { press: 0.1, minute: 2, hour: 48, pause: 2 };

//since we want to stop the hour hand motion each time the minute hand goes around, it's easiest to just put it in its own tween so we can pause()/resume(). This could easily be a timeline if you prefer.
var hour = TweenMax.to("#hour-hand", durations.hour, {
	rotation: 360,
	repeat: -1,
	ease: Power0.easeNone,
	transformOrigin: "0% 50%"
});

//put the button press into its own repeating timeline
var buttonPress = new TimelineMax({
	repeat: -1,
	repeatDelay: durations.minute - durations.press * 2
});
//when the button is fully depressed, pause the "hour" tween. We do a repeat:1, yoyo:true as a simple way to make the button return to its original position rather than using two tweens (down, then up)
buttonPress.to($("#button-top"), durations.press, {
	y: 4,
	repeat: 1,
	yoyo: true,
	onRepeat: function() {
		hour.pause();
	}
});

//the 2nd time the button is depressed, resume() the hour timeline.
buttonPress.to(
	$("#button-top"),
	durations.press,
	{
		y: 4,
		repeat: 1,
		yoyo: true,
		onRepeat: function() {
			hour.resume();
		}
	},
	durations.pause
);

//main timeline - do the repeating minute hand animation that's repeated. Notice the repeatDelay is used for the appearance of pausing.
tl.to($("#minute-hand"), durations.minute, {
	rotation: "360",
	repeat: -1,
	repeatDelay: durations.pause,
	ease: Power0.easeNone,
	transformOrigin: "50% 100%"
});

//nest the buttonPress timeline at exactly the right spot.
tl.add(buttonPress, durations.minute - durations.press);
