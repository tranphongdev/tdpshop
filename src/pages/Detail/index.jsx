import React, { useState, useRef, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faMinus, faPlus, faRotateRight, faTruck } from '@fortawesome/free-solid-svg-icons';
import { Rating } from '@mui/material';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Link, useParams } from 'react-router-dom';
import ApiService from '../../services/ApiServices';
import ProductSelling from '../../components/Product/ProductSelling';

function Detail() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [dataDetail, setDataDetail] = useState({});
    const { id } = useParams();
    const discountPercentage = dataDetail.discountPercentage / 100;
    const priceDiscount = (dataDetail.price - dataDetail.price * discountPercentage).toFixed(2);

    const loadDataDetail = async () => {
        const response = await ApiService.ApiDetailProduct(id);
        setDataDetail(response);
    };

    useEffect(() => {
        if (id) {
            loadDataDetail();
        }
    }, []);

    return (
        <div>
            <Header />

            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full object-cover object-center">
                            <Swiper
                                style={{
                                    '--swiper-navigation-color': '#fff',
                                    '--swiper-pagination-color': '#fff',
                                }}
                                // loop={true}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2 mb-[10px]"
                            >
                                <SwiperSlide>
                                    <img src={dataDetail.thumbnail} className="w-full" />
                                </SwiperSlide>
                            </Swiper>

                            {dataDetail.images && (
                                <Swiper
                                    // loop={true}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper"
                                >
                                    {dataDetail.images.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <img src={item} className="h-[90px]" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}
                        </div>

                        <div className="lg:w-1/2 w-full lg:pl-10  mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{dataDetail.brand}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{dataDetail.title}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <Rating value={5} />
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                {dataDetail.stock > 0 ? (
                                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 text-[var(--primary)] font-medium">
                                        In stock
                                    </span>
                                ) : (
                                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 text-[var(--primary)] font-medium">
                                        Hết hàng
                                    </span>
                                )}
                            </div>
                            <div className="mb-4 flex gap-4">
                                <span className="title-font font-medium text-2xl text-[var(--primary)]">
                                    ${priceDiscount}
                                </span>
                                <span className="title-font font-medium text-2xl text-gray-500 line-through">
                                    ${dataDetail.price}
                                </span>
                            </div>
                            <p className="leading-relaxed">{dataDetail.description}</p>

                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>

                            <div className="flex">
                                <div className="flex items-center">
                                    <button className="border w-[40px] h-[40px] border-r-0 hover:bg-[var(--primary)] hover:text-white">
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                    <input type="text" className="outline-none border w-[40px] h-[40px] text-center" />
                                    <button className="border w-[40px] h-[40px] border-l-0 hover:bg-[var(--primary)] hover:text-white">
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                </div>
                                <Link
                                    to="/checkout"
                                    className="flex ml-auto text-white bg-[var(--primary)] border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                                >
                                    Buy Now
                                </Link>
                                <button className="flex ml-auto text-white bg-[var(--primary)] border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                                    Add to cart
                                </button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <FontAwesomeIcon icon={faHeart} />
                                </button>
                            </div>

                            <div className="mt-10 border-gray-200 border-2 rounded">
                                <div className="flex items-center gap-4 p-6 border-b-2">
                                    <FontAwesomeIcon icon={faTruck} className="text-2xl" />
                                    <div>
                                        <span className="text-black font-semibold">Free Delivery</span>
                                        <p className="text-black">Enter your postal code for Delivery Availability</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-6">
                                    <FontAwesomeIcon icon={faRotateRight} className="text-2xl" />
                                    <div>
                                        <span className="text-black font-semibold">Free Delivery</span>
                                        <p className="text-black">Enter your postal code for Delivery Availability</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="wrapper">
                <ProductSelling />
            </div>

            <Footer />
        </div>
    );
}

export default Detail;
