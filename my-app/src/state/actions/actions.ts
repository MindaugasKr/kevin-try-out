import store from "../store";
import { ActionEnum } from "./actionTypes";

export const setActiveImage = (image: number | undefined) => {
    store.dispatch({
        type: ActionEnum.setActiveImage,
        value: image
    });
};

export const addToLiked = (image: number) => {
    store.dispatch({
        type: ActionEnum.addToLiked,
        value: image
    });
};

export const removeFromLiked = (image: number) => {
    store.dispatch({
        type: ActionEnum.removeFromLiked,
        value: image
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

    console.info('data', data)

    store.dispatch({
        type: ActionEnum.getImages,
        value: data
    });
};
