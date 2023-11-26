let minValue;
let maxValue;
let orderNumber = 1;
let answerNumber = 0;
let gameRun;
let arr = ['Ура! Я угадал!', 'Это было не сложно!', 'Я угадал! Давай еще раз'];



document.getElementById('inputmin').placeholder = 'Введите минимальное число';
document.getElementById('inputmax').placeholder = 'Введите максимальное число';

document.getElementById('btnСalc').addEventListener('click', function()  { //Нажимаем - вычисляем результат

gameRun = true;
orderNumber=1;
    
minValue = document.getElementById("inputmin").value ;
    
minValue = (isNaN(minValue) || 0) ? 0 : minValue; //Проверяем является ли числом
minValue = (minValue == 0) ? inputmin.value = 0 : minValue; //Если не является числом, приравнивает к 0

minValue = (minValue>=998) ? 998 : minValue; // Если больше 999, меняем на 998
minValue = (minValue == 998) ? inputmin.value = 998 : minValue;

minValue = (minValue<-999) ? -999 : minValue; // Если меньше -999, меняем на -999
minValue = (minValue == -999) ? inputmin.value = -999 : minValue;

maxValue = document.getElementById("inputmax").value ;

maxValue = (isNaN(maxValue) && 'текст') ? 100 : maxValue; //Проверяем является ли числом
maxValue = (maxValue == 100) ? inputmax.value = 100 : maxValue; //Если не является числом, приравнивает к 100

maxValue = (maxValue >= 999) ? 999 : maxValue; //Если MAX значение больше или равно 999, меняем на 999
maxValue = (maxValue == 999) ? inputmax.value = 999 : maxValue;

maxValue = (maxValue <= -998) ? -998 : maxValue; //Если MAX значение меньше или равно 998, меняем на 998
maxValue = (maxValue == -998) ? inputmax.value = -998 : maxValue;


answerNumber = Math.floor((+minValue + +maxValue) / 2);   
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
orderNumberField.innerText = orderNumber;

if (minValue == '', maxValue == ''){
    inputmin.value = '';
    inputmax.value = '';
    answerField.innerText = 'Ой...Кажется поля не заполнены'; 
    orderNumberField.innerText = '';
    gameRun = false; 
} else if (maxValue <= +minValue){
    answerField.innerText = `Число MAX должно быть больше числа MIN`;
    gameRun = false;
}else {
    answerField.innerText = `Вы загадали число ${answerNumber}?`
    
}
    //answerField.innerText = (maxValue <= +minValue) ? `Число MAX должно быть больше числа MIN` : `Вы загадали число ${answerNumber}?`;

    //answerField.innerText = `Вы загадали число ${answerNumber}?`;

    //if (maxValue < minValue){
    //   answerField.innerText = `Число MAX должно быть больше числа MIN`;
    //}else if(maxValue = minValue){
    //    answerField.innerText = `Число MAX должно быть больше числа MIN`;
    //}else{
    //answerField.innerText = `Вы загадали число ${answerNumber}?`;
    //}

})

document.getElementById('btnRetry').addEventListener('click', function () {
    inputmin.value = '';
    inputmax.value = '';
    orderNumberField.innerText = '';
    answerField.innerText = `Давай сыграем еще раз?`;

})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (answerNumber >= maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((+minValue + +maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (answerNumber <= minValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((+minValue + +maxValue) / 2);
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
        gameRun = false;
    }
})


