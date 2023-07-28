import React from "react";
import { BsFillPenFill } from "react-icons/bs";

const SideButton = ({ editAble, editMode, onClick }) => {
  return (
    <div>
      {editAble && !editMode && ( // Show the "Edit" button when editable and not in editMode
        <button onClick={onClick} className="flex-grow text-orange-400 focus:outline-none mx-2">
          <BsFillPenFill className="-rotate-90 translate-x-1" />
        </button>
      )}
      {editAble && editMode && ( // Show the "Submit" button when editable and in editMode
        <button onClick={onClick} className="bg-green-500 flex-grow text-white mx-2 focus:outline-none p-2 rounded-lg">
          Submit
        </button>
      )}
      {
        !editAble && (<div className="mx-4"></div>)
      }
    </div>
  );
};

export default SideButton;
