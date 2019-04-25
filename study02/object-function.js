var lee = {
    name:'lee',
    first:10,
    second:20
}
var kim = {
    name:'kim',
    first:10,
    second:10
}

function sum(prefix){
    //this = lee;
    return prefix+(this.first+this.second);
}
// sum();
console.log('sum.call(lee)', sum.call(lee, '=> ')); //첫번째는 내부, 두번째는 파라미터
console.log('sum.call(kim)', sum.call(kim, ': ')); //비슷한것은 apply
var leeSum = sum.bind(lee, '-> '); //내부 고정
console.log('leeSum()', leeSum());

//function Person(){} === var Person = new Function(); 함수도 객체다
//객체를 하나 생성시 prototype을 내부적으로 가진다
//prototype은 constructor라는 생성자를 객체에 대해 생성한다