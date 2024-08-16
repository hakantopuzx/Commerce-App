import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import Alert from '../Alert';

export const DetailComp = ({ productDetail }: { productDetail: any }) => {
    const dispatch = useDispatch<any>();
    const [quantity, setQuantity] = useState(1);
    const [alertIsOpen, setAlertIsOpen] = useState(false);

    const increment = useCallback(() => {
        if (quantity < productDetail?.rating?.count)
            setQuantity(quantity + 1);
    }, [quantity, productDetail?.rating?.count]);

    const decrement = useCallback(() => {
        setQuantity(quantity ? quantity - 1 : 0);
    }, [quantity]);

    const addBasket = () => {
        dispatch(addToCart({ id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, price: productDetail?.price, quantity: quantity, description: productDetail?.description, }));
        setAlertIsOpen(true);
        quantity && setQuantity(0);
    }

    return (
        <div className="py-8 mt-10 md:py-16 dark:bg-gray-900 antialiased rounded-lg">
            <div className="max-w-screen-xl px-8 mx-auto 2xl:px-0">
                <div className="flex lg:gap-8 xl:gap-32 flex-col lg:flex-row">
                    <div className="shrink-0 max-w-sm lg:max-w-sm mx-auto">
                        <img className="w-full rounded-xl" src={productDetail?.image} alt="" />
                    </div>

                    <div className="mt-6 sm:mt-8 lg:mt-0">
                        <h1 className="text-xl font-semibold text-white sm:text-2xl">
                            {productDetail?.title}
                        </h1>
                        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                            <p className="text-2xl font-extrabold text-white sm:text-3xl">
                                ${productDetail?.price}
                            </p>

                            <div className="flex items-center gap-2 mt-2 sm:mt-0 w-full">
                                <div className="flex items-center gap-1">
                                    {Array.from({ length: Math.floor(productDetail?.rating?.rate) }).map((_, index) => (
                                        <svg
                                            key={index}
                                            className="w-4 h-4 text-yellow-300"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                        </svg>
                                    ))}

                                    {productDetail?.rating?.rate % 1 >= 0.5 && (
                                        <svg
                                            className="w-4 h-4 text-yellow-300"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            viewBox="0 0 24 24" >
                                            <defs>
                                                <linearGradient id="half-fill">
                                                    <stop offset="50%" stopColor="currentColor" />
                                                    <stop offset="50%" stopColor="transparent" />
                                                </linearGradient>
                                            </defs>
                                            <path
                                                d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                                fill="url(#half-fill)"
                                            />
                                        </svg>
                                    )}
                                    {Array.from({ length: 5 - Math.ceil(productDetail?.rating?.rate) }).map((_, index) => (
                                        <svg
                                            key={index}
                                            className="w-4 h-4 text-gray-300"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                                    ({productDetail?.rating?.rate})
                                </p>
                                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400 ml-auto">
                                    <div className='my-2 text-lg text-white'>Count: {productDetail?.rating?.count}</div>
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8 justify-between">
                            <div className="flex">
                                <button
                                    className="group py-4 px-6 border border-gray-400 rounded-l-full bg-white transition-all duration-300 hover:bg-gray-50" onClick={decrement}>
                                    <svg className="stroke-gray-900 group-hover:stroke-black" width="22" height="22"
                                        viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5 11H5.5" stroke="" stroke-width="1.6" stroke-linecap="round" />
                                        <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                            stroke-linecap="round" />
                                        <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                            stroke-linecap="round" />
                                    </svg>
                                </button>
                                <input type="text"
                                    className="font-semibold text-gray-900 cursor-pointer text-lg py-[13px] px-6 w-full sm:max-w-[118px] outline-0 border-y border-gray-400 bg-gray-50 placeholder:text-gray-900 text-center hover:bg-gray-50"
                                    placeholder="1" value={quantity} />
                                <button
                                    className="group py-4 px-6 border border-gray-400 rounded-r-full bg-white transition-all duration-300 hover:bg-gray-50" onClick={increment}>
                                    <svg className="stroke-gray-900 group-hover:stroke-black" width="22" height="22"
                                        viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="#9CA3AF" stroke-width="1.6"
                                            stroke-linecap="round" />
                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="black" stroke-opacity="0.2"
                                            stroke-width="1.6" stroke-linecap="round" />
                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="black" stroke-opacity="0.2"
                                            stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                </button>
                            </div>

                            <a href="#" title="" onClick={addBasket} className="text-white mt-4 sm:mt-0 bg-sky-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center" role="button">
                                <svg
                                    className="w-5 h-5 -ms-2 me-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                                    />
                                </svg>

                                Add to cart
                            </a>
                        </div>
                        <Alert message={"Ürününüz Sepete Eklendi."} open={alertIsOpen} setAlertIsOpen={setAlertIsOpen} />

                        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                        <p className="mb-6 text-gray-500 dark:text-gray-400">
                            {productDetail?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
