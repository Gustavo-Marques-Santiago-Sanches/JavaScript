var clientes = document.querySelectorAll(".cliente");

var cq_casa = 0;
var cq_especial = 0;
var cq_padrao = 0;
var cq_vegano = 0;
var cq_double = 0;
//Verifica se tem critério de busca

for(var cli = 0; cli < clientes.length; cli++){
    
    var nome = clientes[cli].querySelector(".info-produto").textContent;

    //Verifica os produtos
    if(nome == 'CQ da Casa'){
        cq_casa = cq_casa+1;
    }
    else if(nome == 'CQ Especial'){
        cq_especial = cq_especial+1;
    }
    else if(nome == 'CQ Padrão'){
        cq_padrao = cq_padrao+1;
    }
    else if(nome == 'CQ Vegano'){
        cq_vegano = cq_vegano+1;
    }
    else if(nome == 'Double CQ'){
        cq_double = cq_double+1;
    }
}


google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['CQ da Casa',     cq_casa],
        ['CQ Especial',      cq_especial],
        ['CQ Padrão',  cq_padrao],
        ['CQ Vegano', cq_vegano],
        ['Double CQ',    cq_double]
    ]);

    var options = {
        title: 'Relação de Pedidos',
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
}