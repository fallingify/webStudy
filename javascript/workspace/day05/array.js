//1. 1~10까지 Array 객체에 담은 후 짝수만 출력
const data = new Array(10).fill(0);
const result = data.map((data, i) => i + 1).filter((data) => data % 2 == 0);
console.log(result);

//2. 한글을 숫자로
const hangle = "공일이삼사오육칠팔구";
const input = "이공이사".split("");
console.log(parseInt(input.map((c) => hangle.indexOf(c)).join("")));

//3. 숫자를 한글로
const input2 = "2024".split("");
console.log(input2);
const result2 = input2.map((c) => hangle[c]).join("");
console.log(result2);
