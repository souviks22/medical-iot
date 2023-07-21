import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { navActions } from "@/store/nav-slice"

import { IoLogoVercel } from "react-icons/io5"
import { AiFillHome, AiFillSchedule, AiFillInfoCircle, AiOutlineMenu } from "react-icons/ai"
import { BsFillPersonFill, BsBarChartLineFill, BsFillChatDotsFill } from "react-icons/bs"

import NavLink from "./NavLink"

const Navbar = () => {
    const { pathname } = useRouter()
    const { isExpanded } = useSelector(state => state.nav)
    const dispatch = useDispatch()
    const navExpandHandler = () => {
        dispatch(navActions.toggle())
    }
    return (<nav className={`h-screen flex flex-col justify-around bg-gradient-radial from-slate-200 to-slate-300 p-5`}>
        <NavLink href={'/'} icon={<IoLogoVercel />} />
        <section className='flex flex-col'>
            <NavLink label={'Home'} href={'/'} icon={<AiFillHome />} />
            <NavLink label={'Plans'} href={'/plans'} icon={<AiFillSchedule />} />
            <NavLink label={'Stats'} href={'/stats'} icon={<BsBarChartLineFill />} />
            <NavLink label={'About'} href={'/about'} icon={<AiFillInfoCircle />} />
            <NavLink label={'Contact'} href={'/contact'} icon={<BsFillChatDotsFill />} />
            <NavLink label={'Profile'} href={'/profile'} icon={<BsFillPersonFill />} />
        </section>
        <NavLink href={pathname} icon={<AiOutlineMenu />} onClick={navExpandHandler} />
    </nav>)
}

export default Navbar