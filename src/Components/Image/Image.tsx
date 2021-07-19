import React, {FunctionComponent, useCallback} from 'react';
import { useSelector } from 'react-redux';
import LikeButton from "../Common/LikeButton";
import { addToLiked, removeFromLiked } from "../../state/actions/actions";

interface IImage {
    id: string;
    src: string;
    alt: string;
}

const Image: FunctionComponent<IImage> = ({ id, src, alt }) => {
    // @ts-ignore // TODO: state fix type
    const { likedImages } = useSelector(state => state);
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
