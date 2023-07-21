///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

 const summedPrice = cart.reduce((a, c) => a + c.price, 0)// using reduce statment to add all cart prices up
 console.log(summedPrice)// logged for testing
 


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(ct, cv, t ){// function that add tax to a cart and then subtracts coupon value to get final total
    ct = ct + (ct * t ) - cv
    return ct
}
console.log(calcFinalPrice(45, 5, .06))// logged for testing

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
I choose to give my customers the phone, email, fullName, and address properties.
-Phone so The resturant would have a esay way of contacting them
-email so they would have a secondary way of contact as well as a place to send recipts and confirmations
- fullName so they know what name to call when the customer comes in
- Address to put into their records for easy reentering of info
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer = {// created a customer object that has four properties
    fullName : 'Hyrum Van Slyke',
    phoneNumber : 9086754972,
    email: 'HyrumIsGoodAtCoding@Gmail.com',
    address: '308 Negra Arroyo Lane'
}