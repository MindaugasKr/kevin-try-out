import React, {FunctionComponent, useCallback} from 'react';
import { useSelector } from 'react-redux';
import LikeButton from "../../Common/LikeButton";
import { addToLiked, removeFromLiked } from "../../../state/actions/actions";
import {TState, TUNImage} from "../../../state/reducers/reducer";

interface IImage {
    image: TUNImage;
}

const Image: FunctionComponent<IImage> = ({image}) => {
    const { likedImages } = useSelector((state: TState) => state);

    const { id, urls, alt_description: altDescription } = image;

    const isLiked = likedImages.has(id);

    const handleClick = useCallback(() => {
        if (isLiked) {
            removeFromLiked(id);
        } else {
            addToLiked(image);
        }
    }, [isLiked])

    return (
        <div className="image-card">
            <img src={urls.thumb} alt={altDescription} />
            <LikeButton
                clickCallback={handleClick}
                isActive={isLiked}
            />
        </div>
    );
};

export default Image;
