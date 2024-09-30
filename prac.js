const person1 = {
    fullName: function(){return this.firstName+" "+this.lastName;}
}

const person2 = {
    firstName: "Nadim",
    lastName: "Nafi"
}

const output = person1.fullName.call(person2)

console.log(output)