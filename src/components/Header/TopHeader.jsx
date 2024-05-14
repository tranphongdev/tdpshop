import React, { useState, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Menu, Transition } from '@headlessui/react';

import vietnam from '../../assets/vietnam.png';
import america from '../../assets/america.png';
import japan from '../../assets/japan.png';
import korea from '../../assets/korea.png';

function TopHeader() {
    const languages = [
        { id: '1', title: 'English', icon: america },
        { id: '2', title: 'Japan', icon: japan },
        { id: '3', title: 'Korea', icon: korea },
        { id: '4', title: 'Vietnamese', icon: vietnam },
    ];

    const [language, setLanguage] = useState('English');

    return (
        <div className="bg-black text-white py-3">
            <div className="max-w-[var(--default-layout-width)] m-auto">
                <div className="flex justify-between items-center gap-[231px] container px-6 lg:px-0">
                    <div className="flex items-center gap-4 text-xs lg:text-sm">
                        <p className="text-[var(--text-gray)]">Summer Sale Free Express Delivery - OFF 50%!</p>
                        <p className="font-semibold underline cursor-pointer">ShopNow</p>
                    </div>
                    <div className="w-[120px] flex gap-[5px] items-center justify-end text-[var(--text-gray)] cursor-pointer text-left">
                        <span className="text-xs lg:text-sm ">
                            <Menu as="div" className="relative inline-block">
                                <div>
                                    <Menu.Button className="text-right">{language}</Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {languages.map((language) => (
                                                <Menu.Item key={language.id}>
                                                    <span
                                                        onClick={() => setLanguage(language.title)}
                                                        className="text-black block px-4 py-2 text-sm"
                                                    >
                                                        <div className="flex justify-between items-center">
                                                            {language.title}
                                                            <img
                                                                className="w-[24px]"
                                                                src={language.icon}
                                                                alt={language.title}
                                                            />
                                                        </div>
                                                    </span>
                                                </Menu.Item>
                                            ))}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </span>
                        <FontAwesomeIcon className="text-xs lg:text-sm text-right" icon={faAngleDown} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;
