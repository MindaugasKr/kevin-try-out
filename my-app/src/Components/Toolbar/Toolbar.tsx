import React, { FunctionComponent } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import Logo from "../Common/Logo";
import GalleryButton from "../Common/GalleryButton";
import LikeButton from "../Common/LikeButton";

const Toolbar: FunctionComponent = () => {
    const history = useHistory();
    const location = useLocation()

    return (
        <div
            className="toolbar"
        >
            <Logo/>
            <GalleryButton
                clickCallback={() => {
                    history.push('/')
                }}
                isActive={location.pathname === '/'}
            />
            <LikeButton
                clickCallback={() => {
                    history.push('/liked')
                }}
                isActive={location.pathname === '/liked'}
            />
        </div>
    );
};

export default Toolbar;
