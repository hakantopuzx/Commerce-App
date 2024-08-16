import { useNavigate } from 'react-router-dom'

export const NavbarLeft = () => {

    const navigate = useNavigate();
    return (
        <div className='text-4xl font-bold cursor-pointer' onClick={() => { navigate("/") }}>Shopier</div>
    )
}
