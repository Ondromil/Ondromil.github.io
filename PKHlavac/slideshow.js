var slideIndex = 0;
carousel();

function carousel() 
{
   var i;
   var sliders = document.getElementsByClassName("slider-image");
   for (i = 0; i < sliders.length; i++) {
       sliders[i].style.display = "none";
   }
   var buttons = document.getElementsByClassName("slider-button");
   for (i = 0; i < buttons.length; i++) {
       buttons[i].style = "background-color: aliceblue";
   }

   slideIndex++;
   if (slideIndex > sliders.length) {
       slideIndex = 1;
   }
   sliders[slideIndex - 1].style.display = "block";
   buttons[slideIndex - 1].style = "filter: brightness(70%);";
   const timeout = setTimeout(carousel, 5000);
}

function changeValue(slideIndex) {
    var i;
    var sliders = document.getElementsByClassName("slider-image");
    for (i = 0; i < sliders.length; i++) {
       sliders[i].style.display = "none";
    }
    var buttons = document.getElementsByClassName("slider-button");
    for (i = 0; i < buttons.length; i++) {
       buttons[i].style = "background-color: aliceblue";
    }
    
    sliders[slideIndex].style.display = "block";
    buttons[slideIndex].style =  "filter: brightness(70%);";
    clearTimeout(carousel.timeout);
    clearTimeout(timeout);
    const timeout = setTimeout(carousel, 5000);
}
