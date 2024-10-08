import React, { useState } from 'react';
import { socket } from '../Socketmanager';

const GradeAssignments = () => {
    const [grades, setGrades] = useState([]);
    const [studentName, setStudentName] = useState('');
    const [grade, setGrade] = useState('');

    const handleStudentNameChange = (e) => setStudentName(e.target.value);
    const handleGradeChange = (e) => setGrade(e.target.value);

    const handleSubmit = () => {
        const newGrade = { studentName, grade };
        setGrades([...grades, newGrade]);
        socket.emit("gradeAssignment", newGrade);
        setStudentName('');
        setGrade('');
    };

    return (
        <div className="bg-white shadow p-4 py-8">
            <div className="heading text-center font-bold text-2xl m-5 text-gray-800 bg-white">Grade Assignments</div>
            <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                <input
                    className="student-name bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                    spellCheck="false"
                    onChange={handleStudentNameChange}
                    value={studentName}
                    placeholder="Student Name"
                    type="text"
                />
                <input
                    className="grade bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                    spellCheck="false"
                    onChange={handleGradeChange}
                    value={grade}
                    placeholder="Grade"
                    type="text"
                />
                <div className="buttons flex justify-end">
                    <div onClick={handleSubmit} className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Submit</div>
                </div>
            </div>
        </div>
    );
};

export default GradeAssignments;