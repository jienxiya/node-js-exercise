class Person{
	constructor(firstname,lastName){
		this.firstname = firstname;
		this.lastName = lastName;
	}

	greet(){
		console.log(`Hi ${this.firstname} ${this.lastName}, Welcome to Node.js`)
		console.log(__filename)
		console.log(__dirname)
		console.log(module)
		console.log(exports)
	}
}

class Student{
	constructor(firstName,lastName,course,classSched){
		this.firstname = firstname;
		this.lastName = lastName;
		this.course = course;
		this.classSched = classSched;
	}
		
	display(){
		console.log(`First Name ${this.firstname}`, `Last Name ${this.lastName}`, `Course ${this.course}`, `Schedule ${this.classSched}`)
	}
}

// let person = {
// 	firstname = "Mary Jane",
// 	lastName= "Paller"
// }

module.exports = Person;
module.exports = Student;