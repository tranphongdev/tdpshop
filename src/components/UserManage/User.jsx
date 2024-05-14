import React from 'react';
import UserItem from './UserItem';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const users = [
    {
        id: 1,
        name: 'Phong Dev',
        avatar: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        job: 'Founder & Chairman',
    },
    {
        id: 2,
        name: 'Emma Watson',
        avatar: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        job: 'Managing Director',
    },
    {
        id: 3,
        name: 'Will Smith',
        avatar: 'https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        job: 'Product Designer',
    },
    {
        id: 4,
        name: 'Phong Dev',
        avatar: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        job: 'Founder & Chairman',
    },
    {
        id: 5,
        name: 'Phong Dev',
        avatar: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        job: 'Founder & Chairman',
    },
];

function User() {
    return (
        <div className="mb-[140px] px-4 lg:px-0">
            <Swiper
                spaceBetween={12}
                slidesPerView={3}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="py-3"
            >
                {users.map((user) => (
                    <SwiperSlide className="min-w-[420px]">
                        <UserItem user={user} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default User;
