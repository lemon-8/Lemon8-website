const setHeroTextHeight = () => {
	let _height = $("#nav-container").height();
	$("#hero-sec").css("margin-top", `-${_height}px`);
	$("#hero-text").css("padding-top", `${_height}px`);
	$("body").attr("data-bs-offset",`${_height}`)
	// console.log("Done");
};

$(document).ready(setHeroTextHeight());

$(window).resize(setHeroTextHeight());