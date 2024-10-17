const par = new Map();
par.set("(", ')');
par.set("{", '}');
par.set("[", ']');

const openP = Array.from(par.keys())

function isValid(s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const isOpen = openP.includes(s[i])
    if(isOpen) {
      stack.push(s[i])
    } else if (stack.length > 0 && s[i] === par.get(stack[stack.length - 1])) {
      stack.pop()
    } else {
      return false
    }
  }
  return stack.length === 0
};

module.exports = isValid;
