let now = new Date();
console.log(now);
console.log(now.toLocaleString());

now.setHours(9);
console.log(now.getHours());

let date = new Date(2024, 1, 5); //월은 0부터 시작
let today = new Date();
console.log(today.toString());
console.log(date.toDateString());
