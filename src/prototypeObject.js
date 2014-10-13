var prototypeObject = (function() {
    /*
    
    Question 1.

    In each of these questions, your goal is to create two "classes": Animal and Cat. Here is the specification:

    * An animal has a name property
    * An animal has a walk method that, given a speed, must return "{name} is walking at {speed}"
    * An animal has a eat method that must return "Eating"
    * A cat is an animal
    * A cat has a walk method that, given a speed, must return "{name} is walking at {speed}, stealthily"
    * A cat's walk method should be implemented in terms of the base animal's walk
    * A cat has a meow method that must return "Meow!"

    For question 1, we're going to try to understand how prototypal inheritance works. To do this, we will not use
    JavaScript's constructor functions, or the "new" operator, and instead we will use Object.create.

    (a) Create an animal prototype object
    (b) Create a cat prototype object that has the animal prototype object as its prototype
    (c) Create a Cat function that returns a new cat instance with the cat prototype object as its prototype
        (The Cat function should also initialise any properties on the new instance before returning it.)

     */
    return {};
})();