let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));


//if (isNaN(minValue)) {
//    minValue = 0;
//}

//if (isNaN(minValue) || 'текст') {
//   minValue = 0;
//}else{
//   minValue = minValue;
//}

if (isNaN(minValue) && 'текст') {
   minValue = 0;
}else{
   minValue = minValue;
}

minValue = (minValue<-999) ? -999 : minValue;

let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

if (isNaN(maxValue) && 'текст') {
    maxValue = 100;
}else{
    maxValue=maxValue
}

maxValue = (maxValue > 999) ? 999 : maxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
let arr = ['Ура! Я угадал!', 'Это было не сложно!', 'Я угадал! Давай еще раз'];


const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;




document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
   
    if (isNaN(minValue) && 'текст') {
        minValue = 0;
     }else{
        minValue = minValue;
     }
     
     minValue = (minValue<-999) ? -999 : minValue;

    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

    if (isNaN(maxValue) && 'текст') {
        maxValue = 100;
    }else{
        maxValue=maxValue
    }

    maxValue = (maxValue > 999) ? 999 : maxValue;


    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;

})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const rand = Math.floor(Math.random() * arr.length);
        answerField.innerText = arr[rand];
        //answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})

