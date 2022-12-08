const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

const input = document.getElementById('link-input');
const linkfForm = document.getElementById('link-form');
const errorMsg = document.getElementById('error-msg');

// Validate a URL
function validURL(str) {
	var pattern = new RegExp(
		'^(https?:\\/\\/)?' + // protocol
			'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
			'((\\d{1,3}\\.){3}\\d{1,3}))' +
			'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
			'(\\?[;&a-z\\d%_.~+=-]*)?' +
			'(\\#[-a-z\\d_]*)?$',
		'i'
	);
	return !!pattern.test(str);
}

function formSubmit(e) {
	e.preventDefault();

	if (input.value === '') {
		console.info(true);
		errorMsg.innerHTML = 'Please enter a value';
		input.classList.add('border-red');
	} else if (!validURL(input.value)) {
		errorMsg.innerHTML = 'Please enter a valid URL';
		input.classList.add('border-red');
	} else {
		errorMsg.innerHTML = '';
		input.classList.remove('border-red');
		alert('success');
	}
}

// Toggle Mobile Menu
function navToggle() {
	btn.classList.toggle('open');
	menu.classList.toggle('flex');
	menu.classList.toggle('hidden');
}

btn.addEventListener('click', navToggle);
linkfForm.addEventListener('submit', formSubmit);
