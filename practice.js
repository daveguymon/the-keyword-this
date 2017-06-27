//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
// 1) What is the purpose of the 'this keyword'?

//The 'this' keyword operates similar to a pronoun in the English language, pointing back to the object whose context it is subjec to.

// 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

//1. Implicit, 2. Explicit, 3. Default/Window, 4. New
//        1. Implicit links 'this' directly to an object. 
//        2. Explicit utilizes a method (.call, .apply, or .bind) to link an object to a function. This then refers to the linked object. 
//        3. Default/Window occurs when 'this' does not have Implicit or Explicit context, allowing 'this' to refer to a global object. 
//        4. New causes 'this' to refer to a newly constructed object.

// 3) What is the difference between call and apply?

//.call takes in an object and an unlimited number of comma-separated-values
//        .apply takes in an object and only one other array

// 4) What does .bind do?

//.bind takes in the same parameters as .apply. However, unlike .apply it creates a new function, which is referred to by a newly declared variable.


//Next Problem

//Create an object called user which has the following properties.
//username --> which is a string
//email --> which is a string
//getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

//Code Here

var user = {
    username: 'Headspace',
    email: 'headspace@gmail.com',
    getUsername: function () {
        return this.username;
    }
}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

//Function Invocations Here
var Car = function (make, model, year) {
    var car = {
        make,
        model,
        year,
        move: 0,
        moveCar: function () {
            return this.move += 10;
        }
    }

    return car;
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function () {
    return this.year;
};

//Above you're given the getYear function. Call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
//Code Here


//New Problem

var myUser = {
    username: 'iliketurtles',
    age: 13,
    email: 'iliketurtles@gmail.com'
};

var getMyUsername = function () {
    return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
//Answer Here

// undefined


//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

//Answer Here

// window object


//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.
