
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = {x:0, y:0};

    this.draw = function() {
        console.log("Draw");
    };
}

const circle = new Circle(10);
circle.draw();
console.log(circle.defaultLocation); // Does not work since defaultLocation is let, a private property
console.log(circle.radius); // Works since radius is a global property, with this.

// circle.defaultLocation = 1; // doesnt work
// circle.defaultLocation = {x: 2, y: 3}; // works