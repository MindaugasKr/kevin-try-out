import { LIKED_IMAGED_STORAGE_KEY } from "../constants/storage";
import { TLikedImages } from "../state/reducers/reducer";

export const retrieveLikedImages = (): TLikedImages => {
    const imagesJson = window.localStorage.getItem(LIKED_IMAGED_STORAGE_KEY);
    const imagesObj = imagesJson && JSON.parse(imagesJson) || {};
    return new Map(Object.entries(imagesObj));
}

export const storeLikedImages = (likedImages: TLikedImages) => {
    window.localStorage.setItem(LIKED_IMAGED_STORAGE_KEY, JSON.stringify(Object.fromEntries(likedImages.entries())));
}
