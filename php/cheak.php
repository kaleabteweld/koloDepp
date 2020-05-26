<?php

session_start();

require("../php/fun/functions.php");
require("../php/fun/python_php.php");
require("../php/fun/sql_include.php");



function get_key($tabel){

    $INIT =  mysqli_connect("localhost","pain","pain","kolo_deep");


   $Q = "SELECT * FROM {$tabel}";
   $to = mysqli_query($INIT,$Q);
   $t = mysqli_fetch_assoc($to);

   return array_keys($t);

}


function read_data($query){

   $Result = [];

   $INIT =  mysqli_connect("localhost","pain","pain","kolo_deep");

   if ($result = mysqli_query($INIT, $query)) {
       while ($row = mysqli_fetch_row($result)) {

           array_push($Result,$row);
       }

       mysqli_free_result($result);
   }

   return $Result;
}

function check_exst_s_up($type="all",$date){

 
    if($type == "all"){

        $re = [0,0,0,0];
    

        $key = get_key("accounts");
        for ($i=1; $i != 5; $i++) { 
            
            $a = "SELECT ".$key[$i]." FROM admin where ".$key[$i]." = '{$date[$i-1]}' ";
            $temp = read_data($a);
            if(len($temp) != 0){
                $re[$i-1] = 1;
            }
        }

        return $re;
    }else{

        $Re = 0;
        
        $a = "SELECT ".$type." FROM admin where ".$type." = '{$date}' ";
        $temp = read_data($a);
        if(len($temp) != 0){
            $Re = 1;
            return $Re;
        }else{
            return $Re;
        }
    }


    
}

if ((isset($_POST))) {


    // $name = $_POST['name_'];
    // $us_name = $_POST['us_name_'];
    // $email_ = $_POST['email_'];
    // $phon_ = $_POST['phon_'];
    // $password = $_POST['password_'];

    $type =  $_POST['type'];
    $need =  $_POST['need'];



    $need = str_replace(" ","_",$need);
    // $us_name_ = str_replace(" ","_",$us_name);
    // $password_ = str_replace(" ","_",$password);

    $re = check_exst_s_up($type,$need);
    if($re==1){

        echo "1";

            
        $_SESSION['log_in'] = "ok";
        setcookie("ok","ok",time()+(60*60*4));



    }elseif($re == 0){

        echo "0";
        
    }else{

        echo "error";

    }



    //echo $next;

}


?>