// throw <error object>

let error = new Error("오류가 발생했습니다");

console.log(error.name);
console.log(error.message); //넣어준 값이 출력됨

let student = '{"age" : 20}';
let user = JSON.parse(student);
console.log(student);
console.log(user);

try {
  let user = JSON.parse(student);
} catch (error) {}

try {
  if (student.age < 18) {
    throw new Error("고등학생은 19살보다 많을 수 없습니다.");
  }
  console.log("힉생의나이는 유효합니다");
} catch (error) {
  console.log("예외발생", error.message);
}
