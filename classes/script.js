class Rectangle {
    height = 0
    width = 0
    color = ''

    constructor(height, width){
        this.height = height
        this.width = width
        this.color  = '#FFFFFF'
    }
    get currentWidth(){
        return this.width
    }
    get currentHeight(){
        return this.height
    }

    set currentHeight(value){
        if (value < 0){
            console.log('current height most be >= 0')
        }
        else{
            this.height = value
        }
    }
}

const rectangle1 = new Rectangle(2, 1)

