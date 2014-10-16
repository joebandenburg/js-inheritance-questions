describe('prototypeObject', function() {
    var Cat = prototypeObject.Cat;

    var pebbles;
    beforeEach(function() {
        pebbles = new Cat('Pebbles');
    });

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
        describe('its prototype', function() {
            var catPrototype;
            beforeEach(function() {
                catPrototype = Object.getPrototypeOf(pebbles);
            });
            
            xit('has the correct properties', function() {
                expect(Object.keys(catPrototype).sort()).toEqual(['meow', 'walk']);
            });
            describe('its prototype', function() {
                var animalPrototype;
                beforeEach(function() {
                    animalPrototype = Object.getPrototypeOf(catPrototype);
                });
                
                xit('has the correct properties', function() {
                    expect(Object.keys(animalPrototype).sort()).toEqual(['eat', 'walk']);
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