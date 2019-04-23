var superObj = {superVal:'super'}
// var subObj = {subVal:'sub'}
// subObj.__proto__ = superObj; //prototype, __proto__ -> link
var subObj = Object.create(superObj); //상속 __proto__ 대신 사용
subObj.subVal = 'sub';
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);

var lee = {
    name:'lee',
    first:10,
    second:20,
    sum:function(){
        return this.first + this.second;
    }
}

// var kim = {
//     name:'kim',
//     first:10,
//     second:10,
//     avg:function(){
//         return (this.first + this.second) / 2;
//     }
// }
// kim.__proto__ = lee;
var kim = Object.create(lee);
kim.name = 'kim';
kim.first = 10;
kim.second = 15;
kim.avg = function(){
    return (this.first + this.second) / 2;
}
console.log('lee.sum() :', lee.sum());
console.log('lee.sum() :', kim.sum());
console.log('kim.sum() :', kim.avg());