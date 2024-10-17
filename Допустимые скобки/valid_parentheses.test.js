const isValid = require('./valid_parentheses');

describe('Тесты для функции Допустимые скобки', () => {
    test('Good ({[]}) ', () => {
        expect(isValid('({[]})')).toBe(true); 
    });

    test('Not good ({[}]) ', () => {
        expect(isValid('({[}])')).toBe(false); 
    });

    test('Good (){[]} ', () => {
        expect(isValid('(){[]}')).toBe(true); 
    });

    test('Not good ((({[]})) ', () => {
        expect(isValid('((({[}])')).toBe(false); 
    });

    test('Not good ({[]}})) ', () => {
        expect(isValid('((({[}])')).toBe(false); 
    });
});