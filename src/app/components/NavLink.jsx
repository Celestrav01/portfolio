import { Link } from 'react-scroll';
import { white } from 'tailwindcss/colors';

const NavLink = ({ href, title }) => {
    return (
        <Link
            activeStyle={{ color: white, borderBottom: '3px solid darkviolet' }}
            to={href} 
            spy={true} 
            smooth={true} 
            offset={-112} 
            duration={700}
            className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-base cursor-pointer md:p-0 hover:text-white'
        >
            {title}
        </Link>
    )
}

export default NavLink;