import store from "../store";
import { ActionEnum } from "./actionTypes";
import {storeLikedImages} from "../../util/likedImagesStore";

export const setActiveImage = (image: string | undefined) => {
    store.dispatch({
        type: ActionEnum.setActiveImage,
        value: image
    });
};

export const addToLiked = (image: string) => {
    const { likedImages } = store.getState();

    const newLikedImages = new Set(Array.from(likedImages))
    newLikedImages.add(image);

    storeLikedImages(newLikedImages);

    store.dispatch({
        type: ActionEnum.addToLiked,
        value: newLikedImages
    });
};

export const removeFromLiked = (image: string) => {
    const { likedImages } = store.getState();

    const newLikedImages = new Set(likedImages);
    // @ts-ignore
    newLikedImages.delete(image);

    storeLikedImages(newLikedImages);

    store.dispatch({
        type: ActionEnum.removeFromLiked,
        value: newLikedImages
    });
};

export const getImages = async () => {
    const response = await fetch('https://api.unsplash.com/photos', {
        method: 'GET',
        headers: {
            Authorization: 'Client-ID V7AzeG-3fl9XxCQUc6RfsANaE5CXdYHyCRUqKyJ2v5A'
        }
    })

    const data = await response.json();

    store.dispatch({
        type: ActionEnum.getImages,
        value: data
    });
};
