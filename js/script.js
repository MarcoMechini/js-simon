const randArray = [];
const userArray = [];
const arrayNum = document.querySelector(".rand-num");
const numForm = document.querySelector("form");
const allUserNumber = document.querySelectorAll("input[type='number']");
const counterView = document.getElementById("counter");
const correctNum = document.querySelector(".correct-num");
const resultScore = document.getElementById("result-div");
const resultNumber = document.getElementById("result");


for (let i = 0; i < 5; i++) {
    const randomNum = Math.floor(Math.random() * 99) + 1; //da 1 a 99
    randArray.push(randomNum);
    correctNum.innerHTML += `<div class="number">${randomNum}</div>`
}

//variabile che ad ogni intervallo decrementa di uno
let counter = 30;
const interval = setInterval(function () {
    arrayNum.classList.remove("d-none");
    counterView.classList.remove("d-none");
    counterView.innerHTML = counter;
    counter--;
    //se il counter arriva a 0 vengono mostrati gli input
    if (counter < 0) {
        arrayNum.classList.add("d-none");
        counterView.classList.add("d-none");
        numForm.classList.remove("d-none")
        clearInterval(interval);
    }
}, 1000);


numForm.addEventListener("submit", function (event) {
    event.preventDefault();

    numForm.classList.add("d-none")

    for (let i = 0; i < allUserNumber.length; i++) {
        const curNumber = parseInt(allUserNumber[i].value);
        userArray.push(curNumber)
    }

    let counter = 0;
    const commonNumber = [];

    //doppio ciclo per confrontare un valore alla volta di array random con tutti i valori dell'array composto dai numeri dell'utente
    for (let i = 0; i < randArray.length; i++) {
        const curRandomNumber = randArray[i];
        for (let j = 0; j < userArray.length; j++) {
            const curUserNumber = userArray[j];
            if (curRandomNumber === curUserNumber) {
                counter++;
                console.log(curRandomNumber, curUserNumber);
                commonNumber.push(curRandomNumber);
                break;
            }
        }
    }

    resultScore.innerHTML += `<span>Hai azzeccato ${counter} numeri</span>`
    for (let i = 0; i < commonNumber.length; i++) {
        const element = commonNumber[i];

        resultNumber.innerHTML += `<div class='checked'>${element}</div>`
    }
    //disabilita il bottone al click
    document.querySelector("button").disabled = true;
})