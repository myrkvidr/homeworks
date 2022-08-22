function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

// const student1 = new Student("Hermione", "female", 17);
// const student2 = new Student("Luna", "female", 15);
// const student3 = new Student("Neville", "male", 17);

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  let marks = [mark];
  if(this.marks === undefined) {
    this.marks = marks;
  } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function(...mark) {
  let marks = [];
  if(this.marks === undefined) {
    this.marks = marks;
    this.marks.push(...mark);
  } else {
      this.marks.push(...mark);
    }
}

Student.prototype.getAverage = function() {
  let markSum = 0;
  let count = 0;
  for (let i = 0; i < this.marks.length; i++) {
    count += 1;
    markSum += this.marks[i];
  }
  let average = markSum / count;
  return average;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}