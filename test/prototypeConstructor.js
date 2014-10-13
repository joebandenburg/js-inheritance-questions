describe('prototypeConstructor', function() {
    var Cat = prototypeConstructor.Cat;
    var Animal = prototypeConstructor.Animal;

    var pebbles = new Cat('Pebbles');
    describe('the behaviour of an instance', function() {
        xit('meows', function() {
            expect(pebbles.meow()).toBe('Meow!');
        });
        xit('walks in a stealthy way', function() {
            expect(pebbles.walk(1)).toBe('Pebbles is walking at 1, stealthily');
        })
        xit('eats', function() {
            expect(pebbles.eat()).toBe('Eating');
        });
    });
    describe('the structure of an instance', function() {
        xit('has the name property', function() {
            expect(Object.keys(pebbles)).toEqual(['name']);
            expect(pebbles.name).toBe('Pebbles');
        });
        xit('is an instance of Cat', function() {
            expect(pebbles instanceof Cat).toBe(true);
        });
        xit('is an instance of Animal', function() {
            expect(pebbles instanceof Animal).toBe(true);
        });
        describe('its prototype', function() {
            var catPrototype = Object.getPrototypeOf(pebbles);
            xit('is the Cat prototype', function() {
                expect(catPrototype).toBe(Cat.prototype);
            });
            xit('has the correct properties', function() {
                expect(Object.keys(catPrototype).sort()).toEqual(['constructor', 'meow', 'walk']);
            });
            xit('has the right constructor property', function() {
                expect(catPrototype.constructor).toBe(Cat);
            });
            describe('its prototype', function() {
                var animalPrototype = Object.getPrototypeOf(catPrototype);
                xit('is the Animal prototype', function() {
                    expect(animalPrototype).toBe(Animal.prototype);
                });
                xit('has the correct properties', function() {
                    expect(Object.keys(animalPrototype).sort()).toEqual(['eat', 'walk']);
                });
                xit('has the right constructor property', function() {
                    expect(animalPrototype.constructor).toBe(Animal);
                });
                describe('its prototype', function() {
                    xit('is the Object prototype', function() {
                        expect(Object.getPrototypeOf(animalPrototype)).toBe(Object.prototype);
                    });
                });
            });
        });
    });
});