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

//Word10 Concrete Products
class Word10Panel extends Panel{
    draw(){
        console.log("Drawing a Panel for Word10");
    }
}

class Word10Button extends Button{
    click(){
        console.log("Clicking a Button for Word10");
    }
}

class Word10Textbox extends Textbox{
    type(){
        console.log("Typing in a Textbox for Word10");
    }
}

//Word24 Concrete Products
class Word24Panel extends Panel{
    draw(){
        console.log("Drawing a Panel for Word24");
    }
}

class Word24Button extends Button{
    click(){
        console.log("Clicking a Button for Word24");
    }
}

class Word24Textbox extends Textbox{
    type(){
        console.log("Typing in a Textbox for Word24");
    }
}

//defining abstract factory classes
class GUIFactory{
    createPanel()
    {
        throw new Error("Method 'createPanel()' must be implemented.");
    }

    createButton(){
        throw new Error("Method 'createButton()' must be implemented.");
    }

    createTextbox(){
        throw new Error("Method 'createTextbox()' must be implemented.");
    }
}

//Word90 Abstract Factory
class Word90Factory extends GUIFactory{
    static instance;

    static useCount = 0;
    static maxUses = 2;

    static getInstance(){
        if (!this.instance){
            this.instance = new Word90Factory();
        }

        if(this.useCount < this.maxUses){
            this.useCount++;

            return this.instance;
        }

        else{
            console.warn("Word90Factory instance use limit reached.");

            return null;
        }
    }

    createPanel(){
        return new Word90Panel();
    }

    createButton(){
        return new Word90Button();
    }

    createTextbox(){
        return new Word90Textbox();
    }
}

//Word00 Abstract Factory
class Word00Factory extends GUIFactory{
    static instance;

    static useCount = 0;
    static maxUses = 2;

    static getInstance(){
        if (!this.instance){
            this.instance = new Word00Factory();
        }

        return this.instance;
    }

    createPanel(){
        return new Word00Panel();
    }

    createButton(){
        return new Word00Button();
    }

    createTextbox(){
        return new Word00Textbox();
    }
}

//Word10 Abstract Factory
class Word10Factory extends GUIFactory{
    static instance;

    static useCount = 0;
    static maxUses = 2;

    static getInstance(){
        if (!this.instance){
            this.instance = new Word10Factory();
        }

        return this.instance;
    }

    createPanel(){
        return new Word10Panel();
    }

    createButton(){
        return new Word10Button();
    }

    createTextbox(){
        return new Word10Textbox();
    }
}

//Word24 Abstract Factory
class Word24Factory extends GUIFactory{
    static instance;

    static useCount = 0;
    static maxUses = 2;

    static getInstance(){
        if (!this.instance){
            this.instance = new Word90Factory();
        }

        return this.instance;
    }

    createPanel(){
        return new Word24Panel();
    }

    createButton(){
        return new Word24Button();
    }

    createTextbox(){
        return new Word24Textbox();
    }
}