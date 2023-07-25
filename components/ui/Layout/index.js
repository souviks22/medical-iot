import { AnimatePresence } from "framer-motion"
import Navbar from "../../navigation/Navbar"

const Layout = ({ children }) => {
    return (<AnimatePresence>
        <Navbar />
        {children}
    </AnimatePresence>)
}

export default Layout