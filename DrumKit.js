"use strict";

(function() {
    window.onload = function() {
        window.addEventListener("keydown", sound);
        let keys =  document.querySelectorAll(".key");
        keys.forEach(key => key.addEventListener("transitionend", removeTransition));
    }

    function sound(e) {
        let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if (!audio) {
            return;
        }
        audio.currentTime = 0;
        audio.play();
        key.classList.add("playing");   
    }

    function removeTransition(e) {
        this.classList.remove("playing");
    }

})();