import React, { useState } from 'react';
import AssignmentCreator from '../Pages/AssignmentCreater';
import MaterialUploader from '../Pages/MaterialUploader';
import GradeAssignments from '../Pages/GradeAssignments';
import AttendanceTaker from '../Pages/AttendanceTaker';
import TeacherSwitchPanel from '../Pages/TeacherSwitchPanel';
import UploadModel from '../Pages/UploadModel';

const TeacherContentbox = () => {
    const [activeForm, setActiveForm] = useState('form1');

    const renderActiveForm = () => {
        switch (activeForm) {
            case 'form1':
                return <AssignmentCreator />;
            case 'form2':
                return <MaterialUploader />;
            case 'form3':
                return <GradeAssignments />;
            case 'form4':
                return <AttendanceTaker />;
            case 'form5':
                return <UploadModel />;
            default:
                return null;
        }
    };

    return (
        <div className="flex py-1 justify-center bg-transparent absolute -right-10 items-center h-screen z-40 scale-75">
            <div className="bg-transparent shadow-lg rounded-lg w-96 h-96 scale-75 overflow-hidden">
                <TeacherSwitchPanel setActiveForm={setActiveForm} />
                <div className=" overflow-y-auto h-full bg-transparent">
                    {renderActiveForm()}
                </div>
            </div>
        </div>
    );
};

export default TeacherContentbox;