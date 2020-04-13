namespace a {
    class Animal {
        getName() {
            return "父类方法"
        }
    }
    class Cat extends Animal {
        constructor(){
            super()
            
            
        }
        getName() {
            return "父类方法" + super.getName();
        }
    }
}