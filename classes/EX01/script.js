class Rectangle {
    height = 0
    width = 0
    color = ''

    constructor(height, width){
        if (10 > height > 0 && 10 > width > 0){
            this.height = height
            this.width = width
            this.color  = '#FFFFFF'
        }
        else{
            alert('error')
            return
        }

    }

}

let heightRect = +prompt('add the height: ');
let widthRect = +prompt('add the width: ');

if (heightRect == '' || widthRect == '') {
    const defRectangle = new Rectangle(2, 1)
    console.log(defRectangle)
}
else{
    const rectangle1 = new Rectangle(widthRect, heightRect)
    console.log(rectangle1)
}



