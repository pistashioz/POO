$('h1').css("background-color", "yellow");

let btn = document.createElement("button");
btn.innerHTML = "Click Me";
document.body.appendChild(btn);

let list = document.querySelector('ul')
$(btn).click(function(){
    let template = document.createElement('li');
    let newEl = prompt('add new number')
    template.innerHTML = `${newEl}`
    list.append(template)
});

