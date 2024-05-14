import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import CategoryRectangle from '../CategoryRectangle';

function ProductSelling() {
    const listProduct = useSelector((state) => state.products.products);
    const productSelling = listProduct.filter((pro) => pro.rating > 4.5);

    return (
        <>
            <div className="mt-[80px] mb-[60px]">
                <CategoryRectangle title="This Month">Best Selling Products</CategoryRectangle>
            </div>
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
                    {productSelling.map((pro) => (
                        <SwiperSlide key={pro.id} className="min-w-[223px]">
                            <ProductItem pro={pro} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default ProductSelling;
