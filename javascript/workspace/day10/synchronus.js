function func1() {
    console.log("함수1 실행");
    func2();
}
function func2() {
    console.log("함수2 실행");
    func3();
}
function func3() {
    console.log("함수3 실행");
}
func1();