// Add all your JS code here

// The following flags represents if the fields has been modified since startup. 
var username_flag = false
var password1_flag = false
var password2_flag = false
var email_flag = false
var phone_flag = false

// Flag to check if all inputs are valid
var inputs_flag = false

// List of items 
// var item1 =  new Item("item_1", 90.00, 12)
// var item2 =  new Item("item_2", 95.00, 10)
var items = []




function usernameCheck(){
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
}

function password1Check(){
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
    password2Check()
}

function password2Check(){
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
}

function emailCheck(){
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


}

function phoneCheck(){
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
}

function validAmazonFields(){
    let name = $("#name").val();
    let price = $("#price").val();
    let quantity = $("#quantity").val();

    // If any field is empty, not valid 
    if (name == "" || price == "" || quantity == "") {
        return false;
        
    }
    // Consider case where name is empty spaces 
    else if (name.trim() == "") {
        return false;
    }

    return true; 
}

function itemExists(name){
    for (var item of items){
        // console.log(name, item.name, name == item.name)
        if (item.name === name){
            return true;
        }
    }

    return false; 

}

function removeItem(name){
    // reference: https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript

    for (var item of items){
        if (item.name === name){
            const index = items.indexOf(item); 
            if (index > -1){
                items.splice(index, 1); 
            }
        }
    }

}

function getItem(name){
    for (var item of items){  
        if (item.name === name){
            return item; 
        }
    }
}

function replaceSpaces(name) {
    // Reference: https://livingwithcode.com/replace-spaces-with-underscores-in-javascript/#:~:text=let's%20get%20started!-,Using%20replace()%20method,the%20spaces%20replaced%20with%20underscores.
    let result = name.trim().replaceAll(/ /g, "_"); 
    return result; 
}

function updateValues(name, price, quantity) {
    for (var item of items){
        if (item.name === name){
            item.price = parseFloat(price).toFixed(2); 
            item.quantity = parseInt(quantity); 
            // reference for rounding: https://linuxhint.com/round-number-to-2-decimal-places-javascript/
            item.total = parseFloat((item.price * item.quantity)).toFixed(2); 

        }
    }
}

function subtotal(){
    let subtotal = 0; 

    for (var item of items){  
        subtotal +=  parseFloat(item.total); 
    }

    
    let taxes = (0.13 * parseFloat(subtotal)).toFixed(2); 
    let grand_total = (parseFloat(subtotal) + parseFloat(taxes)).toFixed(2); 
    $("#subtotal").html(subtotal.toFixed(2)); 
    $("#taxes").html(taxes); 
    $("#grand_total").html(grand_total); 

}

  $(document).ready(function(){
    $("#username").keyup(usernameCheck),

    $("#password1").keyup(password1Check), 

    $("#password2").keyup(password2Check), 

    $("#email").keyup(emailCheck),  

    $("#phone").keyup(phoneCheck),  

    $("#register").click(function checkInputs(){

        username_flag = true;
        password1_flag = true;
        password2_flag = true;
        email_flag = true; 
        phone_flag = true; 

        usernameCheck()
        password1Check()
        password2Check()
        emailCheck()
        phoneCheck()

        let username_notification = $("#username_notification").html()
        let password1_notification = $("#password1_notification").html()
        let password2_notification = $("#password2_notification").html()
        let email_notification = $("#email_notification").html()
        let phone_notification = $("#phone_notification").html()

        if (username_notification === "" && password1_notification === "" && password2_notification === "" && email_notification === "" && phone_notification === ""){
            inputs_flag = true

            let username = $("#username").val()
            let password1 = $("#password1").val()
            let password2 = $("#password2").val()
            let email = $("#email").val()
            let phone = $("#phone").val()
            

            $("#notification").html("")
            
            // references for fetch(): 
                // https://reqbin.com/code/javascript/wzp2hxwh/javascript-post-request-example 
      
            fetch('https://ibs.utm.utoronto.ca/csc309/a3/register', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json' 
                }, 
                body: JSON.stringify({'username': username, 'password1': password1, 'password2': password2, 'email': email, 'phone': phone })

            })
            // reference for catching response status: 
                // https://bobbyhadz.com/blog/javascript-get-response-status-code-fetch
                .then(response => {
                    if (response.ok) {
                        if (response.status === 200) {
                            $("#notification").html("User added")
                        }
                    } 
                    else if (!response.ok){
                        if (response.status === 404) {
                            $("#notification").html("Unknown error occurred")
                        }
                        else if (response.status === 409) {
                            $("#notification").html("Username has already been taken")
                        }
                    }  
                })


        }
        else{
            inputs_flag = false
            $("#notification").html("At least one field is invalid. Please correct it before proceeding")
        }
    })

    $("#add_update_item").click(function add_update(){

        // Make sure all 3 fields are filled out 
        let fields_result = validAmazonFields();

        // Place holder to check if item exsits. 
        let item_exists = null; 

        

        if (fields_result == true){
            let name = $("#name").val();
            let price = $("#price").val();
            let quantity = $("#quantity").val();
            let name_removed_spaces = replaceSpaces(name); 
            
            // console.log(replaceSpaces(name));             
            // console.log(itemExists(name))

            // check if original item name  already exists
            if (itemExists(name) === true) {
                updateValues(name, price, quantity);

                // update values in existsing table row 
                // reference: https://stackoverflow.com/questions/5484992/how-to-update-table-cell-value-using-jquery
                $("table#cart-items tr[id=" + name_removed_spaces + "]").find(".item-name").html(name);
                $("table#cart-items tr[id=" + name_removed_spaces + "]").find(".item-price").html(price);
                $("table#cart-items tr[id=" + name_removed_spaces + "]").find(".item-quantity").html(quantity);
                $("table#cart-items tr[id=" + name_removed_spaces + "]").find(".item-total").html((price * quantity).toFixed(2));
                
                subtotal();
            }
            else {
                // create new item with those values and add to items list
                let new_item = new Item(name, price, quantity);

                items.push(new_item); 
                // call updateVlaues to make new_item.total fixed to 2 decimals
                updateValues(name, price, quantity); 

                // add item to tbody 
                // reference: https://www.tutorialspoint.com/How-to-add-table-row-in-jQuery

                let markup = "<tr id=" + "\"" + name_removed_spaces + "\">" + "<td class='item-name'>" + name + "</td>" + "<td class='item-price'>" + price + "</td>" + "<td class='item-quantity'>" + quantity + "</td>" + "<td class='item-total'>" + new_item.total + "</td>" + "<td> <button class='decrease'>" + "-" + "</button> </td>" + "<td> <button class='increase'>" + "+" + "</button> </td>" + "<td> <button class='delete'>" + "delete" + "</button> </td>"+ "</tr>";
                $("table tbody").append(markup);

                subtotal();
            
            }

            // console.log(items[1].name, items[1].price, items[1].quantity); 
        }

    })

    // reference to make event handler for class of "delete" and to remove from table body
        // https://stackoverflow.com/questions/44872879/jquery-delete-table-row-if-delete-button-is-clicked
    $(document).on("click",'.delete',function(){
        
        // console.log($(this).closest('tr'));
        let item_name = $(this).closest('tr').find(".item-name").html();
        let item_id = $(this).closest('tr').attr('id');
        
        $(this).closest('tr').remove(); 
        removeItem(item_name);

        // console.log(items); 

        subtotal(); 

    })  

    $(document).on("click",'.increase',function(){
        
        
        let item_name = $(this).closest('tr').find(".item-name").html();
        let original_item = getItem(item_name); 

    
        // Update original_item's values and the table. 
        let updated_quantity = original_item.quantity + 1; 
        updateValues(original_item.name, original_item.price, updated_quantity); 
        let updated_item = getItem(item_name); 
        $(this).closest('tr').find(".item-quantity").html(updated_item.quantity);
        $(this).closest('tr').find(".item-total").html(updated_item.total);

        subtotal();
    }) 
    
    $(document).on("click",'.decrease',function(){
        
        
        let item_name = $(this).closest('tr').find(".item-name").html();
        let original_item = getItem(item_name); 

    
        // Update original_item's values and the table. 
        if ((original_item.quantity - 1) >= 0) {
            let updated_quantity = original_item.quantity - 1; 
            updateValues(original_item.name, original_item.price, updated_quantity); 
            let updated_item = getItem(item_name); 
            $(this).closest('tr').find(".item-quantity").html(updated_item.quantity);
            $(this).closest('tr').find(".item-total").html(updated_item.total);
            subtotal();
        }

        
        
    }) 


    
    



  });

  








