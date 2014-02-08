function Student(fname, lname) {
  this.fname = fname,
  this.lname = lname,
  this.courses = []
}

Student.prototype.fullname = function () {
  return this.fname + " " + this.lname
};



Student.prototype.courseLoad = function() {
  var courseLoadObject = {};

  for (var i = 0; i < this.courses.length; i++) {
    if (courseLoadObject[this.courses[i].department]){
      courseLoadObject[this.courses[i].department] += this.courses[i].credits;
    } else {
      courseLoadObject[this.courses[i].department] = this.courses[i].credits;
    }

  }

  return courseLoadObject;
}

function Course(courseName, department, credits, days, timeblock) {
  this.courseName = courseName,
  this.department = department,
  this.credits = credits,
  this.students = []
  this.days = days,
  this.timeblock = timeblock
}

Course.prototype.addStudent = function(student) {
  student.enroll(this);
}

Course.prototype.dayConflictsWith = function(course) {
  for (var i = 0; i < this.days.length; i++) {
    for (var j = 0; j < course.days.length; j++) {
      if (this.days[i] === course.days[j]) {
        return true;
      }
    }
  }
  return false;
}

Course.prototype.conflictsWith = function(course) {
  if (this.dayConflictsWith(course) && course.timeblock === this.timeblock) {
    return true;
  } else {
    return false;
  }
}

Student.prototype.enroll = function (course) {
  if (this.courses.indexOf(course) === -1 && !this.hasConflict(course)) {
    this.courses.push(course);
    course.students.push(this);
  }
};

Student.prototype.hasConflict = function (course) {
  for (var i = 0; i < this.courses.length; i++) {
    if (this.courses[i].conflictsWith(course)) {
      return true;
    }
  }
  return false;
}


math = new Course("Math", "Math", 4, ["m", "t"],1);
alg = new Course("Algebra", "Math", 3, ["w", "r"], 1);
art = new Course("Art", "Art", 2, ["t", "w"], 1);

s = new Student("Abe", "Argh");
t = new Student("Able", "Ablesen");

s.enroll(math);
s.enroll(alg);
s.enroll(art); // should raise error

math.addStudent(t);
console.log(s.courseLoad());
console.log(math.students);

console.log(alg.conflictsWith(art));
