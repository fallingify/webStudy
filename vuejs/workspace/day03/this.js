var obj = { result: 0 };
obj.add = function(a, b) {
    this.result = a + b;
}

obj.add(10, 20);