// Teorema de Pitagoras
// a^2 + b^2 = c^2

//Variaveis
const buttonCalculate = document.getElementById("button-calculate");
const buttonClean = document.getElementById("button-clean");
const inputSideA = document.getElementById("input-side-a");
const inputSideB = document.getElementById("input-side-b");
const inputResult = document.getElementById("input-result");

// Soma do Teorema de Pitagoras
function calculateFormulaAB() {
    const result = Math.sqrt(inputSideA.value**2 + inputSideB.value**2);
    inputResult.value = result.toFixed(2);
};


// Limpar Escritas
function cleanButton(){
    inputSideA.value = "";
    inputSideB.value = "";
    inputResult.value = "";
    alert("Valores resetados com sucesso!");
}

//Clicks nos botões
buttonCalculate.addEventListener("click", calculateFormulaAB);
buttonClean.addEventListener("click", cleanButton);