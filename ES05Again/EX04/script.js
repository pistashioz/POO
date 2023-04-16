let schedule = {}

function isEmpty(obj){
    if (Object.keys(obj).length === 0){
        return true
    }
    return false
}

alert(isEmpty(schedule))

schedule['8:30'] = 'get up';
alert(isEmpty(schedule))