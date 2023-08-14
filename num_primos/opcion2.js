function findPrimeNumbers(n){
    let primosNum = [];
    for (let i = 2; i <= n; i++){
        let isPirmo = true;
        for (let j = 2; j < i; j++) {
            if(i % j == 0){
                isPirmo = false;
                break;
            }
        }
        if(isPirmo){
            primosNum.push(i);
        }
    }
    return primosNum;
}



console.log(findPrimeNumbers(100));