import { useEffect } from 'react'
import { getCartTotal, removeFromCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux';

export const CartComp = ({ cart }: { cart: any }) => {

    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch, cart])

    return (
        <div className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 ">
            <div className="col-span-12 lg:col-span-2 img box">
                <img src={cart?.image} alt="speaker image" className="max-lg:w-full lg:w-[120px] h-[200px] lg:h-full rounded-lg object-contain" />
            </div>
            <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                <div className="flex items-center justify-between w-full mb-4">
                    <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">{cart?.title}</h5>
                    <button className="rounded-full group flex items-center justify-center focus-within:outline-red-500" onClick={() => dispatch(removeFromCart(cart?.id))} >
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                                cx="17" cy="17" r="17" fill="" />
                            <path className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                                d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                                stroke="#EF4444" stroke-width="1.6" stroke-linecap="round" />
                        </svg>
                    </button>
                </div>
                <p className="font-normal text-base leading-7 text-gray-500 mb-6">
                    {cart?.description}
                </p>
                <div className="flex justify-between items-center">
                    <h6 className="text-indigo-600 font-manrope font-bold text-xl leading-9 text-right">Count: {cart?.quantity}</h6>
                    <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">Price: ${cart?.price}</h6>
                </div>
            </div>
        </div>


    )
}
