import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import About1 from '../../assets/about1.png';
import Support from '../../components/Support';
import User from '../../components/UserManage/User';

function About() {
    return (
        <div>
            <Header />

            <div className="max-w-7xl mx-auto">
                <nav className="breadcrumb mt-[80px] px-4 lg:px-0" aria-label="breadcrumb">
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
                            <span className="text-[var(--primary)] font-semibold">About</span>
                        </li>
                    </ol>
                </nav>

                <div className="flex items-center flex-col lg:flex-row justify-between gap-10 mt-[42px] mb-[140px]">
                    <div className="max-w-[525px]">
                        <h3 className="text-[54px] mb-8 font-semibold">Our Story</h3>
                        <div className="space-y-4">
                            <p>
                                Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an
                                active presense in Bangladesh. Supported by wide range of tailored marketing, data and
                                service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
                                customers across the region.
                            </p>
                            <p>
                                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive
                                offers a diverse assotment in categories ranging from consumer.
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src={About1} alt="" />
                    </div>
                </div>

                <div>
                    <User />
                </div>

                <Support />
            </div>

            <Footer />
        </div>
    );
}

export default About;
