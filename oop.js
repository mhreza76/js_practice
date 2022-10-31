class Parent {
    static hello1() {
        console.log('hello1 from parent');
    }

    static hello2() {
        console.log('hello2 from parent');
    }
}

class Child extends Parent {
    static hello1() {
        console.log('hello1 from child');
    }

    demo() {
        super.hello2();
    }
}

const childObj = new Child();
childObj.hello1();
childObj.demo();
