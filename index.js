var drumClickLength = document.querySelectorAll(".drum").length;

for(var i=0; i<drumClickLength; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        animationButton(buttonInnerHTML);
    })
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    animationButton(event.key);
})

function makeSound(key)
{
switch(key){
    case "w":
        var tom1 = new Audio(src="sounds/tom-1.mp3");
        tom1.play();
        break;
    case "a":
        var tom2 = new Audio(src="sounds/tom-2.mp3");
        tom2.play();
        break;
    case "s":
        var tom3 = new Audio(src="sounds/tom-3.mp3");
        tom3.play();
        break;      
    case "d":
        var tom4 = new Audio(src="sounds/tom-4.mp3");
        tom4.play();
        break;   
    case "j":
    var snare = new Audio(src="sounds/snare.mp3");
    snare.play();
    break;
    case "k":
        var crash = new Audio(src="sounds/crash.mp3");
        crash.play();
        break;      
    case "l":
        var kick = new Audio(src="sounds/kick-bass.mp3");
        kick.play();
        break;   
    default:
        console.log("wrong key");    
}}

function animationButton (currentKey) {
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout (function() {document.querySelector("."+currentKey).classList.remove("pressed")}, 100);
} 


