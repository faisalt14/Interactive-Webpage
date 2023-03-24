// Add all your JS code here

// The following flags represents if the fields has been modified since startup. 
var username_flag = false
var password1_flag = false
var password2_flag = false
var email_flag = false
var phone_flag = false

  $(document).ready(function(){
    $("#username").keyup(function usernameCheck(){
        let username = $("#username").val()
        
        // regex reference: https://stackoverflow.com/questions/9628879/javascript-regex-username-validation
        // reference for how to test a string to match a regex: https://www.w3docs.com/snippets/javascript/how-to-check-whether-a-string-matches-a-regex-in-javascript.html
        var nameRegex = /^[a-zA-Z0-9\_]{6,}$/;
        var validCharacters = nameRegex.test(username)

        
            
        if ( username_flag === false && username.length === 0){
    
        }
        else if (validCharacters === false) {
            $("#username_notification").html("Username is invalid")
            $("#username").css("background-color", "red")
        }
        else {
            $("#username_notification").html("")
            $("#username").css("background-color", "white")
        }
    
        username_flag = true
    });

    $("#password1").keyup(function password1Check(){
        let password1 = $("#password1").val()

        // regex reference: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
        
        var password1Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&* ])[A-Za-z\d!@#$%^&* ]{8,}$/;
        var validCharacters = password1Regex.test(password1)

        if (password1_flag === false && password1.length === 0){
    
        }

        else if (validCharacters === false) {
            $("#password1_notification").html("Password is invalid")
            $("#password1").css("background-color", "red")

        }
        else {
            $("#password1_notification").html("")
            $("#password1").css("background-color", "white")

        }

        password1_flag = true


    }); 

    $("#password2").keyup(function password2Check(){
        let password2 = $("#password2").val()
        let password1 = $("#password1").val()


        if (password2_flag === false && (password1 !== password2)){
    
        }

        else if (password1 !== password2) {
            $("#password2_notification").html("Passwords don't match")
            $("#password2").css("background-color", "red")

        }
        else {
            $("#password2_notification").html("")
            $("#password2").css("background-color", "white")

        }

        password2_flag = true


    }); 

    $("#email").keyup(function emailCheck(){
        let email = $("#email").val()
        
        // regex reference: https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
        // var emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


        // regex reference: https://www.abstractapi.com/guides/email-address-pattern-validation
        var emailRegex =  /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])$/;
        var validCharacters = emailRegex.test(email)

        
        


        if (email_flag === false && email.length === 0){
    
        }

        else if (validCharacters === false) {
            $("#email_notification").html("Email is invalid")
            $("#email").css("background-color", "red")

        }
        else {
            $("#email_notification").html("")
            $("#email").css("background-color", "white")

        }

        email_flag = true


    }); 

    $("#phone").keyup(function phoneCheck(){
        let phone = $("#phone").val()
        
        // regex reference: https://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number
        var phoneRegex =  /^[1-9]\d{2}-\d{3}-\d{4}$/;
        var validCharacters = phoneRegex.test(phone)

        if (phone_flag === false && phone.length === 0){
    
        }

        else if (validCharacters === false) {
            $("#phone_notification").html("Phone is invalid")
            $("#phone").css("background-color", "red")

        }
        else {
            $("#phone_notification").html("")
            $("#phone").css("background-color", "white")

        }

        phone_flag = true


    }); 


    
    



  });

  








