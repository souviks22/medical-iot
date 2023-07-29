import Container from "@/components/ui/Container"
import Header from "@/components/ui/Header"
import Line from "@/components/charts/Line"
import Real from "@/components/RealTime"
import Patient from "@/components/Patient"
const Home = () => {
    return (<Container>
        <Header>Dashboard</Header>
        <div className="flex justify-left">
        <div className="w-1/2">
        <Real/>
        <Line />
        </div>
        <div className="flex w-1/2 px-5">
        <Patient/>
        </div>
        </div>
        </Container>)
}

export default Home