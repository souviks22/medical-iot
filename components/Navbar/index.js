import { useDispatch } from "react-redux"
import { motion } from "framer-motion"
import { navActions } from "@/store/nav-slice"

import { IoLogoVercel } from "react-icons/io5"
import { AiFillHome, AiFillSchedule, AiOutlineMenu } from "react-icons/ai"
import { BsFillPersonFill, BsBarChartLineFill, BsFillChatDotsFill } from "react-icons/bs"

import NavLink from "./NavLink"

const Navbar = () => {
    const dispatch = useDispatch()
    const navExpandHandler = () => {
        dispatch(navActions.toggle())
    }
    
    return (<motion.nav className={`h-screen fixed flex flex-col justify-around bg-gradient-radial from-slate-200 to-slate-100 p-5`}>
        <NavLink icon={<IoLogoVercel />} />
        <section className='flex flex-col'>
            <NavLink label={'Home'} href={'/'} icon={<AiFillHome />} />
            <NavLink label={'Plans'} href={'/plans'} icon={<AiFillSchedule />} />
            <NavLink label={'Stats'} href={'/stats'} icon={<BsBarChartLineFill />} />
            <NavLink label={'Contact'} href={'/contact'} icon={<BsFillChatDotsFill />} />
            <NavLink label={'Profile'} href={'/profile'} icon={<BsFillPersonFill />} />
        </section>
        <NavLink icon={<AiOutlineMenu />} onClick={navExpandHandler} />
    </motion.nav>)
}

export default Navbar