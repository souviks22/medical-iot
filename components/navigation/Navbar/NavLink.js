import { useRouter } from "next/router"
import { useSelector } from "react-redux"

import Link from "next/link"
import NavIcon from "./NavIcon"
import NavAnnotation from "./NavAnnotation"
import NavLabel from "./NavLabel"

const NavLink = ({ label, href = '', icon, onClick = () => { } }) => {
    const { pathname } = useRouter()
    const { isExpanded } = useSelector(state => state.nav)

    return (<Link href={href}
        className={`group flex items-center hover:bg-slate-300 ${href === pathname && 'bg-slate-300'} rounded p-2 my-2`}
        onClick={onClick}
    >
        <NavIcon>{icon}</NavIcon>
        {label ? !isExpanded ? <NavAnnotation>{label}</NavAnnotation> : <NavLabel>{label}</NavLabel> : null}
    </Link>)
}

export default NavLink