function func1() {
    console.log("함수1 실행");
    func2();
}

function func2() {
    setTimeout(function () {
        console.log("함수2 실행");
    }, 1000);
    func3();
}

function func3() {
    setTimeout(function () {
        console.log("함수3 실행");
    }, 500);
}

func1();