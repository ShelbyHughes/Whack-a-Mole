randomNumber = Math.floor(Math.random()*9+1);

window.setInterval(function() {
    if (randomNumber == 1) {
        document.getElementById("one").style.backgroundColor = "red";
        $('#one').fadeIn(500).delay(500).fadeOut(500);
    }
    if (randomNumber == 2) {
        document.getElementById("two").style.backgroundColor = "red";
        $('#two').fadeIn(500).delay(500).fadeOut(500);
    }
    if (randomNumber == 3) {
        document.getElementById("three").style.backgroundColor = "red";
        $('#three').fadeIn(500).delay(500).fadeOut(500);
    }
    if (randomNumber == 4) {
        document.getElementById("four").style.backgroundColor = "red";
        $('#four').fadeIn(500).delay(500).fadeOut(500);
    }
    if (randomNumber == 5) {
        document.getElementById("five").style.backgroundColor = "red";
        $('#five').fadeIn(500).delay(500).fadeOut(500);
    }
    if (randomNumber == 6) {
        document.getElementById("six").style.backgroundColor = "red";
        $('#six').fadeIn(500).delay(500).fadeOut(500);
    }
    if (randomNumber == 7) {
        document.getElementById("seven").style.backgroundColor = "red";
        $('#seven').fadeIn(500).delay(500).fadeOut(500);
    }
    if (randomNumber == 8) {
        document.getElementById("eight").style.backgroundColor = "red";
        $('#eight').fadeIn(500).delay(500).fadeOut(500);
    }
    if (randomNumber == 9) {
        document.getElementById("nine").style.backgroundColor = "red";
        $('#nine').fadeIn(500).delay(500).fadeOut(500);
    }
}, 3000);
