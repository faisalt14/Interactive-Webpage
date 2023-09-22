# JavaScript Practice Project  

This project was created to practice learning JavaScript (JS) by making an HTML file interactive. All JS code to make **index.html** interactive is contained in **controller.js**.

## Interactive Webpage Sections  

### Signup Form  

The first section features a basic signup form with client-side validation. The validation criteria are as follows:  

•	**Username**: Must be at least six characters long and consist of only letters (lowercase or uppercase), digits, and underscores. If any of these conditions are not met, "Username is invalid" is displayed under the username field.  
•	**Password**: Must be at least eight characters long and include at least one digit, one lowercase letter, one uppercase letter, and one special character (i.e., a character from the set **!@#$%^&**). Otherwise, "Password is invalid" is displayed under the password field.  
•	**Repeat Password**: Must match the password. Otherwise, "Passwords don't match" is displayed under the repeat password field.  
•	**Email**: Must be a valid email address. If not, the error message "Email is invalid" is displayed under the email field.  
    •	**Note**: Valid email address validation is implemented using an online regex, and a reference can be found as a comment in **controller.js**.  
•	**Phone**: Must follow the format ???-???-????, where each ? is a digit. The error message for this field is "Phone is invalid."    

Please note that in a real-world application, more detailed validation errors would be preferred for a better user experience. However, for simplicity in testing, we have chosen these error messages.  


### Validation
Each field is validated every time its value changes (e.g., by typing, deleting, pasting, etc.). The repeat password is validated when the password changes. If there is an error with a field, the input background changes to red, and the corresponding validation error is displayed under the field. The red background and error message disappear as soon as the error is resolved.  

**Important**: Empty values are considered invalid in this question. However, we do not display error messages on the initial load to improve user experience (users do not see errors before taking any action). Fields are validated after their values have changed and once the submit button is clicked.  


### Send a Request  

When the submit button is clicked, all fields are validated again. If all fields are valid, a POST request is sent to the CSC309 course server (please note that the link is no longer valid since the course has ended, and successful requests cannot be sent).  


### Amazon Shopping Cart    

The second task of this assignment involves creating a simple shopping cart page. When the user clicks the "Add/Update Item" button, the item is added (if it does not already exist in the cart) or updated (if the item was already in the cart). A table is provided to list each item, its price, quantity, and total amount (excluding tax), along with buttons to modify the quantity or completely remove the entry.  

Each time the cart updates, the subtotal, taxes (13% HST), and Grand Total are recalculated.    


**Notes**:  
•	The "Add/Update Item" button is active only when all three fields are non-empty.  
•	Quantity can never become negative; it can be at the least 0.  
•	We assume that non-negative integers are input for quantity and non-negative floats with at most two decimal places for price.  


### Infinite Scroll  
The last section involves creating an infinite scroll feature. When the page initially loads, the first five paragraphs are fetched. When users scroll to the bottom of the page, the next five paragraphs are fetched until no more paragraphs remain.   

**Note**: Since the course has ended, the API endpoint URL for fetching the data is no longer active, resulting in no information being displayed for this section, and the infinite scroll feature does not work.  

