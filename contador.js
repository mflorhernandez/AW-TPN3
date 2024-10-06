// Función para incrementar el contador individual
function increase(counterId) {
    let counterElement = document.getElementById(counterId); /
    let counterValue = parseInt(counterElement.textContent); 
    counterValue++; 
    counterElement.textContent = counterValue; 
}

// Función para decrementar el contador individual
function decrease(counterId) {
    let counterElement = document.getElementById(counterId); 
    let counterValue = parseInt(counterElement.textContent); 
    if (counterValue > 0) { 
        counterValue--; 
        counterElement.textContent = counterValue; 
    }
}
