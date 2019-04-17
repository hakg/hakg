function Person(name, first, second, third){
    this.name=name;
    this.first=first;
    this.second=second;
    this.sum = function(){
        return this.first+this.second;
    }
}

var lee = new Person('lee', 5, 5);
var kim = new Person('kim', 3, 3);
console.log("lee.sum()", lee.sum());
console.log("kim.sum()", kim.sum());