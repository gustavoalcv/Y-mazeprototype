let sequence = [];

function registerChoice(choice) {
    sequence.push(choice);
    updateDisplay();
}

function updateDisplay() {
    const sequenceDisplay = document.getElementById('sequence');
    const entryCountDisplay = document.getElementById('entryCount');
    const alternanceIndexDisplay = document.getElementById('alternanceIndex');

    sequenceDisplay.textContent = sequence.join(' → ');
    entryCountDisplay.textContent = sequence.length;
    alternanceIndexDisplay.textContent = calculateAlternanceIndex().toFixed(2) + '%';
}

function calculateAlternanceIndex() {
    let alternances = 0;
    const entryCount = sequence.length;
    
    // Se houver menos de 3 entradas, não há como calcular alternância
    if (entryCount < 3) return 0; 

    // Loop para contar alternâncias corretas nas trincas de três letras consecutivas
    for (let i = 0; i < entryCount - 2; i++) {
        const [first, second, third] = [sequence[i], sequence[i + 1], sequence[i + 2]];
        
        // Verifica se as três letras são diferentes
        if (first !== second && second !== third && first !== third) {
            alternances++;
        }
    }

    // Cálculo do índice de alternância: (alternâncias / (número de entradas - 1)) * 100
    return (alternances / (entryCount - 1)) * 100;
}

function resetData() {
    sequence = [];
    updateDisplay();
}
