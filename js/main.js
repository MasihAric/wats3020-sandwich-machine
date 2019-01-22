/* JavaScript for WATS 3020 Sandwich Machine Assignment */

// Step One ///////////////////////////////////////////////////////////
//
// Gather data from the user using the prompt() command.
// Users will fill in each prompt with text.
// Provide examples where it may help (e.g. show a comma-separated list of
// toppings to indicate how to specify toppings, etc.)
//
let bread = prompt ("What kind of bread do you want? (white, wheat, sour)", "Wheat");
let meats = prompt("What kind of meat(s) do you want? You can choose more than one by seperating it with comma ,", "For example:chicken,bacon,beef");
let toppings = prompt("Enter list of toppings sepreated by commas(such as lettuce, onions, tomatoes):","lettuce, tomato");
let condiments = prompt("Enter list of condiments(such as mayo, ketchup, mustard", "mayo");
// Step Two ////////////////////////////////////////////////////////////
//
// Process all the input to calculate values for the user's order. The named
// values are initialized to `null`. Change that so they equal the proper value.
//
// The `prices` object below specifies the prices for each thing.

let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};

let meatArray = meats.split(',');;
let toppingArray = toppings.split(',');
let condimentArray = condiments.split(',');

let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray * prices.topping;
let condimentCost = condimentArray * prices.condiments;

let subtotal = meatCost + toppingCost + condimentCost + prices.sandwich;
let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;

let totalPrice = subtotal + orderTax;


// Step Three //////////////////////////////////////////////////////////
//
// TODO: Now that we've calculated all the values, insert them into this
// template literal using proper expression tags. Note that we must provide
// all of the info the user gave us to confirm the order, and then we must also
// provide the cost information so the user understands their bill.

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: wheat</p>
    <p>Meat: ham, turkey</p>
    <p>Toppings: lettuce, tomato, peppers, spinach</p>
    <p>Condiments: mayo, mustard, thousand island</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $4.42</p>
    <p class="text-right">Meat: $2.00</p>
    <p class="text-right">Toppings: $2.00</p>
    <p class="text-right">Condiments: $1.42</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $9.84</p>
    <p class="text-right">Tax: $1.42</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $4.84</p>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
