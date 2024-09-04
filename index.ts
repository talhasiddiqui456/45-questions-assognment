// question 1 already done 

// question 2 ANS
//:const name: string = "Eric";
// const message: string = `Hello ${name}, would you like to learn some Python today?`;

// console.log(message);

//question 3 ANS
// : const name: string = "john doe";

// Lowercase
// console.log("Lowercase:", name.toLowerCase());

// // Uppercase
// console.log("Uppercase:", name.toUpperCase());

// // Title Case
// const toTitleCase = (str: string) => {
//     return str
//         .split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//         .join(' ');
// };

// console.log("Title Case:", toTitleCase(name));



//question 4 ANS:
//  const author: string = "Albert Einstein";
// const quote: string = "A person who never made a mistake never tried anything new.";

// console.log(`${author} once said, “${quote}”`);


// question 5 ANS:
//const famous_person: string = "Albert Einstein";
// const quote: string = "A person who never made a mistake never tried anything new.";

// const message: string = `${famous_person} once said, “${quote}”`;

// console.log(message);

//question 6 ANS:

//const nameWithWhitespace: string = "\tJohn Doe\n";

// Print name with whitespace
// console.log("Name with whitespace:");
// console.log(nameWithWhitespace);

// Strip whitespace and print the name
// const strippedName: string = nameWithWhitespace.trim();
// console.log("\nName after stripping whitespace:");
// console.log(strippedName);



//question 7 ANS:

//// Addition
// console.log("Addition: 5 + 3 =", 5 + 3);

// // Subtraction
// console.log("Subtraction: 10 - 2 =", 10 - 2);

// // Multiplication
// console.log("Multiplication: 4 * 2 =", 4 * 2);

// // Division
// console.log("Division: 16 / 2 =", 16 / 2);



//question 8 Ans:
//console.log(5 + 3);  // Addition
// console.log(10 - 2); // Subtraction
// console.log(4 * 2);  // Multiplication
// console.log(16 / 2); // Division

//question 9 Ans:
//const favoriteNumber: number = 7;
// const message: string = `My favorite number is ${favoriteNumber}.`;

// console.log(message);


// question 10 Ans: 
// EXAMPLE 1 :// Author: [Your Name]
// Date: [Current Date]
// This program performs four different arithmetic operations that all result in the number 8.

// console.log(5 + 3);  // Addition: 5 + 3 = 8
//console.log(10 - 2); // Subtraction: 10 - 2 = 8
//console.log(4 * 2);  // Multiplication: 4 * 2 = 8
//console.log(16 / 2); // Division: 16 / 2 = 8



//EXAMPLE 2 : // Author: [Your Name]
// Date: [Current Date]
// This program stores and displays the user's favorite number.

// const favoriteNumber: number = 7; // Storing my favorite number in a variable
// const message: string = `My favorite number is ${favoriteNumber}.`; // Creating a message that includes the favorite number

// console.log(message); // Printing the message

// QUESTION 11 Ans :
//// Store names of friends in an array
// const names: string[] = ["Alice", "Bob", "Charlie", "Diana"];

// // Print each name by accessing each element in the array
// for (const name of names) {
//     console.log(name);
// }

//question 12 Ans : 
//// Store names of friends in an array
// const names: string[] = ["Alice", "Bob", "Charlie", "Diana"];

// // Print a personalized message for each person in the array
// for (const name of names) {
//     console.log(`Hello ${name}, I hope you are having a great day!`);
//}


//question 13 Ans:
//// Store examples of cars in an array
// const cars: string[] = ["Honda Civic", "Toyota Corolla", "Ford Mustang", "Chevrolet Camaro"];

// // Print a statement about each car in the array
// for (const car of cars) {
//     console.log(`I would like to own a ${car}.`);
// }


// question 14 ANS: 
//// Store the names of people to invite to dinner in an array
// const guests: string[] = ["Leonardo da Vinci", "Marie Curie", "Nelson Mandela"];

// // Print an invitation message for each person in the array
// for (const guest of guests) {
//     console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`);
//}


// question 15 ANS: 
// Initial guest list
// const guests: string[] = ["Leonardo da Vinci", "Marie Curie", "Nelson Mandela"];

// // Print invitation messages for the initial guest list
// for (const guest of guests) {
//     console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`);
// }

// // Guest who can't make it
// const unableToAttend: string = "Nelson Mandela";
// console.log(`\nUnfortunately, ${unableToAttend} can't make it to the dinner.`);

// // Replace the guest who can't make it with a new guest
// const newGuest: string = "Ada Lovelace";
// const updatedGuests: string[] = guests.filter(guest => guest !== unableToAttend).concat(newGuest);

// // Print updated invitation messages
// console.log("\nUpdated invitations:");
// for (const guest of updatedGuests) {
//     console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`);
// }

//question 16 ANS:
//// Initial guest list
// const guests: string[] = ["Leonardo da Vinci", "Marie Curie", "Ada Lovelace"];

// // Print initial invitation messages
// for (const guest of guests) {
//     console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`);
// }

// // Print message about finding a bigger dinner table
// console.log("\nGood news! I found a bigger dinner table, so we have more space available.");

// // Add new guests
// const newGuestStart: string = "Alan Turing"; // Guest to add at the beginning
// const newGuestMiddle: string = "Grace Hopper"; // Guest to add in the middle
// const newGuestEnd: string = "Stephen Hawking"; // Guest to add at the end

// // Update the guest list
// const updatedGuests: string[] = [newGuestStart, ...guests.slice(0, 1), newGuestMiddle, ...guests.slice(1), newGuestEnd];

// // Print updated invitation messages
// console.log("\nUpdated invitations:");
// for (const guest of updatedGuests) {
//     console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`);
//}



//question 17 ANS :
//// Initial guest list
let guests: string[] = [
    "Alan Turing",
    "Leonardo da Vinci",
    "Grace Hopper",
    "Marie Curie",
    "Ada Lovelace",
    "Stephen Hawking"
];

// Print message about having space for only two guests
// console.log("Due to unforeseen circumstances, we can only invite two people for dinner.");

// // Remove guests one at a time and print apologies
// while (guests.length > 2) {
//     const removedGuest: string = guests.pop()!;
//     console.log(`Sorry, ${removedGuest}. I can't invite you to dinner.`);
// }

// // Print messages to the remaining guests
// console.log("\nThe following guests are still invited:");
// for (const guest of guests) {
//     console.log(`Dear ${guest}, you are still invited to dinner.`);
// }

// // Empty the guest list
// guests = [];

// // Print the empty guest list to confirm it is empty
// console.log("\nThe final guest list is:");
// console.log(guests);

//question 18 ANS: 
//// Array of places to visit (not in alphabetical order)
// const places: string[] = ["Paris", "Tokyo", "New York", "Sydney", "Cape Town"];

// // Print the original order of the array
// console.log("Original order:");
// console.log(places);

// // Print the array in alphabetical order without modifying the original list
// const alphabeticalPlaces: string[] = [...places].sort();
// console.log("\nAlphabetical order:");
// console.log(alphabeticalPlaces);

// // Show that the original array is still in its original order
// console.log("\nOriginal array (unchanged):");
// console.log(places);

// // Print the array in reverse alphabetical order without modifying the original list
// const reverseAlphabeticalPlaces: string[] = [...places].sort().reverse();
// console.log("\nReverse alphabetical order:");
// console.log(reverseAlphabeticalPlaces);

// // Show that the original array is still in its original order
// console.log("\nOriginal array (unchanged):");
// console.log(places);

// // Reverse the order of the list
// places.reverse();
// console.log("\nReversed order:");
// console.log(places);

// Reverse the order of the



// question 19 ANS:
//// Updated guest list with only two guests
// const guests: string[] = ["Alan Turing", "Grace Hopper"];

// // Print a message indicating the number of people invited to dinner
// console.log(`I am inviting ${guests.length} people to dinner.`);

// // Print invitation messages for the remaining guests
// for (const guest of guests) {
//     console.log(`Dear ${guest}, you are still invited to dinner.`);
// }

//question 20 ANS :
//// Array of cities
// const cities: string[] = [
//     "New York",
//     "Tokyo",
//     "Paris",
//     "Sydney",
//     "Cape Town",
//     "Barcelona",
//     "Rio de Janeiro",
//     "Dubai",
//     "Rome",
//     "London"
// ];

// // Print the list of cities
// console.log("List of cities:");
// for (const city of cities) {
//     console.log(city);
// }



//question 21 ANS: 
//// Define an interface for the book object
// interface Book {
//     title: string;
//     author: string;
//     year: number;
// }

// Create an array of book objects
// const books: Book[] = [
//     {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         year: 1960
//     },
//     {
//         title: "1984",
//         author: "George Orwell",
//         year: 1949
//     },
//     {
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         year: 1925
//     },
//     {
//         title: "Moby Dick",
//         author: "Herman Melville",
//         year: 1851
//     },
//     {
//         title: "Pride and Prejudice",
//         author: "Jane Austen",
//         year: 1813
//     }
// ];

// // Print details of each book
// console.log("List of books:");
// for (const book of books) {
//     console.log(`Title: ${book.title}`);
//     console.log(`Author: ${book.author}`);
//     console.log(`Year: ${book.year}`);
//     console.log(""); // Print a blank line for readability
// }

// question 22 Ans : 
//
// Array of cities
// const cities: string[] = [
//     "New York",
//     "Tokyo",
//     "Paris",
//     "Sydney",
//     "Cape Town"
// ];

// // Attempt to access an invalid index (intentional error)
// console.log("Accessing an invalid index:");
// console.log(cities[5]); // Index 5 does not exist in the array

// // Print the list of cities
// console.log("\nList of cities:");
// for (const city of cities) {
//     console.log(city);
// }

// question 23 Ans : 
// // let car = 'subaru';
// let age = 25;
// let city = 'Paris';
// let isStudent = true;
// let favoriteColor = 'blue';

// // True tests
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru'); // True

// console.log("Is age > 20? I predict True.");
// console.log(age > 20); // True

// console.log("Is city == 'Paris'? I predict True.");
// console.log(city == 'Paris'); // True

// console.log("Is isStudent == true? I predict True.");
// console.log(isStudent == true); // True

// console.log("Is favoriteColor == 'blue'? I predict True.");
// console.log(favoriteColor == 'blue'); // True

// // False tests
// console.log("Is car == 'honda'? I predict False.");
// console.log(car == 'honda'); // False

// console.log("Is age < 18? I predict False.");
// console.log(age < 18); // False

// console.log("Is city == 'London'? I predict False.");
// console.log(city == 'London'); // False

// console.log("Is isStudent == false? I predict False.");
// console.log(isStudent == false); // False

// console.log("Is favoriteColor == 'red'? I predict False.");
// console.log(favoriteColor == 'red'); // False


// question 24 Ans : 
//let fruit = 'apple';

// True test
// console.log("Is fruit == 'apple'? I predict True.");
// console.log(fruit == 'apple'); // True

// // False test
// console.log("Is fruit != 'apple'? I predict False.");
// console.log(fruit != 'apple'); // False
// let number = 42;

// // Equality and Inequality
// console.log("Is number == 42? I predict True.");
// console.log(number == 42); // True

// console.log("Is number != 42? I predict False.");
// console.log(number != 42); // False

// // Greater than and Less than
// console.log("Is number > 40? I predict True.");
// console.log(number > 40); // True

// console.log("Is number < 40? I predict False.");
// console.log(number < 40); // False

// // Greater than or equal to and Less than or equal to
// console.log("Is number >= 42? I predict True.");
// console.log(number >= 42); // True

// console.log("Is number <= 40? I predict False.");
// console.log(number <= 40); // False

// let age = 25;
// let hasLicense = true;

// // "And" operator
// console.log("Is age > 20 and hasLicense == true? I predict True.");
// console.log(age > 20 && hasLicense == true); // True

// console.log("Is age > 30 and hasLicense == true? I predict False.");
// console.log(age > 30 && hasLicense == true); // False

// // "Or" operator
// console.log("Is age > 30 or hasLicense == true? I predict True.");
// console.log(age > 30 || hasLicense == true); // True

// console.log("Is age < 20 or hasLicense == false? I predict False.");
// console.log(age < 20 || hasLicense == false); // False

// let colors = ['red', 'green', 'blue'];

// // True test
// console.log("Is 'green' in colors? I predict True.");
// console.log(colors.includes('green')); // True

// // False test
// console.log("Is 'yellow' in colors? I predict False.");
// console.log(colors.includes('yellow')); // False

// let animals = ['dog', 'cat', 'elephant'];

// // True test
// console.log("Is 'lion' not in animals? I predict True.");
// console.log(!animals.includes('lion')); // True

// // False test
// console.log("Is 'cat' not in animals? I predict False.");
// console.log(!animals.includes('cat')); // False


//question 25 Ans : 
// // Version 1: Passing Test
// let alien_color = 'green';

// if (alien_color === 'green') {
//     console.log("The player just earned 5 points!");
// }

// Version 2: Failing Test
// let alien_color = 'red';

// if (alien_color === 'green') {
//     console.log("The player just earned 5 points!");
// }

//question 26 ANS :
//// Version 1: if Block Runs
// let alien_color = 'green';

// if (alien_color === 'green') {
//     console.log("The player just earned 5 points for shooting the alien!");
// } else {
//     console.log("The player just earned 10 points!");
// }

// Version 2: else Block Runs
// let alien_color = 'yellow';

// if (alien_color === 'green') {
//     console.log("The player just earned 5 points for shooting the alien!");
// } else {
//     console.log("The player just earned 10 points!");
// }


//question 27 Ans : 
//// Version 1: Alien is Green
// let alien_color = 'green';

// if (alien_color === 'green') {
//     console.log("The player earned 5 points!");
// } else if (alien_color === 'yellow') {
//     console.log("The player earned 10 points!");
// } else if (alien_color === 'red') {
//     console.log("The player earned 15 points!");
// }

// Version 2: Alien is Yellow
// let alien_color = 'yellow';

// if (alien_color === 'green') {
//     console.log("The player earned 5 points!");
// } else if (alien_color === 'yellow') {
//     console.log("The player earned 10 points!");
// } else if (alien_color === 'red') {
//     console.log("The player earned 15 points!");
// }

// Version 3: Alien is Red
// let alien_color = 'red';

// if (alien_color === 'green') {
//     console.log("The player earned 5 points!");
// } else if (alien_color === 'yellow') {
//     console.log("The player earned 10 points!");
// } else if (alien_color === 'red') {
//     console.log("The player earned 15 points!");
// }


// question 28 Ans : 
//let age = 30; // You can change this value to test different stages of life

// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//     console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//     console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//     console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//     console.log("The person is an adult.");
// } else if (age >= 65) {
//     console.log("The person is an elder.");
// }

//question 29 ANS : 
//let favorite_fruits = ['mango', 'banana', 'strawberry'];
//if (favorite_fruits.includes('mango')) {
//     console.log("You really like mangoes!");
// }

// if (favorite_fruits.includes('banana')) {
//     console.log("You really like bananas!");
// }

// if (favorite_fruits.includes('strawberry')) {
//     console.log("You really like strawberries!");
// }

// if (favorite_fruits.includes('apple')) {
//     console.log("You really like apples!");
// }

// if (favorite_fruits.includes('orange')) {
//     console.log("You really like oranges!");
// }

//QUESTION 30 Ans : 
//let usernames = ['admin', 'john', 'eric', 'sarah', 'emma'];
//for (let username of usernames) {
//     if (username === 'admin') {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// }


//question 31 ANS:
//let usernames: string[] = ['admin', 'john', 'eric', 'sarah', 'emma'];

// Check if the list is empty
// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// } else {
//     for (let username of usernames) {
//         if (username === 'admin') {
//             console.log("Hello admin, would you like to see a status report?");
//         } else {
//             console.log(`Hello ${username}, thank you for logging in again.`);
//         }
//     }
// }

//// Remove all usernames from the array
// usernames = [];

// Check again if the list is empty
// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// } else {
//     for (let username of usernames) {
//         if (username === 'admin') {
//             console.log("Hello admin, would you like to see a status report?");
//         } else {
//             console.log(`Hello ${username}, thank you for logging in again.`);
//         }
//     }
// }

//question 32 Ans : 
//// Define the list of current users
// let current_users = ['alice', 'bob', 'carol', 'dave', 'eve'];

// // Define the list of new users
// let new_users = ['Frank', 'Bob', 'GRACE', 'dave', 'Henry'];

// // Convert current users to lowercase for case-insensitive comparison
// let current_users_lower = current_users.map(user => user.toLowerCase());

// for (let new_user of new_users) {
//     // Convert new user to lowercase for case-insensitive comparison
//     let new_user_lower = new_user.toLowerCase();

//     if (current_users_lower.includes(new_user_lower)) {
//         console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
//     } else {
//         console.log(`The username '${new_user}' is available.`);
//     }
// }


// question 33 ANS: 
//// Store the numbers 1 through 9 in an array
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Loop through the array
// for (let number of numbers) {
//     let suffix: string;

//     // Determine the correct suffix for each number
//     if (number === 1) {
//         suffix = 'st';
//     } else if (number === 2) {
//         suffix = 'nd';
//     } else if (number === 3) {
//         suffix = 'rd';
//     } else {
//         suffix = 'th';
//     }

//     // Print the number with its suffix
//     console.log(`${number}${suffix}`);
// }


//question 34
//// Define the array with your favorite pizzas
// let pizzas = ['pepperoni', 'margherita', 'veggie'];

// // Loop through the array and print a statement about each pizza
// for (let pizza of pizzas) {
//     console.log(`I like ${pizza} pizza.`);
// }

// // Print a final statement about your love for pizza
// console.log("I really love pizza!");

//question 35 
//// Define the array with your chosen animals
// let animals = ['dog', 'cat', 'rabbit'];

// // Loop through the array and print a statement about each animal
// for (let animal of animals) {
//     console.log(`A ${animal} would make a great pet.`);
// }

// // Print a final statement about what these animals have in common
// console.log("Any of these animals would make a great pet!");


//question 36 
//// Define the function make_shirt
// function make_shirt(size: string, message: string): void {
//     console.log(`The shirt size is ${size} and the message on it will be: "${message}".`);
// }

// // Call the function with example arguments
//make_shirt('M', 'Code Like a Pro');


//question 37 
//// Define the function make_shirt with default parameters
// function make_shirt(size: string = 'L', message: string = 'I love TypeScript'): void {
//     console.log(`The shirt size is ${size} and the message on it will be: "${message}".`);
// }

// // Call the function with default parameters (large shirt, default message)
// make_shirt();

// // Call the function with a medium shirt and the default message
// make_shirt('M');

// // Call the function with a custom size and a different message
//make_shirt('S', 'Code Like a Pro');

//question 38 
//// Define the function describe_city with a default country parameter
// function describe_city(city: string, country: string = 'USA'): void {
//     console.log(`${city} is in ${country}.`);
// }

// // Call the function for three different cities
// describe_city('New York'); // Uses default country 'USA'
// describe_city('London', 'UK'); // Uses custom country 'UK'
// describe_city('Tokyo', 'Japan'); // Uses custom country 'Japan'

//question 39
//// Define the function city_country
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }

// // Call the function with three city-country pairs and print the results
// console.log(city_country('Lahore', 'Pakistan'));
// console.log(city_country('Paris', 'France'));
// console.log(city_country('Tokyo', 'Japan'));


//question 40 
//// Define the function city_country
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }

// // Call the function with three city-country pairs and print the results
// console.log(city_country('Lahore', 'Pakistan'));
// console.log(city_country('Paris', 'France'));
// console.log(city_country('Tokyo', 'Japan'));

//question 41 
//// Define the array of magician names
// let magicians: string[] = ['David Copperfield', 'Houdini', 'Penn and Teller', 'Dynamo'];

// // Define the function show_magicians
// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// // Call the function with the array of magicians
// show_magicians(magicians);


//question 42
//// Define the array of magician names
// let magicians: string[] = ['David Copperfield', 'Houdini', 'Penn and Teller', 'Dynamo'];

// // Define the function to print the names of the magicians
// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// // Define the function to add "the Great" to each magician's name
// function make_great(magicians: string[]): void {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = magicians[i] + ' the Great';
//     }
// }

// // Call make_great() to modify the array
// make_great(magicians);

// // Call show_magicians() to display the modified array
// show_magicians(magicians);

//question 43 
//// Define the array of magician names
// let magicians: string[] = ['David Copperfield', 'Houdini', 'Penn and Teller', 'Dynamo'];

// // Define the function to print the names of the magicians
// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// // Define the function to add "the Great" to each magician's name
// function make_great(magicians: string[]): string[] {
//     let great_magicians: string[] = []; // Create a new array for the modified names
//     for (let magician of magicians) {
//         great_magicians.push(magician + ' the Great');
//     }
//     return great_magicians; // Return the new array
// }

// // Create a copy of the original array
// let magicians_copy: string[] = [...magicians];

// // Call make_great() with the copy to get a new array of modified names
// let great_magicians: string[] = make_great(magicians_copy);

// // Print the original array
// console.log('Original Magicians:');
// show_magicians(magicians);

// // Print the modified array
// console.log('\nGreat Magicians:');
// show_magicians(great_magicians);

//question 44
//// Define the function to summarize the sandwich order
// function make_sandwich(...items: string[]): void {
//     console.log('Sandwich with the following items:');
//     for (let item of items) {
//         console.log(`- ${item}`);
//     }
//     console.log(); // Print a blank line for readability
// }

// // Call the function with different numbers of arguments
// make_sandwich('lettuce', 'tomato', 'turkey');
// make_sandwich('cheese', 'ham');
// make_sandwich('peanut butter', 'jelly', 'banana', 'honey');


//question 45 
//// Define the function to store car information
// function create_car(manufacturer: string, model: string, ...optionalFeatures: [string, any][]): object {
//     // Initialize the car object with the manufacturer and model
//     let car: { [key: string]: any } = {
//         manufacturer: manufacturer,
//         model: model
//     };

//     // Add optional features to the car object
//     for (let [key, value] of optionalFeatures) {
//         car[key] = value;
//     }

//     return car;
// }

// // Call the function with the required information and optional features
// let car1 = create_car('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);
// let car2 = create_car('Ford', 'Mustang', ['color', 'red'], ['engine', 'V8'], ['sunroof', true]);

// // Print the car objects
// console.log(car1);
// console.log(car2);
