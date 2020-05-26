var ok = {

    email:false,
    password:false,

};

var email_;
var password_;

var temp = $("#a #temp");


function button_enable(){

    let  post =  $("#a #form  #post");
    let password = $("#bace #a #form .form-group #pass");

    if(ok.email && ok.password){
        post.removeAttr("disabled");
        post.click(function (e) { 
            

            
        });
    }else{
        post.attr("disabled", "disabled");
    } 

}


$(function (){




    var email = $("#a #form .form-group #email");

    var password = $("#a #form .form-group #pass");
    
    var post =  $("#a #form #post");
    post.attr("disabled", "disabled");

    var forpass = $("#a #form #forpass");
    forpass.attr("disabled", "disabled");
    
    

    email.blur(function (e) { 
        
        var forpass = $("#a #form #forpass");
        email_ = email.val();
        
        if( (email_.length == 0) || ( !(email_.includes("@"))  || !(email_.includes(".")) ) ){
            console.log(email_);
            ok.email = false;
            button_enable();
            email.addClass("is-invalid");

            //email.attr("placeholder", "can not be empty");
        }else{


            
            $.post("/koloDepp/php/cheak.php", { type:"email",need:email_ }, function (response, status, request) {
                
                // console.log("response "+ response);
                // console.log("data "+ response);
                if(response == "0"){
    
                    ok.email = false;
                    email.addClass("is-invalid");
                    
                }else if(response == "1"){
    
                    ok.email = true;
                    button_enable();
                    email.removeClass("is-invalid");
                    email.addClass("is-valid");

    
                }
            
            });

        }

        
    });
    password.blur(function (e) { 
        
        password_ = password.val();
        if(password_.length == 0 || password_.length < 8){
            ok.password = false;
            button_enable();
            password.removeClass("is-valid");
            password.addClass("is-invalid");
            //password.attr("placeholder", "can not be empty");
        }else{


            $.post("/koloDepp/php/cheak.php", { type:"pass",need:password_ }, function (response, status, request) {
            
                 console.log("response "+ response);
                // console.log("data "+ response);
                if(response == "0"){
    
                    ok.password = false;
                    button_enable();
                    password.addClass("is-invalid");
                    
                }else if(response == "1"){
    
                    ok.password = true;
                    button_enable();
                    password.removeClass("is-invalid");
                    password.addClass("is-valid");
    
    
                }
            
            });

                // password.removeClass("is-invalid");
                // password.addClass("is-valid");
            

            //password.attr("placeholder", "The Name of the Event");

        }

        
    });
    

})