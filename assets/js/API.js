function att_graf(){
    var clientes = document.querySelectorAll(".cliente");
            var cq_casa = 0;
            var cq_especial = 0;
            var cq_padrao = 0;
            var cq_vegano = 0;
            var cq_double = 0;
            //Verifica se tem critério de busca

        for(var cli = 0; cli < clientes.length; cli++){
                
            var nome = clientes[cli].querySelector(".info-produto").textContent;
            var quant = clientes[cli].querySelector(".quant").textContent;

            //Verifica os produtos
            if(nome == 'CQ da Casa'){
                if(!isNaN(quant) && quant > 0){
                    quant = parseInt(quant);
                    cq_casa = cq_casa+quant;
                }
            }
            else if(nome == 'CQ Especial'){
                if(!isNaN(quant) && quant > 0){
                    quant = parseInt(quant);
                    cq_especial = cq_especial+quant;
                }
            }
            else if(nome == 'CQ Padrão'){
                if(!isNaN(quant) && quant > 0){
                    quant = parseInt(quant);
                    cq_padrao = cq_padrao+quant;
                }
            }
            else if(nome == 'CQ Vegano'){
                if(!isNaN(quant) && quant > 0){
                    quant = parseInt(quant);
                    cq_vegano = cq_vegano+quant;
                }
            }
            else if(nome == 'Double CQ'){
                if(!isNaN(quant) && quant > 0){
                    quant = parseInt(quant);
                    cq_double = cq_double+quant;
                }
            }
        }

        console.log(cq_vegano);

    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['CQ da Casa', cq_casa],
            ['CQ Especial', cq_especial],
            ['CQ Padrão', cq_padrao],
            ['CQ Vegano', cq_vegano],
            ['Double CQ', cq_double]
        ]);

        var options = {
            title: 'Relação de Pedidos',
            is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
    }
}

att_graf();