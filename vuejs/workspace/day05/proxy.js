//대상객체
const target = {name: "lee", age: 20};

//프록시 핸들러 객체
const handler = {
    get : function(target, prop, reciver){
        console.log(`접근한 속성 : ${prop}` );
        return target[prop];
    },

    set : function(target, prop, value, reciver){
        console.log(`할당한 속성 : ${prop}, 값 : ${value}`);
        target[prop] = value;
        return true;
    }
};

//프록시 생성
const proxy = new Proxy(target, handler);

//프록시를 통해 속성에 접근가능
console.log(proxy.name);

//proxy를 통한 속성할당
proxy.age = 10;
console.log(proxy.age);

//proxy는 대상객체의 속성에 접근하거나 값을 할당할 때 핸들러의 트랩을 통해서 동작을 수정하고
//이를 통해 객체의 동작을 제어할 수 있음
//Vue3 개발 시에 proxy객체를 직접 생성하지 않아도 된다. vue인스턴스를 생성하면 자동으로 지정된 객체에 대해
//내부적으로 proxy객체로 랩핑을 자동으로 수행함
