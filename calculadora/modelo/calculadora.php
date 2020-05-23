<?php 

    $valor = null;
    $valor += $_REQUEST('valor');

    echo json_encode($valor);