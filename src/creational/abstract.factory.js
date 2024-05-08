/**
 * Abstract Factory Pattern: is super system of method factory. 
 * It means that 1 Abstract Factory contain many method factory and each method factory extends from Abstract Factory 
 */

class AnimalFactory {
    createAnimal(type) {
        return null;
    }
}

class TwoLegsAnimalFactory extends AnimalFactory {
    createAnimal(type) {
        if (type === 1) {
            return new Duck();
        }

        if (type === 2) {
            return new Chicken();
        } 
    }
}

class FourLegsAnimalFactory extends AnimalFactory {
    createAnimal(type) {
        if (type === 1) {
            return new Cow();
        }

        if (type === 2) {
            return new Dog();
        }
    }
}

class FourLegsAnimal {
    getName() {
        return '';
    }
}

class TwoLegsAnimal {
    getName() {
        return '';
    }
}

class Dog extends FourLegsAnimal {
    getName() {
        return 'Dog';
    }
}

class Cow extends FourLegsAnimal {
    getName() {
        return 'Cow';
    }
}

class Duck extends TwoLegsAnimal {
    getName() {
        return 'Duck';
    }
}

class Chicken extends TwoLegsAnimal {
    getName() {
        return 'Chicken';
    }
}

function TestAbstractFactory(type) {
    let animal = null;
    if (type === 0) {
        animal = new TwoLegsAnimalFactory();
    } else if (type === 1) {
        animal = new FourLegsAnimalFactory();
    }

    return animal.createAnimal(1);
}

module.exports = TestAbstractFactory;