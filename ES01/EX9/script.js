let num = prompt('indique um numero decimal: ');
let binary = 0;
let ctr = 0;
let temp = num;
while (num >= 1){
    binary = ((Number(temp) % 2)*(10**Number(ctr)) + Number(num));
    temp = parseInt(temp / 2);
    ctr += 1;
    console.log(binary);
}
console.log(binary)
