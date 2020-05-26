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

    $name = $_POST['name'];

    if ($name == "all") {
       
        $a = "(SELECT  `ID`,`name`,`data`,`time` FROM comment order by `ID` desc limit 10) order by `ID`";

        $need = read_data($a);
    
        if (!(len($need) == 0)) {
    
            for ($i=0; $i < len($need); $i++) { 
                //for ($j=0; $j < 2; $j++) { 
                   
                //}
                print_r($need[$i]);
                
            }
            
        //echo len($need[0]);
        //echo "good";
        }else{
            echo "no";
        }

    }
    elseif($name == "one"){

        $a = "(SELECT  `ID`,`name`,`data`,`time` FROM comment order by `ID` desc limit 1) order by `ID`";

        $need = read_data($a);

        if (!(len($need) == 0)) {

            //$need[2] = str_replace("_"," ",$need);
            print_r($need);

        }else{
            echo "no";
        }

    }
   
   

    





}


?>