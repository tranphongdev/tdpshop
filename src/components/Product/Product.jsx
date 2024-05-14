import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import ProductSelling from './ProductSelling';

function Product() {
    const listProduct = useSelector((state) => state.products.products);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [sortBy, setSortBy] = useState('default'); // Define sortBy state with initial value

    // Lọc các category trùng lặp
    const uniqueCategories = Array.from(new Set(listProduct.map((item) => item.category)));

    const handleCategoryClick = (category) => {
        // Kiểm tra xem category đã được chọn trước đó chưa
        if (filteredCategories.includes(category)) {
            // Nếu đã được chọn, loại bỏ khỏi danh sách filteredCategories
            setFilteredCategories(filteredCategories.filter((cat) => cat !== category));
        } else {
            // Nếu chưa được chọn, thêm vào danh sách filteredCategories
            setFilteredCategories([...filteredCategories, category]);
        }
    };

    // Lọc danh sách sản phẩm dựa trên các category đã được chọn
    let filteredProducts = listProduct.filter((product) => !filteredCategories.includes(product.category));

    // Sort filteredProducts based on sortBy value
    if (sortBy === 'priceLowToHigh') {
        filteredProducts = filteredProducts.slice().sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceHighToLow') {
        filteredProducts = filteredProducts.slice().sort((a, b) => b.price - a.price);
    }

    return (
        <div>
            <Header />
            <div className="mx-auto w-[1170px] pt-7 flex items-center justify-between">
                {/* Breadcrumb */}
                <nav className="breadcrumb" aria-label="breadcrumb">
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
                            <span className="text-[var(--primary)] font-semibold">Products</span>
                        </li>
                    </ol>
                </nav>

                {/* Sort by */}
                <div className="sort-by flex items-center space-x-2">
                    <span className="text-lg font-semibold">Sort by:</span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    >
                        <option value="default">Default</option>
                        <option value="priceLowToHigh">Price: Low to High</option>
                        <option value="priceHighToLow">Price: High to Low</option>
                    </select>
                </div>
            </div>

            <div className="mx-auto max-w-2xl py-2 sm:py-10 lg:max-w-7xl flex px-4 lg:px-0 gap-[20px] flex-col lg:flex-row">
                <div className="side-bar min-w-[300px] h-full bg-white box-shadow p-4">
                    <h3 className="text-xl font-semibold mb-5">Category</h3>

                    <div className="space-y-4 text-left flex flex-col items-start">
                        {uniqueCategories.map((category) => (
                            <label key={category} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={filteredCategories.includes(category)}
                                    onChange={() => handleCategoryClick(category)}
                                />
                                <span>{category}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
                    {filteredProducts.map((pro) => (
                        <ProductItem key={pro.id} pro={pro} />
                    ))}
                </div>
            </div>
            <div className="wrapper">
                <ProductSelling />
            </div>

            <Footer />
        </div>
    );
}

export default Product;
