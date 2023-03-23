const student = {
    name: 'John Doe',
    course: 'POO',
    grade: 12
}

function listNames(){
    for (let prop in student){
        console.log(`${prop}`)
    }
}

listNames()

function removeObject(){
    for (let prop in student){
        console.log(`${student[prop]}`)
    }
    for (let prop in student){
        delete student.course
        delete student.grade
        console.log(`${student[prop]}`)
    }

}
function sizeObject(){
    let count = Object.keys(student).length
    console.log(count)
}

sizeObject()