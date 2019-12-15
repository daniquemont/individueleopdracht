window.onload = function(){
    const pixels = document.getElementsByClassName("js--pixel");
    let color = document.getElementsByClassName("js--sphere");
    let brush = "black";


    for(let i = 0; i < pixels.length; i++){
        pixels[i].onmouseenter = (event) => {
            pixels[i].setAttribute("color", brush);
        }
    }

    for(let i = 0; i < color.length; i++){
        color[i].onmouseenter = (event) => {
            brush = color[i].getAttribute("color");
        }
    }
}