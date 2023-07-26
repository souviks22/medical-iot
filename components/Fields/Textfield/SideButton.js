import React from "react";
import { BsFillPenFill } from "react-icons/bs";

const SideButton = ({ editAble, editMode, onClick }) => {
  return (
    <div>
      {editAble && !editMode && ( // Show the "Edit" button when editable and not in editMode
        <button onClick={onClick} className="flex-grow text-gray-400 focus:outline-none mx-2">
          <BsFillPenFill className="-rotate-90 translate-x-1" />
        </button>
      )}
      {editAble && editMode && ( // Show the "Submit" button when editable and in editMode
        <button onClick={onClick} className="flex-grow text-gray-400 mx-2 focus:outline-none">
          Submit
        </button>
      )}
    </div>
  );
};

export default SideButton;
