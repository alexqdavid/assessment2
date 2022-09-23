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

let sum = cart.reduce( (food, money) => {
return food + money.price;
}, 0);
const summedPrice = cart.reduce()


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

function calcFinalPrice (cartTotal, couponValue, tax) {
let taxReturn = cartTotal * tax;
let totalTax = cartTotal + taxReturn;
let total = totalTax - couponValue;
return total;
}
console.log(calcFinalPrice((sum), 0, .06));
//theres no coupon so you leave it at 0
//i connected problem 1 and 2 to run the code



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

the best properties yoou would need to know about you customers
would be there name, Home address, # and email.

these were the best properties for the object because i personally
have been asked all of them from a resturant.

Name, home address andd email are "text" values while your
# is a number because its a numerical value.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

let customer = [
    {
       phone: 1234567892,
       name: 'honeybooboo',
       email: 'honeybooboo@honeybooboo.com',
       homeAddress: '12-34 honeybooboo ave'
    }, 
    {
        phone: 1234567891,
        name: 'milly',
        email: 'milly@milly.com',
        homeAddress: '12-34 milly ave'
    }, 
    {
        phone: 1234567890,
        name: 'bob',
        email: 'bob@bob.com',
        homeAddress: '12-34 bob ave'
    }
]
console.log(customer);

