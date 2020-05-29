$(document).ready(function() {

    var display = '';





    function calcular(value) {
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            async: true,
            data: value,
            url: 'calculo/modelo/calculadora.php',
            success: function(dados) {
                $('#display').val(dados.result);
            }


        });
    }
    $('.btn').click(function(e) {
        e.preventDefault();
        let number = $(this).attr('id');

        var value

        switch (number) {
            case "C":
                value = `valor=0&operacao=C`;
                calcular(value);
                display = "";

                break;


            case "soma":
                value = `valor=${display}&operacao=soma`;
                calcular(value);
                display = "";
                break;
            case "subtracao":
                value = `valor=${display}&operacao=subtracao`;
                calcular(value);
                display = "";
                break;
            case 'multiplicacao':
                value = `valor=${display}&operacao=multiplicacao`;
                calcular(value);
                display = "";
                break;
            case 'divisao':
                value = `valor=${display}&operacao=divisao`;
                calcular(value);
                display = "";
                break;



            default:
                display += number;
                $('#display').val(display);
        }


    });
});