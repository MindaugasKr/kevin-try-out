import { Reducer } from "redux";
import { ActionEnum} from "../actions/actionTypes";
import { retrieveLikedImages } from "../../util/likedImagesStore";

type TActiveImage = string | undefined;

export type TUNImage = {
    id: string;
    alt_description: string;
    urls: { thumb: string }
}

export type TLikedImages = Map<string, TUNImage>;

export type TState = {
    activeImage: TActiveImage;
    likedImages: TLikedImages;
    images?: TUNImage[];
}

const initialState: TState = {
    activeImage: undefined,
    likedImages: retrieveLikedImages(),
    images: undefined
}

type TAction = {
    type: ActionEnum;
    value: TActiveImage | TLikedImages
}

// @ts-ignore
const reducer: Reducer<TState, TAction> =  (state = initialState, action) => {
    switch (action.type) {
        case ActionEnum.setActiveImage: {
            return {
                ...state,
                activeImage: action.value
            }
        }
        case ActionEnum.addToLiked: {
            return {
                ...state,
                likedImages: action.value
            }
        }
        case ActionEnum.removeFromLiked: {
            return {
                ...state,
                likedImages: action.value
            }
        }
        case ActionEnum.getImages: {
            return {
                ...state,
                images: action.value
            }
        }
        default: return state;
    }
}

export default reducer;
