import React from 'react';

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected ? 'border-purple-400 text-white' : 'border-slate-600 text-slate-600 hover:border-white';
    return (
        <div>
        <button onClick={() => onClick(name)} className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${buttonStyles}`}>
            {name}
            </button>
        </div>
    );
};

export default ProjectTag;