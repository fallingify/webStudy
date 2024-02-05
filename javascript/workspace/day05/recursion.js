//재귀함수
//x를 n번 곱해주는 함수
//1) for문
// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }

// console.log(pow(2, 4));

//2) 재귀함수
// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// console.log(pow(2, 4));

// pow(2, 4) => 2 * pow(2, 3)
// pow(2, 3) => 2 * pow(2, 2)
// pow(2, 2) => 2 * pow(2, 1)
// pow(2, 1) = 2

// 객체 이용한 재귀
//학생 정보를 객체에 추가하기
let student = {
  stu: [
    { name: "김영선", age: 20, js: 40, java: 60 },
    { name: "김철수", age: 20, js: 70, java: 100 },
  ],
};
console.log(student.stu);

//for문 프로퍼티의 값 추출
for (const st of student.stu) {
  console.log(
    `이름 : ${st.name}, 나이 : ${st.age}, js점수 : ${st.js}, java점수 : ${st.java}`
  );
}

//학생들의 점수합 계산하는 함수
function total(student, index = 0) {
  //재귀함수 종료조건
  if (index >= student.length) {
    return {};
  }

  //현재 학생정보 가져오기
  const currentStu = student[index];

  //현재 학생의 js, java 점수 합 계산
  const totalScore = currentStu.js + currentStu.java;

  //현재 정보 업데이트
  const updateStu = {
    [currentStu.name]: { ...currentStu, totalScore },
  };

  //재귀함수를 호출하여 다음 학생 정보를 처리하고 누적한 결과에 반환
  const remainStu = total(student, index + 1);

  //현재 학생 정보와 나머지 학생 정보를 합치고 반환
  return {
    ...updateStu, //...은 객체 복사를의미
    ...remainStu,
  };
}

//재귀함수를 호출하여 모든 학생 정보를 계산하고 업데이트 된 정보얻을 수 있다
const updateStu = total(student.stu);
console.log(updateStu);
