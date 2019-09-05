var list = [];

class Student{

	constructor(firstName,lastName){
		this.firstName = firstName;
		this.lastName = lastName;
		this.course = {};
		this.schedule = {};	
	}
	
	setFirstName(firstName){
		this.firstName = firstName;
	}

	setLastName(lastName){
		this.lastName = lastName;
	}

	addCourse(course,year){
		this.course[course] = year;
	}

	addSchedule(day, time){
		this.schedule[day] = time;
	}

	addStudent(student){
		list.push(student);
	}

	removedStudent(index,noOfStudent){
		list.splice(index, noOfStudent);
		if(index >= list.length){
			console.log(`You cannot remove student, $(this.index) doesnt exist`)
		}else{
			console.log("Successfully Removed!")
		}
	}

	displayStudents(){
		console.log(list);
	}
}

module.exports = Student;