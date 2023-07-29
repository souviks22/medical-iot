import React, { useState, useEffect } from "react";
import { AiFillHeart} from "react-icons/ai";
import { IoMdPulse } from 'react-icons/io';
import { RiHeartPulseFill } from 'react-icons/ri';
import Realfield from "./Realfield";
const Real = () => {
  const [pulsedata, setPulseData] = useState(0);
  const [SPdata, setSPData] = useState(0);
  const [whatData, setWhatData] = useState(0);

  const generateRandomValue = () => {
    const randomNum1 = Math.floor(Math.random() * 100);
    const randomNum2 = Math.floor(Math.random() * 100);
    const randomNum3 = Math.floor(Math.random() * 100);
    setPulseData(randomNum1);
    setSPData(randomNum2);
    setWhatData(randomNum3);
  };
  useEffect(() => {
    
    const intervalId = setInterval(generateRandomValue, 2000);
    
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="container p-4 py-8 w-50">
      <div className="flex justify-center ">
        {/* Data 1 */}
        <Realfield label="Pulse" value={pulsedata} icon={<IoMdPulse/>}/>

        {/* Data 2 */}
        <Realfield label="SpO2" value={SPdata} icon={<AiFillHeart/>}/>

        {/* Data 3 */}
        <Realfield label="IBI" value={whatData} icon={<RiHeartPulseFill/>}/>
        </div>
      </div>
  )
}

export default Real;