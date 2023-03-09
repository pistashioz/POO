function palindrome(number){
    if (100 < number < 900){
        let number1 = String(number);
        let reversed = '';
        for (let i = number1.length-1; i>=0; i--){
            reversed+=number1[i]
        }
        if (number1 == reversed){
            return true
        }
        else{
            return false
        }
    }
}


let number = parseInt(prompt('add a number: '))
palindrome(number)

if (palindrome(number) == true){
    console.log('ye')
}
else{
    console.log('no')
}