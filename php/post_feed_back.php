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

    
    $email = $_POST['email'];
    if($email == "GET"){

        $msg = $_POST['msg'];
        $time = $_POST['time'];

        $a = "(SELECT  `ID`,`email`,`msg`,`time` FROM feed_back order by `ID` desc limit {$time},{$msg})";

        $need = read_data($a);

        if (!(len($need) == 0)) {

            //$need[2] = str_replace("_"," ",$need);
            for ($i=0; $i < len($need); $i++) { 
                //for ($j=0; $j < 2; $j++) { 
                   
                //}
                print_r($need[$i]);
                
            }

        }else{
            echo "no";
        }

    }
    
    else if($email == "len"){

        $a = "select `ID` FROM feed_back;";
        $need = read_data($a);
        echo len($need);

    }
    
    else if($email == "remove"){

        $msg = $_POST['msg'];
        $a = "delete from feed_back where `ID` = {$msg};";
        $INIT =  mysqli_connect("localhost","pain","pain","kolo_deep");
        $output = mysqli_query( $INIT , $a);
        
        if (isset($output)) {
            echo "done";
        }else{
            echo "no";
        }

    }

    else{


        $msg = $_POST['msg'];
        $time = $_POST['time'];
    
    
        $email = str_replace(" ","_",$email);
        $msg = str_replace(" ","_",$msg);
    
        $temp = insert("feed_back (`time`,`email`,`msg`) ",[$time,$email,$msg]);
        $INIT =  mysqli_connect("localhost","pain","pain","kolo_deep");
        $output = mysqli_query( $INIT , $temp);
        
        if (isset($output)) {
            echo "done";
        }else{
            echo "no";
        }

    }
   






}

?>