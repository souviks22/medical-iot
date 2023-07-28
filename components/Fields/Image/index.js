import React, { useState, useRef } from "react";
import Image from "next/image";
import { AiFillDelete } from "react-icons/ai";
const ImageField = ({ data }) => {
    const [profilePic, setProfilePic] = useState(null);
    const fileInputRef = useRef(null);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const defaultProfilePic = "/images/Blank.jpg";

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProfilePic(URL.createObjectURL(file));
    };

    const handleDelete = () => {
        setProfilePic(null);
    };

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        console.log("Mouse Position:", mousePosition);
    };
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="relative mx-2 mt-2" onMouseMove={handleMouseMove}>
            <div className="tooltip inline-relative relative group">
                <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef}
                    style={{ display: "none" }} />
                <button
                    className="rounded-full overflow-hidden w-32 h-32 border-4 border-white " onClick={handleButtonClick}>
                    <Image
                        src={profilePic == null ? defaultProfilePic : profilePic}
                        alt="Profile Picture"
                        width={200}
                        height={200}
                        className="object-cover w-full h-full rounded-full"
                    />
                </button>
            </div>
            <div className="flex absolute bottom-0 left-20 mx-2">
                {profilePic !== null && (
                    <div className="absolute bottom-0 left-10">
                        <div className="tooltip relative group">
                            <button onClick={handleDelete} className="text-2xl text-blue-400 focus:outline-none py-0 flex-grow">
                                <AiFillDelete />
                            </button>
                            <span className="tooltip-text bg-black text-white text-xs py-1 px-2 rounded opacity-0 absolute bottom-full left-1/2 transform -translate-x-1/2 transition-opacity duration-300 pointer-events-none invisible group-hover:opacity-100 group-hover:visible font-my-font">
                                Delete
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageField;
