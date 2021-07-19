import { Reducer } from "redux";
import { ActionEnum} from "../actions/actionTypes";
import { retireveLikedImages } from "../../util/likedImagesStore";

type TActiveImage = string | undefined;
type TLikedImages = Set<string>;

export type TUNImage = {
    alt_description: string;
    urls: { thumb: string }
}

type TState = {
    activeImage: TActiveImage;
    likedImages: TLikedImages;
    images?: TUNImage[]
}

const initialState: TState = {
    activeImage: undefined,
    likedImages: retireveLikedImages(),
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
