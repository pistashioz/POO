
let nums = []
numeros = prompt('add a number, if you want to break this propmpt, type -1');
while (numeros != -1){
    numeros = prompt('add a number, if you want to break this propmpt, type -1');
    nums.push(numeros) 
}

function getLesssFrequent(nums){
    let countMinimum = 1;
    var leastCountNum = -1;
    let count = 0;
    for (let i =0; i < nums.length; i++){
        if (nums[i] == nums[i-1]){
            count += 1
        }
        else{
            if (count < countMinimum){
                countMinimum = count
                leastCountNum = nums[i -1]
            }
            count = 1;
        }
    }

    if (count < countMinimum){
        countMinimum = count;
        leastCountNum = nums[nums.length - 1]
    }
    return leastCountNum
}
console.log('least frequent number is: ', getLesssFrequent(nums))
getLesssFrequent(nums)