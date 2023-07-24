import React, { useState } from "react";
import Image from "next/image.js";
import Data from "./Patient.js";

const Patient = () => {
  const [expanded, setExpanded] = useState(false);
  const expand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="p-10 w-50">
      <div className="container w-full p-4 border-2 m-4  mx-auto bg-white shadow-md rounded-lg">
        {!expanded &&
          (<div className="flex justify-center">
              <div className="h-150 py-2 mx-10 ">
              <div className="flex justify-center">
                <div className="rounded-full overflow-hidden w-28 h-28 border-4 border-white ">
                <Image src= "/images/Arka.jpeg" alt="Image" width={200} height={200} className="object-cover w-full h-full rounded-full"/>
                </div>
                </div>
                <h1 className="font-serif text-black text-6xl mx-2 my-2">{Data.name}</h1>
               
              <div className="flex justify-center my-2">
              <p className="font-sans"><strong className="p-2 flex-grow">Age:</strong> {Data.Age}
                <strong className="ml-10 p-2 flex-grow">Weight:</strong> {Data.weight}
                <strong className="ml-10 p-2 flex-grow">Sex:</strong> {Data.Sex}</p>
                </div>
              <div className="flex justify-center"><button className="bg-white font-serif text-green hover:bg-black hover:text-white text-sm rounded p-2 m-2 my-2 items-center border-2 border-black" onClick={expand}>View Full Profile </button></div>
            </div>
          </div>)}
        {expanded && (
          <div className="flex">
            
              <div className="flex-grow-4 h-50 py-4 w-50 ">
                <div className="h-50 border-4 border-white rounded-lg">
                <Image src= "/images/Arka.jpeg" alt="Image" width={200} height={200} className="object-cover rounded-lg"/>
                </div>
            </div>
            <div className="flex-grow m-4 py-0.5">
              <h1 className="font-serif  text-4xl p-2">{Data.name}</h1>
              <p><strong className="p-2">Age:</strong> {Data.Age}
                <strong className="ml-10 p-2">Weight:</strong> {Data.weight}
                <strong className="ml-10 p-2">Sex:</strong> {Data.Sex}</p>
              <p className="my-2"><strong className="p-2">Blood Group:</strong> {Data.Blood_Group}
                <strong className="ml-5 p-2">Average Pulse:</strong> {Data.Average_pulse}</p>
              <p><strong className=" p-2">Last Checked-in:</strong> {Data.Last_Checked_in}</p>
              <button className="bg-white font-serif text-green hover:bg-black hover:text-white text-sm rounded p-2 m-2 my-4 justify-end border-2 border-black " onClick={expand}>View Less </button>
            </div>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Patient;


