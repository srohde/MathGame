console.log("Welcome to Manuel's Math Game");

const ops = ['+', '*', '-'];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

while (true) {
    const i = getRandomInt(1, 10);
    const j = getRandomInt(0, 10);
    const op = ops[getRandomInt(0, i >= j ? 2 : 1)];
    const expr = `${i} ${op} ${j}`;
    const input = prompt(`What is ${expr} ?`);
    const answer = op === '+' ? i + j : op === '-' ? i - j : i * j;
    const isCorrect = answer == input;

    if (isCorrect) {
        console.log(`Congrats, you got it! ${expr} = ${input}`);
    } else {
        console.log(`That sus. ${expr} = ${answer}`);
    }
    console.log('\n');
}
