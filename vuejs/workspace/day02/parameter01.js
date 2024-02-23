function addInfo(name, phone, home="없음", email="없음"){
    let str = `name=${name}, phone=${phone}, home=${home}, email=${email}`;
    console.log(str);
}

addInfo("김영선", "010-1234-1234");
addInfo("김영선", "010-2345-2345", "뉴욕시", "a@it.com");
