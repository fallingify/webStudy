/*

    <실습> 나이는 상수로 설정, 삼항연산자
    나이가 19살 이상이면 "입장가능" 출력
    
    나이가 짝수면 "짝수"

*/


const age = 10;
const name = "adf";

const isAdult = age >= 19? "입장가능": "입장불가";
console.log(isAdult);

const isResult = age % 2 == 0? "짝수": "홀수";
console.log(isResult);

const isResult2 = age === 10 && "당첨" || "다음기회에";
console.log(isResult2);

console.log(name + "님은 " + isAdult + "\n" + age + "\t" + isResult + "\t" + isResult2);
