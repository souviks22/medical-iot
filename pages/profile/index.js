import Container from "@/components/ui/Container"
import Header from "@/components/ui/Header"
import Field from "@/components/Fields/Textfield"
import ImageField from "@/components/Fields/Image"
import patientData from "@/components/Patient/Patient_Data"
import Image from "next/image"

const img ={
    pic:patientData.pic,
}
const data =[
        {label:"Email:",dataType:"email",editable:false,editState:false,value: patientData.email },
        {label:"Name:",dataType:"text",editable:true,editState:false,value: patientData.name },
        {label:"Age:",dataType:"number",editable:true,editState:false,value: patientData.Age },
        {label:"Sex:",dataType:"drop-down",editable:true,editState:false, value:patientData.Sex }
]

const Profile = () => {
    return (<Container>
        <Header>Profile</Header>

        <Container>
            <ImageField data={img}/>
            <Field data= {data}></Field>
            </Container>
        
    </Container>)
}

export default Profile