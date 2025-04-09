
// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);

//Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("Draw");
    }
}

let circle = new Circle(1);

circle.draw();
console.log(circle);

const Prices = new Map();

// Add items with their prices
Prices.set('apple', 1.5);
Prices.set('banana', 0.8);
Prices.set('orange', 1.2);
Prices.set(5, 'derek');

// Retrieve prices
console.log(Prices.get('apple')); 
console.log(Prices.get('banana')); 
console.log(Prices.get('orange')); 
console.log(Prices.get(5)); 

// Check if an item exists
console.log(Prices.has('grapes'));

// Remove an item
Prices.delete('banana');

// Check the size after deletion
console.log(Prices.size);