var memberArray = ['hakg', 'hello'];

console.log("memberArray[0]", memberArray[0]);

var memberObject = {
    name:'hakg',
    intro:'hello'
}
memberObject.name = 'bonjurr';
console.log("memberObject.name", memberObject.name);
console.log("memberObject['name']", memberObject['name']);
delete memberObject.name;
console.log("after delte memberObject.name", memberObject.name);