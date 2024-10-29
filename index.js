const chatContainer = document.getElementById("chat");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

const keywords = {
    "olá": "Olá! Sou um chat que sabe muito sobre futebol, com 0% de clubismo e 100% de veracidade. Como posso ajudar?",
    "socorro": "Claro! Estou aqui para ajudar. O que você precisa?",
    "nome": "Meu nome é ChatBol o fodão!",
    "adeus": "Até logo! Foi um prazer falar com você.",
    "melhor time": "Sem sombra de duvidas, o melhor time de todos os tempos é o FLAMENGO!",
    "bola de ouro": "Eu tambem acho que foi um roubo a bola de ouro, claramente o GABIGOL devia ter ganho .",
    "policia": "Vish parece que você ta na merda kk se fodeo",
    "melhor jogador": "Vamos lá. Se você está falando em habilidade (o melhor) com certeza neymar é o top 1. Porém, se quiser saber o Maior, com certeza é o Rei pelé ou CR7",
    "cair": "Claro que o coringao kkkk vai ser rebaixado.",
    "ganhou": "FLAMENGO!",
    "ganhar": "FLAMENGO!",
    "prefiro o messi": "entao voce é gay kk!",
    "messi>": "entao voce é gay kk!",
    "messi é melhor": "entao voce é gay kk!",
    "seu viadin": "viadin é seu pai",
    "seu viado": "viado é seu pai",
    "seu viadinho": "viadinho é seu pai",
    "seu gay": "gay é seu pai",
    "seu baitola": "baitola é seu pai",
    "amo chupar pintos": "azideia do neguin kk mo gayzao",
    "edit": "https://www.instagram.com/p/DAZeROgJuP8/ e https://www.instagram.com/p/DARTL95gZlR/",
};

function appendMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender === "user" ? "user-message" : "bot-message");
    messageDiv.innerText = text;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function botResponse(userText) {
    const normalizedText = userText.toLowerCase();
    let response = "Desculpe, não entendi. Pode reformular a pergunta?";


    for (const keyword in keywords) {
        if (normalizedText.includes(keyword)) {
            response = keywords[keyword];
            break;
        }
    }

    appendMessage(response, "bot");
}

sendButton.addEventListener("click", () => {
    const userText = userInput.value.trim();
    if (userText) {
        appendMessage(userText, "user");
        userInput.value = "";
        botResponse(userText);
    }
});

userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendButton.click();
    }
});
