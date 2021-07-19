import React, { FunctionComponent } from 'react';
import Logo from "../Common/Logo";
import GalleryButton from "../Common/GalleryButton";
import LikeButton from "../Common/LikeButton";

const Toolbar: FunctionComponent = () => {
    return (
        <div
            className="toolbar"
        >
            <Logo/>
            <GalleryButton
                clickCallback={() => {}}
                isActive={true}
            />
            <LikeButton
                clickCallback={() => {}}
                isActive={false}
            />
        </div>
    );
};

export default Toolbar;
