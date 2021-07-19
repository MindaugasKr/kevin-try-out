import React, {FunctionComponent, useCallback} from 'react';
import { useSelector } from 'react-redux';
import LikeButton from "../Common/LikeButton";
import { addToLiked, removeFromLiked } from "../../state/actions/actions";
import {TState} from "../../state/reducers/reducer";

interface IImage {
    id: string;
    src: string;
    alt: string;
}

const Image: FunctionComponent<IImage> = ({ id, src, alt }) => {
    const { likedImages } = useSelector((state: TState) => state);
    const isLiked = likedImages.has(id);

    const handleClick = useCallback(() => {
        if (isLiked) {
            removeFromLiked(id);
        } else {
            addToLiked(id);
        }
    }, [isLiked])

    return (
        <div className="image-card">
            <img src={src} alt={alt} />
            <LikeButton
                clickCallback={handleClick}
                isActive={isLiked}
            />
        </div>
    );
};

export default Image;
