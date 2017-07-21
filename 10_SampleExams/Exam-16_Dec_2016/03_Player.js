class Player {
    constructor(nickName){
        this.nickName = nickName;
        this.scoreList = [];
    }

    addScore(score){
        // let validScore = Number(score);
        if(!isNaN(score) && score !== null) {
            this.scoreList.push(Number(score));
            this.scoreList.sort((a, b) => b - a);
        }
        return this;
    }

    get scoreCount() {
        return this.scoreList.length;
    }

    get highestScore (){
        return this.scoreList[0];
    }

    get topFiveScore() {
        return this.scoreList.slice(0, 5);
    }

    toString() {
        return `${this.nickName}: [${this.scoreList}]`;
    }
}

let peter = new Player("Peter");
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);

peter.addScore(450);
peter.addScore(200);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);

peter.addScore(2000);
peter.addScore(300);
peter.addScore(50);
peter.addScore(700);
peter.addScore(700);

console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);

console.log();
let maria = new Player("Maria");
    maria.addScore(350);
    maria.addScore(779);
    maria.addScore(180);
console.log('Highest score: ' + maria.highestScore);
console.log(`Top 5 score: [${maria.topFiveScore}]`);
console.log('' + maria);

// let player = new Player('Martin');
// console.log(player.nickName);
// player.addScore('1');
// player.addScore('dsadas');
// player.addScore('35');
// player.addScore(232);
// player.addScore(300);
// player.addScore(1099);
// player.addScore('301');
// player.scoreCount;



// console.log(player.scoreList);
// console.log(player.highestScore);
// console.log(player.scoreCount);
// console.log(player.topFiveScore);