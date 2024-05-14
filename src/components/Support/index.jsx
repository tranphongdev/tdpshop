import { faHeadphones, faMoneyBillTransfer, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Support() {
    return (
        <div className="grid grid-cols-3 text-center">
            <div>
                <div className="bg-black text-white rounded-full w-[80px] h-[80px] m-auto flex items-center justify-center mb-8 border-[10px]">
                    <FontAwesomeIcon icon={faTruck} className="text-2xl" />
                </div>
                <div>
                    <h3 className="text-[20px] font-semibold">FREE AND FAST DELIVERY</h3>
                    <p className="text-sm">Free delivery for all orders over $140</p>
                </div>
            </div>

            <div>
                <div className="bg-black text-white rounded-full w-[80px] h-[80px] m-auto flex items-center justify-center mb-8 border-[10px]">
                    <FontAwesomeIcon icon={faHeadphones} className="text-2xl" />
                </div>
                <div>
                    <h3 className="text-[20px] font-semibold">24/7 CUSTOMER SERVICE</h3>
                    <p className="text-sm">Friendly 24/7 customer support</p>
                </div>
            </div>

            <div>
                <div className="bg-black text-white rounded-full w-[80px] h-[80px] m-auto flex items-center justify-center mb-8 border-[10px]">
                    <FontAwesomeIcon icon={faMoneyBillTransfer} className="text-2xl" />
                </div>
                <div>
                    <h3 className="text-[20px] font-semibold">MONEY BACK GUARANTEE</h3>
                    <p className="text-sm">We reurn money within 30 days</p>
                </div>
            </div>
        </div>
    );
}

export default Support;
