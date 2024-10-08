const summ = require('./find-pair-by-sum');

describe('Тесты для функции summ', () => {
    test('Найдена пара чисел, сумма которых равна 6', () => {
        const array = [5, 2, 3, 4, 9, 3];
        expect(summ(array, 6)).toBe("1 and 3"); 
    });

    test('Найдена пара чисел, сумма которых равна 8', () => {
        const array = [5, 2, 3, 4, 9, 3];
        expect(summ(array, 8)).toBe("0 and 2"); 
    });

    test('Найдена пара чисел, сумма которых равна 10', () => {
        const array = [1, 2, 3, 4, 9, 3];
        expect(summ(array, 10)).toBe("0 and 4"); 
    });

    test('Пара не найдена', () => {
        const array = [5, 2, 3, 4, 9, 3];
        expect(summ(array, 20)).toBeNull(); 
    });

    test('С пустым массивом', () => {
        const array = [];
        expect(summ(array, 5)).toBeNull(); 
    });

    test('Пара из одинаковых элементов', () => {
        const array = [3, 3, 3];
        expect(summ(array, 6)).toBe("0 and 1"); 
    });
});