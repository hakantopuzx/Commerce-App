import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../redux/cartSlice';
import { CartComp } from '../components/cart/CartComp';
import Alert from '../components/Alert';

export const Carts = () => {
    const dispatch = useDispatch<any>();

    const { carts, totalAmount, itemCount } = useSelector((state: any) => state.carts);

    const [alertIsOpen, setAlertIsOpen] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [email, setEmail] = useState('');
    const [expirationMonth, setExpirationMonth] = useState('');
    const [expirationYear, setExpirationYear] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [cardName, setCardName] = useState('');

    const handleChange = (e: any) => {
        let value = e.target.value.replace(/-/g, '');
        if (/^\d*$/.test(value) && value.length <= 16) {
            const formattedValue = value
                .match(/.{1,4}/g)
                ?.join('-');
            setCardNumber(formattedValue || '');
        }
    };

    const completeShopping = () => {
        // Inputları kontrol et
        if (!email || !cardNumber || !expirationMonth || !expirationYear || !securityCode || !cardName) {
            alert("Lütfen tüm alanları doldurunuz.");
            return;
        }

        setAlertIsOpen(true);
    };

    useEffect(() => {
        dispatch(getCartTotal());
    }, [dispatch, totalAmount, itemCount, carts]);

    return (
        <div>
            {carts?.length > 0 ?
                <div className="py-24 relative">
                    <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart</h2>
                        {carts.map((cart: any, index: number) => {
                            return <CartComp key={index} cart={cart} />
                        })}
                        <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
                            <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">Subtotal</h5>
                            <div className="flex items-center justify-between gap-5 ">
                                <h6 className="font-manrope font-bold text-3xl lead-10 text-indigo-600">${Number(totalAmount).toFixed(2)}</h6>
                            </div>
                        </div>
                        <div className="max-lg:max-w-lg max-lg:mx-auto">
                            <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">Shipping taxes, and discounts calculated at checkout</p>
                            <button className="rounded-full py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700" onClick={() => setShowPayment(true)}>
                                Checkout
                            </button>
                        </div>
                        {showPayment &&
                            <div className="payment">
                                <div className="relative mx-auto w-full bg-white">
                                    <div className="grid min-h-screen grid-cols-1">
                                        <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
                                            <div className="mx-auto w-full max-w-xl">
                                                <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">Secure Checkout<span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span></h1>
                                                <form action="" className="mt-10 flex flex-col space-y-4">
                                                    <div>
                                                        <label className="text-xs font-semibold text-gray-500">Email</label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            placeholder="john.capler@fang.com"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                                                        />
                                                    </div>
                                                    <div className="relative">
                                                        <label className="text-xs font-semibold text-gray-500">Card number</label>
                                                        <input
                                                            type="text"
                                                            id="card-number"
                                                            value={cardNumber}
                                                            onChange={handleChange}
                                                            name="card-number"
                                                            placeholder="1234-5678-XXXX-XXXX"
                                                            className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                                                        />
                                                        <img src="/images/uQUFIfCYVYcLK0qVJF5Yw.png" alt="" className="absolute bottom-3 right-3 max-h-4" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-semibold text-gray-500">Expiration date</p>
                                                        <div className="mr-6 flex flex-wrap">
                                                            <div className="my-1">
                                                                <label className="sr-only">Select expiration month</label>
                                                                <select
                                                                    name="month"
                                                                    id="month"
                                                                    value={expirationMonth}
                                                                    onChange={(e) => setExpirationMonth(e.target.value)}
                                                                    className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                                                                >
                                                                    <option value="">Month</option>
                                                                    <option value="01">01</option>
                                                                    <option value="02">02</option>
                                                                    <option value="03">03</option>
                                                                    <option value="04">04</option>
                                                                    <option value="05">05</option>
                                                                    <option value="06">06</option>
                                                                    <option value="07">07</option>
                                                                    <option value="08">08</option>
                                                                    <option value="09">09</option>
                                                                    <option value="10">10</option>
                                                                    <option value="11">11</option>
                                                                    <option value="12">12</option>
                                                                </select>
                                                            </div>
                                                            <div className="my-1 ml-3 mr-6">
                                                                <label className="sr-only">Select expiration year</label>
                                                                <select
                                                                    name="year"
                                                                    id="year"
                                                                    value={expirationYear}
                                                                    onChange={(e) => setExpirationYear(e.target.value)}
                                                                    className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                                                                >
                                                                    <option value="">Year</option>
                                                                    <option value="2024">2024</option>
                                                                    <option value="2025">2025</option>
                                                                    <option value="2026">2026</option>
                                                                    <option value="2027">2027</option>
                                                                    <option value="2028">2028</option>
                                                                </select>
                                                            </div>
                                                            <div className="relative my-1">
                                                                <label className="sr-only">Security code</label>
                                                                <input
                                                                    type="text"
                                                                    maxLength={4}
                                                                    id="security-code"
                                                                    name="security-code"
                                                                    value={securityCode}
                                                                    onChange={(e) => setSecurityCode(e.target.value)}
                                                                    placeholder="Security code"
                                                                    className="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="sr-only">Card name</label>
                                                        <input
                                                            type="text"
                                                            id="card-name"
                                                            name="card-name"
                                                            value={cardName}
                                                            onChange={(e) => setCardName(e.target.value)}
                                                            placeholder="Name on the card"
                                                            className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                                                        />
                                                    </div>
                                                </form>
                                                <p className="mt-10 text-center text-sm font-semibold text-gray-500">By placing this order you agree to the <a href="#" className="whitespace-nowrap text-teal-400 underline hover:text-teal-600">Terms and Conditions</a></p>
                                                <button onClick={completeShopping} type="submit" className="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg">Place Order</button>
                                                <Alert message={"Siparişiniz Alınmıştır. Teşekkür Ederiz."} open={alertIsOpen} setAlertIsOpen={setAlertIsOpen} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                :
                <div className='h-[500px] flex items-center justify-center'>
                    <h5 className="text-gray-900 font-manrope font-semibold text-3xl leading-9 w-full max-md:text-center max-md:mb-4">
                        Kartınız Boş
                    </h5>
                </div>
            }
        </div>
    );
};
