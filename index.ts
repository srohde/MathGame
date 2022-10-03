console.log("Welcome to Manuel's Math Game");

const quiz = [];

for(let i=1; i <= 10; i++){
    for (let j = 0; j <= 10; j++) {
        let qAdd = i + ' + ' + j;
        let qMul = i + ' * ' + j;
        if(i >= j){
            let qSub = i + ' - ' + j;
            quiz.push(qSub);
        }
        
        quiz.push(qAdd);
        quiz.push(qMul);
    }
    
}

while(true){
    const random = Math.floor(Math.random() * quiz.length);
    const randomQuiz = quiz[random];
    const input = prompt('What is ' + randomQuiz + ' =');
    const answer =  eval(randomQuiz);
    const result = answer == input;

    if(result == true){
        console.log('Congrats, you got it! ' + randomQuiz + ' = ' + input);
    }else{
        console.log('That sus. ' + randomQuiz + ' = ' + answer);
    }
    console.log('\n');
}