const TeacherSwitchPanel = ({ setActiveForm }) => {
    return (
        <div className="flex justify-center mt-4  scale-75  py-1 z-10 ">
            <button onClick={() => setActiveForm('form1')} className="mx-1 text-[40px] px-2  bg-indigo-500 -mb-10 text-white rounded-md  border-none shadow-lg">Assignment</button>
            <button onClick={() => setActiveForm('form2')} className="mx-1  text-[40px] px-2  bg-indigo-500 -mb-10 text-white rounded-md  border-none shadow-lg">Material</button>
            <button onClick={() => setActiveForm('form3')} className="mx-1  text-[40px] px-2  bg-indigo-500 -mb-10 text-white rounded-md  border-none shadow-lg">Grade</button>
            <button onClick={() => setActiveForm('form4')} className="mx-1 text-[40px] px-2  bg-indigo-500 -mb-10 text-white rounded-md  border-none shadow-lg">Attendance</button>
            <button onClick={() => setActiveForm('form5')} className="mx-1 text-[40px] px-2  bg-indigo-500 -mb-10 text-white rounded-md  border-none shadow-lg">Model</button>
            <button onClick={() => setActiveForm('form6')} className="mx-1 text-[40px] px-2  bg-indigo-500 -mb-10 text-white rounded-md  border-none shadow-lg">Ask</button>

        </div>
    );
};

export default TeacherSwitchPanel;