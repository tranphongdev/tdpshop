import React from 'react';

function CategoryRectangle({ children, title }) {
    return (
        <>
            <div className="flex items-center gap-4 px-4 lg:px-0">
                <div className="w-5 h-10 bg-[var(--primary)] rounded"></div>
                <span className="text-[var(--primary)] font-semibold text-base">{title}</span>
            </div>
            <p className="text-black text-4xl font-semibold mt-6 px-4 lg:px-0">{children}</p>
        </>
    );
}

export default CategoryRectangle;
