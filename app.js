let m = document.querySelector('#m');
let d = document.querySelector('#d');
let c = document.querySelector('#c');

let mSnd = document.querySelector('#m_snd');
let dSnd = document.querySelector('#d_snd');
let cSnd = document.querySelector('#c_snd');

let nav = document.querySelector('.navbar');
let menu = document.querySelector('.navbar .dropdown');
let menuBtn = menu.querySelector('.btn');

mSnd.volume = 0.2;
dSnd.volume = 0.2;
cSnd.volume = 0.2;

let keys = [m,d,c];
let notes = {
	m: mSnd,
	d: dSnd,
	c: cSnd
}

function playNote(event) {
	let group = event.target.closest('g');
	let noteName = group.id;
	notes[noteName].currentTime = 0;
	notes[noteName].play();
	group.style.transform = 'translate(4px,4px)';
	setTimeout(() => {
		liftKey(event);
	}, 750);
}

function liftKey(event) {
	let group = event.target.closest('g');
	group.style.transform = '';
}

keys.forEach((key) => {
	key.addEventListener('mousedown', playNote);
});

document.body.addEventListener('click', (event) => {
	if (event.target === menu || event.target === menuBtn) {
		menu.classList.toggle('dropdown-open');
	} else {
		if (menu.classList.contains('dropdown-open')) {
			menu.classList.toggle('dropdown-open');
		}	
	}
});

document.addEventListener('scroll', (event) => {
	if (window.scrollY > 0) {
		nav.classList.add('shadow-2xl');
	} else {
		nav.classList.remove('shadow-2xl');
	}
});