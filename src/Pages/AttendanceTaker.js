import React from 'react';
import { socket } from '../Socketmanager';

const AttendanceTaker = () => {
    const handleTakeAttendance = () => {
        // Emit the socket event with the attendance data
        socket.emit("attendance", { message: "Take attendance event triggered" });
        console.log("Attendance event emitted");
    };

    return (
        <div className="bg-transparent shadow p-4 py-8">
            <div className="heading text-center font-bold text-2xl m-5 text-gray-800 ">Take Attendance</div>
            <div className="flex justify-center">
                <div onClick={handleTakeAttendance} className="btn border border-green-500 p-2 px-6 font-semibold cursor-pointer text-white bg-green-500">
                    Take Attendance
                </div>
            </div>
        </div>
    );
};

export default AttendanceTaker;