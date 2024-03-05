"use strict";

function food(name) {
  console.log(name + " : ");
  for (var _len = arguments.length, favoriteFoods = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    favoriteFoods[_key - 1] = arguments[_key];
  }
  console.log(favoriteFoods);
}

// ...asdfasdf : 가변매개변수asdfasdf 를 사용할때 앞에 ...쓴다

food("lee", "떡볶이", "피자", "국밥");
food("lee", "오렌지");