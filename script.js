const countries = [
    { name: "Argentina", flag: "https://flagcdn.com/w320/ar.png" },
    { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
    { name: "Alemania", flag: "https://flagcdn.com/w320/de.png" },
    { name: "Brasil", flag: "https://flagcdn.com/w320/br.png" },
    { name: "Canadá", flag: "https://flagcdn.com/w320/ca.png" },
    { name: "Chile", flag: "https://flagcdn.com/w320/cl.png" },
    { name: "China", flag: "https://flagcdn.com/w320/cn.png" },
    { name: "Colombia", flag: "https://flagcdn.com/w320/co.png" },
    { name: "Corea del Sur", flag: "https://flagcdn.com/w320/kr.png" },
    { name: "Costa Rica", flag: "https://flagcdn.com/w320/cr.png" },
    { name: "Cuba", flag: "https://flagcdn.com/w320/cu.png" },
    { name: "Dinamarca", flag: "https://flagcdn.com/w320/dk.png" },
    { name: "Egipto", flag: "https://flagcdn.com/w320/eg.png" },
    { name: "Emiratos Árabes Unidos", flag: "https://flagcdn.com/w320/ae.png" },
    { name: "España", flag: "https://flagcdn.com/w320/es.png" },
    { name: "Estados Unidos", flag: "https://flagcdn.com/w320/us.png" },
    { name: "Francia", flag: "https://flagcdn.com/w320/fr.png" },
    { name: "Grecia", flag: "https://flagcdn.com/w320/gr.png" },
    { name: "Guatemala", flag: "https://flagcdn.com/w320/gt.png" },
    { name: "India", flag: "https://flagcdn.com/w320/in.png" },
    { name: "Indonesia", flag: "https://flagcdn.com/w320/id.png" },
    { name: "Irán", flag: "https://flagcdn.com/w320/ir.png" },
    { name: "Irlanda", flag: "https://flagcdn.com/w320/ie.png" },
    { name: "Israel", flag: "https://flagcdn.com/w320/il.png" },
    { name: "Italia", flag: "https://flagcdn.com/w320/it.png" },
    { name: "Japón", flag: "https://flagcdn.com/w320/jp.png" },
    { name: "Kazajistán", flag: "https://flagcdn.com/w320/kz.png" },
    { name: "Kenia", flag: "https://flagcdn.com/w320/ke.png" },
    { name: "Líbano", flag: "https://flagcdn.com/w320/lb.png" },
    { name: "Malasia", flag: "https://flagcdn.com/w320/my.png" },
    { name: "Marruecos", flag: "https://flagcdn.com/w320/ma.png" },
    { name: "México", flag: "https://flagcdn.com/w320/mx.png" },
    { name: "Nigeria", flag: "https://flagcdn.com/w320/ng.png" },
    { name: "Noruega", flag: "https://flagcdn.com/w320/no.png" },
    { name: "Nueva Zelanda", flag: "https://flagcdn.com/w320/nz.png" },
    { name: "Países Bajos", flag: "https://flagcdn.com/w320/nl.png" },
    { name: "Pakistán", flag: "https://flagcdn.com/w320/pk.png" },
    { name: "Panamá", flag: "https://flagcdn.com/w320/pa.png" },
    { name: "Paraguay", flag: "https://flagcdn.com/w320/py.png" },
    { name: "Perú", flag: "https://flagcdn.com/w320/pe.png" },
    { name: "Polonia", flag: "https://flagcdn.com/w320/pl.png" },
    { name: "Portugal", flag: "https://flagcdn.com/w320/pt.png" },
    { name: "Reino Unido", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "República Checa", flag: "https://flagcdn.com/w320/cz.png" },
    { name: "Rusia", flag: "https://flagcdn.com/w320/ru.png" },
    { name: "Sudáfrica", flag: "https://flagcdn.com/w320/za.png" },
    { name: "Suecia", flag: "https://flagcdn.com/w320/se.png" },
    { name: "Suiza", flag: "https://flagcdn.com/w320/ch.png" },
    { name: "Tailandia", flag: "https://flagcdn.com/w320/th.png" },
    { name: "Turquía", flag: "https://flagcdn.com/w320/tr.png" },
    { name: "Ucrania", flag: "https://flagcdn.com/w320/ua.png" },
    { name: "Uruguay", flag: "https://flagcdn.com/w320/uy.png" },
    { name: "Venezuela", flag: "https://flagcdn.com/w320/ve.png" },
    { name: "Vietnam", flag: "https://flagcdn.com/w320/vn.png" },
    { name: "Arabia Saudita", flag: "https://flagcdn.com/w320/sa.png" },
    { name: "Bangladés", flag: "https://flagcdn.com/w320/bd.png" },
    { name: "Bélgica", flag: "https://flagcdn.com/w320/be.png" },
    { name: "Bolivia", flag: "https://flagcdn.com/w320/bo.png" },
    { name: "Ecuador", flag: "https://flagcdn.com/w320/ec.png" },
    { name: "Filipinas", flag: "https://flagcdn.com/w320/ph.png" },
    { name: "Finlandia", flag: "https://flagcdn.com/w320/fi.png" },
    { name: "Hungría", flag: "https://flagcdn.com/w320/hu.png" }
    // Puedes agregar más países si lo deseas.
];

let currentCountry;
let correct = 0;
let incorrect = 0;

const flagImage = document.getElementById('flagImage');
const countryInput = document.getElementById('countryInput');
const submitBtn = document.getElementById('submitBtn');
const scoreDisplay = document.getElementById('score');

function getRandomCountry() {
    return countries[Math.floor(Math.random() * countries.length)];
}

function loadNewFlag() {
    currentCountry = getRandomCountry();
    flagImage.src = currentCountry.flag;
    countryInput.value = '';
}

submitBtn.addEventListener('click', () => {
    const userGuess = countryInput.value.trim().toLowerCase();
    if (userGuess === currentCountry.name.toLowerCase()) {
        correct++;
    } else {
        incorrect++;
    }

    updateScore();
    checkGameStatus();
    loadNewFlag();
});

function updateScore() {
    scoreDisplay.textContent = `Aciertos: ${correct} | Erradas: ${incorrect}`;
}

function checkGameStatus() {
    if (correct === 10) {
        alert("¡Felicidades! Has acertado 10 banderas.");
        resetGame();
    } else if (incorrect === 10) {
        alert("Lo siento, has fallado 10 veces. ¡Inténtalo de nuevo!");
        resetGame();
    }
}

function resetGame() {
    correct = 0;
    incorrect = 0;
    updateScore();
}

// Cargar la primera bandera al inicio
loadNewFlag();
