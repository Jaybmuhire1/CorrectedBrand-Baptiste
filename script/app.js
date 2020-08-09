const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
// End of responsiveness js 

// Start of contact form 

var db=firebase.firestore();
document.getElementById('contactForm'). addEventListener('submit', submitForm);
function submitForm(e) {
	e.preventDefault();
	var firstname=myInput('fname');
	var lastaname=myInput('lname');
	var subject1=myInput('subject');
	saveName(firstname,lastaname,subject1);
	console.log(myInput('subject'));
}
function saveName(a,b,c) {
db.collection('Contact').doc().set({
	FirstName:a,
	LastName:b,
	Subject:c
})

.then(function (){console.log('Contact Saved');})
.catch(function (error){console.log('Failed Contact');})
}

function myInput(id) {
	return document.getElementById(id).value;
}

// End of start of contact form 

