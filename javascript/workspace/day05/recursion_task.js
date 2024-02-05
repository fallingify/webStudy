//숫자 1 + 2 + ... + n 계산하는 함수
//totalNum(n)

const totalNum = (n) => {
  if (n == 1) {
    //마지막
    return 1;
  } else {
    return n + totalNum(n - 1);
  }
};

const result = totalNum(1000);
console.log(result);

// 2. 아래 리스트 내의 항목을 하나씩 출력하는 함수
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printlist(list) {
  if (list) {
    console.log(list.value); //현재형
    printlist(list.next);
  }
}

console.log(list.value);
console.log(list.next.next.value);

printlist(list);
