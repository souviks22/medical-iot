import React,{useState}from "react";
import { BiSolidCameraPlus } from "react-icons/bi";

const UploadPic = ({ editMode, onClick,onUpload}) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    onUpload(selectedFile);
    setSelectedFile(null); 
  };

  return (
    <div className="absolute bottom-0 left-20 mx-4">
      {!editMode ? (
       <div className="tooltip inline-block relative group">
       <button onClick={onClick} className="text-2xl text-blue-400 focus:outline-none py-0">
         <div className="translate-x-1">
           <BiSolidCameraPlus />
         </div>
       </button>
       <span className="tooltip-text bg-blue-600 text-white text-xs py-1 px-2 rounded opacity-0 absolute bottom-full left-1/2 transform -translate-x-1/2 transition-opacity duration-300 pointer-events-none invisible group-hover:opacity-100 group-hover:visible">
         Upload
       </span>
     </div>
     
      ) : (
        <div className="my-2">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleUpload} className="text-green-400 focus:outline-none mx-2">
          Upload
        </button>
        </div>
      )}
    </div>
  );
};

export default UploadPic;
