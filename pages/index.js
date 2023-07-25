import Container from "@/components/Container"
import Header from "@/components/Header"
import Line from "@/components/Line"
import Patient from "@/components/Patient"
import Real from "@/components/RealTime"
const Home = () => {
    return (<Container>
        <Header>Dashboard</Header>
        <div className="flex justify-left">
        <div className="flex-grow-8">
        <Real/>
        <Line />
        </div>
        <div className="flex-grow-4 w-full">
        <Patient/>
        </div>
        </div>
        </Container>)
}

export default Home