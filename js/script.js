let botaoModo = document.querySelector("#modo-escuro");

let body = document.querySelector("body");

let temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "modo-escuro") {
    body.classList.add("modo-escuro")
}

botaoModo.addEventListener("click", mudarModo);


function mudarModo() {
    body.classList.toggle("modo-escuro")
    console.log("Botão clicado!");

    if (body.classList.contains("modo-escuro")) {
        botaoModo.textContent = "☀️";
        localStorage.setItem("tema", "modo-escuro");
    } else {
        botaoModo.textContent = "🌙";
        localStorage.setItem("tema", "modo-claro")
    }

}

