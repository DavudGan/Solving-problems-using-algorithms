//Версия 1:
function isPalindrome(x) {
  let text = x.toString().split("").reverse("").join("");
  return x === +text;
}

//Версия 2:
function isPalindromeNevVersion(x) {
  let strX = String(x);
  let left = 0;
  let right = strX.length - 1;

  while (right >= left) {
    if (strX[left] !== strX[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

module.exports = isPalindromeNevVersion;
