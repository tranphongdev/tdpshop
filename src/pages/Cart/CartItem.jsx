import { faMinus, faPlus, faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeCart, removeItemCart } from '../../redux/feature/cartSlice';
import { toast } from 'react-toastify';

function CartItem({ data }) {
    const discountPercentage = data.discountPercentage / 100;
    const priceDiscount = (data.price - data.price * discountPercentage).toFixed(2);

    const dispatch = useDispatch();
    const handlePlus = (pro) => {
        dispatch(addToCart(pro));
    };
    const handleDelete = (id) => {
        dispatch(removeItemCart(id));
        toast.success('Delete Success!');
    };
    return (
        <div className="flex items-center justify-between py-6 px-10 box-shadow-cart text-center">
            <span className="w-1/5">
                <div className="flex items-center gap-5 ">
                    <img src={data.thumbnail} alt={data.title} className="w-[54px] h-[54px] object-cover rounded" />
                    <span className="line-clamp-2 text-left">{data.title}</span>
                </div>
            </span>
            <span className="w-1/5">${priceDiscount}</span>
            <span className="w-1/5">
                <button className="border w-[40px] h-[40px] border-r-0" onClick={() => handlePlus(data)}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
                <input type="text" value={data.qnty} className="outline-none border w-[40px] h-[40px] text-center" />
                <button className="border w-[40px] h-[40px] border-l-0" onClick={() => dispatch(removeCart(data.id))}>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </span>
            <span className="w-1/5">${(priceDiscount * data.qnty).toFixed(2)}</span>
            <span className="w-1/5">
                <button onClick={() => handleDelete(data.id)} className="hover:text-[var(--primary)] w-[40px] h-[40px]">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </span>
        </div>
    );
}

export default CartItem;
