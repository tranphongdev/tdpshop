import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import BannerSlider1 from '../../assets/BannerSlider1.png';
import BannerSlider2 from '../../assets/BannerSlider2.png';
import BannerSlider3 from '../../assets/BannerSale3.png';

const sliders = [
    { id: '1', image: BannerSlider1, title: 'Banner1' },
    { id: '2', image: BannerSlider2, title: 'Banner2' },
    { id: '3', image: BannerSlider3, title: 'Banner3' },
];

function Slider() {
    return (
        <div className="mb-[100px]">
            <Swiper
                spaceBetween={12}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {sliders.map((slider) => (
                    <SwiperSlide key={slider.id}>
                        <img src={slider.image} alt={slider.title} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slider;
