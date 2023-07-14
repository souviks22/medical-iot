import Navbar from "../Navbar"

const Layout = ({ children }) => {
    return (<main className='flex'>
        <Navbar />
        {children}
    </main>)
}

export default Layout