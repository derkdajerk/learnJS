function Circle(radius) {
    this.radius = radius;

    this.defaultLocation = {x:0, y:0};

    let computeOptimumLocation = function(factor){
        console.log(factor);
    }

    this.draw = function() {
        computeOptimumLocation(1);

        console.log("Draw");
    }
}

let circle = new Circle(10);

// circle.computeOptimumLocation();
circle.draw();
console.log(circle.defaultLocation)