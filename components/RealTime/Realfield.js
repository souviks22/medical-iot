import React from "react";

const Realfield=({label,value,icon})=>{
    return(
        <div className="flex-grow-12 bg-white shadow-xl m-6 p-4 rounded-lg w-40">
          <h3 className="text-4xl font-bold mb-2">{value}</h3>
          <div className="flex text-lg text-gray-600 font-serif">{label}<div className={value <25? 'my-1 mx-2 text-red-500':'my-1 mx-2 text-green-500'}>{icon}</div></div>
          <hr className={value<25? 'border border-4 border-red-200 rounded-lg my-2':'border border-4 rounded-lg border-green-200 my-2'}/>
        </div>
    )
}

export default Realfield;