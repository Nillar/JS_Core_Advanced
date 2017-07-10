class Circle {
    constructor(radius){
        this.radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(radius) {
        this._radius = radius;
        this._diameter = radius * 2;
    }

    get diameter() {
        return this._diameter;
    }
    set diameter(diameter) {
        this._radius = diameter / 2;
        this._diameter = diameter;
    }

    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
