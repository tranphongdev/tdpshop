import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import { useSelector } from 'react-redux';
import CheckoutItem from './CheckoutItem';
import { toast } from 'react-toastify';

function Checkout() {
    const { carts } = useSelector((state) => state.allCart);
    const [subTotal, setSubTotal] = useState(0);
    const [formData, setFormData] = useState({
        email: '',
        cardNumber: '',
        expirationMonth: '',
        expirationYear: '',
        securityCode: '',
        cardName: '',
    });

    const calculateSubTotal = () => {
        let total = 0;
        let totalNew = 0;
        carts.forEach((item) => {
            const discountPercentage = item.discountPercentage / 100;
            const priceDiscount = (item.price - item.price * discountPercentage).toFixed(2);
            total += priceDiscount * item.qnty;
            totalNew = total.toFixed(2);
        });
        setSubTotal(totalNew);
    };

    useEffect(() => {
        calculateSubTotal();
    }, [carts]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.email ||
            !formData.cardNumber ||
            !formData.expirationMonth ||
            !formData.expirationYear ||
            !formData.securityCode ||
            !formData.cardName
        ) {
            toast.error('Please fill out all fields');
            return;
        }

        toast.success('Order successfully placed');
        setFormData({
            email: '',
            cardNumber: '',
            expirationMonth: '',
            expirationYear: '',
            securityCode: '',
            cardName: '',
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <Header />

            <div className="relative mx-auto w-full bg-white mt-[80px]">
                <div className="grid min-h-screen grid-cols-10">
                    <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-0">
                        <div className="mx-auto w-full max-w-lg">
                            <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                                Checkout
                                <span className="mt-2 block h-1 w-10 bg-[var(--primary)] sm:w-20"></span>
                            </h1>
                            <form onSubmit={handleSubmit} className="mt-10 flex flex-col space-y-4">
                                <div>
                                    <label htmlFor="email" className="text-xs font-semibold text-gray-500">
                                        Email
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john.capler@fang.com"
                                        className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-[var(--primary)]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cardNumber" className="text-xs font-semibold text-gray-500">
                                        Card Number
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="cardNumber"
                                        name="cardNumber"
                                        value={formData.cardNumber}
                                        onChange={handleChange}
                                        placeholder="1234 5678 9012 3456"
                                        className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-[var(--primary)]"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-x-4">
                                    <div>
                                        <label
                                            htmlFor="expirationMonth"
                                            className="text-xs font-semibold text-gray-500"
                                        >
                                            Expiration Month
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            id="expirationMonth"
                                            name="expirationMonth"
                                            value={formData.expirationMonth}
                                            onChange={handleChange}
                                            placeholder="MM"
                                            className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-[var(--primary)]"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="expirationYear" className="text-xs font-semibold text-gray-500">
                                            Expiration Year
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            id="expirationYear"
                                            name="expirationYear"
                                            value={formData.expirationYear}
                                            onChange={handleChange}
                                            placeholder="YYYY"
                                            className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-[var(--primary)]"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="securityCode" className="text-xs font-semibold text-gray-500">
                                        Security Code
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="securityCode"
                                        name="securityCode"
                                        value={formData.securityCode}
                                        onChange={handleChange}
                                        placeholder="CVV"
                                        className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-[var(--primary)]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cardName" className="text-xs font-semibold text-gray-500">
                                        Cardholder Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="cardName"
                                        name="cardName"
                                        value={formData.cardName}
                                        onChange={handleChange}
                                        placeholder="John Capler"
                                        className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-[var(--primary)]"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="mt-4 inline-flex w-full items-center justify-center rounded bg-[var(--primary)] py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-[var(--primary)] sm:text-lg"
                                >
                                    Place Order
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
                        <h2 className="sr-only">Order summary</h2>
                        <div>
                            <img
                                src="https://images.pexels.com/photos/21940156/pexels-photo-21940156/free-photo-of-bi-n-den-va-tr-ng-d-ng-binh-minh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-gray-800 to-[var(--primary)] opacity-95"></div>
                        </div>
                        <div className="relative">
                            <ul className="space-y-5">
                                {carts && carts.length ? (
                                    carts.map((item, index) => <CheckoutItem key={index} item={item} />)
                                ) : (
                                    <p className="text-lg font-bold text-white">Item empty</p>
                                )}
                            </ul>
                            <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
                            <div className="space-y-2">
                                <p className="flex justify-between text-lg font-bold text-white">
                                    <span>Total price:</span>
                                    <span>${subTotal}</span>
                                </p>
                            </div>
                        </div>
                        <div className="relative mt-10 text-white">
                            <h3 className="mb-5 text-lg font-bold">Support</h3>
                            <p className="text-sm font-semibold">
                                +01 653 235 211 <span className="font-light">(International)</span>
                            </p>
                            <p className="mt-1 text-sm font-semibold">
                                support@phongdev.com <span className="font-light">(Email)</span>
                            </p>
                            <p className="mt-2 text-xs font-medium">Call us now for payment related issues</p>
                        </div>
                        <div className="relative mt-10 flex">
                            <p className="flex flex-col">
                                <span className="text-sm font-bold text-white">Money Back Guarantee</span>
                                <span className="text-xs font-medium text-white">within 30 days of purchase</span>
                            </p>
                        </div>
                    </div>
                    {/* Rest of the code */}
                    {/* ... */}
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Checkout;
