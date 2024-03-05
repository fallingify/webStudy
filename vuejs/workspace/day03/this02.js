const data = {
    x: 10,
    getX: function () {
        return this.x; //객체 data의 x속성을 반환하는 메소드 getX
    },
};

const dataGetX = data.getX; //객체 data에 getX 메소드를 할당
console.log(dataGetX());  //undefined

const boundGetX = dataGetX.bind(data); //boundGetX 함수는 data 객체를 바인딩
// this를 명시적으로 data객체로 고정시킨다
console.log(boundGetX()); //10