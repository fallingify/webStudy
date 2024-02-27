//import하는 여러방식

//같은 폴더 내의 test01.mjs 모듈 로드
// 1. export한 식별자들을 지정해서 import 하는 방법
// import {pi, add, Person} from './test01.mjs';

// console.log(pi);
// console.log(add(10));
// console.log(new Person("lee"));


// 2. 파일 통째로 로드, 하나의 이름으로 한번에 로드
// import * as test01 from "./test01.mjs";
// console.log(new test01.Person("lee"));

// 3. 이름을 변경해서 로드
// import {pi as PI, add as ADD, Person as P} from './test01.mjs';
// console.log(PI);
// console.log(ADD(4));
// console.log(new P("lee"));


// default 키워드로 export한 모듈은 {}없이 임의로 import한다.
import square from './test01.mjs';

console.log(square(10));
