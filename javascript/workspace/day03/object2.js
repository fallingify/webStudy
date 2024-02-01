// JS 객체의 필드는 프로퍼티라고 한다
let snack = new Object(); 
snack.name = 'saewookkang';
snack.price = 2500; 

console.log(snack);

// 빵집에 등록되지 않은 고객이 5명이다
//1) 이름 : 짱구
//나이 : 5
//포인트 : 150
const user1 = {
    name : "짱구", 
    age : 5,
    point : 150
};
//2) 이름: 철수
//나이 : 6
//포인트 : 360
const user2 = {
    name : "철수", 
    age : 6,
    point : 360
};
//3) 이름 : 맹구
//나이 : 5
//포인트 : 10
const user3 = {
    name : "맹구", 
    age : 5,
    point : 10
};
//4) 이름 : 유리
//나이 : 7
//포인트 : 770
const user4 = {
    name : "유리", 
    age : 7,
    point : 770
};
//5) 이름 : 훈이
//나이 : 6
//포인트 : 0
const user5 = {
    name : "훈이", 
    age : 6,
    point : 0
};

let bakery = new Object(); 

bakery.user1 = user1;
bakery.user2 = user2;
bakery.user3 = user3;
bakery.user4 = user4;
bakery.user5 = user5;


for(i in bakery){
    console.log(bakery[i].point);
}

console.log(bakery.user1); 


