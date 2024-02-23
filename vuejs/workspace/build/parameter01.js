"use strict";

function addInfo(name, phone) {
  var home = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "없음";
  var email = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "없음";
  var str = "name=".concat(name, ", phone=").concat(phone, ", home=").concat(home, ", email=").concat(email);
  console.log(str);
}
addInfo("김영선", "010-1234-1234");
addInfo("김영선", "010-2345-2345", "뉴욕시", "a@it.com");