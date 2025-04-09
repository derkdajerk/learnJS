function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("Draw");
    }
}

let circle = new Circle(10);
// circle.draw();
// console.log(circle);

for(let key in circle){
    console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if('radius' in circle){
    console.log('curcle had radius');
}