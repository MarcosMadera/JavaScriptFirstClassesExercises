// Declare two numbers
// let num1 = 10; 
// let num2 = 5;  


// let total = num1 + num2;


// let difference = num1 - num2;


// console.log("The total (sum) of", num1, "and", num2, "is:", total);
// console.log("The difference between", num1, "and", num2, "is:", difference);


// let userName = prompt("What is your name?");
// let favoriteColor = prompt("What is your favorite color?");
// alert(`Hello, ${userName}! It's great to know that your favorite color is ${favoriteColor}.`);


// let itemPrice = parseFloat(prompt("Enter the price of the item:"));
//         let tax = itemPrice * 0.07;
//         let totalPrice = itemPrice + tax;
//         alert(`The total price after applying 7% tax is $${totalPrice.toFixed(2)}`);
//         console.log(`The total price after applying 7% tax is $${totalPrice.toFixed(2)}`);

// Number 4
// let firstName = prompt("Cuál es tu primer nombre:");
// let lastName = prompt("Cuál es tu apellido:");

// let fullName = firstName + " " + lastName;

// alert(`Hola, ${fullName}! es una placer para conocerte.`);
// console.log(`Hola, ${fullName}! es una placer para conocerte.`);

//Number 5
// Initial inventory
// let inventory = 100;

// // Subtract items sold
// inventory -= 15; 

// // Add new items to stock
// inventory += 20; // 

// // Log the final inventory
// console.log(`The final inventory is ${inventory} items.`);



//Number 6


let originalPrice = 120; 
let taxRate = 0.10; 
let discountRate = 0.15; 

let priceWithTax = originalPrice + (originalPrice * taxRate);


let discount = priceWithTax * discountRate;
let finalPrice = priceWithTax - discount;

console.log(`Price with tax: $${priceWithTax.toFixed(2)}`);
console.log(`Final price after discount: $${finalPrice.toFixed(2)}`);
