var $entryTime = "";

function today() {
	var $fullDate = new Date(),
		$hours = $fullDate.getHours(),
		$mins = $fullDate.getMinutes(),
		$secs = $fullDate.getSeconds(),
		$timearound = "";

	if ($hours < 10) {
		$hours = "0" + $hours;
	}
	if ($mins < 10) {
		$mins = "0" + $mins;
	}
	if ($secs < 10) {
		$secs = "0" + $secs;
	}

	if ($hours > 12) {
		$hours = $hours - 12;

		if ($hours == 12) {
			$hours = $hours;
			$timearound = " am";
		} else {
			$hours = $hours;
			$timearound = " pm";
		}
	} else {
		$timearound = " am";
	}

	// $(".ap-clock-hour").html($hours);
	// $(".ap-clock-minute").html(":" + $mins);
	// $(".ap-clock-second").html(":" + $secs);
	// $(".ap-clock-timearound").html($timearound);

	$("#ctl00_cphContenido_lblReloj").html(
		"" + $hours + ":" + $mins + ":" + $secs + $timearound + ""
	);

	$entryTime = "" + $hours + ":" + $mins + ":" + $secs + "";

	return $entryTime;
}

function entryClock() {
	// Actual Time
	setInterval(today, 100);
}

$(function() {
	entryClock();
});
