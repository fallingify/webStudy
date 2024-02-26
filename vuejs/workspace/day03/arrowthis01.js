var obj = {result: 0};

obj.add = function(x, y) {
    function inner(){
        this.result = x + y;
    }

    inner = inner.bind(this); //bind()메소드를 이용해서 바깥 쪽 함수의 this를 inner함수의 this로 직접 연결  
    //this는 obj가 된다
    //arrowthis.js참고
    inner(); 
};

obj.add(1, 2);
console.log(obj); 
console.log(result);
