var $widgetIsLoaded,
	$workday = "";
var $svgClock =
	'<svg width="0" height="0" class="hidden"> <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 213.025 44.438" id="logo-ia"> <path d="M131.547 30.216l-.715 3.637c.608-.57 1.566-.855 2.876-.855 1.32 0 2.344.31 3.08.924.739.623 1.105 1.643 1.105 3.075 0 .32-.017.659-.05 1.012-.037.356-.097.734-.18 1.136-.358 1.848-.98 3.192-1.862 4.029-.887.844-2.151 1.264-3.803 1.264-1.475 0-2.581-.307-3.325-.917-.744-.609-1.113-1.604-1.113-2.98 0-.306.021-.624.062-.96.042-.336.098-.686.169-1.063l1.61-8.302h2.146zm.533 12.428a5.45 5.45 0 0 0 1.304-.135c.367-.088.678-.257.934-.507.26-.256.479-.595.661-1.035.18-.435.343-1.003.497-1.699.194-.902.295-1.631.295-2.186 0-.461-.055-.838-.17-1.139a1.482 1.482 0 0 0-.489-.695 1.947 1.947 0 0 0-.794-.353 4.948 4.948 0 0 0-1.07-.106c-.498 0-.926.055-1.271.154a2.022 2.022 0 0 0-.893.554c-.251.264-.46.612-.626 1.052-.167.437-.319.998-.459 1.678-.179.851-.272 1.58-.272 2.189 0 .836.188 1.412.564 1.739.373.323.967.489 1.789.489zm11.409-.29h1.073c.298 0 .583-.009.846-.023.261-.01.526-.021.79-.03.265-.004.559-.024.874-.049l-.684 1.79c-.472.038-.937.068-1.4.083-.453.014-1.018.021-1.686.021-.82 0-1.502-.096-2.054-.283-.548-.188-.99-.451-1.322-.789a3.047 3.047 0 0 1-.718-1.211 5.183 5.183 0 0 1-.218-1.532c0-.595.075-1.263.23-2 .223-1.111.53-2.014.912-2.71.393-.692.838-1.235 1.339-1.624a4.14 4.14 0 0 1 1.625-.79 7.596 7.596 0 0 1 1.765-.209c1.382 0 2.379.256 2.993.77.618.512.931 1.196.931 2.043 0 .317-.04.656-.127 1a4.251 4.251 0 0 1-.491 1.241 2.59 2.59 0 0 1-.896.874c-.381.229-.853.403-1.419.522-.558.116-1.231.178-2.009.178h-2.707a2.906 2.906 0 0 0-.027.311c-.01.113-.017.218-.017.314 0 .707.183 1.232.544 1.581.363.347.978.522 1.853.522zm1.254-7.627c-.475 0-.884.056-1.229.169a2.294 2.294 0 0 0-.921.542c-.263.249-.488.578-.678.99a7.804 7.804 0 0 0-.491 1.527h2.418c.488 0 .891-.018 1.21-.06.318-.043.579-.111.78-.212.199-.097.362-.227.473-.393.112-.168.2-.371.267-.606.089-.265.125-.512.125-.751 0-.389-.14-.686-.434-.896-.297-.207-.8-.31-1.52-.31zm6.809-4.511h2.145l-2.695 13.886h-2.147l2.697-13.886zm3.851 3.116h2.143l-2.085 10.77h-2.143l2.085-10.77zm1.317-.885c-.779 0-1.165-.35-1.165-1.041 0-.624.149-1.053.455-1.282.306-.228.682-.345 1.127-.345.333 0 .611.076.834.223.219.144.332.418.332.82 0 .568-.13.983-.386 1.24-.256.258-.654.385-1.197.385zm5.935 9.907h1.073c.299 0 .578-.009.847-.023.263-.01.527-.021.791-.03.26-.004.552-.024.874-.049l-.686 1.79a29.62 29.62 0 0 1-1.396.083 56.76 56.76 0 0 1-1.687.021c-.821 0-1.507-.096-2.054-.283-.553-.188-.991-.451-1.324-.789a3.03 3.03 0 0 1-.721-1.211 5.087 5.087 0 0 1-.217-1.532c0-.595.074-1.263.233-2 .216-1.111.525-2.014.907-2.71.395-.692.841-1.235 1.339-1.624a4.16 4.16 0 0 1 1.625-.79 7.628 7.628 0 0 1 1.771-.209c1.376 0 2.376.256 2.994.77.617.512.927 1.196.927 2.043 0 .317-.047.656-.13 1a4.302 4.302 0 0 1-.484 1.241c-.22.352-.516.644-.9.874-.383.229-.855.403-1.414.522a10.13 10.13 0 0 1-2.012.178h-2.708a4.377 4.377 0 0 0-.043.625c0 .707.181 1.232.541 1.581.359.347.978.522 1.854.522zm1.252-7.627c-.472 0-.882.056-1.23.169a2.276 2.276 0 0 0-.916.542c-.266.249-.489.578-.678.99-.189.406-.352.916-.491 1.527h2.419c.484 0 .891-.018 1.209-.06.319-.043.578-.111.781-.212.201-.097.358-.227.469-.393.112-.168.202-.371.271-.606.08-.265.125-.512.125-.751 0-.389-.148-.686-.44-.896-.289-.207-.797-.31-1.519-.31zm6.948 9.375l-1.996-10.77h2.209l1.27 8.537 4.545-8.537h2.206l-5.98 10.77h-2.254zm11.837-1.748h1.071c.303 0 .582-.009.844-.023.266-.01.528-.021.796-.03.263-.004.552-.024.874-.049l-.689 1.79c-.471.038-.934.068-1.396.083-.458.014-1.02.021-1.685.021-.82 0-1.508-.096-2.055-.283-.547-.188-.988-.451-1.324-.789a3.053 3.053 0 0 1-.721-1.211 5.285 5.285 0 0 1-.216-1.532c0-.595.076-1.263.232-2 .221-1.111.524-2.014.91-2.71.392-.692.837-1.235 1.336-1.624a4.182 4.182 0 0 1 1.624-.79 7.666 7.666 0 0 1 1.771-.209c1.375 0 2.375.256 2.99.77.621.512.93 1.196.93 2.043 0 .317-.041.656-.126 1a4.307 4.307 0 0 1-.49 1.241 2.615 2.615 0 0 1-.896.874c-.384.229-.853.403-1.417.522-.561.116-1.229.178-2.009.178h-2.71a3.19 3.19 0 0 0-.027.311 2.93 2.93 0 0 0-.014.314c0 .707.181 1.232.54 1.581.363.347.981.522 1.857.522zm1.253-7.627c-.473 0-.885.056-1.229.169a2.321 2.321 0 0 0-.919.542c-.266.249-.492.578-.678.99a7.75 7.75 0 0 0-.488 1.527h2.417c.485 0 .888-.018 1.211-.06.313-.043.578-.111.779-.212.201-.097.357-.227.469-.393.111-.168.2-.371.27-.606.086-.265.123-.512.123-.751 0-.389-.145-.686-.434-.896-.294-.207-.803-.31-1.521-.31zm12.962-1.729c.799 0 1.446.102 1.936.299.488.199.86.487 1.126.845l.753-3.926h2.145l-2.358 12.159c-.07.322-.15.586-.248.799a1.547 1.547 0 0 1-.4.534 1.8 1.8 0 0 1-.618.324 5.64 5.64 0 0 1-.92.177c-.405.026-.804.048-1.196.06-.398.014-.699.021-.912.021a8.818 8.818 0 0 1-1.988-.211 4.126 4.126 0 0 1-1.555-.684 3.239 3.239 0 0 1-1.007-1.291c-.244-.542-.367-1.209-.367-2 0-.615.071-1.266.211-1.961.19-1.015.462-1.854.811-2.523.346-.666.756-1.194 1.22-1.583.465-.39.981-.657 1.541-.813a7.064 7.064 0 0 1 1.826-.226zm2.452 3.855c0-.808-.223-1.351-.671-1.637-.457-.284-1.057-.427-1.804-.427-.457 0-.861.05-1.199.146a2.01 2.01 0 0 0-.886.52c-.248.253-.464.59-.637 1.012-.175.424-.327.964-.468 1.615-.084.389-.143.742-.177 1.063a9.65 9.65 0 0 0-.053.871c0 .503.067.915.197 1.236.133.315.321.567.563.759.246.188.538.317.887.386.346.067.734.101 1.166.101.266 0 .599-.01 1-.029a9.72 9.72 0 0 0 1.084-.113l.88-4.378c.023-.152.052-.34.078-.551.027-.219.04-.408.04-.574zm9.309-3.855c1.391 0 2.462.294 3.22.886.758.59 1.137 1.607 1.137 3.05 0 .319-.023.653-.064 1.004-.043.346-.097.721-.169 1.124-.182.944-.422 1.753-.718 2.428-.296.671-.679 1.23-1.134 1.666a4.387 4.387 0 0 1-1.649.97c-.636.21-1.377.313-2.231.313-1.39 0-2.459-.296-3.217-.885-.757-.592-1.136-1.611-1.136-3.053 0-.32.02-.657.063-1.003.04-.349.097-.72.166-1.123.182-.943.422-1.756.717-2.431.304-.671.68-1.228 1.141-1.666.461-.434 1-.761 1.633-.969.634-.206 1.381-.311 2.241-.311zm-.232 1.791c-.521 0-.968.062-1.331.178a2.072 2.072 0 0 0-.915.583c-.252.271-.458.628-.618 1.071a12.913 12.913 0 0 0-.446 1.668c-.085.445-.145.844-.196 1.198a6.81 6.81 0 0 0-.071.948c0 .848.196 1.428.593 1.736.393.315 1.009.472 1.843.472.525 0 .97-.057 1.332-.176.362-.116.666-.313.917-.585.251-.271.457-.627.615-1.071.159-.444.311-.999.449-1.667.082-.448.151-.842.196-1.199a7.12 7.12 0 0 0 .071-.948c0-.848-.199-1.426-.591-1.737-.396-.317-1.014-.471-1.848-.471zm-19.832 9.459c-.775 0-1.163-.349-1.163-1.043 0-.625.15-1.053.455-1.282.307-.228.682-.345 1.127-.345.336 0 .611.077.834.222.223.146.332.419.332.82 0 .568-.128.985-.385 1.243-.256.256-.655.385-1.2.385z"fill="#333F5D"></path> <path d="M18.118 0h-5.9c-1.869 0-2.565.48-3.843 2.649 0 0-7.248 12.403-7.525 12.916-.884 1.636-1.29 2.876-.16 4.891.959 1.705 2.87 4.476 2.87 4.476L18.118 0zm20.744 14.874c-.781-1.345-7.051-11.979-7.302-12.34C30.329.467 29.625 0 27.789 0h-4.298c-1.871 0-2.564.48-3.841 2.649 0 0-13.595 23.233-13.588 23.233h6.134v.004c1.751-.029 2.443-.541 3.685-2.646l9.754-16.729.004-.009 4.514 7.859h-3.58c-1.881 0-2.57.549-3.815 2.652-.672 1.138-2.677 4.511-2.646 4.576l10.275-.006s-2.248 3.861-2.498 4.297h6.146v.004c1.751-.029 2.443-.541 3.684-2.646l1.456-2.37c.495-.813.928-1.679.919-2.68-.01-1.196-.66-2.327-1.232-3.314z"fill="#E7412B"></path> </symbol> <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.8 44.4" id="logo-ia-white"><path d="M31.1 0H21c-3.2 0-4.4.8-6.6 4.5 0 0-12.4 21.3-12.9 22.2-1.5 2.8-2.2 4.9-.3 8.4 1.6 2.9 4.9 7.7 4.9 7.7L31.1 0zm35.6 25.5C65.4 23.2 54.6 5 54.2 4.4 52.1.8 50.9 0 47.7 0h-7.4c-3.2 0-4.4.8-6.6 4.5L10.4 44.4h10.5c3 0 4.2-.9 6.3-4.5L44 11.2l7.7 13.5h-6.1c-3.2 0-4.4.9-6.5 4.6-1.2 2-4.6 7.7-4.5 7.9h17.6s-3.9 6.6-4.3 7.4h10.6c3 0 4.2-.9 6.3-4.5l2.5-4.1c.8-1.4 1.6-2.9 1.6-4.6-.1-2.2-1.2-4.2-2.2-5.9z"fill="#fff"></path></symbol> <symbol viewBox="0 0 20 11" xmlns="http://www.w3.org/2000/svg" id="presencial"> <path d="M15.8 11.12v-7.4H4.2v7.8h11.6v-.4zm-3.4-6.2v.4H8.2v.6h-.4v-1h4.6zm-6.8.4v.6h-.4v-1h1.6v.4H5.6zm1.2 1.8v.4H5.6v.6h-.4v-1h1.6zm7.8-2.2v.4h-1.2v.6H13v-1h1.6zM13 7.12h1.6v.4h-1.2v.6H13v-1zm-5.4 0h4.8v4H12v-3.6h-1.8v3.6h-.4v-3.6H8v3.6h-.4v-4z" fill="#333F5D"></path> <path d="M18.4 11.12V6.922h.4V10a1.6 1.6 0 0 0 1-1.482c0-.662-.758-3.6-1.6-3.6-.842 0-1.6 2.938-1.6 3.6a1.6 1.6 0 0 0 1.4 1.586v1.416h.4v-.4zm-.934-2.856l.282-.282.252.252V8.8l-.534-.536z" fill="#5AD58D"></path> <path fill="#333F5D" d="M15.8 11.12v.4H20v-.4z"></path> <path d="M2 11.12v-4.2h.4V10a1.6 1.6 0 0 0 1-1.482c0-.662-.758-3.6-1.6-3.6-.842 0-1.6 2.938-1.6 3.6a1.6 1.6 0 0 0 1.4 1.586v1.416H2v-.4zm-.934-2.856l.282-.282.252.252V8.8l-.534-.536z" fill="#5AD58D"></path> <path fill="#333F5D" d="M4.2 11.12H0v.4h4.2zm11-10.04L4.8 2.952v.372h10.4z"></path> </symbol> <symbol viewBox="0 0 23 16" xmlns="http://www.w3.org/2000/svg" id="remoto"> <path d="M18.784 6.398h1.793l-2.954-2.145v-2.69h-1.758v1.414L12.877.807l-7.7 5.59H6.97v7.213H5.81v1.397h14.134V13.61h-1.16V6.398zm-6.962 3.832h-2.11V8.12h2.11v2.11zm4.219 3.446h-2.11v-4.22h2.11v4.22z" fill="#F4B393"></path> <path fill="#5AD58D" d="M22.362 13.876l-1.137-5.384-1.017 5.384h.866v1.131h.422v-1.131zm-17.209-1.3L2.515 1.007.153 12.577h2.01v2.43h.98v-2.43z"></path> </symbol> </svg>';

function widgetConstructor() {
	var $cssMark =
		"<!-- Css widget -->" +
		'<link href="../Content/css/master.css" rel="stylesheet">';
	var $markDown =
		'<div class="ap-sis" style="display: none">' +
		'<a href="#" class="ap-sis-btn ap-sis-cta--widget">' +
		'<svg class="ap-sis-clock" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 57.44 64.95"><defs><mask id="mask" x="-4.67" y="0" width="59" height="59.4" maskUnits="userSpaceOnUse"><g id="mask-2"><ellipse id="path-1" class="cls-1" cx="24.83" cy="29.7" rx="29.5" ry="29.7"/></g></mask></defs><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><g id="stop-watch"><path class="cls-1" d="M28.72,9.51A26.72,26.72,0,1,1,2,36.23,26.75,26.75,0,0,1,28.72,9.51m0-2A28.72,28.72,0,1,0,57.44,36.23,28.72,28.72,0,0,0,28.72,7.51Z"/><g id="hands"><path id="hour-hand" class="cls-2" d="M43.63,36.3h0A1.64,1.64,0,0,1,42,37.94H30.42a1.63,1.63,0,0,1-1.64-1.64h0a1.63,1.63,0,0,1,1.64-1.64H42A1.64,1.64,0,0,1,43.63,36.3Z"/><rect id="minute-hand" class="cls-3" x="27.83" y="15.51" width="2" height="20.76" rx="1"/></g><g class="cls-4"><g id="circle"><ellipse id="middle-point" class="cls-3" cx="28.83" cy="36.3" rx="1.64" ry="1.65"/></g></g><g id="buttons"><path id="button-top" class="cls-2" d="M23.92,0h9.8a1.65,1.65,0,0,1,1.65,1.65h0A1.65,1.65,0,0,1,33.72,3.3h-9.8a1.65,1.65,0,0,1-1.65-1.65h0A1.65,1.65,0,0,1,23.92,0Z"/><path id="button-right" class="cls-2" d="M50.26,7.07l2.54,2A1.66,1.66,0,0,1,53,11.44h0a1.63,1.63,0,0,1-2.31.24l-2.55-2a1.66,1.66,0,0,1-.24-2.32h0A1.64,1.64,0,0,1,50.26,7.07Z"/></g><rect class="cls-5" x="50.45" y="35.62" width="3.99" height="1.36" rx="0.68"/><rect class="cls-5" x="3" y="35.62" width="3.99" height="1.36" rx="0.68"/><rect class="cls-5" x="26.83" y="11.83" width="3.99" height="1.36" rx="0.68" transform="translate(41.34 -16.31) rotate(90)"/><rect class="cls-5" x="26.83" y="59.27" width="3.99" height="1.36" rx="0.68" transform="translate(88.77 31.12) rotate(90)"/></g></g></g></svg>' +
		"</a>" +
		// '<div class="ap-sis-btn-txt" id="btn-tt">Calcula tu salida</div>' +
		'<aside class="ap-sis-widget">' +
		'<header class="ap-sis-head">' +
		'<div class="ap-sis-panel">' +
		'<h1 class="ap-sis-t">' +
		'<svg class="icon">' +
		'<use xlink:href="#logo-ia-white"></use>' +
		"</svg>" +
		"</h1>" +
		'<h2 class="ap-sis-tt">Calcula tu salida Prro!</h2>' +
		"</div>" +
		"</header>" +
		'<section class="ap-sis-area">' +
		'<div class="ap-sis-timeentry">' +
		'<p class="ap-txt ap-txt-clock">Hora de entrada:</p>' +
		'<p class="ap-txt ap-txt-clock-time ap-sis-time--in"></p>' +
		"</div>" +
		'<div class="ap-sis-timeentry">' +
		'<p class="ap-txt ap-txt-clock">Tu salida:</p>' +
		'<p class="ap-txt ap-txt-clock-time ap-sis-time--out"></p>' +
		"</div>" +
		'<div class="ap-sis-timeiddle">' +
		'<p class="ap-txt">¿Tiempo no registrable?</p>' +
		'<input type="text" placeholder="Sali a comer, pedi permiso, etc...">' +
		"</div>" +
		"</section>" +
		"</aside>" +
		"</div>";

	$("head").append($cssMark);
	$("body").append($markDown, $svgClock);
	$widgetIsLoaded = true;
	return $widgetIsLoaded;
}

function widgetRun($widgetIsLoaded) {
	if ($widgetIsLoaded === true) {
		showButton();
	}
}

function showButton() {
	var $linkButton = $(".ap-sis-cta--widget"),
		$usrSisname = $(".ctl00_cphContenido_lblNombre").html();

	// new CircleType(document.getElementById("btn-tt")).dir(-1).radius(384);
	setTimeout(function() {
		$(".ap-sis").removeAttr("style");
	}, 1000);

	$linkButton.on("click", function(e) {
		e.preventDefault();
		animBasicEn(".ap-sis-widget", function() {
			$(".ap-sis-time--in").html($usrSisEntry);
			sumTime();
			animBasicEn(".ap-sis-timeentry");
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

	var $iddleTime = $usrSisEntry,
		$wDay = $workday;

	var $en = formatTime(timestrToSec($iddleTime) + timestrToSec($wDay));

	$(".ap-sis-time--out").html($en);
}

$(function() {
	widgetConstructor();
});

$(document).ready(function() {
	widgetRun($widgetIsLoaded);
});
