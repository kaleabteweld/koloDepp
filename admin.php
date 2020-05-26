<?php

    session_start();
    if($_SESSION['log_in'] != "ok"){

        header("Location: log.php");
        
    }else{

       // print_r($_SESSION);
        $_SESSION['log_in'] = "no";
    }



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" type="text/css" href="../koloDepp/css/admin.css">
    <link rel="stylesheet" type="text/css" href="../koloDepp/css/Comments.css">

    <link href="../koloDepp/Thid Party/bootstrap-4.3.1-dist/css/bootstrap.min.css" rel="stylesheet">


    <title> kolo Deep Admin </title>
</head>
<body>

    <nav class="navbar navbar-dark bg-dark">
        <a id="he" class="navbar-brand">kolo Deep Admin</a>
        <p id="title">Feed Back</p>
        <a id="logout" class="navbar-item" href="../koloDepp/php/logout.php">log out</a>
    </nav>

    <div id="root">

        <div id="sied">


            <button type="button" class="btn btn-primary" id="feed_back">
             feed back 
             <!-- <span class="badge badge-info">9</span> -->

            </button>

            <button type="button" class="btn btn-primary" id="chat">
                chat 
                <!-- <span class="badge badge-info">9</span> -->
            </button>

            <!-- <button type="button" class="btn btn-primary" id="other">
                other 
                
            </button> -->

            <button type="button" class="btn btn-primary" id="python">
             python
             <!-- <span class="badge badge-info">9</span> -->

            </button>

            <button type="button" class="btn btn-primary" id="pre">
                preprossing
                <!-- <span class="badge badge-info">9</span> -->
            </button>

            <button type="button" class="btn btn-primary" id="dl">
                deep leaning 
                <!-- <span class="badge badge-info">0</span> -->
            </button>


        </div>

        <div id="main">

            <div id="read_email">

                <div id="output">
                </div>
                

                <div id="but">

                    <button class="btn btn-primary" id="pre">load more</button>


                </div>


            </div>

            <div id="comments"  style="display: none;">

                <div id="output">
                </div>
            
                <div id="input" class="container-fluid">
                    <div id="form">
                        <div class="T">
                
                            <div class="form-group">
                               
                                <textarea id="comment" class="form-control" rows="3" placeholder="comment"></textarea> 
                            </div>
            
                        </div>
            
            
                        <button class="btn btn-primary" id="post">Post</button>
            
                    </div>
                </div>
            
            </div>
            

            <div id="pythonEidt" class="CON_main" style="display: none">

                <div id="python" class="con">
                
                    <div id="main">
                
                        <div id="railway">
                            <div id="train">
                
                            </div>
                        </div>
                
                        <div id="controll">
                            <button class="btn btn-primary" id="Previous">Previous</button>
                            <button class="btn btn-primary" id="Next">Next</button>
                        </div>
                
                    </div>
                </div>

                <div id="but">

                    <button class="btn btn-primary" id="save">save</button>
                    <button class="btn btn-primary" id="load">load from a file(*.txt)</button>

                </div>

            </div>

            <div id="preEidt"  class="CON_main" style="display: none">

                <div id="pre" class="con">
                
                    <div id="main">
                
                        <div id="railway">
                            <div id="train">
                
                            </div>
                        </div>
                
                        <div id="controll">
                            <button class="btn btn-primary" id="Previous">Previous</button>
                            <button class="btn btn-primary" id="Next">Next</button>
                        </div>
                
                    </div>
                </div>

                <div id="but">

                    <button class="btn btn-primary" id="save">save</button>
                    <button class="btn btn-primary" id="load">load from a file(*.txt)</button>

                </div>

            </div>

            <div id="dlEidt"  class="CON_main" style="display: none">

                <div id="dl" class="con">
                
                    <div id="main">
                
                        <div id="railway">
                            <div id="train">
                
                            </div>
                        </div>
                
                        <div id="controll">
                            <button class="btn btn-primary" id="Previous">Previous</button>
                            <button class="btn btn-primary" id="Next">Next</button>
                        </div>
                
                    </div>
                </div>

                <div id="but">

                    <button class="btn btn-primary" id="save">save</button>
                    <button class="btn btn-primary" id="load">load from a file(*.txt)</button>

                </div>

            </div>

        </div>
    </div>

<script src="../koloDepp/Thid Party/jquery-3.4.1.js"></script>
<script src="../koloDepp/Thid Party/bootstrap-4.3.1-dist/js/bootstrap.js"></script>




<!-- <script src="../koloDepp/js/Comments.js"></script> -->
<script src="../koloDepp/js/admin.js"></script>





</body>
</html>