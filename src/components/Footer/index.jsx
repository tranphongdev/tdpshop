import React from 'react';
// import Copyright from '../../assets/icon-copyright.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

import QrCode from '../../assets/qrcode.png';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div className="bg-black mt-[140px]">
            <div className="mx-auto max-w-[1230px] mt-2 px-4 lg:px-0">
                <div className="text-white py-[70px] grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-[87px]">
                    <div>
                        <h2 className="font-semibold text-xl">Phong Shop</h2>
                        <p className="my-[24px]">Subscribe</p>
                        <span className="text-sm mb-2 block">Get 10% off your first order</span>
                        <div className="relative">
                            <input
                                type="text"
                                className="border border-white bg-transparent p-3 outline-none rounded w-full text-sm pr-10"
                                placeholder="Enter your email"
                            />
                            <button className="cursor-pointer">
                                <FontAwesomeIcon
                                    icon={faPaperPlane}
                                    className="text-white absolute top-3 right-3 w-[20px] h-[20px]"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="space-y-7">
                        <h2 className="font-semibold text-xl">Support</h2>
                        <span className="text-sm mb-2 block">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</span>
                        <span className="text-sm mb-2 block">exclusive@gmail.com</span>
                        <span className="text-sm mb-2 block">+88015-88888-9999</span>
                    </div>

                    <div className="space-y-7">
                        <h2 className="font-semibold text-xl">Account</h2>
                        <span className="text-sm mb-2 block">My Account</span>
                        <span className="text-sm mb-2 block">Login / Register</span>
                        <span className="text-sm mb-2 block">Cart</span>
                        <span className="text-sm mb-2 block">Shop</span>
                    </div>

                    <div className="space-y-7">
                        <h2 className="font-semibold text-xl">Quick Link</h2>
                        <span className="text-sm mb-2 block">Privacy Policy</span>
                        <span className="text-sm mb-2 block">Terms Of Use</span>
                        <span className="text-sm mb-2 block">FAQ</span>
                        <span className="text-sm mb-2 block">Contact</span>
                    </div>

                    <div className="">
                        <h2 className="font-semibold text-xl mb-7">Download App</h2>
                        <span className="text-xs block mb-2">Save $3 with App New User Only</span>
                        <div>
                            <img src={QrCode} alt="" />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2 justify-center border-t-[1px] border-gray-500 py-3">
                <p className="text-white">
                    <FontAwesomeIcon icon={faCopyright} /> Copyright Rimel 2024. All right reserved
                </p>
            </div>
        </div>
    );
}

export default Footer;
