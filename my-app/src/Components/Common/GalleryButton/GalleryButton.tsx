import React, { FunctionComponent } from 'react';
import gallery from "../../../images/gallery.svg";

interface IGalleryButton {
    clickCallback: () => void;
    isActive?: boolean;
}

const GalleryButton: FunctionComponent<IGalleryButton> = ({ clickCallback, isActive }) => (
    <button
        onClick={clickCallback}
        className={`gallery-button ${isActive ? 'gallery-button--active' : ''}`}
    >
        <img src={gallery} alt="gallery"/>
    </button>
);

export default GalleryButton;
