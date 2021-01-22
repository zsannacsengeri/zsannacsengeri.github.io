var numberOfButtons = document.querySelectorAll("a").length;

for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll("a")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "Piano teacher":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "Contact":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "Pricing":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

  }
}
