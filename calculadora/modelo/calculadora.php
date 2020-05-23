<?php 

    session_start();

    

    
    $_SESSION['valor'] = $_REQUEST['valor'];

    echo json_encode($valor);