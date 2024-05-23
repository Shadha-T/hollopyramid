let n = 5;
let string = "";
for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
    string += "*"
    }
    string += '\n'
}
let a = 5;
for (let i = 0; i <= a; i++) {
    for (let j = 0; j < a - i - 1; j++) {
        string += "*"
    }
 string += '\n'
}
console.log(string);