import React, { useState } from "react";
import Image from "next/image";
import UploadPic from "./UploadButton";
const ImageField = ({ data }) => {
    const [profilePic, setProfilePic] = useState(null);
    const [editMode, seteditMode] = useState(false);
    const defaultprofilepic = "/images/Blank.jpg";
    const handleUpload = (file) => {
        seteditMode(!editMode);
        setProfilePic(file);
    }
    const handleActive=()=>{
        seteditMode(!editMode);
    }

    return (
        <div>
            
                <div className="rounded-full overflow-hidden w-28 h-28 border-4 border-white ">
                    <Image src={profilePic == null ? defaultprofilepic : URL.createObjectURL(profilePic) } alt="Profile Picture" width={200} height={200} className="object-cover w-full h-full rounded-full" />   
                </div>
                <UploadPic editMode={editMode} onClick={handleActive}onUpload={handleUpload}/>
        </div>
        )
};
    export default ImageField;