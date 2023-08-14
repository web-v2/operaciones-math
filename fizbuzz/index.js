/*
const it = 100
for (var i = 1; i <= it; i++) {
    if(i%3==0 & i%5==0){
        console.log('fizbuzz');
    }else{
        if(i % 3 == 0){
            console.log('fiz');
        }else{ 
            if (i % 5 == 0) {
                console.log('buzz');
            }else{
                console.log(i);
            }       
        } 
    }    
}
*/


for (var i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}