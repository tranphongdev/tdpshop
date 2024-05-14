import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CategoryItem({ category }) {
    return (
        <div className="border py-[25px] px-[35px] flex flex-col justify-center items-center gap-4 cursor-pointer hover:bg-[var(--primary)] hover:text-white">
            <FontAwesomeIcon icon={category.icon} className="text-3xl" />
            <span className="">{category.title}</span>
        </div>
    );
}

export default CategoryItem;
