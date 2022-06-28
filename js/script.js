const pipe = document.querySelector('.pipe');
const mario = document.querySelector('.mario');
const clouds = document.querySelector('.clouds');

let score = 0;

function jump() {
    let scoreString = String(score);
    mario.classList.add('jump');
    document.getElementById('score').innerHTML = `Score: ${score++}`;
    console.log({ score });

    let jumpTimeout = setTimeout(() => {
        mario.classList.remove('jump');
        clearTimeout(jumpTimeout);
    }, 500)
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    let scoreString = String(score);
    console.log({ scoreString });
    localStorage.setItem('score', scoreString)
    // console.log({ marioPosition });

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./img/game-over.png";
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        document.removeEventListener('keydown', jump);
        document.getElementById('score').innerHTML = `Score: ${score}`;
        document.getElementById('record').innerHTML = `Recorde: ${localStorage.getItem('score')}`;

        clearInterval(loop);

        return;
    }

}, 10);

document.addEventListener('keydown', jump);