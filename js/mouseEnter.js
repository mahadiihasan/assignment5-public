document.getElementById("card1").addEventListener("mouseover", mouseOver);

function mouseOver() {


    let symbols, color;
    symbols = '0123456789ABCDEF';

    color = '#';

    for (i = 0; i < 6; i++) {

        color = color + symbols[Math.floor(Math.random() * 16)];
    }

    document.getElementById('card1').style.backgroundColor = color;
}

document.getElementById("card1").addEventListener("mouseleave", mouseLeave);

function mouseLeave() {

    document.getElementById('card1').style.backgroundColor = "white";
}

