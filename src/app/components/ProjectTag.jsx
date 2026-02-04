import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }) => {

    const buttonStyle = isSelected ? 'text-white border-primary-500' : 'text-[#ADB7BE] border-slate-600 hover:border-white';

    return (
        <button 
            className={`rounded-full border-2 px-5 py-1.5 sm:px-6 sm:py-3 text-xl cursor-pointer ${buttonStyle}`}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    )
}

export default ProjectTag;