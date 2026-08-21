let botaoModo = document.querySelector("#modo-escuro");

let body = document.querySelector("body");

botaoModo.addEventListener("click", mudarModo);


function mudarModo() {
    body.classList.toggle("modo-escuro")
    console.log("Botão clicado!");

    if (body.classList.contains("modo-escuro")) {
        botaoModo.textContent = "☀️";
    } else {
        botaoModo.textContent = "🌙";
    }

}

