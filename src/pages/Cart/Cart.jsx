import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import CartItem from './CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllCart } from '../../redux/feature/cartSlice';
import { toast } from 'react-toastify';

function Cart() {
    const { carts } = useSelector((state) => state.allCart);
    const [subTotal, setSubTotal] = useState(0);

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

    const dispatch = useDispatch();

    const handleRemoveCart = () => {
        if (carts.length > 0) {
            dispatch(removeAllCart());
            toast.success('Delete success!');
        } else {
            toast.error('Not Item');
        }
    };

    return (
        <>
            <Header />
            <div className="max-w-[1170px] m-auto px-4 lg:px-0 mb-[140px]">
                <div className=" my-[80px] flex items-center justify-between">
                    <span>
                        <span className="text-gray-500">Home</span> /{' '}
                        <span className="text-[var(--primary)] font-semibold">Cart</span>
                    </span>
                    <div onClick={() => handleRemoveCart()}>
                        <Button>Remove All Cart</Button>
                    </div>
                </div>

                {carts && carts.length > 0 ? (
                    <>
                        <div className="space-y-10">
                            <div className="lg:flex items-center hidden justify-between py-6 px-10 box-shadow-cart text-center">
                                <span className="w-1/5 text-left">Product</span>
                                <span className="w-1/5">Price</span>
                                <span className="w-1/5">Quantity</span>
                                <span className="w-1/5">Subtotal</span>
                                <span className="w-1/5">Action</span>
                            </div>
                            {carts.map((data, index) => (
                                <CartItem key={index} data={data} />
                            ))}
                        </div>

                        <div className="flex flex-col md:flex-row gap-10 justify-center md:justify-between items-start mt-6">
                            <Link
                                to="/"
                                className="py-4 px-12 border rounded border-black hover:text-[var(--primary)] hover:border-[var(--primary)]"
                            >
                                Continue Shopping
                            </Link>

                            <div className="w-[350px] py-4 px-6 border rounded border-black space-y-6">
                                <h3 className="text-xl font-medium">Cart Total</h3>
                                <div className="border-b pb-2 flex justify-between items-center">
                                    <span>Subtotal:</span>
                                    <span>${subTotal}</span>
                                </div>
                                <div className="border-b pb-2 flex justify-between items-center">
                                    <span>Shipping:</span>
                                    <span>Free</span>
                                </div>
                                <div className="pb-2 flex justify-between items-center">
                                    <span>Total:</span>
                                    <span>${subTotal}</span>
                                </div>

                                <div className="text-center">
                                    <Button>Proceed to Checkout</Button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex justify-center">
                        <img
                            src="https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-3328225-2809510.png"
                            alt=""
                        />
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default Cart;
