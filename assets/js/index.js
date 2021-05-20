const setHeroTextHeight = () => {
	let _height = $("#nav-container").height();
	$("#hero-sec").css("margin-top", `-${_height}px`);
	$("#hero-text").css("padding-top", `${_height}px`);
	$("body").attr("data-bs-offset",`${_height}`);
	// console.log("Done");
};

const submitForm = () => {
	let _form = $("#contactForm")[0];
	if (!_form.reportValidity()) return;
	let formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfbjgddaCo0EMHwBv7YdqVsDX1MPZ9xnUMiv2yKqI0WkRwU9A/formResponse?usp=pp_url&submit=Submit';
	let requirementText = '';

	for (let index = 0; index < _form.length; index++) {
		const _inp = _form.elements[index];
		const _id = `${_inp.id}`;
		// console.log(_id);
		if (_id.includes('checkbox')) {
			if (_inp.checked) requirementText += `${_inp.value}|`;
		}	else {
			const val = _inp.value.replace("+", "%2B").replace(" ","+");
			formUrl += `&${_id}=${val}`;
		}
	}

	if (requirementText !== '') {
		const val = requirementText.replace("+", "%2B").replace(" ","+");
		formUrl += `&entry.333729521=${val}`;
	}

	fetch(formUrl, {mode: 'no-cors'})
		.then(resp => {
			if (!resp.ok) {
				throw Error(resp.statusText);
			}
			return resp;
		})
		.catch(err => {
			$("#responseRecorded").show();
			// alert('Thanks for contacting ss, We\'ll get back to you shortly :)');
			_form.reset();
		});
};

$(document).ready(() => {
	$("#responseRecorded").hide();
	setHeroTextHeight();
});

$(window).resize(setHeroTextHeight());
