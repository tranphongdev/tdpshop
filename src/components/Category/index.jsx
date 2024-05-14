import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {
    faCamera,
    faClock,
    faComputer,
    faGamepad,
    faHeadphones,
    faLaptop,
    faMobileScreen,
    faShirt,
} from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import CategoryRectangle from '../CategoryRectangle';
import CategoryItem from './CategoryItem';

const categorys = [
    { id: '1', title: 'Phones', icon: faMobileScreen },
    { id: '2', title: 'Computer', icon: faComputer },
    { id: '3', title: 'Clock', icon: faClock },
    { id: '4', title: 'Camera', icon: faCamera },
    { id: '5', title: 'Headphones', icon: faHeadphones },
    { id: '6', title: 'Gaming', icon: faGamepad },
    { id: '7', title: 'Latop', icon: faLaptop },
    { id: '8', title: 'Shirt', icon: faShirt },
];

function Category() {
    return (
        <>
            <div className="mt-[80px] mb-[60px]">
                <CategoryRectangle title="Categories">Browse By Category</CategoryRectangle>
            </div>
            <div className="pb-[70px] border-b px-4 lg:px-0">
                <Swiper
                    spaceBetween={12}
                    slidesPerView={6}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="py-3"
                >
                    {categorys.map((category) => (
                        <SwiperSlide key={category.id} className="min-w-[185px]">
                            <CategoryItem category={category} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default Category;
