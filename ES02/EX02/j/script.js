
function mixNames(myName, ...friendsName){
    const split1 = myName.split(' ');
    let firtsName = split1[0];
    let lastName = split1[1];

    console.log(`${firtsName + ' '+  lastName + ' has ' + friendsName.length + ' friends'}`);
}

mixNames('victoria valentina', 'erica', 'luis')