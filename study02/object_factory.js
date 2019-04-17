var lee = {
    name:'lee',
    first:10,
    second:20,
    third:30,
    sum:function(){
        return this.first+this.second+this.third;
    }
}

var kim = {
    name:'kim',
    first:10,
    second:20,
    third:20,
    sum:function(){
        return this.first+this.second+this.third;
    }
}

console.log("lee.sum()", lee.sum());
console.log("kim.sum()", kim.sum());