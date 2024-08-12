import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
    const [move, setMove] = useState(false);
    const sideRef = useRef();
    const navigate = useNavigate();

    const Onclick = () => {
        if (move) {
            gsap.to(sideRef.current, { x: 276, duration: 0.5, ease: "easein" });
        } else {
            gsap.to(sideRef.current, { x: 0, duration: 0.3 });
        }
        setMove(!move);
    };

    const handleLogout = () => {
        localStorage.removeItem("token"); // Clear the token from localStorage
        navigate("/"); // Navigate to the sign-in page
    };

    return (
        <div ref={sideRef} onClick={Onclick} className='w-[3vw] text-white absolute z-10'>
            <img src="./menu.png" alt="" />

            <div className='w-[9rem] bg-slate-800/10 h-[100vh] mt-[-1.7rem] ml-[-9rem] z-50 absolute flex flex-col justify-start align-middle py-[5vh] gap-[2px]'>

                <div className="w-full rounded-sm text-[20px] hover:bg-gray-700/10 text-gray-700/70 text-center hover:duration-150 z-10 p-[0.3rem]">Profile</div>

                <div className="w-full rounded-sm text-[20px] hover:bg-gray-700/10 text-gray-700/70 text-center hover:duration-150 z-10 p-[0.3rem]">Orders</div>

                <div className="w-full mt-16 border-b-2 border-gray-600/10 z-10"></div>

                <div
                    className="w-full rounded-sm text-[20px] mt-3 hover:bg-gray-700/10 p-2 text-gray-700/70 text-center z-10"
                    onClick={handleLogout} // Add onClick handler for logout
                >
                    Log Out
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
