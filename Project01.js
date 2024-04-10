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

//defining concrete products
//Word90 Concrete Products
class Word90Panel extends Panel{
    draw(){
        console.log("Drawing a Panel for Word90");
    }
}

class Word90Button extends Button{
    click(){
        console.log("Clicking a Button for Word90");
    }
}

class Word90Textbox extends Textbox{
    type(){
        console.log("Typing in a Textbox for Word90");
    }
}

//Word00 Concrete Products
class Word00Panel extends Panel{
    draw(){
        console.log("Drawing a Panel for Word00");
    }
}

class Word00Button extends Button{
    click(){
        console.log("Clicking a Button for Word00");
    }
}

class Word00Textbox extends Textbox{
    type(){
        console.log("Typing in a Textbox for Word00");
    }
}