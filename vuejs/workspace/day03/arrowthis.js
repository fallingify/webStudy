const obj = { result: 0 };

obj.add = function (x, y) {
    const inner = () => {
        this.result1 = x + y;
    };

    inner(); //선언된 시점에서의 add 외부함수의 메소드 this를 따라간다
};

obj.add(10, 20);
console.log(obj);