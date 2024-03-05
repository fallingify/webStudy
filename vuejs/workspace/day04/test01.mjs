//export하는 방법

//1. 각각 export
//변수
// export const pi = Math.PI;

// //함수
// export function add(x) {
//     return x + x;
// }

// //클래스
// export class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

//2. 한번에 export
// export {pi, add, Person};


//모듈에서 하나만 export할때는 default키워드 사용가능(단,var let const는 사용불가)

//방법1
// export default function( x ){
//     return x * x;
// };

//방법2
// export default () => {
//      return x * x;
// };

//방법3
// export default x => x * x;