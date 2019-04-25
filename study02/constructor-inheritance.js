function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}
Person.prototype.sum = function(){
    return this.first + this.second;
}

function PersonPlus(name, first, second, third){
    Person.call(this, name, first, second);
    this.third = third;
}
// PersonPlus.prototype.__proto__ = Person.prototype;
PersonPlus.prototype = Object.create(Person.prototype);
PersonPlus.prototype.constructor = PersonPlus;
PersonPlus.prototype.avg = function(){
    return (this.first+this.second+this.third)/3;
}
//PersonPlus의 prototype을 바라봄
var lee = new PersonPlus('lee', 10, 20, 30);
console.log('lee.sum()', lee.sum());
console.log('lee.avg()', lee.avg());
console.log('lee.constructor', lee.constructor);