// const games = [
//     { name: "Jogo da Adivinhação", src: "jogos/jogo-1.html" },
//     { name: "Contador de Cliques", src: "jogos/jogo-2.html" },
//     { name: "Jogo da Memória", src: "jogos/jogo-3.html" },
//     { name: "Calculadora Simples", src: "jogos/jogo-5.html" },
//     { name: "Jogo do Par ou Ímpar", src: "jogos/jogo-6.html" },
// ];

// function loadGames() {
//     const gameList = document.getElementById('game-list');
    
//     games.forEach(game => {
//         const gameCard = document.createElement('div');
//         gameCard.className = 'game-card';
//         gameCard.innerText = game.name;
//         gameCard.onclick = () => {
//             window.location.href = game.src;
//         };
//         gameList.appendChild(gameCard);
//     });
// }

// document.addEventListener('DOMContentLoaded', loadGames);

const games = [
    { name: "Jogo da Adivinhação", src: "jogos/jogo-1.html" },
    { name: "Contador de Cliques", src: "jogos/jogo-2.html" },
    { name: "Jogo da Memória", src: "jogos/jogo-3.html" },
    { name: "Calculadora Simples", src: "jogos/jogo-5.html" },
    { name: "Jogo do Par ou Ímpar", src: "jogos/jogo-6.html" },
];

function loadGames() {
    const gameList = document.getElementById('game-list');
    
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerText = game.name;
        gameCard.onclick = () => {
            window.location.href = game.src;
        };
        gameList.appendChild(gameCard);
    });
}

document.addEventListener('DOMContentLoaded', loadGames);


function scrollHeader (){
    const header = document.getElementById('header');
    this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader);