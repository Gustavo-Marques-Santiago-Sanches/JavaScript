//Captura todas as encomendas
var clientes = document.querySelectorAll(".cliente");

for (var count=0; count < clientes.length; count++){
    
    //Captura a quantidade encomendada
    var quant = clientes[count].querySelector(".quant").textContent;

    //Captura o valor unitario da encomenda
    var unitario = clientes[count].querySelector(".valor").textContent;

    //Verifica se a quantidade é valida
    if (quant < 1 || isNaN(quant)){
        //Quantidade NOK, avisa usuário
        clientes[count].querySelector(".quant").textContent = "QUANTIDADE INVALIDA!";
        clientes[count].style.color="white";
        clientes[count].style.backgroundColor="red";
    } else{
        //Quantidade OK, prosseguir
        //Captura o valor da encomenda
        clientes[count].querySelector(".total").textContent = calculaTotal(quant, unitario);
    }
}

//Função para o calculo do valor total
function calculaTotal(quantEncomenda, unitarioProduto){
    var total = 0;

    total = quantEncomenda * unitarioProduto;

    return total;
}