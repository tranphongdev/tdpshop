import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import CategoryRectangle from '../../components/CategoryRectangle';
import CountdownTimer from '../../components/Clock';
import ProductFlashSale from '../../components/Product/ProductFlashSale';
import Category from '../../components/Category';
import ProductSelling from '../../components/Product/ProductSelling';
import FlashSale from '../../assets/FlashSale.png';
import ProductOur from '../../components/Product/ProductOur';
import Arrival from '../../components/Arrival';
import Support from '../../components/Support';
import Footer from '../../components/Footer';
import { useDispatch } from 'react-redux';

function Home() {
    const targetDate = new Date('2024-10-31T23:59:59');

    return (
        <>
            <Header />

            <div className="max-w-[1170px] m-auto">
                <Slider />

                <div className="lg:flex justify-between items-center gap-[87px] mb-10">
                    <div>
                        <CategoryRectangle title="Today's">Flash Sales</CategoryRectangle>
                    </div>
                    <div className="px-4 lg:px-0">
                        <CountdownTimer targetDate={targetDate} />
                    </div>
                </div>

                <ProductFlashSale />

                <Category />

                <ProductSelling />

                <div className="my-[100px] px-4 lg:px-0">
                    <img src={FlashSale} alt="" />
                </div>

                <ProductOur />

                <Arrival />

                <Support />
            </div>

            <Footer />
        </>
    );
}

export default Home;
Home;
