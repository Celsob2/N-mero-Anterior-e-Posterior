function calcularVizinhos() {
    const numero = parseInt(prompt("Digite um número:"));
 
    if (isNaN(numero)) {
        console.log("Por favor, insira um número válido.");
        return;
    }


    const anterior = numero - 1;
    const seguinte = numero + 1;


    console.log(`O número anterior é ${anterior} e o próximo número é ${seguinte}.`);
}

calcularVizinhos();
