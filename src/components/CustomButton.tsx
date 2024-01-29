import React, { MouseEvent } from 'react';
import { useSnapshot } from 'valtio';

import state from '../store';
import { getContrastingColor } from '../config/helpers';

interface CustomButtonProps {
    type: 'filled' | 'outline'; // Restricting type prop to only 'filled' or 'outline'
    title: string;
    customStyles?: string;
    handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ type, title, customStyles, handleClick }) => {
    const snap = useSnapshot(state);

    const generateStyle = (type: 'filled' | 'outline') => {
        if (type === 'filled') {
            return {
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color),
            };
        } else if (type === 'outline') {
            return {
                borderWidth: '1px',
                borderColor: snap.color,
                color: snap.color,
            };
        }
        return {}; // handle other cases or default
    };

    const buttonStyle = generateStyle(type);

    return (
        <button
            className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
            style={buttonStyle}
            onClick={handleClick}
        >
            {title}
        </button>
    );
};

export default CustomButton;
