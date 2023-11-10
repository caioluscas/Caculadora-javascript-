function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean(){
    document.getElementById('resultado').innerHTML = ""
}
function back(){
    resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1)
}
function calcular() {
    try {
        const resultado = document.getElementById('resultado').innerText;
        const resultadoCalculado = eval(resultado);

        if (!isFinite(resultadoCalculado)) {
            throw new Error('divide by zero');
        }

        document.getElementById('resultado').innerText = resultadoCalculado;
    } catch (error) {
        if (error instanceof Error && error.message.includes('divide by zero')) {
            document.getElementById('resultado').innerText = 'Impossível dividir por 0';
        } else {
            document.getElementById('resultado').innerText = 'Erro';
        }
    }
}


