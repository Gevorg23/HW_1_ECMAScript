// 1 Найти минимальное число в массиве arr с использованием Math.min и оператора расширения (spread operator):

const arr = [1, 5, 7, 9];
const minNumber = Math.min(...arr);


// 2 Создать функцию createCounter, которая возвращает объект с методами increment и decrement для увеличения и уменьшения значения счетчика на 1 соответственно:

function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count
    };
}

const counter = createCounter();
console.log(counter.increment()); // Увеличит счетчик на 1 и вернет новое значение: 1
console.log(counter.decrement()); // Уменьшит счетчик на 1 и вернет новое значение: 0


// 3 Написать рекурсивную функцию findElementByClass, которая ищет элемент с указанным классом в дереве DOM, начиная с корневого элемента:

function findElementByClass(rootElement, className) {
    if (rootElement.classList.contains(className)) {
        return rootElement;
    }

    for (const child of rootElement.children) {
        const foundElement = findElementByClass(child, className);
        if (foundElement !== null) {
            return foundElement;
        }
    }

    return null;
}

// Пример использования
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);


