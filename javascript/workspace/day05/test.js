//1 배열 선언하고 1~10까지 정수를 배열에 저장하고 출력
// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

//2 배열에서 짝숨나 출력하는 함수 작성 후 호출
// let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let printEven1 = (b) => {
//   for (let i = 0; i < b.length; i++) {
//     if (b[i] % 2 == 0) {
//       console.log(b[i]);
//     }
//   }
// };
// printEven1(b);

//3 배열에서 홀수만 출력하는 함수 작성 후 호출
// let c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let printEven2 = (c) => {
//   for (let i = 0; i < c.length; i++) {
//     if (c[i] % 2 != 0) {
//       console.log(c[i]);
//     }
//   }
// };
// printEven2(c);

//4 배열에서 모든 요소의 합을 계산하는 함수를 작성 후 호출
// let d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let getSum = (d) => {
//   let result = 0;
//   for (i in d) {
//     result += d[i];
//   }
//   console.log(result);
// };
// getSum(d);

//5 배열 요소 중 가장 큰 값을 찾는 함수를 작성 후 호출
// let e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let getBiggest = (e) => {
//   let max = e[0];
//   for (i in e) {
//     if (max < e[i]) {
//       max = e[i];
//     }
//   }
//   console.log(max);
// };
// getBiggest(e);

//6 배열의 요소를 역순으로 정렬하는 함수 작성 후 호출
// let f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function rever(f) {
//   let reverse = [];
//   for (let i = f.length - 1; i >= 0; i--) {
//     reverse.push(f[i]);
//   }
//   return reverse;
// }

// console.log(rever(f));

//7 사람의 정보(이름, 나이, 성별, 학생여부)를 담은 객체 생성

//8 두명의 사람 정보를 가진 배열을 생성하고 각 객체를 하나의 배열에 추가후 출력

//9 객체에서 특정 속성을 삭제하는 함수를 작성 후 호출
//10 객체의 속성을 반복하면서 모든 속성과 해당 값을 출력하는 함수를 작성 후 호출

/*
실습 7시 6분 ~ 7시 30분
1. 배열을 선언하고 1~10까지 정수를 배열에 저장하고 출력(push)
2. 배열에서 짝수만 출력하는 함수 작성 후 호출(함수정의, 조건)
3. 배열에서 홀수만 출력하는 함수 작성 후 호출(함수정의, 조건)
4. 배열에서 모든 요소의 합을 계산하는 함수를 작성 후 호출(함수정의, 총합로직)
5. 배열 요소 중 가장 큰값을 찾는 함수를 작성 후 호출(함수정의, 배열 초기값설정)
6. 배열의 요소를 역순으로 정렬하는 함수 작성 후 호출(함수정의, reverse)
7. 사람의 정보(이름, 나이, 성별, 학생여부)를 담은 객체 생성(객체생성, 프로퍼티 이해)
8. 두명의 사람 정보를 가진 배열을 생성하고 각각 객체를 배열에 추가후 출력(배열선언, 객체추가, push)
9. 객체에서 특정 속성(7번 문제에 있는 것들 중 택1)을 삭제하는 함수를 작성 후 호출
10. 객체의 속성을 반복하면서 모든 속성과 해당 값을 출력하는 함수를 작성 후 호출


*/
