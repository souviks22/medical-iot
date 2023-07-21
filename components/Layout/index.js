import Navbar from "../Navbar"
import Container from "../Container"

const Layout = ({ children }) => {
    return (<main>
        <Navbar />
        <Container>{children}</Container>
    </main>)
}

export default Layout