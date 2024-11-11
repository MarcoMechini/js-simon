const randArray = [];
const userArray = [];
const arrayNum = document.querySelector(".rand-num");
const numForm = document.querySelector("form");
const allUserNumber = document.querySelectorAll("type[number]");


for (let i = 0; i < 5; i++) {
    const randomNum = Math.floor(Math.random() * 9) + 1; //da 1 a 99
    randArray.push(randomNum);
    arrayNum.innerHTML += `<div>${randomNum}</div>`
    arrayNum.classList.add("show");
}

console.log('Random array', randArray);


numForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log('entro?');

    for (let i = 0; i < allUserNumber.length; i++) {
        const curNumber = parseInt(allUserNumber[i].value);
        userArray.push(curNumber)
        console.log('user array', userArray);
    }
    console.log('a quanto pare non entro');

    let counter = 0;
    const commonNumber = [];
    // const primo = parseInt(first.value);
    // userArray.push(primo);
    // const secondo = parseInt(second.value);
    // userArray.push(secondo);
    // const terzo = parseInt(third.value);
    // userArray.push(terzo);
    // const quarto = parseInt(four.value);
    // userArray.push(quarto);
    // const quinto = parseInt(five.value);
    // userArray.push(quinto);
    // console.log('User array', userArray);

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
    console.log(`Hai azzeccato ${counter} numeri azzeccati sono: ${commonNumber}`);

    //disabilita il bottone al click
    // document.querySelector("type[submmit]").disabled = true;
})


