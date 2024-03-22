import React, { useState } from "react";

function FeesProject() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({
    FirstName: "",
    LastName: "",
    DOB: "",
    PhoneNumber: "",
    Email: "",
    Address: "",
    Course: "",
    Trainer: "",
    Fees: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const updateStudent = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [fieldName]: value,
    }));
  };

  const addStudent = () => {
    if (
      student.FirstName.trim() !== "" &&
      student.LastName.trim() !== "" &&
      student.DOB.trim() !== "" &&
      student.PhoneNumber.trim() !== "" &&
      student.Email.trim() !== "" &&
      student.Address.trim() !== "" &&
      student.Course.trim() !== "" &&
      student.Trainer.trim() !== "" &&
      student.Fees.trim() !== ""
    ) {
      setStudents([...students, student]);
      setStudent({
        FirstName: "",
        LastName: "",
        DOB: "",
        PhoneNumber: "",
        Email: "",
        Address: "",
        Course: "",
        Trainer: "",
        Fees: "",
      });
    }
  };

  const editStudent = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setStudent(students[index]);
  };

  const updateEditedStudent = () => {
    const updatedStudents = [...students];
    updatedStudents[editIndex] = student;
    setStudents(updatedStudents);
    setStudent({
      FirstName: "",
      LastName: "",
      DOB: "",
      PhoneNumber: "",
      Email: "",
      Address: "",
      Course: "",
      Trainer: "",
      Fees: "",
    });
    setEditMode(false);
    setEditIndex(null);
  };

  const deleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Student Record Details</h1>
      <div style={{ marginBottom: "20px" }}>
        <label>First Name: </label>
        <input
          type="text"
          name="FirstName"
          value={student.FirstName}
          onChange={updateStudent}
          style={{ width: "100%", padding: "8px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label>Last Name: </label>
        <input
          type="text"
          name="LastName"
          value={student.LastName}
          onChange={updateStudent}
          style={{ width: "100%", padding: "8px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label>DOB: </label>
        <input
          type="date"
          name="DOB"
          value={student.DOB}
          onChange={updateStudent}
          style={{ width: "100%", padding: "8px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label>Phone Number: </label>
        <input
          type="text"
          name="PhoneNumber"
          value={student.PhoneNumber}
          onChange={updateStudent}
          style={{ width: "100%", padding: "8px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label>Email ID: </label>
        <input
          type="text"
          name="Email"
          value={student.Email}
          onChange={updateStudent}
          style={{ width: "100%", padding: "8px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label>Address: </label>
        <input
          type="text"
          name="Address"
          value={student.Address}
          onChange={updateStudent}
          style={{ width: "100%", padding: "8px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label>Course: </label>
        <input
          type="text"
          name="Course"
          value={student.Course}
          onChange={updateStudent}
          style={{ width: "100%", padding: "8px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label>Trainer: </label>
        <input
          type="text"
          name="Trainer"
          value={student.Trainer}
          onChange={updateStudent}
          style={{ width: "100%", padding: "8px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label>Fees: </label>
        <input
          type="text"
          name="Fees"
          value={student.Fees}
          onChange={updateStudent}
          style={{ width: "100%", padding: "8px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
      </div>
      <div>
        <button onClick={editMode ? updateEditedStudent : addStudent} style={{ padding: "8px 16px", marginRight: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          {editMode ? "Update" : "Add"}
        </button>
        <button onClick={() => window.print()} style={{ padding: "8px 16px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>Print</button>
      </div>
      <br /> <br /> <br />
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left", backgroundColor: "#f2f2f2" }}>S.No</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left", backgroundColor: "#f2f2f2" }}>First Name</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left", backgroundColor: "#f2f2f2" }}>Last Name</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left", backgroundColor: "#f2f2f2" }}>DOB</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left", backgroundColor: "#f2f2f2" }}>Phone Number</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left", backgroundColor: "#f2f2f2" }}>Email ID</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left", backgroundColor: "#f2f2f2" }}>Address</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left", backgroundColor: "#f2f2f2" }}>Course</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left", backgroundColor: "#f2f2f2" }}>Trainer</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left", backgroundColor: "#f2f2f2" }}>Fees</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left", backgroundColor: "#f2f2f2" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>{index + 1}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>{student.FirstName}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>{student.LastName}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>{student.DOB}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>{student.PhoneNumber}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>{student.Email}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>{student.Address}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>{student.Course}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>{student.Trainer}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>{student.Fees}</td>
              <td>
                <button onClick={() => editStudent(index)} style={{ padding: "5px 10px", marginRight: "5px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>Edit</button>
                <button onClick={() => deleteStudent(index)} style={{ padding: "5px 10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeesProject;