//함수 파라미터에서도 사용가능함

//기본파라미터만 적용 -> 가독성 문제 생김
function info1(name, phone, email = "none"){
    console.log(name, phone, email);
}

info1("lee", "019-1122-2211");

//인수를 객체로 전달 -> 가독성높음, 속성이 전달되지 않았을때 bad
function info2(person){
    if(!person.email) person.email = 'None';
    let {name, phone, email} = person;
    console.log(name, phone, email); //구조분해할당
}
info2({name: "lee", phone: "019-111-222"}); 

//best
function info3({name, phone, email = "none"}){
    console.log(name, phone, email);
}

info3({name: "lee", phone:"0101"});