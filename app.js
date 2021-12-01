
window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.key.toUpperCase()}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    // console.log(e.key);
    // console.log(audio);
});