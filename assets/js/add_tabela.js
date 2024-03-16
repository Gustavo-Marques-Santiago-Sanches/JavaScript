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

    colunaNome.textContent = nome;
    colunaProd.textContent = prod;
    colunaQuant.textContent = quant;
    colunaVal.textContent = format(parseFloat(val));

    linha.appendChild(colunaNome);
    linha.appendChild(colunaProd);
    linha.appendChild(colunaQuant);
    linha.appendChild(colunaVal);
    
    return tabela.appendChild(linha);

    //formata_tabela(nome, prod, quant, val);
});

