var botaoAdd = document.querySelector("#bot");

botaoAdd.addEventListener("click", function(event){
    event.preventDefault();
    
    var nome = document.getElementById("nome").value;
    var prod = document.getElementById("produto").value;
    var quant = document.getElementById("quantidade").value;
    var val = document.getElementById("val_unit").value;
    var tabela = document.querySelector("#tabela");

    var linha = document.createElement("tr");
    var colunaNome = document.createElement("td");
    var colunaProd = document.createElement("td");
    var colunaQuant = document.createElement("td");
    var colunaVal = document.createElement("td");
    var colunaTotal = document.createElement("td");

    colunaNome.textContent = nome;
    colunaProd.textContent = prod;
    colunaQuant.textContent = quant;
    colunaVal.textContent = format(parseFloat(val));
    colunaTotal.textContent = calculaTotal(quant, val);

    linha.appendChild(colunaNome);
    linha.appendChild(colunaProd);
    linha.appendChild(colunaQuant);
    linha.appendChild(colunaVal);
    linha.appendChild(colunaTotal);

    if(validaEncomenda(encomenda).length > 0){
        //Dados invalidos, exibe erro
        console.log(validaEncomenda(encomenda));
    }

    //document.querySelector("#form-adiciona").reset();

    return tabela.appendChild(linha);
});

//Função para validar os dados da encomenda
function validaEncomenda(dadosEncomenda){

    var erros = []

    if(dadosEncomenda.nome.length==0){
        erros.push("O nome do cliente não pode ser vazio!");
    }
    if(dadosEncomenda.prod==0){
        erros.push("Por favor, selecione um produto para essa encomanda.");
    }
    if(!validaQuant(dadosEncomenda.quant) || dadosEncomenda.quant <= 0){
        erros.push("A quantidade é invalida!");
    }
    if(dadosEncomenda.val <=0 || isNaN(dadosEncomenda.val)){
        erros.push("O valor unitario é invalido!");
    }

    return erros;
}