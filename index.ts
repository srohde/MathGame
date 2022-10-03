console.log("Welcome to Manuel's Math Game");

const quiz = [];

for (let i = 1; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        quiz.push({ op: '+', i, j });
        quiz.push({ op: '*', i, j });
        if (i >= j) {
            quiz.push({ op: '-', i, j });
        }
    }
}

while (true) {
    const randomIndex = Math.floor(Math.random() * quiz.length);
    const { op, i, j } = quiz[randomIndex];
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
