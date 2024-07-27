const envelope = document.querySelector('.envelope');
const flap = document.querySelector('.flap');
const sendButton = document.getElementById('sendButton');

envelope.addEventListener('click', () => {
    flap.style.transform = flap.style.transform === 'rotateX(180deg)' ? 'rotateX(0deg)' : 'rotateX(180deg)';
});

sendButton.addEventListener('click', () => {
    const noteContent = document.querySelector('textarea').value;
    const encodedNote = encodeURIComponent(noteContent);
    const url = `${window.location.origin}${window.location.pathname}?note=${encodedNote}`;
    prompt("Send this link to your loved one:", url);
});

window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    const note = params.get('note');
    if (note) {
        document.querySelector('textarea').value = decodeURIComponent(note);
        flap.style.transform = 'rotateX(180deg)';
    }
});
