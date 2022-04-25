
// navbar

flashNavbarAnimations();

const navbar = document.querySelector('.fl-navbar');

const hideSmScreenMenuBtn = document.querySelector('.close-sm-screen-menu-btn');
hideSmScreenMenuBtn.addEventListener('click', flashHideSmScreenMenu);

const navDropdown = () => {

	const item = document.querySelector('.fl-nav-item-dropdown');
	const backgorund = document.querySelector('.navbar-dropdown-menu-bg');


	const changeColor = () => { navbar.classList.add('navbar-bg-grey'); }

	const setDefaultColor = () => { navbar.classList.remove('navbar-bg-grey'); }

	const showBackground = () => { backgorund.classList.add('fl-show'); }

	const hideBackground = () => { backgorund.classList.remove('fl-show'); }


	item.addEventListener('mouseover', changeColor);
	item.addEventListener('mouseout', setDefaultColor);
	item.addEventListener('mouseover', showBackground);
	item.addEventListener('mouseout', hideBackground);

}

navDropdown();


const navbarSearch = () => {

	const searchForm = document.querySelector('.fl-navbar-search-parent-js');
	const input = searchForm.querySelector('.fl-navbar-search-input');
	const reset = searchForm.querySelector('.fl-navbar-search-reset');

	const newWidth = () => { searchForm.classList.add('fl-animation'); }

	const defaultWidth = () => { searchForm.classList.remove('fl-animation'); }

	const toggleReset = () => { 

		if (input.value != "") reset.classList.add('fl-show');
		else reset.classList.remove('fl-show');

	}

	const hideReset = () => { reset.classList.remove('fl-show'); }

	input.addEventListener('focusin', newWidth);
	input.addEventListener('focusout', defaultWidth);
	input.addEventListener('keyup', toggleReset);
	reset.addEventListener('click', hideReset);

}

navbarSearch();


const userModalForm = () => {

	// elements-and-values
	// sign-in
	const signInModalCon = document.querySelector('#signInModalContainer');
	const signInEmail = signInModalCon.querySelector('#email');
	const signInPassword = signInModalCon.querySelector('#password');
	const signInEmailLabel = signInModalCon.querySelector('.user-modal-email-label');
	const signInPasswordLabel = signInModalCon.querySelector('.user-modal-password-label');
	// register
	const registerModalCon = document.querySelector('#registerModalContainer');
	const firstName = registerModalCon.querySelector('#firstName');
	const firstNameLabel = registerModalCon.querySelector('.user-modal-first-name-label');
	const lastName = registerModalCon.querySelector('#lastName');
	const lastNameLabel = registerModalCon.querySelector('.user-modal-last-name-label');
	const registerEmail = registerModalCon.querySelector('#email');
	const registerEmailLabel = registerModalCon.querySelector('.user-modal-email-label');
	const registerPassword = registerModalCon.querySelector('#password');
	const registerPasswordLabel = registerModalCon.querySelector('.user-modal-password-label');
	const confirmPassword = registerModalCon.querySelector('#confirmPassword');
	const confirmPasswordLabel = registerModalCon.querySelector('.user-modal-confirm-password-label');
	const month = registerModalCon.querySelector('#month');
	const monthLabel = registerModalCon.querySelector('.user-modal-month-label');
	const day = registerModalCon.querySelector('#day');
	const dayLabel = registerModalCon.querySelector('.user-modal-day-label');
	const year = registerModalCon.querySelector('#year');
	const yearLabel = registerModalCon.querySelector('.user-modal-year-label');

	// functions
	function replaceLabel() {
		this.parentElement.querySelector('.user-modal-label').classList.add('fl-show');
	}

	function placeLabel() {

		if (this.value == "") 
			this.parentElement.querySelector('.user-modal-label').classList.remove('fl-show');

	}

	function focusIn() { this.parentElement.querySelector('.fl-form-input').focus(); }

	// adding-functions
	// sign-in
	signInEmail.addEventListener('focusin', replaceLabel);
	signInEmail.addEventListener('focusout', placeLabel);
	signInEmailLabel.addEventListener('click', focusIn);

	signInPassword.addEventListener('focusin', replaceLabel);
	signInPassword.addEventListener('focusout', placeLabel);
	signInPasswordLabel.addEventListener('click', focusIn);

	// register
	firstName.addEventListener('focusin', replaceLabel);
	firstName.addEventListener('focusout', placeLabel);
	firstNameLabel.addEventListener('click', focusIn);

	lastName.addEventListener('focusin', replaceLabel);
	lastName.addEventListener('focusout', placeLabel);
	lastNameLabel.addEventListener('click', focusIn);

	registerEmail.addEventListener('focusin', replaceLabel);
	registerEmail.addEventListener('focusout', placeLabel);
	registerEmailLabel.addEventListener('click', focusIn);

	registerPassword.addEventListener('focusin', replaceLabel);
	registerPassword.addEventListener('focusout', placeLabel);
	registerPasswordLabel.addEventListener('click', focusIn);

	confirmPassword.addEventListener('focusin', replaceLabel);
	confirmPassword.addEventListener('focusout', placeLabel);
	confirmPasswordLabel.addEventListener('click', focusIn);

	month.addEventListener('focusin', replaceLabel);
	month.addEventListener('focusout', placeLabel);
	monthLabel.addEventListener('click', focusIn);
	month.addEventListener('focusin', function() { month.setAttribute('placeholder', 'MM'); month.parentElement.classList.add('red-border'); });
	month.addEventListener('focusout', function() { month.removeAttribute('placeholder'); month.parentElement.classList.remove('red-border'); });

	day.addEventListener('focusin', replaceLabel);
	day.addEventListener('focusout', placeLabel);
	dayLabel.addEventListener('click', focusIn);
	day.addEventListener('focusin', function() { day.setAttribute('placeholder', 'DD'); day.parentElement.classList.add('red-border'); });
	day.addEventListener('focusout', function() { day.removeAttribute('placeholder'); day.parentElement.classList.remove('red-border');});

	year.addEventListener('focusin', replaceLabel);
	year.addEventListener('focusout', placeLabel);
	yearLabel.addEventListener('click', focusIn);
	year.addEventListener('focusin', function() { year.setAttribute('placeholder', 'YYYY'); year.parentElement.classList.add('red-border'); });
	year.addEventListener('focusout', function() { year.removeAttribute('placeholder'); year.parentElement.classList.remove('red-border'); });

	// calling-functions
	flashInputCharacterLimit(month, 2);
	flashInputCharacterLimit(day, 2);
	flashInputCharacterLimit(year, 4);
	
}

userModalForm();

// the-end-of-navbar



// navbar-search-in-small-screen

smallScreenNavbarSearch();

function smallScreenNavbarSearch() {

	// elements-and-values
	const con = document.querySelector('.fl-navbar-search-in-small-screen');

	// avoiding-errors
	if (con == undefined) return;

	const form = con.querySelector('.fl-navbar-search');
	const input = form.querySelector('.fl-navbar-search-input');
	const showResults = form.getAttribute('show-results');
	const results = con.querySelector('.fl-navbar-results-of-search');
	const submit = form.querySelector('.fl-navbar-search-submit');
	const submitCon = form.querySelector('.navbar-search-buttons-con-js');
	const reset = form.querySelector('.fl-navbar-search-reset');

	const toggler = document.querySelector('.fl-navbar-search-toggler');
	const icon = con.querySelector('.fl-navbar-search-toggler .fa');
	var isHovered = true;
	
	con.addEventListener('click', function(e) {
		// e.preventDefault();
		input.focus();
	})

	


	// adding-functions
	if (showResults == "true") { 

		input.addEventListener('keyup', toggle);
		input.addEventListener('focusin', show);
		input.addEventListener('focusout', hide);

	} else {

		input.addEventListener('keyup', enableDisableButtons);
		
	}

	if (reset != undefined) reset.addEventListener('click', disableButtons);
	
	if (toggler) {

		toggler.addEventListener('click', toggleContainer);
		toggler.addEventListener('mouseover', mouseIsOver);
		toggler.addEventListener('mouseout', mouseIsOut);

	}
		
	con.addEventListener('mouseover', mouseIsOver);
	con.addEventListener('mouseout', mouseIsOut);

	if (showResults == "true") { 
		results.addEventListener('mouseover', mouseIsOver);
		results.addEventListener('mouseout', mouseIsOut);
	}	
	
	// functions
	const newWidth = () => { con.classList.add('fl-animation'); }

	const defaultWidth = () => { con.classList.remove('fl-animation'); }

	const toggleReset = () => { 

		if (input.value != "") reset.classList.add('fl-show');
		else reset.classList.remove('fl-show');

	}

	const hideReset = () => { reset.classList.remove('fl-show'); }

	function toggleContainer() {

		if (!con.classList.contains('fl-show'))
			document.documentElement.addEventListener('click', closeContainer);
		else
			document.documentElement.removeEventListener('click', closeContainer);

		this.classList.toggle('fl-active');
		con.classList.toggle('fl-show');
		toggleIcon();

	}



	function closeContainer() {

		if (!isHovered) {

			con.classList.remove('fl-show');
			document.documentElement.removeEventListener('click', closeContainer);

			if (toggler) toggler.classList.remove('fl-active');

			if (icon == undefined) return;

			icon.classList.add('fa-search');
			icon.classList.remove('fa-times');

		}	

	}

	function toggleIcon() {

		if (icon == undefined) return;

		icon.classList.toggle('fa-search');
		icon.classList.toggle('fa-times');

	}

	function mouseIsOver() { isHovered = true; }

	function mouseIsOut() { isHovered = false; }

	function toggle() {

		if (this.value != "") {

			results.classList.add('fl-show');
			enableSubmit();
			enableReset();

		} else { 

			hide();
			disableSubmit();
			disableReset();

		}	

	}

	function show() {

		if (this.value != "") { 

			results.classList.add('fl-show');
			enableSubmit();
			enableReset();

		}	


	}

	function hide() { results.classList.remove('fl-show'); }

	function enableSubmit() { submit.removeAttribute('disabled'); }

	function disableSubmit() { submit.setAttribute('disabled',''); }

	function enableReset() { if (reset != undefined) reset.removeAttribute('disabled'); }

	function disableReset() { if (reset != undefined) reset.setAttribute('disabled',''); }

	function disableButtons() {

		submit.setAttribute('disabled','');
		if (reset != undefined) reset.setAttribute('disabled','');
		input.value = "";

	}

	function enableDisableButtons() {

		if (this.value != "") {

			enableSubmit();
			enableReset();

		} else { 

			disableSubmit();
			disableReset();

		}

	}

	// adding-functions
	input.addEventListener('focusin', newWidth);
	input.addEventListener('focusout', defaultWidth);
	input.addEventListener('keyup', toggleReset);
	reset.addEventListener('click', hideReset);

}

// the-end-of-navbar-search-in-small-screen