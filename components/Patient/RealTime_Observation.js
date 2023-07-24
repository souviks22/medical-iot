import React, { useState, useEffect } from "react";
import { AiFillHeart} from "react-icons/ai";
import { IoMdPulse } from 'react-icons/io';
import { RiHeartPulseFill } from 'react-icons/ri';

const Real = () => {
  const [pulsedata, setPulseData] = useState(null);
  const [SPdata, setSPData] = useState(null);
  const [whatData, setWhatData] = useState(null);

  const generateRandomValue = () => {
    const randomNum1 = Math.floor(Math.random() * 100);
    const randomNum2 = Math.floor(Math.random() * 100);
    const randomNum3 = Math.floor(Math.random() * 100);
    setPulseData(randomNum1);
    setSPData(randomNum2);
    setWhatData(randomNum3);
  };
  useEffect(() => {
    // Start generating random values every 2 seconds
    const intervalId = setInterval(generateRandomValue, 2000);
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="container p-4 py-8 w-50">
      <div className="flex justify-center ">
        {/* Data 1 */}
        <div className="flex-grow-12 bg-white shadow-xl m-6 p-4 rounded-lg w-40">
          <h3 className="text-4xl font-bold mb-2">{pulsedata}</h3>
          <p className="flex text-lg text-gray-600 font-serif"><IoMdPulse className={pulsedata <25? 'my-1 mx-2 text-red-500':'my-1 mx-2 text-green-500'}/></p>
          <hr className={pulsedata<25? 'border border-4 border-red-200 rounded-lg my-2':'border border-4 rounded-lg border-green-200 my-2'}/>
        </div>

        {/* Data 2 */}
        <div className="flex-grow-12 bg-white shadow-xl m-6 p-4 rounded-lg w-40">
          <h3 className="text-4xl font-bold mb-2">{SPdata}</h3>
          <p className="text-lg text-gray-600 font-serif flex">SpO2 <AiFillHeart className={SPdata <25? 'my-1 mx-2 text-red-500':'my-1 mx-2 text-green-500'}/></p>
          <hr className={SPdata<25? 'border border-4 border-red-200 rounded-lg my-2':'border border-4 rounded-lg border-green-200 my-2'}/>
        </div>

        {/* Data 3 */}
        <div className="flex-grow-12 bg-white shadow-xl m-6 p-4 rounded-lg w-40">
          <h3 className="text-4xl font-bold mb-2">{whatData}</h3>
          <p className="text-lg text-gray-600 font-serif"><p className="flex">IBI <RiHeartPulseFill className={whatData <25? 'my-1 mx-2 text-red-500':'my-1 mx-2 text-green-500'}/></p></p>
          <hr className={whatData<25? 'border border-4 border-red-200 rounded-lg my-2':'border border-4 rounded-lg border-green-200 my-2'}/>
        </div>
        </div>
      </div>
  )
}

export default Real;