var $entryTime = "",
	$workday = "";

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

	$entryTime = "" + $hours + ":" + $mins + ":" + $secs + "";

	return $entryTime;
}

function dateRegistre(id) {
	var $id = id;

	today(); // Hoy es

	$($id).on("click", function(e) {
		e.preventDefault();

		var $this = $(this),
			$parent = $this.closest(".ap-sis-timesheet"),
			$closestParent = $parent.next();

		// Print Data
		$(".ap-sis-userentry").html($entryTime);
		sumTime();

		animBasicOut(".ap-clock", function() {
			$parent.addClass("ap-hide");
			$closestParent.removeClass("ap-hide");
			animBasicEn(".ap-sis-data");
		});
	});
}

function workingTime() {
	var $timeWeek = "08:30:00",
		$timeFrid = "06:00:00",
		$week = new Date();

	if ($week.getDay() !== 5) {
		// Working time 8:30 hrs
		$workday = $timeWeek;
		return $workday;
	} else if ($week.getDay() == 5) {
		// Working time 6:00 hrs
		$workday = $timeFrid;
		return $workday;
	}
}

function sumTime() {
	function timestrToSec(timestr) {
		var parts = timestr.split(":");
		return parts[0] * 3600 + parts[1] * 60 + +parts[2];
	}

	function pad(num) {
		if (num < 10) {
			return "0" + num;
		} else {
			return "" + num;
		}
	}

	function formatTime(seconds) {
		return [
			pad(Math.floor(seconds / 3600)),
			pad(Math.floor(seconds / 60) % 60),
			pad(seconds % 60)
		].join(":");
	}

	// Worktime
	workingTime();

	var $iddleTime = $entryTime,
		$wDay = $workday;

	var $en = formatTime(timestrToSec($iddleTime) + timestrToSec($wDay));

	$(".ap-sis-userout").html($en);
}

function entryClock() {
	// Actual Time
	setInterval(today, 100);
}

$(function() {
	docHeight();
	entryClock();
	dateRegistre("#ctl00_cphContenido_btnEntrada");
});
