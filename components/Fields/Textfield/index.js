import React, { useState } from "react";
import SideButton from "./SideButton";

const Field = ({index,label,dataType,editAble,value,option}) => {
  const styling = (dataType, edit) => {
    let styles = "px-4 py-2 border-2 border-orange-200 shadow-md rounded-lg w-full text-lg font-customFont";

    if (dataType === "textarea") {
      styles += " h-24";
    }

    if (!edit) {
      styles += " bg-gray-200 border-0";
    }

    return styles;
  };

 
  const [editMode,seteditMode] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);

 
  const handleToggleEdit = () => {
    seteditMode(!editMode);
  };

  const handleDropdownChange=(event)=>{
    const selectedValue=event.target.value;
    setSelectedOption(selectedValue);
    
  }

  return (
        <div key= {index} className="w-full items-center justify-center my-2 ">
          <label htmlFor={`input-${index}`} className="justify-center text-right text-2xl mx-4 font-my-font">
            {label}
          </label>
          <div className="flex my-2 items-center justify-left mx-4">
          {dataType==='drop-down'  ? (
        <select
          id={`field-${index}`}
          value={selectedOption}
          onChange={handleDropdownChange}
          className={styling(dataType,editAble)}
          disabled={!editAble || !editMode}
        >
          {option.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      ):(
          <input type={dataType === "textarea" ? "text" : dataType}
            id={`input-${index}`}
            className={styling(dataType,editAble)}
            defaultValue={value}
            disabled={!editAble || !editMode}
           />
          )
          }
          <SideButton
            editAble={editAble}
            editMode={editMode}
            onClick={handleToggleEdit}
          />
          </div>
        </div>
  );
};

export default Field;
