let cif = 0;

function getCif() {
  cif = document.getElementById("cifrao").value;
  cif = parseFloat(cif);
}

const cifraoInput = document.querySelector("#cifrao");

cifraoInput.addEventListener("keypress", function (e) {
  if (!checkChar(e)) {
    e.preventDefault();
    document.getElementById("cifrao").value = 0;
    cif = 0;
  }
});

function checkChar(e) {
  const char = String.fromCharCode(e.keyCode);

  const pattern = "[0-9.]";

  if (char.match(pattern)) {
    console.log(char);
    return true;
  }
}

const myCust = document.getElementById("custom1");

myCust.addEventListener("keypress", function (e) {
  if (!checkChar(e)) {
    e.preventDefault();
    document.getElementById("cifrao").value = 0;
    cif = 0;
  }
});

const myNumPeople = document.getElementById("numPeople");

myNumPeople.addEventListener("keypress", function (e) {
  if (!checkChar(e)) {
    e.preventDefault();
    document.getElementById("cifrao").value = 0;
    cif = 0;
  }
});

let botao1 = document.getElementById("botao1");
let botao2 = document.getElementById("botao2");
let botao3 = document.getElementById("botao3");
let botao4 = document.getElementById("botao4");
let botao5 = document.getElementById("botao5");

let counter = 1;
let ligado1 = true;
let ligado2 = true;
let ligado3 = true;
let ligado4 = true;
let ligado5 = true;
let ligado6 = true;

let porcentagem = 0;

let cust = 0;

function getCust() {
  cust = document.getElementById("custom1").value;
  cust = parseInt(cust);
  porcentagem = cust / 100;
}

function seleciona(arg) {
  if (counter % 2 != 0 && arg == 1 && ligado1) {
    //Primeiro clique
    botao1.style.background = "hsl(172, 67%, 45%)";
    botao1.style.color = "hsl(183, 100%, 15%)";

    ligado1 = true;
    ligado2 = false;
    ligado3 = false;
    ligado4 = false;
    ligado5 = false;

    porcentagem = 0.05;
    return (counter += 1);
  } else if (counter % 2 == 0 && arg == 1 && ligado1) {
    //Segundo clique
    botao1.style.background = "hsl(183, 100%, 15%)";
    botao1.style.color = "white";

    ligado1 = true;
    ligado2 = true;
    ligado3 = true;
    ligado4 = true;
    ligado5 = true;
    return (counter += 1);
  }

  if (counter % 2 != 0 && arg == 2 && ligado2) {
    //Primeiro clique
    botao2.style.background = "hsl(172, 67%, 45%)";
    botao2.style.color = "hsl(183, 100%, 15%)";

    ligado1 = false;
    ligado2 = true;
    ligado3 = false;
    ligado4 = false;
    ligado5 = false;
    porcentagem = 0.1;
    return (counter += 1);
  } else if (counter % 2 == 0 && arg == 2 && ligado2) {
    //Segundo clique
    botao2.style.background = "hsl(183, 100%, 15%)";
    botao2.style.color = "white";

    ligado1 = true;
    ligado2 = true;
    ligado3 = true;
    ligado4 = true;
    ligado5 = true;
    return (counter += 1);
  }

  if (counter % 2 != 0 && arg == 3 && ligado3) {
    //Primeiro clique
    botao3.style.background = "hsl(172, 67%, 45%)";
    botao3.style.color = "hsl(183, 100%, 15%)";

    ligado1 = false;
    ligado2 = false;
    ligado3 = true;
    ligado4 = false;
    ligado5 = false;
    porcentagem = 0.15;
    return (counter += 1);
  } else if (counter % 2 == 0 && arg == 3 && ligado3) {
    //Segundo clique
    botao3.style.background = "hsl(183, 100%, 15%)";
    botao3.style.color = "white";

    ligado1 = true;
    ligado2 = true;
    ligado3 = true;
    ligado4 = true;
    ligado5 = true;

    return (counter += 1);
  }

  if (counter % 2 != 0 && arg == 4 && ligado4) {
    //Primeiro clique
    botao4.style.background = "hsl(172, 67%, 45%)";
    botao4.style.color = "hsl(183, 100%, 15%)";

    ligado1 = false;
    ligado2 = false;
    ligado3 = false;
    ligado4 = true;
    ligado5 = false;

    porcentagem = 0.25;
    return (counter += 1);
  } else if (counter % 2 == 0 && arg == 4 && ligado4) {
    //Segundo clique
    botao4.style.background = "hsl(183, 100%, 15%)";
    botao4.style.color = "white";

    ligado1 = true;
    ligado2 = true;
    ligado3 = true;
    ligado4 = true;
    ligado5 = true;

    return (counter += 1);
  }

  if (counter % 2 != 0 && arg == 5 && ligado5) {
    //Primeiro clique
    botao5.style.background = "hsl(172, 67%, 45%)";
    botao5.style.color = "hsl(183, 100%, 15%)";

    ligado1 = false;
    ligado2 = false;
    ligado3 = false;
    ligado4 = false;
    ligado5 = true;
    porcentagem = 0.5;
    return (counter += 1);
  } else if (counter % 2 == 0 && arg == 5 && ligado5) {
    //Segundo clique
    botao5.style.background = "hsl(183, 100%, 15%)";
    botao5.style.color = "white";

    ligado1 = true;
    ligado2 = true;
    ligado3 = true;
    ligado4 = true;
    ligado5 = true;
    return (counter += 1);
  }
}

let numPeople = document.getElementById("numPeople").value;
let num = document.getElementById("numPeople");
let zero = document.getElementById("zero");

function clicar() {
  numPeople = document.getElementById("numPeople").value;
  numPeople = parseInt(numPeople);
  if (numPeople != 0) {
    zero.style.cssText = "display: none";
    num.style.cssText = "border: none";
  } else {
    zero.style.cssText =
      "display: block;" +
      "position: absolute;" +
      "right: 850px;" +
      "bottom: 260px;" +
      "color: rgb(187, 58, 41)";
    num.style.cssText = "border: 1px rgb(187, 58, 41) solid";
  }
}

numPeople = 1;

//Calcular o total

let totalGorjetaPessoa = 0;
let totalPorPessoa = 0;

let myTotal1 = document.getElementById("total1");
let myTotal2 = document.getElementById("total2");

function evento() {
  totalPorPessoa = ((cif + cif * porcentagem) / numPeople).toFixed(2);
  totalGorjetaPessoa = ((cif * porcentagem) / numPeople).toFixed(2);

  if (isNaN(totalGorjetaPessoa) || isNaN(totalPorPessoa)) {
    totalGorjetaPessoa = 0;
    totalPorPessoa = 0;
  } else if (totalGorjetaPessoa >= 100 || totalPorPessoa >= 100) {
    myTotal1.innerHTML = "R$" + totalGorjetaPessoa;
    myTotal2.innerHTML = "R$" + totalPorPessoa;
    myTotal1.style.cssText = "left: 50px";
    myTotal2.style.cssText = "left: 40px";
    if (totalGorjetaPessoa >= 100000 || totalPorPessoa >= 100000) {
      myTotal1.style.cssText =
        "font-size: 15px;" + "left: 50px;" + "bottom: 20px";
      myTotal2.style.cssText =
        "font-size: 15px;" + "left: 40px;" + "bottom: 20px";
      myTotal1.innerHTML = "R$" + totalGorjetaPessoa;
      myTotal2.innerHTML = "R$" + totalPorPessoa;
    }
  } else {
    myTotal1.innerHTML = "R$" + totalGorjetaPessoa;
    myTotal2.innerHTML = "R$" + totalPorPessoa;
    myTotal1.style.cssText = "left: 100px";
    myTotal2.style.cssText = "left: 100px";
  }
}

function Temporizador(initiate) {
  if (initiate !== true) {
    evento();
  }
  setTimeout(Temporizador, 1000);
}

Temporizador(true);

function reset() {
  let reset = document.getElementById("reset");

  document.getElementById("cifrao").value = "";
  document.getElementById("numPeople").value = "";
  document.getElementById("custom1").value = "";
  cif = 0;
  porcentagem = 0;
  numPeople = 1;
  botao1.style.background = "hsl(183, 100%, 15%)";
  botao1.style.color = "white";
  botao2.style.background = "hsl(183, 100%, 15%)";
  botao2.style.color = "white";
  botao3.style.background = "hsl(183, 100%, 15%)";
  botao3.style.color = "white";
  botao4.style.background = "hsl(183, 100%, 15%)";
  botao4.style.color = "white";
  botao5.style.background = "hsl(183, 100%, 15%)";
  botao5.style.color = "white";
  counter = 0;
  return counter += 1;
}
