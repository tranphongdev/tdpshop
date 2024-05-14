import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import ProductItem from '../../components/Product/ProductItem';
import Button from '../../components/Button';
import { removeAllWishlist } from '../../redux/feature/wishlistSlice';
import { toast } from 'react-toastify';

function Wishlist() {
    const wishlist = useSelector((state) => state.wishlist.wishlist);
    const dispatch = useDispatch();
    const handleRemove = () => {
        if (wishlist.length > 0) {
            dispatch(removeAllWishlist());
            toast.success('Delete success!');
        } else {
            toast.error('Item not found!');
        }
    };

    return (
        <div>
            <Header />
            <div className="mx-auto max-w-2xl py-2 sm:py-10 lg:max-w-7xl">
                <div className="flex flex-row justify-between items-center pb-10">
                    <nav className="breadcrumb " aria-label="breadcrumb">
                        <ol className="flex items-center space-x-2">
                            <li>
                                <a href="/" className="text-gray-400 hover:text-gray-500">
                                    Home
                                </a>
                            </li>
                            <li>
                                <span className="text-gray-400">/</span>
                            </li>
                            <li>
                                <span className="text-[var(--primary)] font-semibold">Wishlist</span>
                            </li>
                        </ol>
                    </nav>
                    <div onClick={handleRemove}>
                        <Button>Remove All Wishlish</Button>
                    </div>
                </div>

                {wishlist && wishlist.length > 0 ? (
                    <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
                        {wishlist.map((product) => (
                            <>
                                <ProductItem key={product.id} pro={product} />
                            </>
                        ))}
                    </div>
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
        </div>
    );
}

export default Wishlist;
