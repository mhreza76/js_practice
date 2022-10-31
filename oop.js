class parent {
    hello1() {
        console.log('hello1 from parent');
    }

    hello2() {
        console.log('hello2 from parent');
    }
}

class Child extends parent {
    hello1() {
        console.log('hello1 from child');
    }

    demo() {
        super.hello2();
    }
}

const childObj = new Child();
childObj.hello1();
childObj.demo();
