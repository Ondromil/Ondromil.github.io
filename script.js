let num;
let symbols = 0;
let eightSymbol = 0;
let lines = 0;

function display()
{
    num = Math.floor(Math.random() * 2);
    document.getElementById("demo").innerHTML += num + "";
    symbols += 1;
    eightSymbol += 1;
    if (eightSymbol > 7)
    {
        document.getElementById("demo").innerHTML += "-"
        eightSymbol = 0;
    }
    if (symbols > 86)
    {
        document.getElementById("demo").innerHTML += "<br>";
        symbols = 0;
        lines += 1;
        if (lines > 16)
        {
            clearInterval(interval);
        }
    }
}

interval = setInterval(display, 30);