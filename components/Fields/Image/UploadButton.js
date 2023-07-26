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
    <div>
      {!editMode ? (
        <button onClick={onClick} className="flex-grow justify-right text-2xl text-green-400 focus:outline-none">
          <BiSolidCameraPlus className="translate-x-1 mx-5" />
        </button>
      ) : (
        <div>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleUpload} className="flex-grow text-green-400 focus:outline-none mx-2">
          Upload
        </button>
        </div>
      )}
    </div>
  );
};

export default UploadPic;
