let m = document.querySelector('#m');
let d = document.querySelector('#d');
let c = document.querySelector('#c');

let mSnd = document.querySelector('#m_snd');
let dSnd = document.querySelector('#d_snd');
let cSnd = document.querySelector('#c_snd');

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
	// key.addEventListener('mouseup', liftKey);
	// key.addEventListener('mouseout', liftKey);
});

