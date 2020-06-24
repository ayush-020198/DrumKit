var drumClickLength = document.querySelectorAll(".drum").length;

for(var i=0; i<drumClickLength; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      var buttonSoundWord = this.innerHTML;
      switch(buttonSoundWord){
            case "w":
                var audio = new Audio(src="sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio(src="sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio(src="sounds/tom-3.mp3");
                audio.play();
                break;      
            case "d":
                var audio = new Audio(src="sounds/tom-4.mp3");
                audio.play();
                break;   
            case "j":
            var audio = new Audio(src="sounds/snare.mp3");
            audio.play();
            break;
            case "k":
                var audio = new Audio(src="sounds/crash.mp3");
                audio.play();
                break;      
            case "l":
                var audio = new Audio(src="sounds/kick-bass.mp3");
                audio.play();
                break;       
                 

      }
    })
}

