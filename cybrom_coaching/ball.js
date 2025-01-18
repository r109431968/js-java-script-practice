document.getElementById("play1").addEventListener("click", ballMove);

var audio = new Audio('../sound/yes.mp3');

document.getElementById("play1").addEventListener("click", function() {
    audio.play();
    ballMove();
});

document.getElementById("stop1").addEventListener("click", function() {
    audio.pause();
    audio.currentTime = 0;
});
function ballMove() {
    var ball = document.getElementById("ball");
    var x = 0;
    var direction = 1;
    var speed = 10;
    var interval = setInterval(function() {
        x += speed * direction;
        ball.style.left = x + "px";
        if (x >= 450) {
            direction = -1;
        } else if (x <= 0) {
            direction = 1;
        }
    }, 100);
        document.getElementById("stop1").addEventListener("click", function() {
            clearInterval(interval);
    });
}