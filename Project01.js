//defining abstract products
class Panel{
    draw(){
        throw new Error("Method 'draw()' must be implemented.");
    }
}

class Button{
    click(){
        throw new Error("Method 'click()' must be implemented.");
    }
}

class Textbox{
    type()
    {
        throw new Error("Method 'type()' must be implemented.");
    }
}