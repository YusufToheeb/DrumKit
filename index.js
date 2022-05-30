document.write('WELCOME TO JAVASCRIPT')

// detecting button press

let numberOfDrumsButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfDrumsButtons; i++) {

    document.querySelectorAll('.drum')[i].addEventListener('dblclick', function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimations(buttonInnerHTML);
    });
}


// detecting Keyboard press

document.addEventListener('keypress', function (event) {
    makeSound(event.key);
    buttonAnimations(event.key);
});


function makeSound(key) {
    switch (key) {
        case 'w':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play()
            break;
        case 'a':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play()
            break;
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play()
            break;
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play()
            break;
        case 'j':
            var snare = new Audio('sounds/snare.mp3');
            snare.play()
            break;
        case 'k':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play()
            break;
        case 'l':
            var crash = new Audio('sounds/crash.mp3');
            crash.play()
            break;
        default: console.log(buttonInnerHTML)
            break;
    }
};


function buttonAnimations(currentKey) {

    var activeButton = document.querySelector('.' + currentKey);

    activeButton.classList.add('pressed');

    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 100)
}

// function HouseKeeper(yearsOfExperience, name, age) {
//     this.yearsOfExperience = yearsOfExperience;
//     this.name = name;
//     this.age = age;
// }

