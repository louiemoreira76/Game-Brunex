const startButton = document.getElementById('startButton');
const brunex = document.querySelector('.brunex');
const betao = document.querySelector('.betao');
let gameStarted = false;

const pulo = () => {
    if (!gameStarted) return; 

    brunex.classList.add('pulo');
    setTimeout(() => {
        brunex.classList.remove('pulo');
    }, 500);
};

startButton.addEventListener('click', () => {
    gameStarted = true;
    startButton.style.display = 'none'; 
    document.addEventListener('keydown', pulo); 
});
