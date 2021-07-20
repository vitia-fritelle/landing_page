const pokes = ["bisharp", "pelipper", "swampert"];

pokes.forEach(pokemon=>{
    let cry, img;
    cry = (document.getElementsByClassName(pokemon))[0];
    img = (document.getElementsByClassName(pokemon))[1];
    cry.volume=0.05;
    img.addEventListener("mouseenter", function(){ 
        cry.play();
    })
})

