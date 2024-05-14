import { useState, Fragment } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';

import { ChevronDownIcon } from '@heroicons/react/20/solid';

import cart from '../../assets/cart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../redux/feature/userSlice';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const menus = [
    { to: '/', title: 'Home' },
    { to: '/product', title: 'Product' },
    { to: '/about', title: 'About' },
    { to: '/contact', title: 'Contact' },
];

function MainHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const user = useSelector(selectUser);

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        toast.success('Logout success!');
    };

    const { carts } = useSelector((state) => state.allCart);

    return (
        <header className="bg-white border-b">
            <nav className="mx-auto flex max-w-[1170px] items-center justify-between p-6 lg:px-0" aria-label="Global">
                <div className="flex lg:flex">
                    <NavLink to="/" className="-m-1.5 p-1.5 font-bold text-2xl">
                        <span className="text-[var(--primary)]">Phong</span>
                        <span>Shop</span>
                        <span className="text-[var(--primary)]">.</span>
                    </NavLink>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {menus.map((menu, index) => (
                        <NavLink key={index} to={menu.to} className="text-base font-semibold leading-6 text-gray-900">
                            {menu.title}
                        </NavLink>
                    ))}
                </div>
                <div className="hidden lg:flex lg:justify-end lg:items-center lg:gap-4">
                    {/* <div className="w-[243px] relative bg-[#f5f5f5] rounded overflow-hidden">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="outline-none text-sm w-full py-[7px] pl-[12px] pr-[40px] bg-transparent"
                        />
                        <button className="absolute top-0 right-0 h-full px-2">
                            <MagnifyingGlassIcon className="w-6 h-6" />
                        </button>
                    </div> */}

                    <NavLink to="/cart" className="relative">
                        <img src={cart} className="w-7" alt="Cart" />
                        {carts.length > 0 ? (
                            <span className="absolute top-[-7px] right-[-8px] bg-[var(--primary)] text-[11px] leading-4 text-white rounded-full w-4 h-4 text-center">
                                {carts.length}
                            </span>
                        ) : (
                            ''
                        )}
                    </NavLink>

                    {user ? (
                        <div>
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900">
                                        <FontAwesomeIcon icon={faUser} />
                                        {localStorage.getItem('username')}
                                    </Menu.Button>
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
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/profile"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm',
                                                        )}
                                                    >
                                                        Profile
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/wishlist"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm',
                                                        )}
                                                    >
                                                        My wishlist
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/checkout"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm',
                                                        )}
                                                    >
                                                        Checkout order
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        onClick={handleLogout}
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block w-full px-4 py-2 text-left text-sm',
                                                        )}
                                                    >
                                                        Sign out
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    ) : (
                        <NavLink to="/login" className="text-sm font-semibold leading-6 text-gray-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </NavLink>
                    )}
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <p className="-m-1.5 p-1.5 font-bold text-xl">
                            <span className="text-[var(--primary)]">Phong</span>
                            <span>Shop</span>
                            <span className="text-[var(--primary)]">.</span>
                        </p>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {menus.map((menu, index) => (
                                    <NavLink
                                        key={index}
                                        to={menu.to}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {menu.title}
                                    </NavLink>
                                ))}
                            </div>
                            <div className="py-6">
                                <NavLink
                                    to="/login"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}

export default MainHeader;
