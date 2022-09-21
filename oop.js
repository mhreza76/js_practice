class parent{
    hello1(){
        console.log('hello1 from parent');
    }
    
    hello2(){
        console.log('hello2 from parent');
    }
}

class child extends parent{
    hello1(){
        console.log('hello1 from child');
    }
    demo(){
        super.hello2();
    }
}

let childObj = new child();
childObj.hello1();
childObj.demo();