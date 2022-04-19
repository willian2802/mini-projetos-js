const img = document.getElementById("img");
const buttons = document.getElementById("buttons")
let colorIndex = 0;
let IntervalID = null;

const trafficLght = (Event) => {
    stopAutomatic;
    turnOn[Event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ["red","yellow","green"]
    const color = colors[ colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval (IntervalID);
}

const turnOn = {
    "red":      () => img.src = "./img/vermelho.png",
    "yellow":   () => img.src = "./img/amarelo.png",
    "green":    () => img.src = "./img/verde.png",
    "automatic":    () => IntervalID = setInterval(changeColor, 1000)
}

buttons.addEventListener("click", trafficLght)