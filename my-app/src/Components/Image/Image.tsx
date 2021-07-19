import React, { FunctionComponent } from 'react';

interface IImage {
    src: string;
    alt: string;
}

const Image: FunctionComponent<IImage> = ({ src, alt }) => {
    return (
        <div>

            <img src={src} alt={alt} />
        </div>
    );
};

export default Image;
