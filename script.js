function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var score = 0;
function increase(e){
    score++;
    e.target.backgroundImage = "none";
    console.log(score);
}

async function foo() {
    var randomNumber = Math.floor(Math.random()*9+1);

    var element;

    switch (randomNumber) {
        case 1:
            element = document.getElementById("one");
            break;
        case 2:
            element = document.getElementById("two");
            break;
        case 3:
            element = document.getElementById("three");
            break;
        case 4:
            element = document.getElementById("four");
            break;
        case 5:
            element = document.getElementById("five");
            break;
        case 6:
            element = document.getElementById("six");
            break;
        case 7:
            element = document.getElementById("seven");
            break;
        case 8:
            element = document.getElementById("eight");
            break;
        case 9:
            element = document.getElementById("nine");
            break;
    }
    element.style.backgroundImage = "url('mole2.jpeg')";
    element.addEventListener('click', increase);
    await sleep(800);
    element.style.backgroundImage = "none";
    element.removeEventListener('click', increase);
}
async function start() {
    score = 0;
    var endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + 30);
    while (new Date() < endTime ) {
        await sleep(Math.random()*800+250);
        foo();
    }
    alert("Game Over!\nYou hit " + score + " moles.");
}