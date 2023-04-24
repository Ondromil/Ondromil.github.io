display();

function display(serviceIndex) {
    var contents = document.getElementsByClassName("content");
    var buttons = document.getElementsByClassName("service-button");
    for (i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
    for (i = 0; i < buttons.length; i++) {
       buttons[i].style = "background-color: var(--header-color);";
    } 
    contents[serviceIndex].style.display = "block";
    buttons[serviceIndex].style = "filter: brightness(90%);"
}