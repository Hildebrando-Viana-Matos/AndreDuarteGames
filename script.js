var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;

window.addEventListener('keyup', function(e) {
    var codigoTecla = e.which || e.keyCode || 0;
    var space = codigoTecla == 32;
    var keyUp = codigoTecla == 38;
    var keyW = codigoTecla == 87;
    if (space) {
        jump()
    }

    if (keyUp) {
        jump()
    }

    if (keyW) {
        jump()
    }
});

function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<50 && blockLeft>-50 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over!! Score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);