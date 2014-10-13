describe('closureConstructor', function() {
    var Cat = closureConstructor.Cat;
    var Animal = closureConstructor.Animal;

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
        xit('is an instance of Cat', function() {
            expect(pebbles instanceof Cat).toBe(true);
        });
        xit('is not an instance of Animal', function() {
            expect(pebbles instanceof Animal).toBe(false);
        });
        xit('has the correct properties', function() {
            expect(Object.keys(pebbles).sort()).toEqual(['eat', 'meow', 'walk']);
        });
    });
});