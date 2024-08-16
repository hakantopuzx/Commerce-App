import { NavbarLeft } from './navbarItems/NavbarLeft'
import { NavbarRight } from './navbarItems/NavbarRight'

export const Navbar = () => {
    return (
        <div className='flex justify-between items-center my-3 relative'>
            <NavbarLeft />
            <NavbarRight />
        </div>
    )
}
