const personalName = prompt('Add your name: ');
const personalAddress = prompt('add your address: ');
const personalBirthday = prompt('add your birthday: ');
const personalLocalBirth = prompt('add your local of birth: ');
const personalContact = prompt('add your contact: ');
const personalProfession = prompt('add your profession: ');

let personalData = {
    name: personalName,
    address: personalAddress,
    birthday: personalBirthday,
    localBirth: personalLocalBirth,
    contacts: personalContact,
    profession: personalProfession
}

let soccerGame = {
    finalScore: '2-0',
    nameTeam1: 'Tigers',
    nameTeam2: 'Lakers', 
    authorGoals: 'Victoria',
    stadiumName: 'AAA',
    date: 'today',
    time: '8:00'
}

function showingInfo(){
    for (let prop in soccerGame){
        console.log(prop + ': ' + soccerGame[prop])
    }
}

showingInfo()