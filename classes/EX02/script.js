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

    //methods
    calcArea(){
        return `Area: ${this.height * this.width}`
    }

    calcPerimeter(){
        return `Perimeter: ${2 * (this.height + this.width)}`
    }

}

let heightRect = +prompt('add the height: ');
let widthRect = +prompt('add the width: ');

if (heightRect == '' || widthRect == '') {
    const defRectangle = new Rectangle(2, 1)
    console.log(defRectangle)
    console.log(defRectangle.calcArea())
    console.log(defRectangle.calcPerimeter())
}
else{
    const rectangle1 = new Rectangle(widthRect, heightRect)
    console.log(rectangle1)
    console.log(rectangle1.calcArea())
    console.log(rectangle1.calcPerimeter())
}



