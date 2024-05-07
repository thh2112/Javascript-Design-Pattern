/**
 * Simple factory pattern: Create other object with type
 * Defect: When create new object, need to change code and violate principal SOLID
 */

class Student {
    constructor(name, age, level) {
      this.name = name;
      this.age = age;
      this.level = level;
    }
  }
  
  class StudentFactory {
    static createStudent(age, name) {
      if (age >= 6 && age < 12) {
        return new Student(name, age, "Primary school");
      } else if (age >= 12 && age < 16) {
        return new Student(name, age, "Secondary school");
      } else if (age >= 16 && age <= 18) {
        return new Student(name, age, "High school");
      }
    }
  }

  
module.exports = StudentFactory;