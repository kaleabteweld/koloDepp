function name(data,post) {
            
    var post = post;

    var start = data.indexOf("\n");

    while (start != -1) {
        
        data = data.replace("\n","<br>")


        start = data.indexOf("\n");
    }


    var start = data.indexOf("\1");
    var last = 0;
    var len = 0
    while (start != -1){

        let temp = data.substring(last,data.indexOf("\1"));

        last = data.indexOf("\1");
        data = data.replace("\1"," ");

        var ty = $("<p> </P>");

        ty.html(temp);
        let rw = $("<div id=\"raw\"> </div>");
        rw.append(ty)
        post.append(rw)

        start = data.indexOf("\1");
        len++;

    }

    return len;
}
function python(){


    var page = 4

    var railway = $("#python #main #railway");
    var train = $("#python #main #railway #train");
    
    var Previous = $("#python #main #controll #Previous");
    var Next = $("#python #main #controll #Next");

   

    //console.log("here");
    $.post("/koloDepp/post/python.txt",function (response, status, request) {
    
       

        //console.log(response)
        page = name(response,train);
        console.log("python len "+page);
    
        //let we = $("#python #main #railway #train>#raw:first-child").css("width");
        var raw = $("#python #main #railway #train #raw");
        let we = $("#python #main #railway #train #raw").css("width");
        let px = Number(we.replace('px',''));

        var  cont = 1;


        

        //next
        $(Next).click(function (e) { 

            if (cont != page && cont < page) {
                
                raw.animate(
                    { right:"+="+(px+20)+"px" }
                    ,500); 
        
                    cont++;  
                    console.log(cont);  
            }
        });

        //pre
        $(Previous).click(function (e) { 
            
            if (cont > 1) {
                
                raw.animate(
                    { right:"-="+(px+20)+"px" }
                    ,500); 
        
                    cont--;  
                    console.log(cont);  
            }
            
        });

    });
    

    var conn = 0;
    $(".con #nav #pyclo").click(function (e) { 

        var temp = $("#python");
        if (conn == 0) {

            temp.animate({

                "height":"-=90vh"
            },500,function () {
                $("#python #main").css("display","none");
            })

            conn = 1
        }else if(conn == 1){


            temp.animate({

                "height":"+=90vh"
            },500,function () {
                $("#python #main").css("display","block");
            })

            conn = 0

        }

        
    });
    
    var connnn = 0;
    var TEMP;
    $(".con #nav #pyview").click(function (e) { 

        var temp = $("#python #main #controll");
        
        
        if (connnn == 0 && conn == 0) {

            
            $("#python #main #railway #train").css({

                "display":"flex",
                "flex-direction":"column"
            })

            $("#python #main #railway #train #raw").css("height","auto");
            TEMP =  $("#python #main #railway #train #raw").css("right");
            $("#python #main #railway #train #raw").css("right","auto");
            temp.css("display","none");

            connnn = 1
        }else if(connnn == 1 && conn == 0){



            $("#python #main #railway #train").css({

                "display":"flex",
                "flex-direction":"row"
            })

            $("#python #main #railway #train #raw").css("height","100%");
            $("#python #main #railway #train #raw").css("right",TEMP);
            temp.css("display","flex");

            connnn = 0

        }

        
    });



}
function pre(){

    var data = "";
    var page = 4

    var railway = $("#prepo #main #railway");
    var train = $("#prepo #main #railway #train");
    
    var Previous = $("#prepo #main #controll #Previous");
    var Next = $("#prepo #main #controll #Next");



    $.post("/koloDepp/post/pre.txt",function (response, status, request) {
    
       

        //console.log(response)
        page = name(response,train);
        console.log("prepo len "+page);
    
        //let we = $("##prepo #main #railway #train>#raw:first-child").css("width");
        var raw = $("#prepo #main #railway #train #raw");
        let we = $("#prepo #main #railway #train #raw").css("width");
        let px = Number(we.replace('px',''));

        var  cont = 1;


        

        //next
        $(Next).click(function (e) { 

            if (cont != page && cont < page) {
                
                raw.animate(
                    { right:"+="+(px+20)+"px" }
                    ,500); 
        
                    cont++;  
                    console.log(cont);  
            }
        });

        //pre
        $(Previous).click(function (e) { 
            
            if (cont > 1) {
                
                raw.animate(
                    { right:"-="+(px+20)+"px" }
                    ,500); 
        
                    cont--;  
                    console.log(cont);  
            }
            
        });

    });

    var conn = 0;
    $(".con #nav #preclo").click(function (e) { 

        var temp = $("#prepo");
        if (conn == 0) {

            temp.animate({

                "height":"-=90vh"
            },500,function () {
                $("#prepo #main").css("display","none");
            })

            conn = 1
        }else if(conn == 1){


            temp.animate({

                "height":"+=90vh"
            },500,function () {
                $("#prepo #main").css("display","block");
            })

            conn = 0

        }

        
    });
    
    var connnn = 0;
    var TEMP;
    $(".con #nav #preview").click(function (e) { 

        var temp = $("#prepo #main #controll");
        if (connnn == 0 && conn == 0) {

            
            $("#prepo #main #railway #train").css({

                "display":"flex",
                "flex-direction":"column"
            })

            $("#prepo #main #railway #train #raw").css("height","auto");
            TEMP =  $("#prepo #main #railway #train #raw").css("right");
            $("#prepo #main #railway #train #raw").css("right","auto");
            temp.css("display","none");

            connnn = 1
        }else if(connnn == 1 && conn == 0){


            $("#prepo #main #railway #train").css({

                "display":"flex",
                "flex-direction":"row"
            })

            $("#prepo #main #railway #train #raw").css("height","100%");
            $("#prepo #main #railway #train #raw").css("right",TEMP);
            temp.css("display","flex");

            connnn = 0

        }

        
    });
    
}
function dl(){

    var data = "";
    var page = 4

    var railway = $("#dl #main #railway");
    var train = $("#dl #main #railway #train");
    
    var Previous = $("#dl #main #controll #Previous");
    var Next = $("#dl #main #controll #Next");

    $.post("/koloDepp/post/deep.txt",function (response, status, request) {
    
       

        //console.log(response)
        page = name(response,train);
        console.log("deep len "+page);
    
        //let we = $("##dlpo #main #railway #train>#raw:first-child").css("width");
        var raw = $("#dl #main #railway #train #raw");
        let we = $("#dl #main #railway #train #raw").css("width");
        let px = Number(we.replace('px',''));

        var  cont = 1;


        

        //next
        $(Next).click(function (e) { 

            if (cont != page && cont < page) {
                
                raw.animate(
                    { right:"+="+(px+20)+"px" }
                    ,500); 
        
                    cont++;  
                    console.log(cont);  
            }
        });

        //pre
        $(Previous).click(function (e) { 
            
            if (cont > 1) {
                
                raw.animate(
                    { right:"-="+(px+20)+"px" }
                    ,500); 
        
                    cont--;  
                    console.log(cont);  
            }
            
        });

    });

    var conn = 0;
    $(".con #nav #dlclo").click(function (e) { 

        var temp = $("#dl");
        if (conn == 0) {

            temp.animate({

                "height":"-=90vh"
            },500,function () {
                $("#dl #main").css("display","none");
            })

            conn = 1
        }else if(conn == 1){


            temp.animate({

                "height":"+=90vh"
            },500,function () {
                $("#dl #main").css("display","block");
            })

            conn = 0

        }

        
    });
    
    var connnn = 0;
    var TEMP;
    $(".con #nav #dlview").click(function (e) { 

        var temp = $("#dl #main #controll");
        if (connnn == 0 && conn == 0) {

            
            $("#dl #main #railway #train").css({

                "display":"flex",
                "flex-direction":"column"
            })

            $("#dl #main #railway #train #raw").css("height","auto");
            TEMP =  $("#dl #main #railway #train #raw").css("right");
            $("#dl #main #railway #train #raw").css("right","auto");
            temp.css("display","none");

            connnn = 1
        }else if(connnn == 1 && conn == 0){


            $("#dl #main #railway #train").css({

                "display":"flex",
                "flex-direction":"row"
            })

            $("#dl #main #railway #train #raw").css("height","100%");
            $("#dl #main #railway #train #raw").css("right",TEMP);
            temp.css("display","flex");

            connnn = 0

        }

        
    });
    
}


$(function (){


    python();
    pre();
    dl();




});