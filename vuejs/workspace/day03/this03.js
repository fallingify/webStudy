const data1 = {
    x: 100,
    getX: function (num) {
        return num + this.x;
    },
};

console.log(data1.getX("값 : "));

const data2 = { x: 10 };
console.log(data1.getX.call(data2, "값 : "));
// data1의 getX 메소드를 호출, this를 data2 객체로 지정해서 출력
console.log(data1.getX.apply(data2, ["값 : "]));
// data1의 getX 메소드를 호출, 인수를 배열로 전달하여 출력

let add = function (x, y) {
    this.result = x + y;
};

let obj = {};

//1. bind() 메소드 사용
// add = add.bind(obj);
// add(3, 10);
// console.log(obj);

//2. apply() 메소드 사용
// add.apply(obj, [5, 10]);
// console.log(obj);

//3. call() 메소드 사용
add.call(obj, 7, 7);
console.log(obj);