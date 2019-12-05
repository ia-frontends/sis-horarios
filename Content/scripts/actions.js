var $entryTime = "";

function docHeight() {
	var $globalHeight = $(window).height();
	$(".ap-sis").css("height", $globalHeight);
	$(window).smartresize(function() {
		$globalHeight = $(window).height();
		$(".ap-sis").css("height", $globalHeight);
	});
}

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

	$(".ap-clock-hour").html($hours);
	$(".ap-clock-minute").html(":" + $mins);
	$(".ap-clock-second").html(":" + $secs);
	$(".ap-clock-timearound").html($timearound);

	$entryTime = "" + $hours + ":" + $mins + ":" + $secs + "" + $timearound + "";

	return $entryTime;
}

function dateRegistre() {
	today();

	$("#ctl00_cphContenido_btnEntrada").on("click", function(e) {
		e.preventDefault();
		console.log($entryTime);
	});
}

function entryClock() {
	// Actual Time
	setInterval(today, 100);
}

$(function() {
	docHeight();
	entryClock();
	dateRegistre();
});
