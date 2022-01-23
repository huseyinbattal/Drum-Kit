let numberOfDrumBtn = document.querySelectorAll(".drum");
//let drumBtn1 = document.querySelectorAll(".drum")[0];

for (let i = 0; i < numberOfDrumBtn.length; i++) {
    numberOfDrumBtn[i].addEventListener("click", function (e) {
        console.log(e);
        console.log(this);
        let buttonValue = this.value;
        new Audio("sounds/" + buttonValue + ".mp3").play();
    });

}

document.addEventListener("keypress", function (event) {

    let entryKey = event.key;
    console.log(entryKey);
    new Audio("sounds/tom-" + entryKey + ".mp3").play();
    let activeButton = document.querySelector("." + entryKey);
    activeButton.classList.add("pressed");
    setTimeout(function removeClass() {
        
        activeButton.classList.remove("pressed");
    }, 100

    );


});

window.addEventListener("keydown",function (e) {
    console.log(e);
})
