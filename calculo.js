function Soma(){
    let valor01 = document.getElementById('valor01').value;
    let valor02 = document.getElementById('valor02').value;

    let resultado = parseFloat(valor01) + parseFloat(valor02)
    if (isNaN(resultado) == true){
        document.getElementById('resultado').innerHTML = '';
    }else{
        document.getElementById('resultado').innerHTML = resultado
    }
}

function Multiplica(){
    let valor01 = document.getElementById('valor01').value;
    let valor02 = document.getElementById('valor02').value;

    let resultado = parseFloat(valor01) * parseFloat(valor02)
    if (isNaN(resultado) == true){
        document.getElementById('resultado').innerHTML = '';
    }else{
        document.getElementById('resultado').innerHTML = resultado
    }
}

function Limpa(){
    document.getElementById('resultado').innerHTML = '';
}