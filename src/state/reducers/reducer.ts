import { Reducer } from "redux";
import { ActionEnum} from "../actions/actionTypes";
import { retrieveLikedImages } from "../../util/likedImagesStore";

type TActiveImage = string | undefined;

export type TUNImage = {
    id: string;
    alt_description: string;
    urls: {
        thumb: string;
        full: string;
    }
}

export type TImagesMap = Map<string, TUNImage>;

export type TState = {
    activeImage: TActiveImage;
    likedImages: TImagesMap;
    images?: TUNImage[];
    imageMap?: TImagesMap;
}

const initialState: TState = {
    activeImage: undefined,
    likedImages: retrieveLikedImages(),
    images: undefined,
    imageMap: undefined
}

type TImagesAndMap = {
    images: TUNImage[];
    imageMap: TImagesMap;
};

type TAction = {
    type: ActionEnum;
    value: TActiveImage | TImagesMap | TImagesAndMap;
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
            const { images, imageMap } = action.value as TImagesAndMap;

            return {
                ...state,
                images,
                imageMap
            }
        }
        default: return state;
    }
}

export default reducer;
