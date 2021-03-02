//For...in

let person = {
    name: 'Aquiles',
    age: 23,
    weight: 62.65
}

for (let property in person){
    console.log(property);
    //console.log(person.name);
    console.log(person[property])
}