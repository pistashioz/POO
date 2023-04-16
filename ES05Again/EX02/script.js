let student = {
    name: 'John Doe',
    course: 'POO',
    grade: '12'
}

const getProperties = (obj) => {
    for (const key in obj) {
      console.log(key);
    }
  };
  getProperties(student);

function removeProperty(obj, key){
    console.log(obj);
    delete obj[key];
    console.log(obj)

}

removeProperty(student, 'course')

function objectSize(obj){
    console.log(Object.keys(obj).length)
}

objectSize(student)