import React, { useState } from "react";
import Image from "next/image";
import UploadPic from "./UploadButton";
import { AiFillDelete } from "react-icons/ai";
const ImageField = ({ data }) => {
    const [profilePic, setProfilePic] = useState(null);
    const [editMode, seteditMode] = useState(false);
    const defaultprofilepic = "/images/Blank.jpg";
    const handleUpload = (file) => {
        seteditMode(!editMode);
        setProfilePic(file);
    }
    const handleActive = () => {
        seteditMode(!editMode);
    }
    const handleDelete = () => {
        setProfilePic(null);
    }
    return (
        <div className="relative mx-2 mt-2">

            <div className="rounded-full overflow-hidden w-28 h-28 border-4 border-white">
                <Image src={profilePic == null ? defaultprofilepic : URL.createObjectURL(profilePic)} alt="Profile Picture" width={200} height={200} className="object-cover w-full h-full rounded-full" />
            </div>
            <UploadPic editMode={editMode} onClick={handleActive} onUpload={handleUpload} />
            {
                !editMode && (<div className="absolute bottom-0 left-20 mx-9">
                    <div className="tooltip inline-block relative group">
                        <button onClick={handleDelete} className="text-2xl text-blue-400 focus:outline-none py-0  px-5 flex-grow">
                            <AiFillDelete />
                        </button>
                        <span className="tooltip-text bg-black text-white text-xs py-1 px-2 rounded opacity-0 absolute bottom-full left-1/2 transform -translate-x-1/2 transition-opacity duration-300 pointer-events-none invisible group-hover:opacity-100 group-hover:visible font-my-font">
                            Delete
                        </span>
                    </div>
                </div>
                )
            }
        </div>
    )
};
export default ImageField;