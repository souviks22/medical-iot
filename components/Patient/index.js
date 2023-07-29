import React, { useState } from "react";
import Image from "next/image.js";
import Data from "./Patient_Data.js";

const Patient = () => {
  const [expanded, setExpanded] = useState(false);
  const expand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="w-50">
      <div className="container w-full p-4 border-2 m-4  mx-auto bg-white shadow-md rounded-lg">
        {!expanded &&
          (<div className="flex justify-center">
            <div className="h-150 py-2 mx-10 ">
              <div className="flex justify-center">
                <div className="rounded-full overflow-hidden w-28 h-28 border-4 border-white ">
                  <Image src="/images/Arka.jpeg" alt="Image" width={200} height={200} className="object-cover w-full h-full rounded-full" />
                </div>
              </div>
              <h1 className="font-serif text-black text-5xl mx-2 my-2">{Data.name}</h1>

              <div className="flex justify-center my-2 text-md">
                <div className="mx-2"><strong className="flex-grow">Age:</strong> {Data.Age}</div>
                <div className="mx-2"> <strong className="flex-grow">Weight:</strong> {Data.weight}</div>
                <div className="mx-2">  <strong className="flex-grow">Sex:</strong> {Data.Sex}</div>
              </div>
              <div className="flex justify-center"><button className="bg-white p-2 border-2 m-2 hover:bg-black hover:text-white border-black rounded-lg" onClick={expand}>View Full Profile </button></div>
            </div>
          </div>)}
        {expanded && (
          <div className="w-50">
            <div className="flex justify-center">
              <div className="flex justify-center border-4 border-white rounded-lg py-4 h-40 w-50">
                <Image src="/images/Sourik.jpg" alt="Image" width={200} height={200} className="object-cover rounded-lg" />
              </div>
            </div>
            <div className="mx-4 py-0.5 flex justify-center">
              <h1 className="font-serif text-6xl py-2">{Data.name}</h1>
            </div>
            <div className="m-4 py-0.5 flex justify-center text-xl">
              <div className="mx-2"><strong className="flex-grow">Age:</strong> {Data.Age}</div>
                <div className="mx-2"> <strong className="flex-grow">Weight:</strong> {Data.weight}</div>
                <div className="mx-2">  <strong className="flex-grow">Sex:</strong> {Data.Sex}</div>
            </div>
            <div className="m-4 py-0.5 flex justify-center">
            <p className="text-xl"><strong>Blood Group:</strong> {Data.Blood_Group}</p>
            </div>
            <div className="m-4 py-0.5 flex justify-center">
            <p className="text-xl">
               <strong>Average Pulse:</strong> {Data.Average_pulse}</p>
               </div>
                <div className="py-0.5 flex justify-center">
              <p className="my-0.5 text-xl"><strong>Last Checked-in:</strong> {Data.Last_Checked_in}</p>
            </div>
            <div className="flex justify-center"> <button className="bg-white font-serif text-green hover:bg-black hover:text-white text-sm rounded p-2 mt-2 justify-center border-2 border-black " onClick={expand}>View Less </button>
            </div>
         </div>
        )
        }
      </div>
    </div>
  )
}

export default Patient;


