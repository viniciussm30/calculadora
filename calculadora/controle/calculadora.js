$(document).ready(function() {
    $('.btn').click(function(e) {
        e.preventDefault();

        var value = `valor=${$(this).attr('id')}`;

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            async: true,
            data: value,
            url: 'teste.php',
            success: function(dados) {

            }

        });
    });
});