import { useState, useEffect } from "react"
import StudentList from "./components/studentList.jsx"
import NewStudent from "./components/newstudent.jsx"
import initialData from "./data/studentData.js"
import Button from "./components/Button"
import './App.css'

function App() {
  // Load from localStorage or use initialData
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : initialData;
  });
  
  const [showAddForm, setShowAddForm] = useState(false);

  // Save to localStorage whenever students change
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const handleAddStudent = (newStudent) => {
    const id = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
    setStudents([...students, { ...newStudent, id }]);
    setShowAddForm(false); // Hide form after adding
  };

  const deleteStudent = (id) => {
    if (window.confirm("Are you sure you want to remove this student?")) {
      setStudents(students.filter(std => std.id !== id));
    }
  };

  const toggleStatus = (id) => {
    setStudents(students.map(std => 
      std.id === id 
        ? { ...std, isPresent: !std.isPresent } 
        : std
    ));
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Student Management System</h1>
        <p>Manage and track interactive student records with ease.</p>
      </header>
      
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        <Button 
          variant={showAddForm ? "outline" : "primary"} 
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? "Close Form" : "Add New Student"}
        </Button>
      </div>

      {showAddForm && (
        <div style={{ marginBottom: '2rem' }}>
          <NewStudent onAddStudent={handleAddStudent} />
        </div>
      )}
      
      <hr />
      
      <StudentList 
        students={students} 
        onStatusChange={toggleStatus} 
        onDelete={deleteStudent} 
      />
    </div>
  )
}

export default App
