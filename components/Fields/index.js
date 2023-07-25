import React from "react";

const field=({ label })=>{
    return(
        <div className="container flex shadow-md">
            <div className="font-bold font-black border-8 border-black">
            {label}
            </div>
        </div>
    );
}
export default field;