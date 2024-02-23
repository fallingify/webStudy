"use strict";

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }
var p1 = {
  name: "짱구",
  age: 5
};
({
  name: "짱아",
  age: 10
}), _readOnlyError("p1");
console.log(p1);
// 지금은 p1 기존의 참조객체가 아닌 다른 참조객체를 가리키므로 오류!(참조하는 메모리객체의 주소가 변함)