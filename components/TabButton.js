import React from 'react';

const TabButton = ({active, selectTab, children}) => {
    const buttonClasses = active ? 'text-[#f2e9e4] border-b border-fuchsia-800' : 'text-[#9a8c98]';
    
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
        </button>

    );
};

export default TabButton;