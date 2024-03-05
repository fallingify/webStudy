function addInfo(name, phone, home="없음", email="없음"){
    let str = `name=${name}, phone=${phone}, home=${home}, email=${email}`;
    console.log(str);
}

addInfo("lee", "010-1234-1234");
addInfo("hoon", "010-2345-2345", "남극 ", "a@inter.net");
