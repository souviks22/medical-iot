import { BsFillTriangleFill } from "react-icons/bs"

const NavAnnotation = ({ children }) => {
    return (<section className='absolute z-10 translate-x-16 hidden group-hover:flex items-center'>
        <BsFillTriangleFill className='text-slate-200 -rotate-90 translate-x-1' />
        <span className='bg-slate-200 text-gray-800 px-2 py-1 rounded'>{children}</span>
    </section>)
}

export default NavAnnotation