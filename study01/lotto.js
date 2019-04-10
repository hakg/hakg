function onClick(){
    let result = new Set();
    while(result.size < 6){
        result.add((Math.floor(Math.random() * 45) + 1));
    }
    return result.values();
}

function clickEvent(){
    let numResult = onClick();
    document.querySelector("#num1").innerHTML = numResult.next().value;
    document.querySelector("#num2").innerHTML = numResult.next().value;
    document.querySelector("#num3").innerHTML = numResult.next().value;
    document.querySelector("#num4").innerHTML = numResult.next().value;
    document.querySelector("#num5").innerHTML = numResult.next().value;
    document.querySelector("#num6").innerHTML = numResult.next().value;
}