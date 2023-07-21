import Navbar from "../Navbar"
import Container from "../Container"

const Layout = ({ children }) => {
    return (<main className='flex'>
        <Navbar />
        <Container>{children}</Container>
    </main>)
}

export default Layout