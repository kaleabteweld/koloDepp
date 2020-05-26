var ok = {

    name:false,
    comment:false,

};

var name_ = "";
var comment_ = "";


function button_enable(){

    var post =  $("#comments #input > #form > button");

    if(ok.name && ok.comment){
        post.removeAttr("disabled");


    }else{
        post.attr("disabled", "disabled");
    } 

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

function comments_refrch(){


    var output = $("#comments #output");

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

$(function (){

    INIT_comments_output();
    
    var name = $("#comments #input > #form .T .form-group > #name");
    var comment = $("#comments #input > #form .T .form-group > #comment");




    var post =  $("#comments #input > #form > button");
    post.attr("disabled", "disabled");

    post.click(function (e) { 
            
        let a = new Date()
        let temp = a.getFullYear()+"/"+a.getDate()+"/"+a.getDay();


        //$.post
        $.post("/koloDepp/php/post_comment.php", { name:name_,comment:comment_,time:temp}, function (response, status, request) {
            
             //console.log("response "+ response);
             //INIT_comments_output();
             comments_refrch();
        
        });
        
    });

    name.blur(function (e) { 
        
        name_ = name.val();
        
        if( (name_.length == 0 || (name_ == "admin" || name_ == "Admin" )) ){
            console.log(name_);
            ok.name = false;
            name.addClass("is-invalid");

            //name.attr("placeholder", "can not be empty");
        }else{

            ok.name = true;
            $(name).removeClass("is-invalid");
            $(name).addClass("is-valid");
            button_enable();
        }

        
    });

    comment.keyup(function (e) { 
        
        comment_ = comment.val();
        
        if( (comment_.length == 0) ){
            console.log(comment_);7
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

})
    
    
  