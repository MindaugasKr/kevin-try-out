import { Reducer } from "redux";
import { ActionEnum} from "../actions/actionTypes";

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
    likedImages: new Set(),
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
            const likedImages = new Set([...Array.from(state.likedImages), action.value])

            return {
                ...state,
                likedImages
            }
        }
        case ActionEnum.removeFromLiked: {
            const likedImagesCopy = new Set(Array.from(state.likedImages));
            // @ts-ignore
            likedImagesCopy.delete(action.value);
            const likedImages = new Set(Array.from(likedImagesCopy));

            return {
                ...state,
                likedImages
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
