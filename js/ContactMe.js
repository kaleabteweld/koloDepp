var ok = {

    email:false,
    msg:false,

};

var email_ = "";
var msg_ = "";


function button_enable(){

    var post =  $("#a #form #post");

    if(ok.email && ok.msg){
        post.removeAttr("disabled");


    }else{
        post.attr("disabled", "disabled");
    } 

}

$(function (){

    var email = $("#a #form .form-group #email");
    var msg = $("#a #form .form-group #msg");




    var post =  $("#a #form #post");
    post.attr("disabled", "disabled");

    post.click(function (e) { 
            
        let a = new Date()
        let temp = a.getFullYear()+"-"+a.getDate()+"-"+a.getDay();


        //$.post
        $(post).load("/koloDepp/php/post_feed_back.php", { email:email_,msg:msg_,time:temp}, function (response, status, request) {
            
             console.log("response "+ response);
        
        });
        
    });

    email.keyup(function (e) { 
        
        email_ = email.val();

        // || ( (email_.indexOf("@") <= 5 && email_.indexOf(".") <= 10 ) &&  (email_.endsWith(".")))

        if( (email_.length == 0) || ( !(email_.includes("@"))  || !(email_.includes(".")) )  ){
            ok.email = false;
            button_enable();
            email.addClass("is-invalid");
            //email.attr("placeholder", "can not be empty");
        }else{
            
            ok.email = true;
            $(email).removeClass("is-invalid");
            $(email).addClass("is-valid");
            button_enable();
        }

        
    });

    msg.keyup(function (e) { 
        
        msg_ = msg.val();
        
        if( (msg_.length == 0) ){
            console.log(msg_);7
            ok.msg = false;
            msg.addClass("is-invalid");

            //msg.attr("placeholder", "can not be empty");
        }else{

            ok.msg = true;
            $(msg).removeClass("is-invalid");
            $(msg).addClass("is-valid");
            button_enable();
        }

        
    });

})
    
    
  