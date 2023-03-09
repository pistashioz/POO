function isLeapYear(year){
    if ((year % 100 != 0) && (year % 4 == 0) || (year % 100 == 0)){
        return true;
    }
    else{
        return false
    }
}

let year = parseInt(prompt('add a year: '));
isLeapYear(year)

if (isLeapYear(year) == true){
    console.log('yes');
}
else{
    console.log('no');
}
