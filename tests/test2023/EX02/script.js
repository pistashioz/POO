const myList = ['apple', 'banana', 'cherry', 'orange']

function manipulateList(list, operation){
    if (operation == 'reverse'){
        return list.reverse();
    }
    else if (operation == 'sort'){
        return list.sort();

    }
    else if (operation == 'extract'){
       const shuffled = [...list].sort(() => 0.5 - Math.random());

       return shuffled.slice(0, 2);
    }
    else{
        console.log('operation not valid');
    }
};

const reversedList = manipulateList(myList, 'reverse'); 
console.log(reversedList);
const sortedList = manipulateList(myList, 'sort');
console.log(sortedList); 
const shuffledList = manipulateList(myList, 'extract');
console.log(shuffledList); 