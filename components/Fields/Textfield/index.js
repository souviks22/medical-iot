import React, { useState } from "react";
import SideButton from "./SideButton";

const Field = ({ data }) => {
  const styling = (dataType, editable) => {
    let styles = "px-4 py-2 border-2 border-black shadow-lg rounded-lg";

    if (dataType === "textarea") {
      styles += " h-24";
    }

    if (!editable) {
      styles += " bg-gray-200";
    }

    return styles;
  };

  const initialEditStates = data.map(() => false); 
  const [editStates, setEditStates] = useState(initialEditStates);

  const handleToggleEdit = (index) => {
    setEditStates((prevEditStates) =>
      prevEditStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="items-center justify-center my-4">
          <label htmlFor={`input-${index}`} className="justify-center text-right text-2xl mx-4">
            {item.label}
          </label>
          <div className="flex my-2 items-center justify-left mx-4">
          <input
            type={item.dataType === "textarea" ? "text" : item.dataType}
            id={`input-${index}`}
            className={styling(item.dataType, item.editable)}
            defaultValue={item.value}
            readOnly={!item.editable || !editStates[index]}
           />
          <SideButton
            editAble={item.editable}
            editMode={editStates[index]}
            onClick={() => handleToggleEdit(index)}
          />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Field;
