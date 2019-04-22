function Person(name, first, second){
    this.name=name;
    this.first=first;
    this.second=second;
}

Person.prototype.sum = function(){
    return 'prototype : ' + (this.first+this.second);
}
var lee = new Person('lee', 5, 4);
lee.sum = function(){
    return 'this : ' + (this.first+this.second);
}
var kim = new Person('kim', 3, 3);
console.log("lee.sum()", lee.sum());
console.log("kim.sum()", kim.sum());