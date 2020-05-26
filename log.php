<?php

    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="../koloDepp/Thid Party/jquery-3.4.1.js"></script>
    <link href="../koloDepp/Thid Party/bootstrap-4.3.1-dist/css/bootstrap.min.css" rel="stylesheet">

    <link href="../koloDepp/css/logIn.css" rel="stylesheet">    

    <title>Log In</title>
</head>
<body>




    <div id="a">
        <nav id="nav" class="navbar navbar-light bg-light navbar-expand-sm">

            <a class="navbar-brand" href="#">kolo Deep</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
    
            <div class="collapse navbar-collapse" id="navbarResponsive">
    
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="../koloDepp/index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="../koloDepp/aboutMe.html">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="../koloDepp/contactMe.html">Contact</a></li>
                </ul>
    
            </div>
        </nav>

        <div id="main">

            <form id="form" action = "../koloDepp/admin.php" method = "post">
                
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" name = "email" class="form-control" id="email" placeholder="email@example.com">
                    <div class="invalid-feedback">
                        <p>
                            check your Email
                        </p>
                    </div>
                </div>

                <div class="form-group">
                    <label for="pass">password</label>
                    <input type="password" name = "pass" class="form-control" id="pass" placeholder="*******">
                    <div class="invalid-feedback">
                        <p>
                            check your password
                        </p>
                    </div>
                </div>


                <button id="post" type="submit" value = "submit" style="border-radius: 11rem; margin-top: 30px;" class="btn btn-success"> Log In</button>


            </form>  

        </div>


        <div id="temp" style="display: none;">
            
        </div>
    </div>

    
    <script src="../koloDepp/Thid Party/bootstrap-4.3.1-dist/js/bootstrap.js"></script>

    <script src="../koloDepp/js/logIn.js"></script>
</body>
</html>