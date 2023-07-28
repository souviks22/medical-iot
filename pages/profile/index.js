import Container from "@/components/ui/Container"
import Header from "@/components/ui/Header"
import Field from "@/components/Fields/Textfield"
import ImageField from "@/components/Fields/Image"
import patientData from "@/components/Patient/Patient_Data"
import Image from "next/image"
import Profileform from "@/components/PatientProfile"
const img ={
    pic:patientData.pic,
}

const Profile = () => {
    return (<Container>
        <Header>Profile</Header>
        <div className="">
        <Profileform/>
        </div>
        
    </Container>)
}

export default Profile