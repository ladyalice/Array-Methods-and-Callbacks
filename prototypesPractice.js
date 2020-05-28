//Prototypes Practice w/ 
//Brit hemming


//window binding
//if none of the other rules apply "this"
//defaults to the window

//in node it would be the global object
//unless you are in strict mode, in which case it will return undefined



dog = 'ada';
console.log(dog);



//strict is automatically enforced by JS modules like Node
//the below works as in the early days of JS this could fly
//it's no longer ok but allowed for 
//bacakward compatibility purposes
'use strict';

function ghost(){
	console.log(this.boo);
};

const boo = '👻 boo!';
//control + command + space for emoji

ghost();
//this will return undefined 
//as we didn't tell it who this is


//Implicit binding - 80% use cases
//when function is invoked, look to the left of the dot
//for what "this refers to"
//this only applies to objects with methods

const myGhost = {
	name: 'Casper',
	boo: 'boo',
	ghost: function(){
		console.log(this.boo);
	}

};


//how do you make Casper say boo?
myGhost.ghost();
//it's simply like any other arraya or object
//"this" will refer to the .boo to the left of the dot :)
//easy peasy

//you need the paraenthesis or else you're 
//just referencing the function
//not invoking it


const petOne = {
	name: 'Ada',
	species: 'Bali dog',
	pronoun: 'her',
	faveFood: 'Salmon',
	//giving the petOne object an eat method:
	eat: function(){
		console.log(`${this.name} us a ${this.species} and ${this.pronoun}.
			Favorite food is ${this.faveFood}.`);
	}
};


const petTwo = {
	name: 'Scott',
	species: 'Newfy',
	pronoun: 'him',
	faveFood: 'beef',
	//giving the petOne object an eat method:
	eat: function(){
		console.log(`${this.name} us a ${this.species} and ${this.pronoun}.
			Favorite food is ${this.faveFood}.`);
	}
};


const petThree = {
	name: 'Bella',
	species: 'Terrier',
	pronoun: 'her',
	faveFood: 'chicken',
	//giving the petOne object an eat method:
	eat: function(){
		console.log(`${this.name} us a ${this.species} and ${this.pronoun}.
			Favorite food is ${this.faveFood}.`);
	}
};

//"this" gets assigned when the function is invoked
petOne.eat();
petTwo.eat();
petThree.eat();

///Try it yourself
//build a person object with a 
//name property, age property, and a location property
//it has a greet method
//that logs Hi I am name from location and age years old.
//do not hard code age or location
//we're using the thtis keyword to refer to them
const person = {
	name: `Alice`,
	age: 31,
	location: 'SF',
	greet: function(){
		console.log(`Hi, I'm ${this.name}, living in 
			${this.location}, and I'm ${this.age} years old.`)
	}
};

const person2 = {
	name: `Erica`,
	age: 29,
	location: 'San Diego',
	greet: function(){
		console.log(`Hi, I'm ${this.name}, living in 
			${this.location}, and I'm ${this.age} years old.`)
	}
};


person.greet();
person2.greet();

//it's implicit because it implies that the object to the left of 
//the dot is the "this"

//Explicit binding - 
//Here we explicitly tell JS what to do

//call - will immediately invoke the function / 
// .call - you pass in your arguments 1 by 1

//apply -- will also immediatly invoke the function / 
// .apply - you pass in arguments as an array

//bind -  you pass in the argument 1 by 1 
//but it does not immediarely invoke the function.
//It returns a brand new function that can be invokd later


function ghost2(){
	console.log(this.boo)
};

const myGhost2 = {
	name: 'Casper',
	boo: 'herro',

};

const otherGhost = {
	name: 'Rebecca',
	boo: 'wow what\'s up?'
};

ghost2.call(myGhost2); // invoking the function -- here we pass it in the argument of what this refers to
ghost2.call(otherGhost);

// how do we know what 'this' refers to?
//

// bind

const friendlyGhost = ghost2.bind(myGhost2);
//this cretes a new function called friendlyGhost

const angryGhost = ghost2.bind(otherGhost);

//how do you make Casper say boo?

friendlyGhost();
angryGhost();

//use .call to make an animal say a sound. 
//create an animal object
//give it a name a specials and a sound


function callOfTheWild() {
	console.log('The ' + this.name + ' says ' + this.sound);
};

const horse = {
	name: 'horse',
	sound: 'Neigh I say'
};


const bird = {
	name: "parakeet",
	sound: "kakah"
};


callOfTheWild.call(horse);
callOfTheWild.call(bird);


//New Binding

//using the 'new' keyword constructs a new object and
// 'this' points to it.

// when a function is invoked as a constructor function 
// using the 'new' keyword
// 'this' points to the new object that is created.




function Ghost3(saying){
	this.phrase = saying;
};

//what is different about this fucntion than all other functions.
//it has a capitalized function name


//when we create instructor functions and classes, 
//we capitalize function names.

//this tells the developer it's a constructor function


const myGhost3 = new Ghost3('Casper the friendly ghost.');
//here we are creating a new object called myGhost3 and it's a new ghost, 
//meaning that it gets a property. 
// In this case, a phrase we're just passimg it in.

console.log(myGhost3);
//this returns an object


//If you want to reference the ghost3's phrase
console.log(myGhost3.phrase);

//and now 'this' phrase refers to myGhost

//create a constructor function called food and pass in a 
// parameter of favorite and set this food
//to your parameter
//then you're going to create a new object called myfavefood
//then pass in the parameter of your favorite food
//then you're going to console.log
//my favorite food is

function Food(favorite){
	this.food = favorite;
};

const myFaveFood = new Food('brownies');

console.log('My favorite food is: ' + myFaveFood.food);
//why is it .food and not .favroite? because we've set this.food
//to be whatever we've passed it as favorite

//you call it with the dot as it's a parameter in the function



////////////////
//in JS everything is an object, besides primitives, 
//they are not really objects as they don't behave in the same way


//arrays can do everything that functions can do and everything that objects can do
//functions can do everything objects can do.
//
//JS is objects

//NO ARROW FUNCTIONS INSIDE OF OBJECTS



//imagine if you didn't have to rewrite shit tons of those
//"pet" objects above..
//well you don't! Because you can use....
//the constructor function!! (details below)


////////////////////////////////////////////////////////////
///Prototypes + Constructor functions//////////
//////////////////////////////////////////////////////
//constructor function - constructs other objects
// that's its whole purpose
// capitalized in the function name
// use a capital with the 'new' keyword
//usually missing a return statement, but not a guarantee
// this keyword is often used


// function Pet(name, species, pronoun, faveFood){
// 	 this.name = name,


// };

//OR you can pass in attributes so you can add more!

//usually you'll have multiple keys in an object so better to do it this way:
function Pet(attributes){
	this.name = attributes.name;
	this.species = attributes.species;
	this.pronoun = attributes.pronoun;
	this.faveFood = attributes.faveFood;
	this.sound = attributes.sound;
	this.location = attributes.location;
	//we can't just put the eat method in the constructor function
	//or everytime a new object is created it has to run that eat method,
	//this can get very very memory intensive
	//so instead we want to abstract that method 

	//So we use the PROTOTYPE keyword--
	//it's used to abstract methods from objects
	// but still gives us the ability to pass methods across 1,000's of objects 
	//w/o being super memory intensive
	//so every time a new object is created, that method does not 
};

Pet.prototype.eat = function(){
	console.log(`${this.name} us a ${this.species} and ${this.pronoun}.
			Favorite food is ${this.faveFood}.`);
};


Pet.prototype.speak = function(){
	console.log(`${this.name} says ${this.sound}.`)
};

Pet.prototype.locate = function(){
	console.log(`${this.name} is from ${this.location}`)
};



const kittyOne = new Pet({
	name: 'Ada',
	species: 'Bali dog',
	pronoun: 'her',
	faveFood: 'Salmon',
	location: 'Singapore'
});

const kittyTwo = new Pet({
	name: 'Scott',
	species: 'Newfy',
	pronoun: 'him',
	faveFood: 'beef',
	sound: `"Good day, I am a cat."`,
	location: 'Seattle'
});

const kittyThree = new Pet({
	name: 'Bella',
	species: 'Terrier',
	pronoun: 'her',
	faveFood: 'chicken',
	sound: 'meow owwww',
	location: 'translvania'
});

kittyOne.eat();
kittyTwo.eat();
kittyThree.eat();

kittyTwo.speak();
kittyThree.speak();


//create one more attribute for the pets and give them one more function
// (give them one more method) and invoke the method on each

kittyOne.locate();
kittyTwo.locate();



































