//variavel para pegar o id resposta
let resultado = document.getElementById("resultado")



//função que verifica se uma resposta é correta
function verificarResposta1(resposta){
    if(resposta === "c"){
        resultado.innerHTML = "Resposta correta";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "Resposta incorreta";
        resultado.style.color = "red";
    }
}

function verificarResposta2(resposta){
    if(resposta === "d"){
        resultado.innerHTML = "Resposta correta";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "Resposta incorreta";
        resultado.style.color = "red";
    }
}

function verificarResposta3(resposta){
    if(resposta === "a"){
        resultado.innerHTML = "Resposta correta";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "Resposta incorreta";
        resultado.style.color = "red";
    }
}

function verificarResposta4(resposta){
    if(resposta === "b"){
        resultado.innerHTML = "Resposta correta";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "Resposta incorreta";
        resultado.style.color = "red";
    }
}
