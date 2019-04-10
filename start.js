function outNumber(){
    for(let i = 0; i < 5; i++){
        let result = new Set();
        while(result.size < 6){
            result.add(parseInt(Math.random() * 45 + 1));
        }
        console.log(result);
    }
}

