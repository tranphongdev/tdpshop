import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItemCart } from '../../redux/feature/cartSlice';
import { toast } from 'react-toastify';

function CheckoutItem({ item }) {
    const discountPercentage = item.discountPercentage / 100;
    const priceDiscount = (item.price - item.price * discountPercentage).toFixed(2);

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(removeItemCart(id));
        toast.success('Delete Success!');
    };

    return (
        <div>
            <li className="flex justify-between">
                <div className="inline-flex">
                    <img src={item.thumbnail} alt="" className="max-h-16" />
                    <div className="ml-3">
                        <p className="text-base font-semibold text-white">{item.title}</p>
                        <p className="text-sm font-medium text-white text-opacity-80">{item.brand}</p>
                        <p className="text-sm font-medium text-white text-opacity-80"> Quanty : {item.qnty}</p>
                    </div>
                </div>
                <div>
                    <p className="text-sm font-semibold text-white">${priceDiscount * item.qnty}</p>
                    <button className="text-right" onClick={() => handleDelete(item.id)}>
                        <FontAwesomeIcon icon={faTrash} className="text-white" />
                    </button>
                </div>
            </li>
        </div>
    );
}

export default CheckoutItem;
