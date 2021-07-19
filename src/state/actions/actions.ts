import store from "../store";
import { ActionEnum } from "./actionTypes";
import {storeLikedImages} from "../../util/likedImagesStore";
import {TUNImage} from "../reducers/reducer";

export const addToLiked = (image: TUNImage) => {
    const { likedImages } = store.getState();

    const newLikedImages = new Map(likedImages);
    newLikedImages.set(image.id, image);

    storeLikedImages(newLikedImages);

    store.dispatch({
        type: ActionEnum.addToLiked,
        value: newLikedImages
    });
};

export const removeFromLiked = (id: string) => {
    const { likedImages } = store.getState();

    const newLikedImages = new Map(likedImages);
    newLikedImages.delete(id);

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

    const images = await response.json();

    if (Array.isArray(images) && images.length) {
        const imageMap = images.reduce((map, image) => {
            map.set(image.id, image);
            return map;
        }, new Map());

        store.dispatch({
            type: ActionEnum.getImages,
            value: {
                images,
                imageMap
            }
        });
    }
};
