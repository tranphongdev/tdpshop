import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import ProductItem from './ProductItem';
import ApiService from '../../services/ApiServices';
import { useDispatch, useSelector } from 'react-redux';
import { setProductFlashSale } from '../../redux/feature/productSlice';
import { Link } from 'react-router-dom';
import Button from '../Button';

function ProductFlashSale() {
    const dispatch = useDispatch();
    const loadData = async () => {
        const response = await ApiService.ApiProductFlashSale();

        const { products } = response.data;

        dispatch(setProductFlashSale(products));
    };

    const listProduct = useSelector((state) => state.products.products);
    const productSale = listProduct.filter((pro) => pro.discountPercentage > 12);

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <div className="px-4 lg:px-0">
                <Swiper
                    spaceBetween={12}
                    slidesPerView={5}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="py-3"
                >
                    {productSale.map((pro) => (
                        <SwiperSlide key={pro.id} className="min-w-[223px]">
                            <ProductItem pro={pro} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <Link to="/product" className="block text-center py-10 border-b">
                <Button>View All Product</Button>
            </Link>
        </>
    );
}

export default ProductFlashSale;
