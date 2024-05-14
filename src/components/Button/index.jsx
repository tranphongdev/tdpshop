import React from 'react';

function Button({ children }) {
    return <button className="py-4 px-[48px] bg-[var(--primary)] rounded text-center text-white">{children}</button>;
}

export default Button;
