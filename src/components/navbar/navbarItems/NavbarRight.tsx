import { useEffect } from 'react'
import { SlBasket } from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../../redux/cartSlice'
import { useNavigate } from 'react-router-dom'

export const NavbarRight = () => {
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    const { itemCount, items } = useSelector((state: any) => state.carts);

    useEffect(() => {
        dispatch(getCartTotal());
    }, [dispatch, items]);

    return (
        <div className='flex items-center gap-4 sm:gap-8'>
            <div onClick={() => navigate("cart")} className='relative cursor-pointer flex gap-2'>
                <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>{itemCount}</div>
                <div className='text-xl'>Sepet</div>
                <SlBasket size={28} />
            </div>
        </div>
    )
}
