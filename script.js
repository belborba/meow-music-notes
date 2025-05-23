function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keyContainer = document.querySelector(`.keyContainer[data-key="${e.keyCode}"]`);

    if (!audio || !keyContainer) return;

    const img = keyContainer.querySelector(".catImg"); // Seleciona a imagem correta dentro da div correspondente

    keyContainer.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

    const hoverImageByKeyCode = {
        "65": "dohover.svg",
        "83": "rehover.svg",
        "68": "mehover.svg",
        "70": "fahover.svg",
        "71": "solhover.svg",
        "72": "lahover.svg",
        "74": "tihover.svg",
    }

    img.src = `assets/imgs/${hoverImageByKeyCode[e.keyCode]}`;

    // Troca a imagem correta com base na tecla pressionada
    // switch (e.keyCode) {
    //     case 65:
    //         img.src = 'assets/imgs/dohover.svg';
    //         break;
    //     case 83:
    //         img.src = 'assets/imgs/rehover.svg';
    //         break;
    //     case 68:
    //         img.src = 'assets/imgs/mehover.svg';
    //         break;
    //     case 70:
    //         img.src = 'assets/imgs/fahover.svg';
    //         break;
    //     case 71:
    //         img.src = 'assets/imgs/solhover.svg';
    //         break;
    //     case 72:
    //         img.src = 'assets/imgs/lahover.svg';
    //         break;
    //     case 74:
    //         img.src = 'assets/imgs/tihover.svg';
    //         break;
    // }

    // Remove a classe 'playing' e volta a imagem original quando a transição terminar
    keyContainer.addEventListener('transitionend', () => {
        keyContainer.classList.remove('playing');
        img.src = `assets/imgs/${img.dataset.default}`; // Volta para a imagem original armazenada no dataset
    });
}

// Adiciona evento de teclado
window.addEventListener("keydown", playSound);

// Adiciona evento de toque/click para suportar dispositivos móveis
document.querySelectorAll(".keyContainer").forEach((key) => {
    key.addEventListener("touchstart", playSound);
    key.addEventListener("click", playSound);
});
