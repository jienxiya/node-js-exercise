var student1 = require('./student.js')
var input = require('readline-sync')


var student = null;


do {
	student = new student1();
    student.setFirstName(input.question("First Name : "))
    student.setLastName(input.question("Last Name : "))
    console.log("Add Course : ")
    student.addCourse(input.question("\tCourse : "),input.question("\tYear : "))
    console.log("Add Schedule :")
    student.addSchedule(input.question("\tDay : "),input.question("\tTime : "))
    student.addStudent(student);
    console.log("Successfully Added data!")

} while (input.question("exit? : ")!= "yes");
	
	student.displayStudents();

	console.log("Removing Student")
	if (input.question("Do you want to remove student?: ") == "yes") {
		student.removedStudent(input.question("What index you want to remove?: "),input.question("Number of student you want to remove: "));
	};
	
	student.displayStudents();
	
