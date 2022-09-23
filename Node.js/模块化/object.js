class Father1 {
    constructor(uname, age) {
        this.uame = uname
        this.age = age
    }

    say() {
        console.log(this.uame + " " + this.age)
    }
}

class Son1 extends Father1 {
}

let son1 = new Son1('lwh', 20)
son1.say()


function Father2(uname, age) {
    function say2() {
        this.uame = uname
        this.age = age
        console.log(this.uame + ' ' + this.age)
    }
}

function Son2(uname, age) {
    Father2.call(this, uname, age)
}


let son2 = new Son2()
console.log(son2)