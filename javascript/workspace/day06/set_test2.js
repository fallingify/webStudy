//반복작업

let student = new Map([
  ["짱구", 70],
  ["철수", 93],
  ["맹구", 21],
]);

//학생들의 점수만 출력(값을 대상으로 반환)
for (let score of student.values()) {
  console.log(score);
}

console.log(student.values());

//keys()
console.log(student.keys());
for (let name of student.keys()) {
  console.log(name);
}

//객체
for (let i of student.entries()) {
  console.log(i);
}

console.log(student.entries);
