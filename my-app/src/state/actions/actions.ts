import store from "../store";

export enum ActionEnum {
    setActiveImage = "setActiveImage",
    addToLiked = "addToLiked",
    removeFromLiked = "removeFromLiked",
}

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
