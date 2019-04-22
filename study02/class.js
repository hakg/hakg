//객체
class People{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return 'prototype : ' + (this.first+this.second);
    }
}

//상속
class PeoplePlus extends People{
    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;
    }
    sum(){
        return super.sum() + this.third;
    }
    avg(){
        return (this.first + this.second + this.third) / 3;
    }
}

//인스턴스 객체생성
var lee = new People('lee', 10, 20);
console.log('lee', lee);
console.log('lee.sum', lee.sum());
var kim = new PeoplePlus('kim', 10, 20, 30);
console.log('kim.avg', kim.avg());