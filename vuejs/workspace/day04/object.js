//변수 정의
let stuID = "20240227";
let name = "Ji";
let grade = 3;

//객체 생성
let student = {
    stuID, 
    name, 
    grade,
    info(){
        console.log("학번 : ", this.stuID); 
        console.log("이름 : ", this.name);
        console.log("학년: ", this.grade);
    },
};

//학생정보 출력
student.info();
