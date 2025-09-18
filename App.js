import React, { useState } from "react";
import "./App.css";

// Base class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `${this.name}, Age: ${this.age}`;
  }
}

// Subclass: Student
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  getInfo() {
    return `${super.getInfo()}, Course: ${this.course}`;
  }

  introduce() {
    return `Hi, I'm ${this.name}, studying ${this.course}!I am studing BECSE in Chandigarh University!!`;
  }
}

// Subclass: Teacher
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  getInfo() {
    return `${super.getInfo()}, Subject: ${this.subject}`;
  }

  introduce() {
    return `${this.name},  teaches OS and ${this.subject}.`;
  }
}

// React Component to display each Person
function PersonCard({ person, role }) {
  const [showIntro, setShowIntro] = useState(false);

  return (
    <div className="person-box">
      <h3>{role}</h3>
      <p>{person.getInfo()}</p>
      <button
        className="toggle-btn"
        onClick={() => setShowIntro(!showIntro)}
      >
        {showIntro ? "Hide Intro" : "Show Intro"}
      </button>
      {showIntro && <p className="intro">{person.introduce()}</p>}
    </div>
  );
}

function App() {
  const student1 = new Student("Bipasha", 20, "Computer Science");
  const teacher1 = new Teacher("Ms. Namrta", 27, "FullStack");

  return (
    <div className="app">
      <div className="card">
        <h2>Person Class Hierarchy</h2>
        <PersonCard person={student1} role="Student" />
        <PersonCard person={teacher1} role="Teacher" />
      </div>
    </div>
  );
}

export default App;
