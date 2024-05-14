import React from 'react';
import { HeartIcon, ShoppingBagIcon, TrashIcon } from '@heroicons/react/24/outline';

import BasicRating from '../Rating';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/feature/cartSlice';
import { addToWishList } from '../../redux/feature/wishlistSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function ProductItem({ pro }) {
    const discountPercentage = pro.discountPercentage / 100; // Chuyển đổi phần trăm thành số thập phân
    const priceDiscount = (pro.price - pro.price * discountPercentage).toFixed(2); // Làm tròn số tiền giảm đến 2 chữ số thập phân

    const dispatch = useDispatch();

    const addCart = (pro) => {
        dispatch(addToCart(pro));
        toast.success('Add cart success!');
    };

    const handleAddToWishlist = (item) => {
        dispatch(addToWishList(item));
        toast.success('Add Wishlist Success!');
    };

    return (
        <div className="box-shadow rounded overflow-hidden cursor-pointer border">
            <div className="relative">
                <Link to={pro.id + ''}>
                    <img src={pro.thumbnail} alt="" className="w-full h-64 object-cover" />
                </Link>
                <div className="absolute top-3 flex justify-between w-full">
                    <span className="py-1 px-3 bg-[var(--primary)] text-white rounded text-sm ml-2">
                        -{pro.discountPercentage}%
                    </span>
                    <button
                        onClick={() => handleAddToWishlist(pro)}
                        className="bg-white rounded-full w-7 h-7 flex justify-center items-center mr-2"
                    >
                        <HeartIcon className="h-6 w-6 text-[var(--primary)]" />
                    </button>
                </div>
            </div>
            <div className="px-3 py-2">
                <span className="text-[13px] text-gray-500">{pro.category}</span>
                <h3 className="text-sm font-medium line-clamp-1 mb-2">{pro.title}</h3>
                <div className="flex gap-2 mb-2">
                    <span className="text-[var(--primary)] text-base font-medium">${priceDiscount}</span>
                    <span className="line-through text-gray-500">${pro.price}</span>
                </div>

                <BasicRating rating={pro.rating} />

                <div className="mt-3">
                    <button
                        onClick={() => addCart(pro)}
                        type="button"
                        className="w-full flex items-center gap-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        <ShoppingBagIcon className="w-5 h-5" />
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
