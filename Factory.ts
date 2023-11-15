interface Coffee {
    grindCoffee(): void;
    makeCoffee(): void;
    pourIntoCup(): void;
}

class Espresso implements Coffee {
    grindCoffee() {
        console.log("Grinding coffee beans for Espresso");
    }

    makeCoffee() {
        console.log("Making Espresso");
    }

    pourIntoCup() {
        console.log("Pouring Espresso into cup");
    }
}

class Cappuccino implements Coffee {
    grindCoffee() {
        console.log("Grinding coffee beans for Cappuccino");
    }

    makeCoffee() {
        console.log("Making Cappuccino");
    }

    pourIntoCup() {
        console.log("Pouring Cappuccino into cup");
    }
}

class Americano implements Coffee {
    grindCoffee() {
        console.log("Grinding coffee beans for Americano");
    }

    makeCoffee() {
        console.log("Making Americano");
    }

    pourIntoCup() {
        console.log("Pouring Americano into cup");
    }
}

class CoffeeFactory {
    createCoffee(type: string): Coffee | null {
        switch (type.toLowerCase()) {
            case 'espresso':
                return new Espresso();
            case 'cappuccino':
                return new Cappuccino();
            case 'americano':
                return new Americano();
            default:
                console.log("Invalid coffee type");
                return null;
        }
    }
}

const coffeeFactory = new CoffeeFactory();

const espresso = coffeeFactory.createCoffee('espresso');
if (espresso) {
    espresso.grindCoffee();
    espresso.makeCoffee();
    espresso.pourIntoCup();
}

const cappuccino = coffeeFactory.createCoffee('cappuccino');
if (cappuccino) {
    cappuccino.grindCoffee();
    cappuccino.makeCoffee();
    cappuccino.pourIntoCup();
}

const americano = coffeeFactory.createCoffee('americano');
if (americano) {
    americano.grindCoffee();
    americano.makeCoffee();
    americano.pourIntoCup();
}
