import React from "react";
import Field from "../Fields/Textfield";
import patientData from "../Patient/Patient_Data";
import ImageField from "../Fields/Image";

const img ={
    pic:patientData.pic,
}
const gender=[
    {label:"Male", value: "Male"},
    {label:"Female", value: "Female"},
    {label:"Others", value:"Others"}
];
const Blood_Group=[
    {label:"A+",value: "A+"},
    {label:"A-",value: "A-"},
    {label:"B+",value: "B-"},
    {label:"B-",value: "B-"},
    {label:"AB+",value: "AB+"},
    {label:"AB-",value: "AB-"},
    {label:"O+",value: "O+"},
    {label:"O-",value: "O-"},
]
const Profileform=()=>{
    return(
        <div className="rounded-lg shadow-md p-2 px-9 shadow-blue-500 shadow-outside ">
            <div className="flex justify-center">
            <ImageField data={img}/>
            </div>
            <Field index={1} label="Email" dataType="email" editAble= {false} value={patientData.email}></Field>
            <div className="flex">
            <Field index={2} label="Name" dataType="text" editAble={true} value={patientData.name}></Field>
            </div>
            <div className="flex">
            <Field index={3} label="Age" dataType="number" editAble={true} value={patientData.Age}></Field>
            <Field index={4} label="Sex" dataType="drop-down" editAble={true} value={patientData.Sex} option={gender}></Field>
            </div>
            <div className="flex">
            <Field index={5} label="Weight (in K.g)" dataType="number" editAble={true} value={patientData.weight}></Field>
            <Field index={6} label="Average Pulse" dataType="number" editAble={false} value={patientData.Average_pulse}></Field>
            </div>
            <div className="flex">
                <Field index={7} label="Blood Group" dataType="drop-down" editAble={true} value={patientData.Blood_Group} option={Blood_Group}></Field>
            </div>
            </div>
           
    )
}
export default Profileform;