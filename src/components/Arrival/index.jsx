import CategoryRectangle from '../CategoryRectangle';
import ArrivalLeft from '../../assets/arrival-left.png';
import ArrivalRightTop from '../../assets/arrival-right-top.png';
import ArrivalRightBottomLeft from '../../assets/arrival-right-bottom1.png';
import ArrivalRightBottomRight from '../../assets/arrival-right-bottom2.png';

function Arrival() {
    return (
        <div className="max-w-full mt-[80px] mb-[60px] overflow-hidden">
            <CategoryRectangle title="Featured">New Arrival</CategoryRectangle>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-[60px] px-4 lg:px-0">
                <div>
                    <img src={ArrivalLeft} className="w-full h-full object-cover" alt="Img" />
                </div>

                <div className="flex flex-col gap-[32px]">
                    <img src={ArrivalRightTop} alt="" />
                    <div className="flex gap-[30px] lg:flex-row flex-col">
                        <img src={ArrivalRightBottomLeft} className="w-full h-full object-cover" alt="Img" />
                        <img src={ArrivalRightBottomRight} className="w-full h-full object-cover" alt="Img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Arrival;
