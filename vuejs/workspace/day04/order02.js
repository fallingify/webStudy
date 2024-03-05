//주문서 객체orders
//주문한 항목들을 배열items :  3개의 상품이름, 가격, 수량
//총 주문 금액을 계산하는 메소드(amount)
//새로운 주문 항목을 추가하는 메소드(add)
//주문제거하는 메소드(remove)

let orders = {
    items: [], //주문한 것 저장하는 배열
    //총 주문금액 계산하는 매소드

    // amount : function(){
    //     let total = 0;
    //     this.items.forEach((item) => {
    //         total += item.price * item.quantity;
    //     });
    //     return total;
    // },

    //위 대신 reduce()이용하는 방법
    amount: function(){
        return this.items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    },
    
    //추가
    add : function(name, price, quantity){
        this.items.push({name, price, quantity});
        console.log("추가한 상품 : " + name);
        
    },

    //삭제
    remove : function(index){
        if(index >= 0 && index < this.items.length){
            let removeItem = this.items.splice(index, 1)[0]; //splice는 반환함. 
            console.log("뺀 상품 : " + removeItem.name);
        }else{
            console.log("없음")
        }
    },
};

//주문 추가 
orders.add("아이패드", 240000, 3);
orders.add("삼성노트북", 35000, 1);

console.log('최종금액 : ' + orders.amount() + '원');

orders.remove(1);

