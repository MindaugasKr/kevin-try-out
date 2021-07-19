import {LIKED_IMAGED_STORAGE_KEY} from "../constants/storage";

export const retireveLikedImages = () => {
    const imageJson = window.localStorage.getItem(LIKED_IMAGED_STORAGE_KEY);
    return imageJson && JSON.parse(imageJson) || new Set()
}

export const storeLikedImages = (likedImages: Set<string>) => {
    window.localStorage.setItem(LIKED_IMAGED_STORAGE_KEY, JSON.stringify(Array.from(likedImages)));
}
