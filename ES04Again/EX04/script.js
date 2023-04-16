function registerUser(name, courses, profile, morningSession, afternoonSession){

    console.log(name)
    const table = document.querySelector('table');
    const line = document.createElement('tr');

    let course = '';
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].checked === true) {
          course = courses[i].value;
        }
    }
    let sessionChecked = '';
    if (morningSession === true && afternoonSession === true){
        sessionChecked = 'M/A'
    }
    else if (morningSession === true && afternoonSession === false){
        sessionChecked = 'M'
    }
    else if (morningSession === false && afternoonSession === true){
        sessionChecked = 'A'
    }
    requiredSession()
    line.innerHTML = `
    <td>${name}</td>
    <td>${course}</td>
    <td>${profile}</td>
    <td>${sessionChecked}</td>`

    table.appendChild(line);

}

function requiredSession(){
    const sessionCheckBox = document.getElementsByClassName('sessionCheckbox');

    let atLeastOneChecked = false;
    for (let i = 0; i < sessionCheckBox.length; i++){
        if (sessionCheckBox[i].checked === true){
            atLeastOneChecked = true;
        }
    }
    return atLeastOneChecked;
}


const formUser = document.querySelector('form');

formUser.addEventListener('submit', function(event){
    event.preventDefault();

    if (!requiredSession()){
        alert('Please select one selection!');
        return false
    };

    const name = document.getElementById('userName').value;
    const courses = document.getElementsByName('course');
    const profile = document.getElementById('profile').value;
    const morningSession = document.getElementById('morningSession').checked;
    const afternoonSession = document.getElementById('afternoonSession').checked;

    registerUser(name, courses, profile, morningSession, afternoonSession);

    formUser.reset();
    return true
});

const otherProfile = document.getElementById('profile');

otherProfile.addEventListener('change', function(){
    console.log('?')
    if (otherProfile.value == 'other'){
        const textOther = prompt('Indique outra opcao: ');
        if (textOther === null){
            return false
        }

        const newOption = document.createElement('option');
        newOption.value = textOther;
        newOption.label = textOther;

        otherProfile.insertBefore(newOption, otherProfile.firstChild);
        return true
    }
    return false;
});