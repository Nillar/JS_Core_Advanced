function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error("abstract class Melon cannot be instantiated");
            }
            this.weight = Number(weight);
            this.melonSort = melonSort;
        }

        get elemelonElementIndex() {
            return this.weight * this.melonSort.length;
        }

        toString() {
            return `Sort: ${this.melonSort}\nElement Index: ${this.elemelonElementIndex}`;
        }
    }
    class Watermelon extends Melon {
        constructor(weight, melonsort){
            super(weight, melonsort);
            this.element = "Water";
        }
        toString() {
            return `Element: ${this.element}\n${super.toString()}`;
        }
    }
    class Firemelon extends Melon {
        constructor(weight, melonsort){
            super(weight, melonsort);
            this.element = "Fire";
        }
        toString() {
            return `Element: ${this.element}\n${super.toString()}`;
        }
    }
    class Earthmelon extends Melon {
        constructor(weight, melonsort){
            super(weight, melonsort);
            this.element = "Earth";
        }
        toString() {
            return `Element: ${this.element}\n${super.toString()}`;
        }
    }
    class Airmelon extends Melon {
        constructor(weight, melonsort){
            super(weight, melonsort);
            this.element = "Air";
        }
        toString() {
            return `Element: ${this.element}\n${super.toString()}`;
        }
    }
    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort){
            super(weight, melonSort);
        }

        morph() {
            if(this.element === "Water"){
                this.element = "Fire";
            } else if (this.element === "Fire"){
                this.element = "Earth";
            } else if(this.element === "Earth"){
                this.element = "Air";
            } else {
                this.element = "Water";
            }
        }
    }
    return {
        Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon
    };
}
let classes = solve();
// let test = new classes.Melon(100, "Test");
//Throws error

let watermelon = new classes.Firemelon(12.5, "Kingsize");
console.log(watermelon.toString());
console.log();
let melo = new classes.Melolemonmelon(10, 'Queensize');
melo.morph();
melo.morph();
console.log(melo.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100
