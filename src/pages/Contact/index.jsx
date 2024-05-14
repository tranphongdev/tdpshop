import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    return (
        <div>
            <Header />

            <div class="mt-[80px] grid sm:grid-cols-2 items-center px-8 lg:px-0 gap-16 my-6 mx-auto max-w-4xl bg-white text-[#333] font-[sans-serif]">
                <div>
                    <h1 class="text-5xl font-bold">Let's Talk</h1>
                    <p class="text-sm text-gray-400 mt-3">
                        Have some big idea or brand to develop and need help? Then reach out we'd love to hear about
                        your project and provide help.
                    </p>
                    <div class="mt-12">
                        <h2 class="text-lg font-bold">Email</h2>
                        <ul class="mt-3">
                            <li class="flex items-center">
                                <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        height="20px"
                                        fill="var(--primary)"
                                        viewBox="0 0 479.058 479.058"
                                    >
                                        <path
                                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                            data-original="#000000"
                                        />
                                    </svg>
                                </div>
                                <a href="javascript:void(0)" class="text-[var(--primary)] text-sm ml-3">
                                    <small class="block">Mail</small>
                                    <strong>tdp.dinhphong@gmail.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-12">
                        <h2 class="text-lg font-extrabold">Socials</h2>
                        <ul class="flex mt-3 space-x-4">
                            <li class="hover:text-[var(--primary)] cursor-pointer bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <FontAwesomeIcon icon={faFacebook} />
                            </li>
                            <li class="hover:text-[var(--primary)] cursor-pointer bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <FontAwesomeIcon icon={faInstagram} />
                            </li>
                            <li class="hover:text-[var(--primary)] cursor-pointer bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <FontAwesomeIcon icon={faTwitter} />
                            </li>
                        </ul>
                    </div>
                </div>
                <form class="ml-auo space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        class="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[var(--primary)]"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        class="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[var(--primary)]"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        class="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[var(--primary)]"
                    />
                    <textarea
                        placeholder="Message"
                        rows="6"
                        class="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-[var(--primary)]"
                    ></textarea>
                    <button
                        type="button"
                        class="text-white bg-[var(--primary)] font-semibold rounded-md text-sm px-4 py-3 w-full"
                    >
                        Send
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
