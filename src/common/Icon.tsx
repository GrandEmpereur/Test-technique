import React from 'react';
import * as Icons from 'react-feather';

export interface IconProps {
    name?: keyof typeof Icons;
    symbolId?: string;
    className?: string;
    size?: number;
    fill?: string;
    stroke?: string;
    onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
    name,
    symbolId,
    className,
    size = 32,
    fill = 'none',
    stroke = 'currentColor',
    onClick
}) => {
    const formatName = (iconName: string): keyof typeof Icons => {
        const formattedName = iconName.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');
        return formattedName as keyof typeof Icons;
    };

    if (name) {
        const formattedName = formatName(name);
        const IconComponent = Icons[formattedName];
        return <IconComponent className={className} onClick={onClick} />;
    } else if (symbolId) {
        return (
            <svg
                width={size}
                height={size}
                fill={fill}
                stroke={stroke}
                className={`icon icon-${symbolId} ${className}`}
                onClick={onClick}
            >
                <use href={`#${symbolId}`} />
            </svg>
        );
    } else {
        return null;
    }
};

export default Icon;
