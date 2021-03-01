//Function constructor

function Person(name){
    this.name = name
    this.walk = () => {
        return name + " está andando"
    }
}

const aquiles = new Person('Aquiles');
console.log(aquiles.walk())