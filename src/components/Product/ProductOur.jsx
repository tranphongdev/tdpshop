import React from 'react';
import { useSelector } from 'react-redux';

import CategoryRectangle from '../CategoryRectangle';
import ProductItem from './ProductItem';
import Button from '../Button';
import { Link } from 'react-router-dom';

function ProductOur() {
    const listProduct = useSelector((state) => state.products.products);

    const productOur = listProduct.slice(0, 12);

    return (
        <div className="px-4 lg:px-0">
            <CategoryRectangle title="Our Products">Explore Our Products</CategoryRectangle>

            <div className="mx-auto max-w-2xl py-2 sm:py-10 lg:max-w-7xl">
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
                    {productOur.map((pro) => (
                        <ProductItem key={pro.id} pro={pro} />
                    ))}
                </div>
            </div>

            <Link to="/product" className="block text-center py-10 border-b">
                <Button>View All Product</Button>
            </Link>
        </div>
    );
}

export default ProductOur;
