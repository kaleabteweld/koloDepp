<?php

    session_start();
    $_SESSION['log_in'] = "no";
    header("Location: ../log.php");



?>