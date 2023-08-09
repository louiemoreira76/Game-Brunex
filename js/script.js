const brunex = document.querySelector('.brunex');
const betao = document.querySelector('.betao');


const pulo = () => {
    brunex.classList.add('pulo');

    setTimeout(() =>  {

        brunex.classList.remove('pulo');

    }, 500);
}

const loop = setInterval(() => {

    const betaoPosition = betao.offsetLeft;
    const brunexPosition = +window.getComputedStyle(brunex).bottom.replace('px', '');
    

    if (betaoPosition <= 120 && betaoPosition > 0 && brunexPosition < 105){
        betao.style.animation = 'none';
        betao.style.left = `${betaoPosition}px`;

        brunex.style.animation = 'none';
        brunex.style.bottom = `${brunexPosition}px`;

        brunex.src = './images/48d74dda-cdb3-4c8f-936c-6c21b3c55475-removebg-preview.png';
        brunex.style.width = '37.5%'

        betao.src = './images/emovebg-preview.png';
        betao.style.width = '13%'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', pulo) || document.addEventListener('touchstart', pulo);

/*const luis = document.querySelector('.luis');

const checkWin = () => {
  const screenWidth = window.innerWidth;
  const luisPosition = luis.getBoundingClientRect().right;

  if (luisPosition >= (screenWidth * 0.7)) {
    alert('Você ganhou!');
    luis.classList.add('animate__animated', 'animate__heartBeat'); // Adiciona a classe de animação
  }
};

setInterval(checkWin, 1000);




if (window.innerWidth <= 480) {

    let invulneravel = false;

    function executarPulo() {
        if (invulneravel) {
            return;
        }
    }

    const loop = setInterval(() => {
        const betaoPosition = betao.offsetLeft;
        const brunexPosition = +window.getComputedStyle(brunex).bottom.replace('px', '');

        if (betaoPosition <= 200 && betaoPosition > 0 && brunexPosition < 105) {
            if (invulneravel) {
                return;
            }
            betao.style.animation = 'none';
            betao.style.left = `${betaoPosition}px`;

            brunex.style.animation = 'none';
            brunex.style.bottom = `${brunexPosition}px`;

            brunex.src = './images/48d74dda-cdb3-4c8f-936c-6c21b3c55475-removebg-preview.png';
            brunex.style.width = '500px';

            clearInterval(loop);

            invulneravel = true;
    setTimeout(() => {
        invulneravel = false;
    }, 1000);
        }

    }, 10);

    document.addEventListener('touchstart', pulo);
    
}*/
