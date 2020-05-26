<?php

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
            
            $a = "SELECT ".$key[$i]." FROM accounts where ".$key[$i]." = '{$date[$i-1]}' ";
            $temp = read_data($a);
            if(len($temp) != 0){
                $re[$i-1] = 1;
            }
        }
    }
    //$a = "SELECT * FROM main_events where event_date = '{$Date}' "

    return $re;
}

if ((isset($_POST))) {

    $type = $_POST["type"];
    $data = $_POST["data"];

    $myfile = fopen("../post/{$type}.txt","w");
    fwrite($myfile, $data);
    
    if(fclose($myfile)){
        echo "ok";
    }else{
        echo "error";
    }


}


?>