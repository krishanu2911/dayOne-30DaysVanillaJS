
window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.key.toUpperCase()}"]`);
    const key = document.querySelector(`div[data-key="${e.key.toUpperCase()}"]`);
    if(!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    // console.log(e.key);
    // console.log(audio);
});
function removeTransition(event){
    if(event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener("transitionend", removeTransition));