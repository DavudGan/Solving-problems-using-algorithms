//Дано целое число x, вернуть, trueе сли x это палиндром, и falseв противном случае .

function isPalindrome(x) {
    let text = x.toString().split('').reverse('').join('')
    return x === +text
    
}

console.log(isPalindrome(121))
