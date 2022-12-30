/* 
    Калькулятор любви
    
    Входные данные:
    1.	Имя его/ее
    2.	Имя ее/его

    Выходные данные:
    1.	Процент от 0 до 100. Пример: 46. Результат является числом
    2.	Строка в alert следующего формата:
    “{firstName} подходит к {secondName} на {result} процентов!”

*/
const task_1 = () => {
    
    let fisrtName = prompt('Введите его/её имя');
    let secondName = prompt('Введите её/его имя');
    let result = Math.floor(Math.random() * 101);

    alert(`${fisrtName} подходит к ${secondName} на ${result} процентов`);
}

/*
    body mass index (BMI), ИМТ) — величина, позволяющая оценить степень соответствия массы человека и его роста и тем самым косвенно судить о том, является ли масса недостаточной, нормальной или избыточной.

    Заказчик хочет, чтобы их программа “говорила” пользователям. Заказчик не знает, что надо для того, чтобы его вычислить (немного поискав в интернете, узнаем формулу - вес / (рост в квадрате)), но передал, что программа должна возвращать при каких условиях:
    1.	Если ИМТ меньше либо равно 18.5, вернуть “Недостаточный вес”
    2.	Если ИМТ меньше либо равно 25, вернуть “Нормально”
    3.	Если ИМТ меньше либо равно 30, вернуть “У вас излишек веса”
    4.	Если ИМТ выше 30, вернуть “Ожирение”
*/
const task_2 = () => {
    
    const getDescription = r => {     
        if (r <= 18.5)
            return `Недостаточный вес (${r})`;
        if (r <= 25) 
            return `Нормально (${r})`;
        if (r <= 30)
            return `У вас излишек веса (${r})`
        return `Ожирение (${r})`;
    }

    let height = Number(document.querySelector('#height').value) / 100;
    let weight = Number(document.querySelector('#weight').value);
    let resultText = document.querySelector('#result');
    let result = 0;

    if (height === 0 || weight === 0) {
        resultText.innerHTML = 'Рост или вес равны нулю';
        return;
    }

    result = weight / Math.pow(height, 2);
    resultText.innerHTML = getDescription(result.toFixed(2));
}

/*
    Напишите программу, которая определяет, является ли данный год високосным. В нормальном году 365 дней, в високосном - 366 дней, а в феврале - дополнительный день. Причина, по которой у нас високосные годы, действительно увлекательна

    Вот как определить, является ли конкретный год високосным:
    1.	Год считается високосным, если он делится на 4 без остатка.
    2.	Кроме случаев, когда этот год также делится на 100 без остатка
    3.	Если только этот год не делится на 400 без остатка.

    Входные данные:
    2400
    Выходные данные:
    Високосный год


    Входные данные:
    1989
    Выходные данные:
    Не является високосным
*/
const task_3 = () => {
    
    const checkYear = y => {     
        if (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0))
            return 'Високосный год';
        return 'Не является високосным';
    }

    let year = Number(document.querySelector('#year').value);
    let resultText = document.querySelector('#result');

    if (year === 0) {
        resultText.innerHTML = 'Введите год'; 
        return;
    }

    resultText.innerHTML = checkYear(year);
}

/*
    Напишите программу, которая будет выбирать случайным образом человека, который будет оплачивать ужин. На вход всегда поступает массив имен.

    Входные данные:
    ['Дима', 'Катя', 'Петр', 'Лена']

    Выходные данные:
    Оплачивать будет Петр
*/

const task_4 = () => {

    const arrayRandomElement = arr => {
        let r = Math.floor(Math.random() * arr.length);
        return arr[r].trim();
    }

    let str = document.querySelector('#names').value;
    let resultText = document.querySelector('#result');

    if (!str.trim()) {
        resultText.innerHTML = 'Вы не ввели текст';
        return;
    }

    let names = str.split(',');
    resultText.innerHTML = `Оплачивать будет ${arrayRandomElement(names)}`; 
}