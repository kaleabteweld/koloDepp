

function remove(id) {
    
    console.log($(id).attr("data"));

   // $.post
   $.post("/koloDepp/php/post_feed_back.php", { email:"remove", msg:$(id).attr("data")}, function (response, status, request) {
     
        if(response == "done"){
            $(id).fadeOut(1000,function () {
                $(id).remove();
            });
            
        }else{
            console.log("error no dell \n"+response)
        }
    });
}

function INIT_email_output(data_len = 10,skip = 0){

    var data_len = data_len;
    var skip = skip;

    var text_msg = $("<div id=\"text_msg\" class=\"other\"></div");

    var output = $("#root #main #read_email #output");

    
    var msg = $("<div id=\"msg\"> </div");

    data = ""



    $.post("/koloDepp/php/post_feed_back.php", { email:"GET", msg:String(data_len),time:skip}, function (response, status, request) {
            
        //console.log("responseinit "+ response);
        data = response;

        var fetchers = 4;
        

        var main_ind = data.indexOf("Array");
        let end = 1;
        temp = " "
        var Temp = [];
        var id = "";
        

        for (let index = 0; index < end; index++){
            
            //console.log(main_ind)

            temp = data.substring(data.indexOf('('),data.indexOf(')'))

            //console.log("temp "+temp)

            data = data.replace("("," ");
            data = data.replace(")"," ");

            temp = temp.replace("("," ");
            temp = temp.replace(")"," ");
            
            
            te = temp.substring(temp.indexOf('[0] =>'),temp.indexOf('[1] =>'))
            te = te.replace("[0] =>"," ");
            te = te.trimRight();
            te = te.trimLeft();
            //id.push(te);
            id = te;
            $(text_msg).attr("data", id);
            //console.log("id "+te);
            $(text_msg).dblclick(function (e) { 
                
                //let a = te;
                remove(this);
                
            });
            
            


            te = temp.substring(temp.indexOf('[1] =>'),temp.indexOf('[2] =>'))
            te = te.replace("[1] =>"," ");
            te = te.trimRight();
            te = te.trimLeft();
            //console.log(te)

            let p = "<p id=\"name\">"+te+"</p>";
            $(msg).append(p);

            Temp.push(te)

            te = temp.substring(temp.indexOf('[2] =>'),temp.indexOf('[3] =>'))
            te = te.replace("[2] =>"," ");
            te = te.trimRight();
            te = te.trimLeft();
            // console.log(te)

            p = "<p id=\"p\">"+te+"</p>";
            $(msg).append(p);

            Temp.push(te)

            te = temp.substring(temp.indexOf('[3] =>'))
            te = te.replace("[3] =>"," ");
            te = te.replace("Arra"," ");
            te = te.trimRight();
            te = te.trimLeft();

            p = "<p id=\"time\">"+te+"</p>";
            $(msg).append(p);

            Temp.push(te)
            //console.log(te)
            //console.log("index "+index);

            

            $(text_msg).append(msg);
            

            //var but = $("<button> remove </button>");


           // $(text_msg).append(but);

            $(output).append(text_msg);
            

            text_msg = $("<div id=\"text_msg\" class=\"other\"></div");
            

            msg = $("<div id=\"msg\"> </div");
            
        
            
            data = data.replace("Array","");
            main_ind = data.indexOf("Array");
            if(main_ind != -1){
                end++;
            }
            //console.log(data)
            
            
            
        }


        
        
    
    });

       
    
}
function INIT_comments_output(){


    var output = $("#comments #output");

    var text_msg = $("<div id=\"text_msg\" class=\"other\"></div");
    $(text_msg).append("<img src=\"../koloDepp/IMG/person-using-macbook-374720.jpg\">");

    var msg = $("<div id=\"msg\"> </div");

    data = ""
    $.post("/koloDepp/php/get_comments.php", { name:"all"}, function (response, status, request) {
            
        //console.log("responseinit "+ response);
        data = response;

        var fetchers = 3;
        var data_len = 10;

        var main_ind = data.indexOf("Array")+1;
        let end = 1;
        temp = " "
        var Temp = [];

        for (let index = 0; index < end; index++){
            
            //console.log(main_ind)

            temp = data.substring(data.indexOf('('),data.indexOf(')'))

            data = data.replace("("," ");
            data = data.replace(")"," ");

            temp = temp.replace("("," ");
            temp = temp.replace(")"," ");
            //console.log("temp "+temp)
            



            te = temp.substring(temp.indexOf('[1] =>'),temp.indexOf('[2] =>'))
            te = te.replace("[1] =>"," ");
            te = te.trimRight();
            te = te.trimLeft();
            //console.log(te)

            let p = "<p id=\"name\">"+te+"</p>";
            $(msg).append(p);

            Temp.push(te)

            te = temp.substring(temp.indexOf('[2] =>'),temp.indexOf('[3] =>'))
            te = te.replace("[2] =>"," ");
            te = te.trimRight();
            te = te.trimLeft();
           // console.log(te)

           p = "<p id=\"p\">"+te+"</p>";
           $(msg).append(p);

            Temp.push(te)

            te = temp.substring(temp.indexOf('[3] =>'))
            te = te.replace("[3] =>"," ");
            te = te.replace("Arra"," ");
            te = te.trimRight();
            te = te.trimLeft();

            p = "<p id=\"time\">"+te+"</p>";
            $(msg).append(p);

            Temp.push(te)
            //console.log(te)
            //console.log("index "+index);

            $(text_msg).append(msg);

            $(output).append(text_msg);

            text_msg = $("<div id=\"text_msg\" class=\"other\"></div");
            $(text_msg).append("<img src=\"../koloDepp/IMG/person-using-macbook-374720.jpg\">");

            msg = $("<div id=\"msg\"> </div");

            
            data = data.replace("Array","");
            main_ind = data.indexOf("Array");
            if(main_ind != -1){
                end++;
            }
            //console.log(data)
           
            
            
        }


        
        
   
   });

}
function load() {
    
    var len = "";
    $.post("/koloDepp/php/post_feed_back.php", { email:"len"}, function (response, status, request) {
      
        len = response;
        len = Number(len);
        console.log(len);
        
        var CON = 1;
        var skip = 10;
        $("#root #main #read_email #but #pre").click(function (e) { 
    
            if (CON > 0) {
    
                skip += 10;
                CON = len - skip;
                INIT_email_output(skip,(skip-10));
                
            }
            
        });

        
        //$("#root #sied #feed_back span").text(String(len));

    });
}
function comments_refrch(){


    var output = $("#root #main #comments #output");

    var text_msg = $("<div id=\"text_msg\" class=\"me\"></div");
    $(text_msg).append("<img src=\"../koloDepp/IMG/person-using-macbook-374720.jpg\">");

    var msg = $("<div id=\"msg\"> </div");

    data = ""
    $.post("/koloDepp/php/get_comments.php", { name:"one"}, function (response, status, request) {
            
        //console.log("responseinit "+ response);
        data = response;


        temp = data.substring(data.indexOf('('),data.indexOf(')'))

        data = data.replace("("," ");
        data = data.replace(")"," ");

        temp = temp.replace("("," ");
        temp = temp.replace(")"," ");
        //console.log("temp "+temp)
        



        te = temp.substring(temp.indexOf('[1] =>'),temp.indexOf('[2] =>'))
        te = te.replace("[1] =>"," ");
        te = te.trimRight();
        te = te.trimLeft();
        //console.log(te)

        let p = "<p id=\"name\">"+te+"</p>";
        $(msg).append(p);


        te = temp.substring(temp.indexOf('[2] =>'),temp.indexOf('[3] =>'))
        te = te.replace("[2] =>"," ");
        te = te.trimRight();
        te = te.trimLeft();
        // console.log(te)

        p = "<p id=\"p\">"+te+"</p>";
        $(msg).append(p);


        te = temp.substring(temp.indexOf('[3] =>'))
        te = te.replace("[3] =>"," ");
        te = te.replace("Arra"," ");
        te = te.trimRight();
        te = te.trimLeft();

        p = "<p id=\"time\">"+te+"</p>";
        $(msg).append(p);

        //console.log(te)
        //console.log("index "+index);

        $(text_msg).append(msg);

        $(output).append(text_msg);

        text_msg = $("<div id=\"text_msg\" class=\"other\"></div");
        $(text_msg).append("<img src=\"../koloDepp/IMG/person-using-macbook-374720.jpg\">");

        msg = $("<div id=\"msg\"> </div");


           
            
            
        


        
        
   
   });

 

   

}

function name(data,post) {
            
    var post = post;

    var start = data.indexOf("\n");

    var start = data.indexOf("\1");
    var last = 0;
    var len = 0
    while (start != -1){

        let temp = data.substring(last,data.indexOf("\1"));

        last = data.indexOf("\1");
        data = data.replace("\1"," ");

        var ty = $("<textarea id=\"raw\" data=\""+len+"\"></textarea>");

        ty.html(temp);
        // let rw = $("<div id=\"raw\"> </div>");
        // rw.append(ty)
        post.append(ty);

        start = data.indexOf("\1");
        len++;

    }

    return len;
}

function pyton_init() {

    
    
    var page = 5;

    var railway = $("#root #main #pythonEidt #python #main #railway");
    
    var train = $("#root #main #pythonEidt #python #main #railway #train");
    
    var Previous = $("#root #main #pythonEidt #python #main #controll #Previous");
    var Next = $("#root #main #pythonEidt #python #main #controll #Next");

   

    //console.log("here");
    $.post("/koloDepp/post/python.txt",function (response, status, request) {
    
       

        //console.log(response)
        page = name(response,train);
        //console.log("python len "+page);
    
        //let we = $("#python #main #railway #train>#raw:first-child").css("width");
        var raw = $("#root #main #pythonEidt #python #main #railway #train #raw");
        let we = $("#root #main #pythonEidt #python #main #railway #train #raw").css("width");
        let px = Number(we.replace('px',''));

        var  cont = 1;


        

        //next
        $(Next).click(function (e) { 

            var raw = $("#root #main #pythonEidt #python #main #railway #train #raw");
            let we = $("#root #main #pythonEidt #python #main #railway #train #raw").css("width");
            let px = Number(we.replace('px',''));

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
            
            var raw = $("#root #main #pythonEidt #python #main #railway #train #raw");
            let we = $("#root #main #pythonEidt #python #main #railway #train #raw").css("width");
            let px = Number(we.replace('px',''));
            
            if (cont > 1) {
                
                raw.animate(
                    { right:"-="+(px+20)+"px" }
                    ,500); 
        
                    cont--;  
                    console.log(cont);  
            }
            
        });

        var save = $("#root #main #pythonEidt #but #save");
        var load_but = $("#root #main #pythonEidt #but #load");

        $(save).click(function (e) { 

        

            //console.log(page);
            var data = "";
            let temp = $("#root #main #pythonEidt .con #main #railway #train textarea");
            data = $(temp[0]).val();
            for (let i = 1; i < page+1; i++) {
                
                data = data+""+$(temp[i]).val();
                //console.log(i);
                
            }
            //console.log("data \n\n\n"+data);
            
            //$.post
            save.load("/koloDepp/php/save.php", { type:"python",data:data}, function (response, status, request) {
                
                console.log(response);
           
           });
            
        });

    });
    

    
}
function pre_init() {

    var page = 5;
    

    var railway = $("#root #main #preEidt #pre #main #railway");
    
    var train = $("#root #main #preEidt #pre #main #railway #train");
    
    var Previous = $("#root #main #preEidt #pre #main #controll #Previous");
    var Next = $("#root #main #preEidt #pre #main #controll #Next");

   

    //console.log("here");
    $.post("/koloDepp/post/pre.txt",function (response, status, request) {
    
       

        //console.log(response)
        page = name(response,train);
        //console.log("pre len "+page);
    
        //let we = $("#pre #main #railway #train>#raw:first-child").css("width");
        var raw = $("#root #main #preEidt #pre #main #railway #train #raw");
        let we = $("#root #main #preEidt #pre #main #railway #train #raw").css("width");
        let px = Number(we.replace('px',''));

        var  cont = 1;


        

        //next
        $(Next).click(function (e) { 

            var raw = $("#root #main #preEidt #pre #main #railway #train #raw");
            let we = $("#root #main #preEidt #pre #main #railway #train #raw").css("width");
            let px = Number(we.replace('px',''));

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
            
            var raw = $("#root #main #preEidt #pre #main #railway #train #raw");
            let we = $("#root #main #preEidt #pre #main #railway #train #raw").css("width");
            let px = Number(we.replace('px',''));
            
            if (cont > 1) {
                
                raw.animate(
                    { right:"-="+(px+20)+"px" }
                    ,500); 
        
                    cont--;  
                    console.log(cont);  
            }
            
        });

        var save = $("#root #main #preEidt #but #save");
        var load_but = $("#root #main #preEidt #but #load");

        $(save).click(function (e) { 

        

            console.log(page);
            var data = "";
            let temp = $("#root #main #preEidt .con #main #railway #train textarea");
            data = $(temp[0]).val();
            for (let i = 1; i < page+1; i++) {
                
                data = data+""+$(temp[i]).val();
                
            }
            
            //$.post
            save.load("/koloDepp/php/save.php", { type:"pre",data:data}, function (response, status, request) {
                
                console.log(response);
           
           });
            
        });

    });
    

    
}
function dl_init() {

    
    var page = 5;

    var railway = $("#root #main #dlEidt #dl #main #railway");
    
    var train = $("#root #main #dlEidt #dl #main #railway #train");
    
    var Previous = $("#root #main #dlEidt #dl #main #controll #Previous");
    var Next = $("#root #main #dlEidt #dl #main #controll #Next");

   

    //console.log("here");
    $.post("/koloDepp/post/deep.txt",function (response, status, request) {
    
       

        //console.log(response)
        page = name(response,train);
        //console.log("deep len "+page);
    
        //let we = $("#dl #main #railway #train>#raw:first-child").css("width");
        var raw = $("#root #main #dlEidt #dl #main #railway #train #raw");
        let we = $("#root #main #dlEidt #dl #main #railway #train #raw").css("width");
        let px = Number(we.replace('px',''));

        var  cont = 1;


        

        //next
        $(Next).click(function (e) { 

            var raw = $("#root #main #dlEidt #dl #main #railway #train #raw");
            let we = $("#root #main #dlEidt #dl #main #railway #train #raw").css("width");
            let px = Number(we.replace('px',''));

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
            
            var raw = $("#root #main #dlEidt #dl #main #railway #train #raw");
            let we = $("#root #main #dlEidt #dl #main #railway #train #raw").css("width");
            let px = Number(we.replace('px',''));
            
            if (cont > 1) {
                
                raw.animate(
                    { right:"-="+(px+20)+"px" }
                    ,500); 
        
                    cont--;  
                    console.log(cont);  
            }
            
        });

        var save = $("#root #main #dlEidt #but #save");
        var load_but = $("#root #main #dlEidt #but #load");

        $(save).click(function (e) { 

        

            console.log(page);
            var data = "";
            let temp = $("#root #main #dlEidt .con #main #railway #train textarea");
            data = $(temp[0]).val();
            for (let i = 1; i < page+1; i++) {
                
                data = data+""+$(temp[i]).val();
                
            }
            
            //$.post
            save.load("/koloDepp/php/save.php", { type:"deep",data:data}, function (response, status, request) {
                
                console.log(response);
           
           });
            
        });

    });
    

    
}

var comment_= "";

$(function (){
   
    
    nav_he = $("nav #he");
    sied = $("#root #sied");
    main = $("#root #main");

    var cont = 0;

    $(nav_he).click(function (e) { 

        if (cont == 0) {

            // close 
            sied.animate({

                width:"-=300px"
                },300,function (){

                    sied.css("display", "none");
            });
            cont = 1;
            
        }else if(cont == 1){

            sied.css("display", "flex");
            sied.animate({
                width:"+=300px"
            },300)

            cont = 0;
        }
        
    });



    feed_back_but = $("#root #sied #feed_back");
    feed_back = $("#root #main #read_email");

    comments_but = $("#root #sied #chat");
    comments = $("#root #main  #comments");


    python_but = $("#root #sied #python");
    python = $("#root #main #pythonEidt");

    pre_but = $("#root #sied #pre");
    pre = $("#root #main  #preEidt");

    deep_but = $("#root #sied #dl");
    deep = $("#root #main  #dlEidt");

    title = $("nav #title");

    $(feed_back_but).click(function (e) { 
        
        $(title).text("Feed Back");

        feed_back.css("display","block");
        comments.css("display","none");
        python.css("display","none");
        pre.css("display","none");
        deep.css("display","none");

        sied.animate({

            width:"-=300px"
            },300,function (){

                sied.css("display", "none");
        });
        cont = 1;
        
    });

    $(comments_but).click(function (e) { 
        
        $(title).text("Comments");

        feed_back.css("display","none");
        comments.css("display","block");
        python.css("display","none");
        pre.css("display","none");
        deep.css("display","none");

        sied.animate({

            width:"-=300px"
            },300,function (){

                sied.css("display", "none");
        });
        cont = 1;
        
    });

    $(python_but).click(function (e) { 
        
        $(title).text("python post");

        feed_back.css("display","none");
        comments.css("display","none");
        python.css("display","flex");
        pre.css("display","none");
        deep.css("display","none");


        sied.animate({

            width:"-=300px"
            },300,function (){

                sied.css("display", "none");
        });
        cont = 1;
        
    });

    $(pre_but).click(function (e) { 
        
        $(title).text("prepossing post");

 
        feed_back.css("display","none");
        comments.css("display","none");
        python.css("display","none");
        pre.css("display","flex");
        deep.css("display","none");

        sied.animate({

            width:"-=300px"
            },300,function (){

                sied.css("display", "none");
        });
        cont = 1;
        
    });

    $(deep_but).click(function (e) { 
        
        $(title).text("deep post");

 
        feed_back.css("display","none");
        comments.css("display","none");
        python.css("display","none");
        pre.css("display","none");
        deep.css("display","flex");

        sied.animate({

            width:"-=300px"
            },300,function (){

                sied.css("display", "none");
        });
        cont = 1;
        
    });



    var comment = $("#root #main #comments #input > #form .T .form-group > #comment");

    var post =  $("#root #main #comments #input > #form > button");
    post.click(function (e) { 
            
        let a = new Date()
        let temp = a.getFullYear()+"/"+a.getDate()+"/"+a.getDay();


        //$.post
        $.post("/koloDepp/php/post_comment.php", { name:"admin",comment:comment_,time:temp}, function (response, status, request) {
            
             //console.log("response "+ response);
             //INIT_comments_output();
             comments_refrch();
        
        });
        
    });


    comment.blur(function (e) { 
        
        comment_ = comment.val();
        
        if( (comment_.length == 0) ){
            console.log(comment_);
            ok.comment = false;
            comment.addClass("is-invalid");

            //comment.attr("placeholder", "can not be empty");
        }else{

            ok.comment = true;
            $(comment).removeClass("is-invalid");
            $(comment).addClass("is-valid");
            button_enable();
        }

        
    });

    INIT_email_output();
    INIT_comments_output();
    load();


    pyton_init();
    pre_init();
    dl_init();











});