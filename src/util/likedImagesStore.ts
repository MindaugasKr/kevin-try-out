import {LIKED_IMAGED_STORAGE_KEY} from "../constants/storage";

export const retireveLikedImages = (): Set<string> => {
    const imageJson = window.localStorage.getItem(LIKED_IMAGED_STORAGE_KEY);
    const storedIds = imageJson && JSON.parse(imageJson) || [];
    return new Set(storedIds);
}

export const storeLikedImages = (likedImages: Set<string>) => {
    window.localStorage.setItem(LIKED_IMAGED_STORAGE_KEY, JSON.stringify(Array.from(likedImages)));
}
