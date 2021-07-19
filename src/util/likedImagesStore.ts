import { LIKED_IMAGED_STORAGE_KEY } from "../constants/storage";
import { TImagesMap } from "../state/reducers/reducer";

export const retrieveLikedImages = (): TImagesMap => {
    const imagesJson = window.localStorage.getItem(LIKED_IMAGED_STORAGE_KEY);
    const imagesObj = imagesJson && JSON.parse(imagesJson) || {};
    return new Map(Object.entries(imagesObj));
}

export const storeLikedImages = (likedImages: TImagesMap) => {
    window.localStorage.setItem(LIKED_IMAGED_STORAGE_KEY, JSON.stringify(Object.fromEntries(likedImages.entries())));
}
