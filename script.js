    // ========== CÓDIGO DO MENU ==========
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");

    // Abrir/Fechar menu
    menuIcon.addEventListener("click", function(e) {
        e.stopPropagation();
        menu.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    // Fechar menu ao clicar fora
    document.addEventListener("click", function(e) {
        if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
            menu.classList.remove("active");
            menuIcon.classList.remove("active");
        }
    });

    // Animar itens do menu
    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-3px)";
        });
        
        item.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
        });
    });
// ========== LÓGICA DO JOGO ==========
const gameText = document.getElementById("game-text");
const nextButton = document.getElementById("next-button");
const sceneContainer = document.getElementById("scene");

const scenes = [
    { 
        text: "Você está na entrada da Mansão Blackwood. A porta range ao toque...",
        image: "images/entrada.jpg",
        choices: ["Entrar", "Fugir"]
    },
    { 
        text: "O hall de entrada está escuro. Você ouve um sussurro vindo do andar de cima...",
        image: "images/hall.jpg",
        choices: ["Subir as escadas", "Explorar a sala"]
    },
    { 
        text: "Uma vela tremula em cima de uma mesa. Algo se move na escuridão...",
        image: "images/sala.jpg",
        choices: ["Seguir o som", "Acender a lanterna"]
    },
    { 
        text: "Você encontra um diário antigo. As páginas estão cobertas de símbolos estranhos...",
        image: "images/diario.jpg",
        choices: ["Ler", "Ignorar"]
    },
    { 
        text: "Um frio repentino percorre sua espinha. Você sente que não está sozinho...",
        image: "images/corredor.jpg",
        choices: ["Continuar", "Recuar"]
    },
    { 
        text: "A porta ao fundo range e se abre lentamente...",
        image: "images/porta.jpg",
        choices: ["Entrar", "Fechar a porta"]
    }
];

let currentScene = 0;

function updateScene() {
    gameText.textContent = scenes[currentScene].text;
    sceneContainer.style.backgroundImage = `url(${scenes[currentScene].image})`;
    renderChoices();
}

function renderChoices() {
    const choicesContainer = document.createElement("div");
    choicesContainer.id = "choices-container";
    document.body.appendChild(choicesContainer);
    
    scenes[currentScene].choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => nextScene());
        choicesContainer.appendChild(button);
    });
}

function nextScene() {
    if (currentScene < scenes.length - 1) {
        currentScene++;
        updateScene();
    } else {
        gameText.textContent = "O jogo chegou ao fim... por enquanto.";
        nextButton.style.display = "none";
    }
}

nextButton.addEventListener("click", nextScene);

updateScene();